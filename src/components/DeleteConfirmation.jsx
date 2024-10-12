const DeleteConfirmation = ({ onClose }) => {
  const handleDeleteFile = (e) => {
    e.stopPropagation();
    console.log("Delete file");
  };

  return (
    <div
      onMouseDown={onClose}
      className="fixed bg-opacity-50 bg-gray-500 w-full h-screen top-0 flex items-center justify-center">
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="bg-gray-900 rounded p-6 w-full max-w-[350px]">
        <span className="font-roboto-slab-bold text-xl text-gray-100 mb-4 block">
          Delete this document?
        </span>
        <span className="font-roboto-slab-regular text-sm text-gray-400 leading-tight mb-4 block">
          Are you sure you want to delete the ‘welcome.md’ document and its contents? This action
          cannot be reversed.
        </span>
        <button
          onClick={handleDeleteFile}
          className="w-full bg-orangeDefault font-roboto-regular text-base text-center py-3 rounded text-slate-100 block hover:bg-orangeHover transition-colors">
          Confirm & Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
