import returnIcon from "./Icons";
import { useState, useEffect } from "react";

const File = ({ activeFile = "", handleOpenFileClick, type, setActiveFile }) => {
  const [fileName, setFileName] = useState(activeFile.name + ".md");

  useEffect(() => {
    setFileName(activeFile.name + ".md");
  }, [activeFile]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      handleRename(e);
    }
  };

  const handleRename = (e) => {
    let value = e.target.value;
    if (value.endsWith(".md")) {
      value = value.slice(0, -3);
    }
    setFileName(value + ".md");
    setActiveFile((prev) => ({ ...prev, name: value }));
  };

  const returnFormattedDate = (date) => {
    if (type !== "input") {
      const dateObj = new Date(date * 1000);
      return dateObj.toLocaleDateString("de-DE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } else return "Document Name";
  };

  return (
    <div className="flex gap-4 items-center">
      {returnIcon("document", "fill-gray-100")}
      <div>
        <div
          className={`font-roboto-light text-xs ${
            type === "input" ? "text-gray-400" : "text-gray-500"
          }`}>
          {returnFormattedDate(activeFile.lastEdited.seconds)}
        </div>
        {type !== "input" ? (
          <div
            onClick={handleOpenFileClick}
            className={`font-roboto-regular text-sm text-gray-100 ${
              type !== "input" && "hover:text-orangeDefault transition-colors cursor-pointer"
            }`}>
            {activeFile.name + ".md"}
          </div>
        ) : (
          <input
            className="bg-transparent text-gray-100 focus:outline-none hover:border-b-[1px] caret-orangeDefault caret"
            value={fileName}
            onBlur={handleRename}
            onKeyDown={handleEnter}
            onChange={(e) => setFileName(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default File;
