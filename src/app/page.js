'use client';
import Header from "@/components/Header";
import MarkdownEditor from "@/components/MarkDownEditor.jsx";
import Menu from "@/components/Menu";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { useState, useEffect, useCallback } from "react";
import { db } from "@/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function Home() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [files, setFiles] = useState([]);
  const [newFile, setNewFile] = useState('');
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleDeleteConfirmation = () => {
    setIsDeleteConfirmationVisible(!isDeleteConfirmationVisible);
  };

  const fetchFiles = useCallback(async () => {
    const filesCollection = collection(db, 'files');
    const filesSnapshot = await getDocs(filesCollection);
    const filesList = filesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setFiles(filesList);
    console.log(filesList);
  }, []);

  useEffect(() => {
    fetchFiles();

  }, [fetchFiles])


  return (
    <div className="flex w-full">
      <div>
        <Menu isMenuVisible={isMenuVisible} fileList={files} />
      </div>
      <div className="w-full h-screen">
        <Header toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} onDeleteClick={toggleDeleteConfirmation} />
        <MarkdownEditor />
        {isDeleteConfirmationVisible && <DeleteConfirmation onClose={toggleDeleteConfirmation} />}
      </div>
    </div>
  );
}
