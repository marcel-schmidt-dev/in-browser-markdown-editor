import Image from "next/image";
import DocumentIcon from "../../public/images/icon-document.svg";

const File = ({ date = "Document Name", fileName = "welcome.md" }) => {
  return (
    <div className="flex gap-4 ml-6 items-center">
      <Image src={DocumentIcon} alt="DocumentIcon" />
      <div>
        <div
          className={`font-roboto-light text-xs ${
            date === "Document Name" ? "text-gray-400" : "text-gray-500"
          }`}>
          {date}
        </div>
        <div
          className={`font-roboto-regular text-sm text-gray-100 ${
            date !== "Document Name" && "hover:text-orangeDefault transition-colors cursor-pointer"
          }`}>
          {fileName}
        </div>
      </div>
    </div>
  );
};

export default File;
