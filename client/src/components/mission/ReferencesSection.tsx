import React from "react";

interface ReferencesSectionProps {
  form: any;
}

export function ReferencesSection({ form }: ReferencesSectionProps) {
  return (
    <div className="p-4 bg-red-100 border border-red-500 rounded">
      <h2 className="text-xl font-bold">Section Références - TEST</h2>
      <p>Si vous voyez ce message, le composant est correctement chargé.</p>
    </div>
  );
}



