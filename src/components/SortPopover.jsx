import { useState } from "react";

const SortPopover = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button onClick={togglePopover} className="px-4 py-2 font-medium">
        Sort Options
      </button>
      {isOpen && (
        <div className="absolute left-2 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => {
                onSortChange("best_selling");
                setIsOpen(false);
              }}
            >
              Best Selling
            </button>
            <button
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => {
                onSortChange("price_asc");
                setIsOpen(false);
              }}
            >
              Price: Low to High
            </button>
            <button
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => {
                onSortChange("price_desc");
                setIsOpen(false);
              }}
            >
              Price: High to Low
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortPopover;
