"use client";

import { useCallback, useEffect, useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}

const ToolbarButton = ({
  onClick,
  active = false,
  title,
  children,
}: ToolbarButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
      active
        ? "bg-linear-to-r from-primary-500 to-primary-600 text-white shadow-md"
        : "bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200 hover:border-primary-200 hover:shadow-sm"
    }`}
  >
    {children}
  </button>
);

function Toolbar({ editor }: { editor: Editor }) {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [textColor, setTextColor] = useState("#000000");

  const handleAddOrUpdateLink = useCallback(() => {
    if (!editor) return;

    let url = linkUrl.trim();
    if (!url) {
      setShowLinkInput(false);
      return;
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `https://${url}`;
    }

    if (!/^https?:\/\//.test(url)) {
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();

    setShowLinkInput(false);
    setLinkUrl("");
  }, [editor, linkUrl]);

  const handleToggleLink = useCallback(() => {
    if (!editor) return;

    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
      setShowLinkInput(false);
      setLinkUrl("");
      return;
    }

    setShowLinkInput(true);
  }, [editor]);

  const handleTextAlign = useCallback(
    (alignment: "left" | "center" | "right" | "justify") => {
      if (!editor) return;
      editor.chain().focus().setTextAlign(alignment).run();
    },
    [editor],
  );

  const handleColorChange = useCallback(
    (value: string) => {
      if (!editor) return;
      setTextColor(value);
      editor.chain().focus().setColor(value).run();
    },
    [editor],
  );

  if (!editor) return null;

  return (
    <div className="sticky top-0 z-20 bg-linear-to-r from-neutral-50 via-white to-neutral-50 border-b border-neutral-200 p-4 flex flex-wrap gap-2 items-center">
      {/* Basic formatting */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        title="Bold (Ctrl+B)"
      >
        <strong>B</strong>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        title="Italic (Ctrl+I)"
      >
        <em>I</em>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        active={editor.isActive("underline")}
        title="Underline"
      >
        <span className="underline">U</span>
      </ToolbarButton>

      <div className="hidden sm:block w-px bg-neutral-200 mx-1" />

      {/* Headings */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        active={editor.isActive("heading", { level: 1 })}
        title="Heading 1"
      >
        H1
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive("heading", { level: 2 })}
        title="Heading 2"
      >
        H2
      </ToolbarButton>

      <div className="hidden sm:block w-px bg-neutral-200 mx-1" />

      {/* Lists */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
        title="Bullet list"
      >
        • List
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
        title="Numbered list"
      >
        1.
      </ToolbarButton>

      <div className="hidden sm:block w-px bg-neutral-200 mx-1" />

      {/* Alignment */}
      <div className="flex items-center gap-1">
        <ToolbarButton
          onClick={() => handleTextAlign("left")}
          active={editor.isActive({ textAlign: "left" })}
          title="Align left"
        >
          L
        </ToolbarButton>
        <ToolbarButton
          onClick={() => handleTextAlign("center")}
          active={editor.isActive({ textAlign: "center" })}
          title="Align center"
        >
          C
        </ToolbarButton>
        <ToolbarButton
          onClick={() => handleTextAlign("right")}
          active={editor.isActive({ textAlign: "right" })}
          title="Align right"
        >
          R
        </ToolbarButton>
        <ToolbarButton
          onClick={() => handleTextAlign("justify")}
          active={editor.isActive({ textAlign: "justify" })}
          title="Justify"
        >
          J
        </ToolbarButton>
      </div>

      <div className="hidden sm:block w-px bg-neutral-200 mx-1" />

      {/* Link */}
      <div className="flex items-center gap-2">
        <ToolbarButton
          onClick={handleToggleLink}
          active={editor.isActive("link")}
          title="Add / remove link"
        >
          Link
        </ToolbarButton>

        {showLinkInput && (
          <div className="flex items-center gap-2">
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-40 sm:w-52 px-2 py-1.5 text-xs sm:text-sm border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="button"
              onClick={handleAddOrUpdateLink}
              className="px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold bg-primary-500 text-white hover:bg-primary-600"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => {
                setShowLinkInput(false);
                setLinkUrl("");
              }}
              className="px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Color + Undo / Redo */}
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-1 text-xs text-neutral-600">
          Text color
          <input
            type="color"
            value={textColor}
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-7 h-7 rounded-md border border-neutral-300 cursor-pointer bg-white"
          />
        </label>

        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          title="Undo (Ctrl+Z)"
        >
          ↺
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo (Ctrl+Shift+Z)"
        >
          ↻
        </ToolbarButton>
      </div>
    </div>
  );
}

export default function RichTextEditor({
  content,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: false,
        linkOnPaste: false,
        HTMLAttributes: {
          class:
            "text-primary-600 underline cursor-pointer hover:text-primary-700",
        },
        validate: (href) => /^https?:\/\//.test(href),
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Color,
      Placeholder.configure({
        placeholder: "Edit your proposal here...",
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none focus:outline-none min-h-[500px] px-6 py-4",
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="border-2 border-neutral-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <Toolbar editor={editor} />
      <div className="bg-white min-h-[500px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

