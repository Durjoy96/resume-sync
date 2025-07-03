import SectionTitle from "@/components/SectionTitle";
import { Cable, FileTextIcon, RotateCcw } from "lucide-react";
import React from "react";

export default function HowItWorks() {
  return (
    <div className="py-32 px-5 bg-base-200">
      <SectionTitle
        name="How it works?"
        title="How Resume Sync Works in 3 Simple Steps"
      />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div data-aos="fade-up" className="p-6 bg-base-100 rounded-lg">
          <div>
            <div className="text-primary">
              <FileTextIcon />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content mt-2">
                Open Your Google Doc
              </h3>
              <p className="text-base-content-secondary mt-1">
                Open your resume in Google Docs, then go to the “Resume Sync”
                menu and click “Open Sidebar.”
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="p-6 bg-base-100 rounded-lg">
          <div>
            <div className="text-primary">
              <Cable />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content mt-2">
                Connect Your Drive Resume
              </h3>
              <p className="text-base-content-secondary mt-1">
                Paste the URL of the PDF file from Google Drive that you want to
                keep updated, then click “Link PDF.”
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="p-6 bg-base-100 rounded-lg">
          <div>
            <div className="text-primary">
              <RotateCcw />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-base-content mt-2">
                Update Your Resume Anytime
              </h3>
              <p className="text-base-content-secondary mt-1">
                Made changes to your Doc? Just click “Update PDF” and your
                linked Drive PDF will be updated instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
