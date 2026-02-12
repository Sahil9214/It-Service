"use client";

interface ProposalPreviewProps {
  html: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProposalPreview({
  html,
  isOpen,
  onClose,
}: ProposalPreviewProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[85vh] flex flex-col border border-neutral-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">
              Proposal Preview
            </h2>
            <p className="text-xs text-neutral-500">
              This is exactly how the proposal content will look in the email/PDF.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-200/80 text-neutral-600 transition-colors"
            aria-label="Close preview"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-4 text-xs text-neutral-500 border-b border-neutral-100 bg-neutral-50/60">
          <span className="inline-flex items-center gap-1">
            <svg
              className="w-3 h-3 text-primary-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Preview is read-only. Use the editor to make changes.</span>
          </span>
        </div>

        <div className="flex-1 overflow-auto px-8 py-6 bg-neutral-50">
          <article
            className="prose prose-sm max-w-none bg-white rounded-xl shadow-sm border border-neutral-200 px-8 py-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <div className="px-6 py-4 border-t border-neutral-200 bg-white flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

