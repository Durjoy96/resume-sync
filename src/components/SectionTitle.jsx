import React from "react";

export default function SectionTitle({ name, title }) {
  return (
    <div className="space-y-2 flex flex-col items-center mb-12">
      <span className="text-xs font-medium text-primary uppercase text-center">
        {name}
      </span>
      <h2 className="text-3xl text-base-content font-semibold">{title}</h2>
    </div>
  );
}
