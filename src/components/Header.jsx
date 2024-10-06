import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import MenuIcon from "../../public/images/icon-menu.svg";
import DocumentIcon from "../../public/images/icon-document.svg";
import SaveIcon from "../../public/images/icon-save.svg";

const Header = () => {
  return (
    <div className="flex w-full bg-gray-800 justify-between">
      <div className="flex items-center">
        <button className="flex items-center aspect-square p-5 hover:bg-orangeDefault transition-colors">
          <Image src={MenuIcon} alt="Menu" width={30} height={0} />
        </button>
        <Image
          src={Logo}
          alt="Logo"
          className="py-4 px-6 border-r-[1px] border-gray-600"
          width={178}
          height={0}
        />
        <div className="flex gap-4 ml-6 items-center">
          <Image src={DocumentIcon} alt="DocumentIcon" width={14} height={0} />
          <div>
            <div className="font-roboto-light text-xs text-gray-500">Document Name</div>
            <div className="font-roboto-regular text-sm">welcome.md</div>
          </div>
        </div>
      </div>
      <div className="flex items-center pr-4 gap-6">
        <button>
          <svg
            width="18"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:fill-orangeDefault transition-all"
            fill="#7C8187">
            <path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
          </svg>
        </button>
        <button className="flex items-center gap-2 px-4 py-3 bg-orangeDefault rounded hover:bg-orangeHover transition-colors">
          <Image src={SaveIcon} alt="DocumentIcon" width={16} height={0} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Header;
