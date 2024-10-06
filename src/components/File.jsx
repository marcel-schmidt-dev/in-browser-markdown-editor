import Image from "next/image";
import DocumentIcon from "../../public/images/icon-document.svg";

function File({ date = "Document Name", fileName = "welcome.md" }) {
  return (
    <div className="flex gap-4 ml-6 items-center">
      <Image src={DocumentIcon} alt="DocumentIcon" width={14} height={0} />
      <div>
        <div
          className={`font-roboto-light text-xs ${
            date === "Document Name" ? "text-gray-400" : "text-gray-500"
          }`}>
          {date}
        </div>
        <div className="font-roboto-regular text-sm text-gray-100">{fileName}</div>
      </div>
    </div>
  );
}

export default File;
