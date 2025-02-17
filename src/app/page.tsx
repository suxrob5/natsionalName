"use client";

import React, { FormEvent, useEffect, useState } from "react";

import Information from "@/components/Information";
import Footer from "@/components/footer";
import Search from "@/components/search";

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
  const [year, setYear] = useState<number>(2025);
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

  useEffect(() => {
    const yearE = new Date().getFullYear();

    setYear(yearE);
  }, []);
    
  return (
    <div>
      <div
        className={`w-full h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="max-w-md w-full p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
            National Name
          </h1>

          <Search
            onSubmitFunc={onSubmitFunc}
            inputVal={inputVal}
            setInputVal={setInputVal}
            darkMode={darkMode}
          />

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

          <Information data={data} darkMode={darkMode} />
        </div>
      </div>
      <Footer year={year} darkMode={darkMode} />
    </div>
  );
};

export default Home;