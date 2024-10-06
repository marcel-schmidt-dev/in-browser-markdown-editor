'use client';
import Header from "@/components/Header";
import MarkdownEditor from "@/components/MarkDownEditor.jsx";
import Menu from "@/components/Menu";
import { useState } from "react";

export default function Home() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="flex w-full">
      <div>
        <Menu isMenuVisible={isMenuVisible} />
      </div>
      <div className="w-full h-screen">
        <Header toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} />
        <MarkdownEditor />
      </div>
    </div>
  );
}
