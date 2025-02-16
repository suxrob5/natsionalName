"use client";

import React, { FormEvent, useState } from "react";

interface CountryData {
  country_id: string;
  probability: number;
}

interface ApiResponse {
  name: string;
  country: CountryData[];
}

const Home = () => {
  const [inputVal, setInputVal] = useState("");
  const [darkMode, setDarkmode] = useState(false);
  const [data, setData] = useState<ApiResponse>({ name: "", country: [] });

  const onSubmitFunc = (e: FormEvent) => {
    e.preventDefault();
    fetch(`https://api.nationalize.io/?name=${inputVal}`)
      .then((res) => res.json())
      .then((comingData) => {
        setData(comingData);
        console.log(comingData); // Log the fetched data here
      });
    setInputVal("");
  };

  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          National Name
        </h1>

        <form onSubmit={onSubmitFunc} className="mb-4">
          <input
            type="text"
            value={inputVal}
            className={`border rounded-lg text-xl px-4 py-2 w-full ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
            placeholder="Enter your name..."
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className="text-xl text-white px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-600 transition-all duration-300 mt-3 w-full">
            Search
          </button>
        </form>

        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-medium">Name: {data.name}</h1>
          <button
            onClick={() => setDarkmode(!darkMode)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
        </div>

        {data.country.length > 0 ? (
          data.country.map((item: CountryData, index: number) => (
            <div
              key={index}
              className={`mt-5 border rounded-2xl px-4 py-3 hover:shadow-xl transition-all cursor-pointer ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <h1 className="text-xl font-medium">
                Country: <span className="text-sky-700">{item.country_id}</span>
              </h1>
              <h1 className="text-xl font-medium">
                Probability:{" "}
                <span className="text-sky-700">
                  {(item.probability * 100).toFixed(2)}%
                </span>
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-2xl text-red-500 mt-10 font-medium text-center">
            No data available.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
