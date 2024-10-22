"use client";

import MarkdownEditor from "@/components/MarkDownEditor.jsx";
import Menu from "@/components/Menu";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import Header from "@/components/Header";
import { useState, useEffect, useCallback } from "react";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import welcome from "./welcome";

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
    fileList.push(welcome());
    setFiles(fileList);
    setActiveFile(fileList[fileList.length - 1]);
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  return (
    <div className="flex w-full overflow-x-hidden">
      <div>
        <Menu isMenuVisible={isMenuVisible} fileList={files} setActiveFile={setActiveFile} setFiles={setFiles} />
      </div>
      <div className="w-full h-screen">
        <Header
          toggleMenu={toggleMenu}
          isMenuVisible={isMenuVisible}
          onDeleteClick={toggleDeleteConfirmation}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
        />
        {activeFile && <MarkdownEditor activeFile={activeFile} />}

        {isDeleteConfirmationVisible && <DeleteConfirmation onClose={toggleDeleteConfirmation} />}
      </div>
    </div>
  );
}