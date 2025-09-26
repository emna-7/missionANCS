import React, { useState, useEffect } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileImage } from "lucide-react";
import { formSections } from "@/lib/utils/form-sections";
import { saveCoverPageData, getCoverPageData } from "@/lib/utils/cover-page-storage";

interface CoverPageSectionProps {
  form: any;
  missionId?: number;
}

export function CoverPageSection({ form, missionId }: CoverPageSectionProps) {
  const isCompleted = formSections[0].isCompleted(form.getValues());
  const [auditeeLogoPreview, setAuditeeLogoPreview] = useState<string | null>(null);
  const [auditorSignaturePreview, setAuditorSignaturePreview] = useState<string | null>(null);

  // Charger les données locales au montage du composant
  useEffect(() => {
    if (missionId) {
      const savedData = getCoverPageData(missionId);

      // Charger les images ET les synchroniser avec le formulaire
      if (savedData.auditeeLogo) {
        setAuditeeLogoPreview(savedData.auditeeLogo);
        form.setValue('auditeeLogo', savedData.auditeeLogo, { shouldValidate: false, shouldDirty: false });
      }
      if (savedData.auditorSignature) {
        setAuditorSignaturePreview(savedData.auditorSignature);
        form.setValue('auditorSignature', savedData.auditorSignature, { shouldValidate: false, shouldDirty: false });
      }

      // Charger les autres données dans le formulaire sans déclencher de sauvegarde
      Object.keys(savedData).forEach(key => {
        if (savedData[key] && !form.watch(key)) {
          form.setValue(key, savedData[key], { shouldValidate: false, shouldDirty: false });
        }
      });

      // Initialiser les valeurs par défaut si elles n'existent pas
      if (!savedData.documentDiffusion && !form.watch("documentDiffusion")) {
        const defaultValue = "Document Confidentiel";
        form.setValue("documentDiffusion", defaultValue, { shouldValidate: false, shouldDirty: false });
        saveCoverPageData(missionId, { documentDiffusion: defaultValue });
      }
    }
  }, [missionId, form]);

  // Synchroniser les états locaux avec les valeurs du formulaire
  useEffect(() => {
    const auditeeLogoValue = form.watch('auditeeLogo');
    const auditorSignatureValue = form.watch('auditorSignature');

    if (auditeeLogoValue && auditeeLogoValue !== auditeeLogoPreview) {
      setAuditeeLogoPreview(auditeeLogoValue);
    }

    if (auditorSignatureValue && auditorSignatureValue !== auditorSignaturePreview) {
      setAuditorSignaturePreview(auditorSignatureValue);
    }
  }, [form.watch('auditeeLogo'), form.watch('auditorSignature'), auditeeLogoPreview, auditorSignaturePreview]);

  // Synchronisation supplémentaire lors du montage du composant
  useEffect(() => {
    // Récupérer les valeurs actuelles du formulaire
    const currentAuditeeLogo = form.getValues('auditeeLogo');
    const currentAuditorSignature = form.getValues('auditorSignature');

    // Mettre à jour les previews si les valeurs existent dans le formulaire
    if (currentAuditeeLogo && !auditeeLogoPreview) {
      setAuditeeLogoPreview(currentAuditeeLogo);
    }

    if (currentAuditorSignature && !auditorSignaturePreview) {
      setAuditorSignaturePreview(currentAuditorSignature);
    }
  }, []);

  // Gestion de l'upload des images
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'auditee' | 'signature') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        switch (type) {
          case 'auditee':
            setAuditeeLogoPreview(result);
            // IMPORTANT: Forcer la mise à jour du formulaire avec shouldDirty: true
            form.setValue('auditeeLogo', result, { shouldDirty: true, shouldValidate: true });
            // Sauvegarder localement
            if (missionId) {
              saveCoverPageData(missionId, { auditeeLogo: result });
            }
            console.log('Logo organisme audité sauvegardé:', result.substring(0, 50) + '...');
            break;
          case 'signature':
            setAuditorSignaturePreview(result);
            // IMPORTANT: Forcer la mise à jour du formulaire avec shouldDirty: true
            form.setValue('auditorSignature', result, { shouldDirty: true, shouldValidate: true });
            // Sauvegarder localement
            if (missionId) {
              saveCoverPageData(missionId, { auditorSignature: result });
            }
            console.log('Signature auditeur sauvegardée:', result.substring(0, 50) + '...');
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour sauvegarder les données localement lors des changements
  const handleFieldChange = (field: string, value: string) => {
    // Mettre à jour le formulaire sans déclencher de validation
    form.setValue(field, value, { shouldValidate: false });

    // Sauvegarder localement
    if (missionId) {
      saveCoverPageData(missionId, { [field]: value });
      console.log(`Sauvegardé localement: ${field} = ${value}`);
    }
  };

  return (
    <div className="space-y-8">
      {/* En-tête de section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Page de couverture</h2>
        <Badge variant={isCompleted ? "default" : "outline"}
               className={isCompleted ? "bg-yellow-100 text-yellow-800 border border-yellow-300" : ""}>
          {isCompleted ? "Complété" : "Non complété"}
        </Badge>
      </div>

      {/* Aperçu de la page de couverture */}
      <Card className="p-8 bg-white border-2 border-gray-200 relative">
        <div className="absolute top-4 right-4">
          <span className="text-xs text-gray-400 italic">
            👁️ Aperçu - Édition dans "Configuration" ci-dessous
          </span>
        </div>
        <CardContent className="space-y-8">
          {/* Header avec logos */}
          <div className="flex justify-between items-start">
            {/* Logo de l'expert auditeur (EY) */}
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-2">
                &lt;{form.watch("auditorName") || "Nom de l'expert auditeur"}&gt;
              </p>
              <div className="w-32 h-20 flex items-center justify-center">
                {/* Logo EY officiel avec fond blanc */}
                <div className="bg-white p-3 rounded shadow-sm border border-gray-100">
                  <img
                    src="/ey_logo.jpg"
                    alt="Logo EY"
                    className="w-16 h-auto object-contain"
                    onError={() => {
                      console.log('Erreur chargement logo EY - Vérifiez le chemin et le nom du fichier');
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <div className="text-center space-y-6 py-12">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              Rapport d'Audit de la Sécurité du<br />
              Système d'Information
            </h1>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl font-semibold text-gray-800">De</span>
                <span className="text-xl text-gray-600 italic">
                  &lt;{form.watch("companyName") || "Nom_organisme_audité"}&gt;
                </span>
              </div>

              {/* Logo de l'organisme audité */}
              <div className="flex justify-center">
                <div className="w-64 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  {auditeeLogoPreview ? (
                    <img src={auditeeLogoPreview} alt="Logo organisme audité" className="max-w-full max-h-full object-contain" />
                  ) : (
                    <p className="text-sm text-gray-500 italic text-center">
                      &lt;Insérer le logo de l'organisme audité ici&gt;
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Informations de l'expert auditeur */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <span className="font-medium text-gray-800">Expert Auditeur chargé de la mission :</span>
              <span className="text-gray-600">
                {form.watch("auditorName") || "........................................"}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span className="font-medium text-gray-800">Signature :</span>
                <span className="text-gray-600">.................................</span>
              </div>

              {/* Zone de signature */}
              <div className="ml-20">
                <div className="w-48 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  {auditorSignaturePreview ? (
                    <img src={auditorSignaturePreview} alt="Signature auditeur" className="max-w-full max-h-full object-contain" />
                  ) : (
                    <p className="text-xs text-gray-500 italic text-center">
                      &lt;Insérer le cachet de l'expert auditeur ici&gt;
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tableau de version */}
          <div className="mt-12">
            <div className="mb-2 text-right">
              <span className="text-xs text-gray-500 italic">
                📝 Modifiez ces informations dans la section "Configuration" ci-dessous
              </span>
            </div>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-400 px-4 py-2 text-left font-semibold text-gray-800">
                    Version du document
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left font-semibold text-gray-800">
                    Date
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left font-semibold text-gray-800">
                    Diffusion
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2 text-gray-700">
                    {form.watch("documentVersion") || "v1.0"}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-gray-700">
                    {form.watch("documentDate") ?
                      new Date(form.watch("documentDate")).toLocaleDateString('fr-FR') :
                      new Date().toLocaleDateString('fr-FR')
                    }
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-gray-700">
                    {form.watch("documentDiffusion") || "Document Confidentiel"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Formulaire de configuration */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuration de la page de couverture</h3>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Informations de base */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Nom de l'organisme audité</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nom de l'entreprise auditée"
                      {...field}
                      className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom de l'expert auditeur
              </label>
              <Input
                placeholder="Nom de l'auditeur responsable"
                value={form.watch("auditorName") || ""}
                onChange={(e) => handleFieldChange("auditorName", e.target.value)}
                className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Titre du rapport (optionnel)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Rapport d'Audit de la Sécurité du Système d'Information"
                      {...field}
                      className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Informations du document */}
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-md font-medium text-gray-800 mb-4">Informations du document</h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Version du document
                  </label>
                  <Input
                    placeholder="v1.0"
                    value={form.watch("documentVersion") || ""}
                    onChange={(e) => handleFieldChange("documentVersion", e.target.value)}
                    className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date du document
                  </label>
                  <Input
                    type="date"
                    value={form.watch("documentDate") || ""}
                    onChange={(e) => handleFieldChange("documentDate", e.target.value)}
                    className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Diffusion
                  </label>
                  <Input
                    placeholder="Document Confidentiel"
                    value={form.watch("documentDiffusion") || "Document Confidentiel"}
                    onChange={(e) => handleFieldChange("documentDiffusion", e.target.value)}
                    className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Upload des images */}
          <div className="space-y-4">
            {/* Logo organisme audité */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo de l'organisme audité
              </label>
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('auditee-logo')?.click()}
                  className="border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Choisir un fichier
                </Button>
                <input
                  id="auditee-logo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'auditee')}
                  className="hidden"
                />
                {auditeeLogoPreview && (
                  <span className="text-sm text-gray-600">✓ Image chargée</span>
                )}
              </div>
            </div>



            {/* Signature/cachet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Signature/Cachet de l'expert auditeur
              </label>
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('auditor-signature')?.click()}
                  className="border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  <FileImage className="h-4 w-4 mr-2" />
                  Choisir un fichier
                </Button>
                <input
                  id="auditor-signature"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'signature')}
                  className="hidden"
                />
                {auditorSignaturePreview && (
                  <span className="text-sm text-gray-600">✓ Image chargée</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

