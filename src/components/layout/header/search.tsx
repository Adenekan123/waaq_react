import { useState } from "react";
import { FiSearch} from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export const Search = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <div className="search-modal flex bg-black/95 fixed z-10 top-0 left-0 w-full h-full ">
          <div
            className="close absolute right-8 top-8 text-white cursor-pointer"
            onClick={() => setShow(false)}
          >
            <IoClose size={46} />
          </div>
          <div className="text-center p-4 pt-56 w-full">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Enter search"
              className="bg-white p-3 w-full md:w-64 rounded-3xl border-0 outline-0"
            />
          </div>
        </div>
      ) : null}
      <div onClick={() => setShow(true)} className="text-white">
        <FiSearch size={20} />
      </div>
    </>
  );
};
