"use client";

import { Dispatch, FormEventHandler } from "react";

interface AllType {
  onSubmitFunc: FormEventHandler<HTMLFormElement>;
  inputVal: string;
  setInputVal: Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
}

const Search: React.FC<AllType> = ({
  onSubmitFunc,
  inputVal,
  setInputVal,
  darkMode,
}) => {
  return (
    <form onSubmit={onSubmitFunc} className="mb-4">
      <input
        type="text"
        value={inputVal}
        className={`border rounded-lg text-xl px-4 py-2 w-full ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        placeholder="Enter your name..."
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="text-xl text-white px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all duration-300 mt-3 w-full">
        Search
      </button>
    </form>
  );
};

export default Search;
