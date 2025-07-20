import Link from "next/link";

export const metadata = {
  title: 'Terms & Conditions - Verdictr',
  description: 'Terms & Conditions for Verdictr. Made by Shriyan Yamali.',
}

export default function Terms() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 text-gray-900">
        <h2 className="font-semibold flex items-center justify-center pb-24 pt-40 text-5xl text-center px-12">
          Terms &amp; Conditions
        </h2>

        <section className="font-medium space-y-6 text-lg leading-relaxed text-gray-800">
          <p>
            Welcome to <strong>Verdictr</strong>. By accessing or using our
            website, you agree to comply with and be bound by the following
            terms and conditions.
          </p>

          <p>
            We operate the website{" "}
            <Link
              className="text-blue-500 underline"
              rel="stylesheet"
              href="https://verdictr.vercel.app"
            >
              verdictr.vercel.app
            </Link>{" "}
            (the "Site" and/or "Verdictr"), as well as any other related
            products and services that refer or link to these legal terms (the
            "Legal Terms") (collectively, the "Services").
          </p>

          <p>
            You can contact us by email at{" "}
            <Link
              href="mailto:yamalishriyan@gmail.com"
              className="text-blue-500 underline underline-offset-2"
            >
              yamalishriyan@gmail.com
            </Link>
          </p>

          <p>
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity ("you"),
            and Verdictr, concerning your access to and use of the Services. You
            agree that by accessing the Services, you have read, understood, and
            agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE
            WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED
            FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>

          <p>
            Supplemental terms and conditions or documents that may be posted on
            the Services from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to these Legal Terms from time to
            time. We will alert you about any changes by updating the "Last
            updated" date of these Legal Terms, and you waive any right to
            receive specific notice of each such change. It is your
            responsibility to periodically review these Legal Terms to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Legal Terms by your continued use of the Services after the
            date such revised Legal Terms are posted.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            1. Use of Service
          </h2>
          <p>
            Verdictr is provided for informational purposes only. Verdictr and
            the Services are provided on an "AS IS" basis for your personal,
            non-commercial use or internal academic/research purposes only. You
            agree not to use the Services in any way that is unlawful, or harms
            us or any other user.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            2. Branding and Design Assets
          </h2>
          <p>
            All branding materials, including but not limited to logos, images,
            illustrations, color palettes, UI elements, and the name{" "}
            <strong>Verdictr</strong>, are protected assets owned by Verdictr.
            Use of these materials for any purpose, including derivative works,
            is strictly prohibited without explicit authorization.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            3. Prohibited Commercial Use
          </h2>
          <p>
            You may not use any part of the Verdictr Services, including data,
            designs, or content, in any commercial product, service, research,
            report, or application without our express written consent. This
            includes, but is not limited to, selling access to Verdictr data,
            incorporating our data into for-profit software, or offering
            commercial analysis based on our data.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            4. Intellectual Property
          </h2>
          <p>
            All original content and functionality on Verdictr, including text,
            layout, design elements, images, branding, and documentation, are
            the property of Shriyan Yamali and contributors unless otherwise
            noted. The source code is licensed under the MIT License and may be
            used, modified, and distributed in accordance with that license.
            However, all non-code assets, including data, visuals, and the
            Verdictr brand, are protected and may not be reproduced, repurposed,
            or redistributed without prior written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            5. Disclaimer of Warranties
          </h2>
          <p>
            We strive to maintain the accuracy of information, but we do not
            guarantee that the Services will be error-free or uninterrupted. All
            use of the Services is at your own risk. We disclaim all warranties,
            whether express or implied, including merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall Verdictr, its creator, or its affiliates be liable
            to you for any damages, including but not limited to loss of data,
            revenue, or profits, arising from your use of the Services. You
            agree to indemnify and hold us harmless from any third-party claims
            arising out of your use of Verdictr.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            7. Governing Law
          </h2>
          <p>
            These Legal Terms shall be governed by and construed in accordance
            with the laws of the United States, without regard to its conflict
            of law principles. You agree that any dispute arising out of or
            related to these terms or your use of the Services shall be subject
            to the exclusive jurisdiction of the federal and state courts
            located in the United States.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            8. User Privacy and Data Collection
          </h2>
          <p>
            Verdictr does not collect, store, or process any personal data or
            identifiable information from users. We do not use cookies, tracking
            pixels, analytics tools, or any other mechanisms to monitor user
            behavior on the site.
          </p>
          <p>
            You may use Verdictr anonymously without creating an account or
            submitting any personal information. If this changes in the future,
            we will update these Legal Terms accordingly.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-[#03cea4]">
            9. Open Source License
          </h2>
          <p>
            Portions of the Verdictr project, including its source code, are
            made available under the terms of the open-source{" "}
            <Link
              href="/license"
              className="text-blue-500 underline underline-offset-2"
            >
              MIT License
            </Link>
            . This license allows reuse, modification, and distribution of the
            code for any purpose, including commercial use, provided that proper
            attribution is given.
          </p>

          <p>
            Specifically, any public use or redistribution of Verdictr’s code
            must include the following attribution:
          </p>

          <pre>
            Copyright © 2025 Shriyan Yamali – Verdictr
            (https://github.com/shriyanyamali/Verdictr)
          </pre>

          <p>
            Failure to include proper attribution when using Verdictr’s code may
            be considered a violation of the license terms.
          </p>

          <p className="text-sm text-gray-600 mt-12">
            Last updated: July 19, 2025
          </p>
        </section>
      </main>
    </>
  );
}
