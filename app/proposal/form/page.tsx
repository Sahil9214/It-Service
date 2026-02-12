import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceById } from "@/lib/services";
import ProposalForm from "@/components/ProposalForm";

export default async function ProposalFormPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service: serviceId } = await searchParams;

  if (!serviceId) {
    notFound();
  }

  const service = getServiceById(serviceId);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen gradient-hero">
      {/* Modern Header */}
      <header className="relative bg-white border-b border-neutral-200/60 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent opacity-95"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-8 lg:py-10">
          <Link
            href={`/services/${serviceId}`}
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
            Back to Service
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 font-heading mb-4 leading-tight">
              Create Proposal
            </h1>
            <p className="text-neutral-600 text-lg lg:text-xl leading-relaxed">
              Generate a professional proposal for{" "}
              <span className="text-primary-600 font-bold">
                {service.name}
              </span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <ProposalForm serviceId={service.id} serviceName={service.name} />
      </main>
    </div>
  );
}
