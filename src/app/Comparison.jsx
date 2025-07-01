import React from "react";
import checkPng from "@/assets/icons/check.png";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function Comparison() {
  return (
    <div className="py-32 px-5">
      <SectionTitle name="Comparison" title="Why Resume Sync?" />
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6">
        {/* without resume sync */}
        <div className="bg-red-50 px-6 py-12 lg:min-w-sm rounded-lg text-center">
          <span className="text-xl font-semibold text-red-900">
            Without Resume Sync 😓
          </span>
          <ul className="space-y-2 mt-4 text-base text-center text-red-950">
            <li>Download resume as PDF</li>
            <li>Open Google Drive</li>
            <li>Find the old version</li>
            <li>Click "Manage Versions"</li>
            <li>Upload new PDF manually</li>
            <li>Repeat for every change</li>
          </ul>
        </div>
        {/* with resume sync */}
        <div className="bg-base-200 px-6 py-12 lg:min-w-sm rounded-lg text-center">
          <span className="text-xl font-semibold text-base-content">
            With Resume Sync 😊
          </span>
          <ul className="space-y-2 mt-4 text-base text-center text-base-content-secondary list-inside">
            <li className="flex items-center justify-center gap-2">
              {" "}
              <Image src={checkPng} className="w-6 h-6" /> One click to sync
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
