"use client";

import { useState } from "react";
import { SubDomain } from "@/lib/types";

interface SubDomainAccordionProps {
  subDomains: SubDomain[];
}

export default function SubDomainAccordion({
  subDomains,
}: SubDomainAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (subDomains.length === 0) {
    return (
      <div className="text-center py-8 text-neutral-500 bg-neutral-50 rounded-lg border border-neutral-200">
        <svg
          className="w-12 h-12 mx-auto mb-3 text-neutral-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <p>No subdomains available for this service.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {subDomains.map((subdomain) => (
        <div
          key={subdomain.id}
          className="border border-neutral-200 rounded-xl overflow-hidden shadow-soft hover:shadow-md transition-all"
        >
          <button
            onClick={() =>
              setOpenId(openId === subdomain.id ? null : subdomain.id)
            }
            className="w-full px-6 py-5 bg-gradient-to-r from-neutral-50 to-white hover:from-primary-50 hover:to-primary-50/50 flex justify-between items-center transition-all duration-300 group"
          >
            <span className="font-bold text-lg text-neutral-900 group-hover:text-primary-600 transition-colors">
              {subdomain.name}
            </span>
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-all">
              <span
                className={`text-primary-600 text-xl font-bold transition-transform duration-300 ${openId === subdomain.id ? "rotate-45" : ""}`}
              >
                +
              </span>
            </div>
          </button>

          {openId === subdomain.id && (
            <div className="px-6 lg:px-8 py-6 lg:py-8 bg-white space-y-6 border-t border-neutral-100 animate-fade-in">
              <p className="text-neutral-700 text-base lg:text-lg leading-relaxed">
                {subdomain.description}
              </p>

              {subdomain.howItWorks && (
                <div className="p-5 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl border border-primary-200 shadow-sm">
                  <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2 text-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-600"
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
                    </div>
                    How It Works
                  </h4>
                  <p className="text-primary-800 text-base leading-relaxed">
                    {subdomain.howItWorks}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2 text-lg">
                  <div className="w-8 h-8 rounded-lg bg-success-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-success-600"
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
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {subdomain.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-success-50/50 border border-success-100"
                    >
                      <span className="text-success-600 font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-neutral-700 text-sm font-medium flex-1">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-secondary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Use Cases
                </h4>
                <ul className="space-y-2">
                  {subdomain.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary-500 mt-0.5">→</span>
                      <span className="text-neutral-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {subdomain.counterQuestions &&
                subdomain.counterQuestions.length > 0 && (
                  <div className="p-4 bg-warning-50 rounded-lg border border-warning-100">
                    <h4 className="font-semibold text-warning-900 mb-3 flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Questions to Ask Client
                    </h4>
                    <ul className="space-y-2">
                      {subdomain.counterQuestions.map((q, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-warning-600 font-bold mt-0.5">
                            Q{idx + 1}.
                          </span>
                          <span className="text-warning-800">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {subdomain.caseStudies && subdomain.caseStudies.length > 0 && (
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Case Studies
                  </h4>
                  {subdomain.caseStudies.map((cs, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-neutral-50 to-white p-5 rounded-lg border border-neutral-200 mb-3 shadow-soft"
                    >
                      <h5 className="font-semibold text-lg mb-1 text-neutral-900">
                        {cs.title}
                      </h5>
                      <p className="text-xs text-primary-600 mb-3 font-medium">
                        {cs.clientType}
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-neutral-700">
                          <strong className="text-danger-600">Problem:</strong>{" "}
                          {cs.problem}
                        </p>
                        <p className="text-neutral-700">
                          <strong className="text-primary-600">
                            Solution:
                          </strong>{" "}
                          {cs.solution}
                        </p>
                        <p className="text-neutral-700">
                          <strong className="text-success-600">Outcome:</strong>{" "}
                          {cs.outcome}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {cs.techUsed.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="badge bg-neutral-100 text-neutral-700 text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
