import File from "./File";
import returnIcon from "./Icons";

const Header = ({ toggleMenu, isMenuVisible, onDeleteClick, activeFile, setActiveFile }) => {
  return (
    activeFile && (
      <div className="flex w-full bg-gray-800 justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="flex items-center bg-gray-700 justify-center aspect-square w-16 h-16 hover:bg-orangeDefault transition-colors">
            {returnIcon(isMenuVisible ? "close" : "menu", "fill-gray-100")}
          </button>
          {returnIcon("logo", "mx-6 fill-gray-100")}
          <File activeFile={activeFile} setActiveFile={setActiveFile} type="input" />
        </div>
        <div className="flex items-center pr-4 gap-6">
          <button onClick={onDeleteClick}>
            {returnIcon("delete", "fill-gray-100 hover:fill-orangeDefault transition-colors")}
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-3 bg-orangeDefault rounded transition-colors text-gray-100 ${
              activeFile.name === "welcome" || activeFile.name === "unnamed"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-orangeHover"
            }`}
            disabled={activeFile.name === "welcome" || activeFile.name === "unnamed"}
            title={
              activeFile.name === "welcome" || activeFile.name === "unnamed"
                ? "Filename cannot be welcome or unnamed"
                : ""
            }>
            {returnIcon("save", "fill-gray-100")}
            Save Changes
          </button>
        </div>
      </div>
    )
  );
};

export default Header;
