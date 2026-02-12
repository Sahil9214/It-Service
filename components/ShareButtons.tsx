"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface ShareButtonsProps {
  content: string;
  clientName: string;
  proposalId: string;
}

/**
 * Builds the exact HTML email body used for both:
 * - The mailto: link in ShareButtons
 * - The ProposalPreview component on the editor page
 *
 * This keeps preview + email perfectly in sync while still letting the
 * rich-text editor focus on the core proposal body content.
 */
export const buildProposalEmailHtml = (
  proposalHtml: string,
  clientName: string,
  proposalId: string,
): string => {
  return `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
  <p>Dear ${clientName},</p>
  <p>Please find the detailed proposal below:</p>
  ${proposalHtml}
  <p><strong>Proposal ID:</strong> ${proposalId}</p>
  <p>
    Best regards,<br />
    EngineerBabu Technologies Pvt. Ltd.
  </p>
</div>
  `.trim();
};

export default function ShareButtons({
  content,
  clientName,
  proposalId,
}: ShareButtonsProps) {
  const generatePdfBlob = async () => {
    // Create a temporary div to render HTML content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    tempDiv.style.width = "800px";
    tempDiv.style.padding = "40px";
    tempDiv.style.backgroundColor = "white";
    tempDiv.style.position = "absolute";
    tempDiv.style.left = "-9999px";
    tempDiv.style.fontFamily = "Arial, sans-serif";
    tempDiv.style.lineHeight = "1.6";
    document.body.appendChild(tempDiv);
    const fileName = `${proposalId}_${clientName.replace(/\s+/g, "_")}.pdf`;

    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio,
      );

      const blob = pdf.output("blob");
      return { blob, fileName };
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      const { blob, fileName } = await generatePdfBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  const handleShareEmail = () => {
    const subject = `IT Solution Proposal for ${clientName} - ${proposalId}`;
    const htmlBody = buildProposalEmailHtml(content, clientName, proposalId);
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(htmlBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={handleDownloadPDF}
        className="px-6 py-4 bg-gradient-to-r from-danger-500 to-danger-600 text-black rounded-xl font-bold hover:from-danger-600 hover:to-danger-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3 text-base"
      >
        <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        Download PDF
      </button>

      <button
        onClick={handleShareEmail}
        className="px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-black rounded-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3 text-base"
      >
        <div className="w-10 h-10 rounded-lg bg-red-700 text-white flex items-center justify-center">
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        Share via Email
      </button>
    </div>
  );
}
