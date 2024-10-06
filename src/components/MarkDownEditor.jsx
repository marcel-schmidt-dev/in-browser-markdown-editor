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

  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-64px)] overflow-y-hidden gap-[0.0625rem] bg-gray-600">
      <div className="bg-gray-900 flex-1">
        <textarea
          className="w-full h-full p-4 resize-none bg-transparent focus:outline-none text-gray-400 font-roboto-mono-regular text-sm leading-6 placeholder:gray-400 placeholder:font-roboto-mono-regular placeholder:text-sm placeholder:leading-6"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Gib hier deinen Markdown-Text ein..."
        />
      </div>
      <div className="markdown flex-1 h-full p-4 overflow-y-auto bg-gray-900">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
