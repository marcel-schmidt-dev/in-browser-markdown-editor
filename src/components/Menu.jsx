import File from "./File";
import Switch from "./Switch";

const Menu = ({ isMenuVisible }) => {
  return (
    <div
      className={`bg-gray-900 min-h-screen flex flex-col max-w-72 overflow-x-hidden transition-all duration-300 ${
        isMenuVisible ? "w-72 px-6" : "w-0"
      }`}>
      <div className="font-roboto-regular tracking-[2px] uppercase text-gray-500 text-sm h-[70px] flex items-center py-4 whitespace-nowrap">
        My Documents
      </div>
      <button className="bg-orangeDefault rounded w-full py-3 text-center hover:bg-orangeHover transition-colors whitespace-nowrap">
        + New Document
      </button>
      <div className="flex flex-col gap-6 pt-6 flex-1 whitespace-nowrap">
        <File date="01 April 2022" fileName="untitled-document.md" />
        <File date="01 April 2022" fileName="welcome.md" />
      </div>
      <Switch />
    </div>
  );
};

export default Menu;
