import { useState, useEffect } from "react";
import returnIcon from "./Icons";

const File = ({ filename = "", date, handleOpenFileClick, type }) => {
  const [fileName, setFileName] = useState(filename);

  useEffect(() => {
    setFileName(filename + ".md");
  }, [filename]);

  const handleChange = (e) => {
    let value = e.target.value;
    if (value.endsWith(".md")) {
      value = value.slice(0, -3);
    }
    setFileName(value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
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
          {returnFormattedDate(date)}
        </div>
        {type !== "input" ? (
          <div
            onClick={handleOpenFileClick}
            className={`font-roboto-regular text-sm text-gray-100 ${
              type !== "input" && "hover:text-orangeDefault transition-colors cursor-pointer"
            }`}>
            {fileName}
          </div>
        ) : (
          <input
            className="bg-transparent text-gray-100 focus:outline-none hover:border-b-[1px] caret-orangeDefault caret"
            value={fileName}
            onChange={handleChange}
            onBlur={() => setFileName((prev) => (prev.endsWith(".md") ? prev : `${prev}.md`))}
            onKeyDown={handleEnter}
          />
        )}
      </div>
    </div>
  );
};

export default File;
