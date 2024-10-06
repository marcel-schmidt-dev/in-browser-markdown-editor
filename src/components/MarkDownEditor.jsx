"use client";
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('# Willkommen in meinem Markdown-Editor!');

    return (
        <div className="flex flex-col md:flex-row w-full">
            <textarea
                className="flex-1 h-64 p-4 resize-none"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Gib hier deinen Markdown-Text ein..."
            />
            <div className="flex-1 h-64 p-4 overflow-y-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;