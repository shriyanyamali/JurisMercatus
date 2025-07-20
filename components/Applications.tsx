import Link from "next/link";

interface AppItem {
  name: string;
  description: string;
}

export default function Applications() {
  const apps: AppItem[] = [
    {
      name: "M&A Lawyers",
      description:
        "Helps M&A lawyers find precedent market definitions to strengthen filings, assess risk, and prepare for regulatory review.",
    },
    {
      name: "Antitrust Lawyers",
      description:
        "Enables litigators to identify how markets have been previously defined in similar disputes to asses contemporary violations of competition law.",
    },
    {
      name: "Policy Makers and Academics",
      description:
        "Helps scholars and policy designers examine how competition authorities have evolved market definitions over time and across sectors.",
    },
  ];

  return (
    <section className="max-w-2xl lg:max-w-screen-lg mx-auto px-12">
      <div className="flex items-center mb-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
          Real-World Applications
        </h2>
      </div>

      <div className="flex flex-col">
        {apps.map((app, idx) => (
          <div
            key={app.name}
            className="group relative block py-12 transition-colors duration-300"
          >
            <span className="absolute top-[3rem] left-[-1.75rem] text-[6rem] font-bold text-gray-200 z-[-1]">
              {idx + 1}
            </span>

            <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#3080FF]">
              {app.name}
            </h3>
            <p className="text-gray-600 mt-2">
              {app.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
