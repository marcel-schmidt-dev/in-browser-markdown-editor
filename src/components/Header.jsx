import File from "./File";
import returnIcon from "./icons";

const Header = ({ toggleMenu, isMenuVisible }) => {
  return (
    <div className="flex w-full bg-gray-800 justify-between">
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="flex items-center bg-gray-700 justify-center aspect-square w-16 h-16 hover:bg-orangeDefault transition-colors">
          {returnIcon(isMenuVisible ? "close" : "menu", "fill-gray-100")}
        </button>
        {returnIcon("logo", "mx-6 fill-gray-100")}
        <File />
      </div>
      <div className="flex items-center pr-4 gap-6">
        <button>
          {returnIcon("delete", "fill-gray-100 hover:fill-orangeDefault transition-colors")}
        </button>
        <button className="flex items-center gap-2 px-4 py-3 bg-orangeDefault rounded hover:bg-orangeHover transition-colors text-gray-100">
          {returnIcon("save", "fill-gray-100")}
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Header;
