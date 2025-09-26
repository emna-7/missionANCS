import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Save, X } from "lucide-react";

interface SaveConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: () => void;
  onDiscard: () => void;
  title?: string;
  description?: string;
}

export function SaveConfirmDialog({
  open,
  onOpenChange,
  onSave,
  onDiscard,
  title = "Sauvegarder les modifications ?",
  description = "Vous avez des modifications non sauvegardées. Voulez-vous les sauvegarder avant de quitter ?"
}: SaveConfirmDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full mx-4 p-6">
        <DialogHeader className="space-y-3 pb-4">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Save className="h-5 w-5 text-amber-500 flex-shrink-0" />
            <span className="break-words">{title}</span>
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm leading-relaxed break-words">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col gap-2 pt-2">
          {/* Bouton principal - Sauvegarder */}
          <Button
            onClick={onSave}
            className="bg-[#FFC000] text-black hover:bg-[#e6ac00] flex items-center justify-center gap-1 w-full text-xs py-1.5 h-8"
          >
            <Save className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">Sauvegarder et quitter</span>
          </Button>

          {/* Bouton secondaire */}
          <Button
            variant="outline"
            onClick={onDiscard}
            className="flex items-center justify-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 w-full text-xs py-1.5 h-8"
          >
            <X className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">Quitter sans sauvegarder</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
