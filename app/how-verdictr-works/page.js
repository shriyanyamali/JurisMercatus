import { TracingBeamDemo } from "@/components/demo/demo-tracing-beam";

export const metadata = {
  title: 'How Verdictr Works - Verdictr',
  description: 'How Verdictr Works page for Verdictr. Made by Shriyan Yamali.',
}

const Page = () => {
  return (
    <>
      <h2 className="flex font-semibold items-center justify-center pb-24 p-40 text-5xl text-center px-12">
        How Verdictr Works
      </h2>
      <div>
        <TracingBeamDemo />
      </div>
    </>

  );
};

export default Page;
