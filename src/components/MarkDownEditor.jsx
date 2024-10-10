"use client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
          <div
            className="w-4 h-4 cursor-pointer"
            onClick={() => setMarkdownHidden(!markdownHidden)}>
            {markdownHidden ? (
              <svg
                className="fill-[#7C8187] hover:fill-[#E46643] transition-colors"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1.38.027a.795.795 0 0 1 .769.206L14.815 12.9a.792.792 0 0 1 0 1.124.792.792 0 0 1-1.124 0L9.234 9.567a2.77 2.77 0 0 1-3.753-3.753L1.024 1.357a.795.795 0 0 1 .357-1.33Zm.998 3.832 1.156 1.116a10.846 10.846 0 0 0-1.773 2.153c.696 1.117 2.929 4.038 6.333 3.959a6.127 6.127 0 0 0 1.346-.198l1.25 1.25a7.505 7.505 0 0 1-2.556.53h-.198c-4.663 0-7.331-4.282-7.83-5.145a.792.792 0 0 1 0-.792A12.58 12.58 0 0 1 2.378 3.86Zm5.328-2.272c4.726-.143 7.52 4.267 8.028 5.145.15.24.163.542.031.792a12.58 12.58 0 0 1-2.304 2.874l-1.195-1.116a10.846 10.846 0 0 0 1.813-2.154c-.705-1.116-2.937-4.045-6.333-3.958a6.127 6.127 0 0 0-1.346.198L5.149 2.117a7.505 7.505 0 0 1 2.557-.53Zm-.974 5.486v.055c0 .656.532 1.188 1.188 1.188l.047-.008-1.235-1.235Z" />
              </svg>
            ) : (
              <svg
                className="fill-[#7C8187] hover:fill-[#E46643] transition-colors"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z" />
              </svg>
            )}
          </div>
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
