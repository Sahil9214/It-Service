import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceById } from "@/lib/services";
import SubDomainAccordion from "@/components/SubDomainAccordion";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen gradient-hero">
      {/* Modern Header */}
      <header className="relative bg-white border-b border-neutral-200/60 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-8 lg:py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm mb-4 font-semibold transition-all hover:gap-3 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 font-heading mb-4 leading-tight">
              {service.name}
            </h1>
            <p className="text-neutral-600 text-lg lg:text-xl leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Overview */}
            <section className="card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-400 rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 font-heading">
                  Overview
                </h2>
              </div>
              <p className="text-neutral-700 text-base lg:text-lg leading-relaxed">
                {service.overview}
              </p>
            </section>

            {/* Business Problems Solved */}
            <section className="card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary-500 to-secondary-400 rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 font-heading">
                  Business Problems Solved
                </h2>
              </div>
              <ul className="space-y-4">
                {service.businessProblemsSolved.map((problem, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-success-50/50 to-transparent border border-success-100/50 hover:border-success-200 transition-all"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-success-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-700 text-base leading-relaxed flex-1">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Features */}
            <section className="card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-400 rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 font-heading">
                  Key Features
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:border-primary-200 hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center mt-0.5 transition-colors">
                      <svg
                        className="w-4 h-4 text-primary-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-800 text-sm lg:text-base font-semibold leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Optional Features */}
            {service.optionalFeatures.length > 0 && (
              <section className="card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-secondary-500 to-secondary-400 rounded-full"></div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 font-heading">
                    Optional Features
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.optionalFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-secondary-50 to-white border border-secondary-100 hover:border-secondary-200 hover:shadow-md transition-all group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-secondary-100 group-hover:bg-secondary-200 flex items-center justify-center mt-0.5 transition-colors">
                        <svg
                          className="w-4 h-4 text-secondary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                      <span className="text-neutral-800 text-sm lg:text-base font-semibold leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tech Stack */}
            <section className="card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-400 rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 font-heading">
                  Technology Stack
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.frontend.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge bg-blue-100 text-blue-700 font-semibold px-3 py-1.5 border border-blue-200 hover:bg-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.backend.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge bg-green-100 text-green-700 font-semibold px-3 py-1.5 border border-green-200 hover:bg-green-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    Database
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.database.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge bg-purple-100 text-purple-700 font-semibold px-3 py-1.5 border border-purple-200 hover:bg-purple-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {service.techStack.cloud && (
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      Cloud
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.cloud.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge bg-orange-100 text-orange-700 font-semibold px-3 py-1.5 border border-orange-200 hover:bg-orange-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Subdomains */}
            <section className="card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary-500 to-secondary-400 rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 font-heading">
                  Explore Subdomains
                </h2>
              </div>
              <SubDomainAccordion subDomains={service.subDomains} />
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="card p-6 lg:p-8 sticky top-6">
              <h3 className="font-bold text-neutral-900 mb-6 text-xl font-heading">
                Quick Info
              </h3>
              <div className="space-y-5">
                <div className="p-5 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl border border-primary-200 shadow-sm">
                  <p className="text-xs text-primary-700 mb-2 font-bold uppercase tracking-wider">
                    Timeline
                  </p>
                  <p className="font-bold text-neutral-900 text-xl lg:text-2xl">
                    {service.timelineEstimation}
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-success-50 to-success-100/50 rounded-xl border border-success-200 shadow-sm">
                  <p className="text-xs text-success-700 mb-2 font-bold uppercase tracking-wider">
                    Investment
                  </p>
                  <p className="font-bold text-neutral-900 text-xl lg:text-2xl">
                    {service.costEstimation}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-600 mb-3 font-bold uppercase tracking-wider">
                    Target Industries
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, idx) => (
                      <span
                        key={idx}
                        className="badge-neutral text-xs px-3 py-1.5 font-medium"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/proposal/form?service=${service.id}`}
                className="mt-8 w-full btn-primary text-center block"
              >
                Create Proposal
                <svg
                  className="w-5 h-5 inline-block ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
