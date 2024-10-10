import { useState } from "react";
import returnIcon from "./icons";

const File = ({ date = "Document Name", filename = "welcome.md" }) => {
  const [fileName, setFileName] = useState(filename);
  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  return (
    <div className="flex gap-4 items-center">
      {returnIcon("document", "fill-gray-100")}
      <div>
        <div
          className={`font-roboto-light text-xs ${
            date === "Document Name" ? "text-gray-400" : "text-gray-500"
          }`}>
          {date}
        </div>
        {date !== "Document Name" ? (
          <div
            className={`font-roboto-regular text-sm text-gray-100 ${
              date !== "Document Name" &&
              "hover:text-orangeDefault transition-colors cursor-pointer"
            }`}>
            {fileName}
          </div>
        ) : (
          <input
            className="bg-transparent text-gray-100 focus:outline-none hover:border-b-[1px] caret-orangeDefault caret"
            value={fileName}
            onChange={handleFileNameChange}
          />
        )}
      </div>
    </div>
  );
};

export default File;
