"use client";

interface CountryData {
  country_id: string;
  probability: number;
}

interface IncomingInformation {
  data: { name: string; country: CountryData[] };
  darkMode: boolean;
}

const Information: React.FC<IncomingInformation> = ({ data, darkMode }) => {
    
  return (
    <div>
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
  );
};

export default Information;
