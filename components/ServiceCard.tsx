import Link from "next/link";
import { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.id}`}>
      <div className="card-hover p-6 lg:p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5">
            <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors font-heading leading-tight pr-4">
              {service.name}
            </h3>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <svg
                className="w-5 h-5 text-primary-600 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <p className="text-neutral-600 text-sm lg:text-base mb-6 flex-grow leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {service.industries.slice(0, 3).map((industry, idx) => (
              <span
                key={idx}
                className="badge-neutral text-xs px-3 py-1.5 font-medium"
              >
                {industry}
              </span>
            ))}
            {service.industries.length > 3 && (
              <span className="badge-neutral text-xs px-3 py-1.5 font-medium">
                +{service.industries.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-neutral-100 group-hover:border-primary-100 transition-colors">
            <div className="flex items-center gap-2 text-sm text-neutral-600 group-hover:text-neutral-700">
              <div className="w-8 h-8 rounded-lg bg-neutral-50 group-hover:bg-primary-50 flex items-center justify-center transition-colors">
                <svg
                  className="w-4 h-4 text-neutral-500 group-hover:text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium">{service.timelineEstimation}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-primary-600 group-hover:text-primary-700">
              <div className="w-8 h-8 rounded-lg bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>{service.costEstimation}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
