"use client";

import MarkdownEditor from "@/components/MarkDownEditor.jsx";
import Menu from "@/components/Menu";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import Header from "@/components/Header";
import { useState, useEffect, useCallback } from "react";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [files, setFiles] = useState([]);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);
  const [activeFile, setActiveFile] = useState(null);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleDeleteConfirmation = () => {
    setIsDeleteConfirmationVisible(!isDeleteConfirmationVisible);
  };

  const fetchFiles = useCallback(async () => {
    const filesCollection = collection(db, 'files');
    const filesSnapshot = await getDocs(filesCollection);
    let fileList = filesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    fileList.push({
      id: 0, name: "welcome", lastEdited: { seconds: 1648844400 }, content: `# Welcome to Markdown

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
\`\`\``});
    setFiles(fileList);
    setActiveFile(fileList[fileList.length - 1]);
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  useEffect(() => {
    if (activeFile) {
      console.log("Active file has changed:", activeFile);
    }
  }, [activeFile]);

  return (
    <div className="flex w-full overflow-x-hidden">
      <div>
        <Menu isMenuVisible={isMenuVisible} fileList={files} setActiveFile={setActiveFile} />
      </div>
      <div className="w-full h-screen">
        <Header
          toggleMenu={toggleMenu}
          isMenuVisible={isMenuVisible}
          onDeleteClick={toggleDeleteConfirmation}
          activeFileName={activeFile?.name}
        />
        <MarkdownEditor activeFileContent={activeFile?.content} />
        {isDeleteConfirmationVisible && <DeleteConfirmation onClose={toggleDeleteConfirmation} />}
      </div>
    </div>
  );
}