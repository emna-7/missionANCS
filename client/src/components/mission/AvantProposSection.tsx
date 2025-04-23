import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MissionFormData } from "@shared/schema";
import { Plus, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AvantProposSectionProps {
  form: any;
}

export function AvantProposSection({ form }: AvantProposSectionProps) {
  // État pour savoir si la section est complétée
  const [isCompleted, setIsCompleted] = useState(false);

  // Set up field arrays for version history, auditor contacts, and audited org contacts
  const versionHistory = useFieldArray({
    control: form.control,
    name: "versionHistory",
  });
  
  const auditorContacts = useFieldArray({
    control: form.control,
    name: "auditorContacts",
  });
  
  const auditedOrgContacts = useFieldArray({
    control: form.control,
    name: "auditedOrgContacts",
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Avant propos</h2>
        <Badge 
          variant={isCompleted ? "default" : "outline"} 
          className={isCompleted ? "bg-green-100 text-green-800" : ""}
        >
          {isCompleted ? "Complété" : "Non complété"}
        </Badge>
      </div>

      {/* Confidentialité du document */}
      <div className="p-4 bg-yellow-50 rounded-md mb-6">
        <h3 className="text-lg font-semibold mb-3">Confidentialité du document</h3>
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="confidentialityOptions.noDisclosure"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Non divulgation des informations confidentielles auprès de tierces parties
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confidentialityOptions.noReproduction"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Non reproduction des informations confidentielles sans accord
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confidentialityOptions.noPersonalUse"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Non utilisation des informations confidentielles à des fins personnelles ou commerciales
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confidentialityOptions.noCommercialUse"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Non utilisation des informations confidentielles à des fins personnelles ou commerciales
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Historique des modifications */}
      <div className="p-4 bg-yellow-50 rounded-md mb-6">
        <h3 className="text-lg font-semibold mb-3">Historique des modifications</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Version</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Date</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Auteur</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Modifications</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {versionHistory.fields.map((field, index) => (
                <tr key={field.id}>
                  <td className="px-4 py-2 text-sm border border-yellow-200">
                    <FormField
                      control={form.control}
                      name={`versionHistory.${index}.version`}
                      render={({ field }) => (
                        <FormItem className="m-0">
                          <FormControl>
                            <Input
                              {...field}
                              className="h-8 px-2"
                              placeholder="Ex: 1.0"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm border border-yellow-200">
                    <FormField
                      control={form.control}
                      name={`versionHistory.${index}.date`}
                      render={({ field }) => (
                        <FormItem className="m-0">
                          <FormControl>
                            <Input
                              {...field}
                              type="date"
                              className="h-8 px-2"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm border border-yellow-200">
                    <FormField
                      control={form.control}
                      name={`versionHistory.${index}.author`}
                      render={({ field }) => (
                        <FormItem className="m-0">
                          <FormControl>
                            <Input
                              {...field}
                              className="h-8 px-2"
                              placeholder="Nom de l'auteur"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm border border-yellow-200">
                    <FormField
                      control={form.control}
                      name={`versionHistory.${index}.changes`}
                      render={({ field }) => (
                        <FormItem className="m-0">
                          <FormControl>
                            <Input
                              {...field}
                              className="h-8 px-2"
                              placeholder="Ex: Création du rapport"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </td>
                  <td className="px-4 py-2 text-sm border border-yellow-200">
                    {versionHistory.fields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => versionHistory.remove(index)}
                        className="h-8 text-destructive hover:text-destructive/80"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => 
            versionHistory.append({ 
              version: `1.${versionHistory.fields.length}`, 
              date: new Date().toISOString().split('T')[0], 
              author: "", 
              changes: "Ajout du point 1.2" 
            })
          }
          className="mt-4 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Ajouter une version
        </Button>
      </div>

      {/* Diffusion côté Auditeur */}
      <div className="p-4 bg-yellow-50 rounded-md mb-6">
        <h3 className="text-lg font-semibold mb-3">Diffusion côté Auditeur</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Nom</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Prénom</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Titre</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Téléphone</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Email</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {auditorContacts.fields.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-2 text-sm text-center border border-yellow-200">
                    Aucun contact ajouté
                  </td>
                </tr>
              ) : (
                auditorContacts.fields.map((field, index) => (
                  <tr key={field.id}>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditorContacts.${index}.name`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="Dupont"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditorContacts.${index}.firstName`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="Jean"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditorContacts.${index}.title`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="Auditeur"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditorContacts.${index}.phone`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="0123456789"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditorContacts.${index}.email`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="email@example.com"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => auditorContacts.remove(index)}
                        className="h-8 text-destructive hover:text-destructive/80"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => 
            auditorContacts.append({
              name: "",
              firstName: "",
              title: "Auditeur",
              phone: "",
              email: "",
            })
          }
          className="mt-4 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Ajouter un contact auditeur
        </Button>
      </div>

      {/* Diffusion côté Organisme Audité */}
      <div className="p-4 bg-yellow-50 rounded-md mb-6">
        <h3 className="text-lg font-semibold mb-3">Diffusion côté Organisme Audité</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Nom</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Prénom</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Titre</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Téléphone</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Email</th>
                <th className="px-4 py-2 text-left text-xs font-semibold border border-yellow-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {auditedOrgContacts.fields.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-2 text-sm text-center border border-yellow-200">
                    Aucun contact ajouté
                  </td>
                </tr>
              ) : (
                auditedOrgContacts.fields.map((field, index) => (
                  <tr key={field.id}>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditedOrgContacts.${index}.name`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="Omrani"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditedOrgContacts.${index}.firstName`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="Ahmed"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditedOrgContacts.${index}.title`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="Responsable"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditedOrgContacts.${index}.phone`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="0123456789"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <FormField
                        control={form.control}
                        name={`auditedOrgContacts.${index}.email`}
                        render={({ field }) => (
                          <FormItem className="m-0">
                            <FormControl>
                              <Input
                                {...field}
                                className="h-8 px-2"
                                placeholder="email@example.com"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm border border-yellow-200">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => auditedOrgContacts.remove(index)}
                        className="h-8 text-destructive hover:text-destructive/80"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => 
            auditedOrgContacts.append({
              name: "",
              firstName: "",
              title: "Responsable",
              phone: "",
              email: "",
            })
          }
          className="mt-4 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Ajouter un contact organisme
        </Button>
      </div>
    </div>
  );
}