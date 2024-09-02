import { TracingBeamDemo } from "@/components/demo/demo-tracing-beam";
import React from "react";
import Head from "next/head";

const Page = () => {
  return (
    <>
           <Head>
        <title>About Us - Verdictr</title>
        <meta name="description" content="Learn more about Verdictr and our mission" />
      </Head>
      <h2 className="flex items-center justify-center py-24 text-5xl text-center px-12">
        How Verdictr Works
      </h2>
      <div>
        <TracingBeamDemo />
      </div>
    </>
  );
};

export default Page;
