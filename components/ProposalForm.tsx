"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProposalFormData } from "@/lib/types";

interface ProposalFormProps {
  serviceId: string;
  serviceName: string;
}

export default function ProposalForm({
  serviceId,
  serviceName,
}: ProposalFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<ProposalFormData>({
    clientName: "",
    industry: "",
    timeline: "",
    budget: "",
    notes: "",
    serviceId,
    serviceName,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store in sessionStorage for the editor page
    sessionStorage.setItem("proposalFormData", JSON.stringify(formData));

    // Navigate to editor
    router.push(`/proposal/editor?service=${serviceId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-8 lg:p-10 space-y-6 lg:space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 font-heading mb-2">
          Proposal Details
        </h2>
        <p className="text-neutral-600">
          Fill in the details below to generate your professional proposal
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-neutral-900 mb-3 flex items-center gap-2">
            <span>Client Name</span>
            <span className="text-danger-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.clientName}
            onChange={(e) =>
              setFormData({ ...formData, clientName: e.target.value })
            }
            className="input"
            placeholder="Enter client or company name"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-900 mb-3 flex items-center gap-2">
            <span>Industry</span>
            <span className="text-danger-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.industry}
            onChange={(e) =>
              setFormData({ ...formData, industry: e.target.value })
            }
            className="input"
            placeholder="e.g., Healthcare, Education, Finance"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-3">
              Timeline
            </label>
            <input
              type="text"
              value={formData.timeline}
              onChange={(e) =>
                setFormData({ ...formData, timeline: e.target.value })
              }
              className="input"
              placeholder="e.g., 8-12 weeks"
            />
            <p className="text-xs text-neutral-500 mt-2">Optional</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-3">
              Budget Range
            </label>
            <input
              type="text"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="input"
              placeholder="e.g., ₹5L - ₹10L"
            />
            <p className="text-xs text-neutral-500 mt-2">Optional</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-900 mb-3">
            Additional Notes
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            rows={5}
            className="textarea"
            placeholder="Any specific requirements, context, or special considerations..."
          />
          <p className="text-xs text-neutral-500 mt-2">Optional</p>
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-200">
        <button
          type="submit"
          className="w-full btn-primary flex items-center justify-center gap-2 text-base lg:text-lg py-4"
        >
          Generate Proposal
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
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
