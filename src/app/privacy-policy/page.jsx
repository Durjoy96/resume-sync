import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <main class="max-w-3xl mx-auto px-4 pt-32">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p class="text-sm text-gray-500 mb-8">
          Effective Date: <span class="font-medium">July 1, 2025</span>
        </p>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-base-content mb-2">
            1. What the Add-on Does
          </h2>
          <p>
            Resume Sync helps you create and sync a live PDF version of your
            Google Doc resume directly to your Google Drive. It automates the
            process of keeping your resume updated for sharing.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-base-content mb-2">
            2. What Data We Access
          </h2>
          <ul class="list-disc pl-6 space-y-1">
            <li>
              <strong>Your Google Docs content</strong> – only to read the
              resume content for PDF generation.
            </li>
            <li>
              <strong>Your Google Drive</strong> – to create or update a single
              PDF file that you select or create using the add-on.
            </li>
            <li>
              <strong>User properties</strong> – to remember which PDF file
              you've connected.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-base-content mb-2">
            3. What We Do NOT Access
          </h2>
          <ul class="list-disc pl-6 space-y-1">
            <li>
              We do <strong>not</strong> access any files other than the Google
              Doc you’re actively using.
            </li>
            <li>
              We do <strong>not</strong> collect, store, or transmit your resume
              content to any external server.
            </li>
            <li>
              We do <strong>not</strong> use cookies or tracking tools.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-base-content mb-2">
            4. How Your Data Is Used
          </h2>
          <p>
            All processing is done client-side using Google Apps Script. Your
            data stays within your Google account. The add-on does not transmit
            or store any content on external servers.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-base-content mb-2">
            5. Permissions Required
          </h2>
          <p>
            To function properly, the add-on requests the following Google
            scopes:
          </p>
          <ul class="list-disc pl-6 space-y-1 text-sm">
            <li>
              <code>https://www.googleapis.com/auth/documents</code> – Read your
              current document.
            </li>
            <li>
              <code>https://www.googleapis.com/auth/drive.file</code> – Create
              and manage the PDF file you sync.
            </li>
            <li>
              <code>https://www.googleapis.com/auth/script.container.ui</code> –
              Show a sidebar or menu in Google Docs.
            </li>
            <li>
              <code>
                https://www.googleapis.com/auth/script.external_request
              </code>{" "}
              – Export the document as a PDF using Google Drive API.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-base-content mb-2">
            6. Data Storage
          </h2>
          <p>
            No personal data or content is stored by the developer. All activity
            is restricted to the user’s own Google account using Apps Script’s
            built-in services.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-base-content mb-2">
            7. Contact
          </h2>
          <p>
            If you have any questions or concerns about your privacy, please
            contact us at:
          </p>
          <p class="mt-2">
            <a
              href="mailto:mddurjoy853@gmail.com"
              class="text-primary hover:underline"
            >
              mddurjoy853@gmail.com
            </a>
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-xl font-semibold text-base-content mb-2">
            8. Changes to This Policy
          </h2>
          <p>
            This policy may be updated from time to time. Changes will be posted
            on this page with a new effective date.
          </p>
        </section>
      </main>
    </>
  );
}
