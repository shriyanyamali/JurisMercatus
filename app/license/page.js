import React from "react";
import Link from "next/link";

export const metadata = {
  title: 'License - Verdictr',
  description: 'License for Verdictr. Made by Shriyan Yamali.',
}

const LicensePage = () => {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 text-gray-900">
        <h2 className="font-semibold flex items-center justify-center pb-24 pt-40 text-5xl text-center px-12">
        License
        </h2>

        <section className="font-medium space-y-6 text-lg leading-relaxed text-gray-800">
          <p className="">
            Note: This license applies to the source code only. For terms related to
            data, branding, and commercial use, please see the{" "}
            <Link href="/terms" className="text-[#3080FF] underline">
              Terms  &amp; Conditions
            </Link>
            .
          </p>

          <p>
            MIT License
          </p>

          <p>Copyright (c) 2025 Shriyan Yamali</p>

          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </p>

          <p>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>

          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </section>
      </main>
    </>
  );
};

export default LicensePage;
