"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window

### Features

- Create headings, paragraphs, links, block quotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a block quote. If you would like to learn more about markdown syntax, you can visit this [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/).

#### Headings

To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

##### Lists

You can see examples of ordered and unordered lists above.

###### Code Blocks

This markdown editor allows for inline-code snippets, like this: \`<p>I'm inline</p>\`. It also allows for larger code blocks like this:

\`\`\`
<main>
  <h1>This is a larger code block</h1>
</main>
\`\`\`
`);

  const [markdownHidden, setMarkdownHidden] = useState(false);

  return (
    <div
      className={`flex flex-col md:flex-row w-full h-[calc(100vh-64px)] overflow-y-hidden bg-gray-600 ${
        !markdownHidden ? "gap-[0.0625rem]" : ""
      }`}>
      <div
        className={`bg-gray-1000 flex flex-col transition-all ${
          markdownHidden ? "w-0" : "flex-1"
        }`}>
        <div className="px-5 py-3 text-gray-400 font-roboto-regular text-sm tracking-widest uppercase bg-gray-900">
          Markdown
        </div>
        <textarea
          className="w-full p-5 flex-1 resize-none bg-transparent focus:outline-none text-gray-400 font-roboto-mono-regular text-sm leading-6 placeholder:gray-400 placeholder:font-roboto-mono-regular placeholder:text-sm placeholder:leading-6"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Gib hier deinen Markdown-Text ein..."
        />
      </div>
      <div className="bg-gray-1000 flex-1 flex flex-col">
        <div className="px-5 py-3 text-gray-400 font-roboto-regular text-sm tracking-widest uppercase bg-gray-900 flex justify-between items-center">
          <span>Preview</span>
          <Image
            src={
              !markdownHidden ? "/images/icon-show-preview.svg" : "/images/icon-hide-preview.svg"
            }
            width={16}
            height={16}
            alt="Icon Show Preview"
            onClick={() => setMarkdownHidden(!markdownHidden)}
            className="h-auto cursor-pointer"
          />
        </div>
        <div
          className={`markdown h-full p-5 overflow-y-auto ${
            markdownHidden ? "m-auto max-w-[670px]" : "flex-1"
          }`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
