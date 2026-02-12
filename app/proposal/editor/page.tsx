"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import RichTextEditor from "@/components/RichTextEditor";
import ShareButtons, {
  buildProposalEmailHtml,
} from "@/components/ShareButtons";
import ProposalPreview from "@/components/ProposalPreview";
import { getServiceById } from "@/lib/services";
import { generateProposal } from "@/lib/proposalGenerator";
import { ProposalFormData, GeneratedProposal } from "@/lib/types";

function ProposalEditorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");

  const [proposal, setProposal] = useState<GeneratedProposal | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!serviceId) {
      router.push("/");
      return;
    }

    const formDataStr = sessionStorage.getItem("proposalFormData");
    if (!formDataStr) {
      router.push(`/proposal/form?service=${serviceId}`);
      return;
    }

    const formData: ProposalFormData = JSON.parse(formDataStr);
    const service = getServiceById(serviceId);

    if (!service) {
      router.push("/");
      return;
    }

    const generatedProposal = generateProposal(formData, service);
    setProposal(generatedProposal);
    setContent(generatedProposal.fullContent);
    setLoading(false);
  }, [serviceId, router]);

  if (loading) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading proposal...</p>
        </div>
      </div>
    );
  }

  if (!proposal) {
    return null;
  }

  const emailHtml = buildProposalEmailHtml(
    content,
    proposal.clientName,
    proposal.id,
  );

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
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 font-heading mb-4 leading-tight">
            Edit Proposal
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 rounded-lg text-neutral-700 font-medium">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {proposal.clientName}
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 rounded-lg text-neutral-700 font-medium">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {proposal.date}
            </span>
            <span className="badge-primary text-xs px-3 py-1.5">
              {proposal.id}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="card p-8 lg:p-10 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 font-heading mb-2">
                Proposal Content
              </h2>
              <p className="text-base text-neutral-600">
                Edit the proposal content below. This is based on the standard
                EngineerBabu proposal template and will be used for preview,
                PDF, and email.
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-3">
              <div className="badge bg-success-100 text-success-700 px-4 py-2 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Auto-saved
              </div>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-200 text-primary-700 bg-primary-50/60 hover:bg-primary-100 text-sm font-semibold transition-colors"
              >
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Preview Proposal
              </button>
            </div>
          </div>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        {/* Share Section */}
        <div className="card p-8 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 font-heading">
            Share Proposal
          </h2>
          <p className="text-base text-neutral-600 mb-8">
            Download as PDF or share directly via WhatsApp or Email
          </p>
          <ShareButtons
            content={content}
            clientName={proposal.clientName}
            proposalId={proposal.id}
          />
        </div>

        <ProposalPreview
          html={emailHtml}
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
        />
      </main>
    </div>
  );
}

export default function ProposalEditorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen gradient-hero flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-neutral-600">Loading proposal...</p>
          </div>
        </div>
      }
    >
      <ProposalEditorContent />
    </Suspense>
  );
}
