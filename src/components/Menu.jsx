import File from "./File";
import Switch from "./Switch";

const Menu = () => {
  return (
    <div className="px-6 bg-gray-900 min-h-screen min-w-72 flex flex-col">
      <div className="font-roboto-regular tracking-[2px] uppercase text-gray-500 text-sm h-[70px] flex items-center py-4">
        My Documents
      </div>
      <button className="bg-orangeDefault rounded w-full py-3 text-center hover:bg-orangeHover transition-colors">
        + New Document
      </button>
      <div className="flex flex-col gap-6 pt-6 flex-1">
        <File date="01 April 2022" fileName="untitled-document.md" />
        <File date="01 April 2022" fileName="welcome.md" />
      </div>
      <Switch />
    </div>
  );
};

export default Menu;
