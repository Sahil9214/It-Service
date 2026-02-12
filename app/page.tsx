import { getAllServices } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const services = getAllServices();

  return (
    <div className="min-h-screen gradient-hero">
      {/* Modern Hero Header */}
      <header className="relative bg-white border-b border-neutral-200/60 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-6 animate-fade-in">
              <svg
                className="w-4 h-4 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-sm font-semibold text-primary-700">
                Your Personal IT Sales Assistant
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 font-heading mb-6 leading-tight animate-slide-up">
              Build World-Class{" "}
              <span className="bg-blue-500 from-primary-600 to-primary-400 bg-clip-text text-transparent">
                IT Proposals
              </span>{" "}
              in Minutes
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8 animate-fade-in">
              Generate professional, structured proposals with confidence. Access
              comprehensive IT service knowledge, counter-questions, and case
              studies—all in one place.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 animate-fade-in">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No Login Required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Instant Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-success-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>PDF, Email & WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Explore IT Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Select a service to access detailed information, business insights,
            technical stacks, and create professional proposals tailored to your
            client&apos;s needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
