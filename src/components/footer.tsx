"use client";

import Link from "next/link";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import github from "@/assets/icons/github.svg";
import Image from "next/image";

interface AllType {
  year: number;
  darkMode: boolean;
}

const Footer: React.FC<AllType> = ({ year, darkMode }) => {
  return (
    <div
      className={`w-[100%] p-4 ${darkMode ? "bg-[#3d414a]" : "bg-gray-200"}`}
    >
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <h1 className={`${darkMode ? "text-white" : "text-black"}`}>
          © {year} Natsional name
        </h1>
        <ul className="flex items-center justify-between">
          <li className="mx-3">
            <Link
              href="https://www.facebook.com/people/Suxrob-Orifov/pfbid02hKvGGEArxBnQJHnZ13hucWwhb1jq4hs62CU9AQeQrZjxtyg32rt2fHVqkZvosESPl/"
              target="_about"
            >
              <Image src={facebook} alt="facebook" className="w-[25px]" />
            </Link>
          </li>
          <li className="mx-3">
            <Link
              href="https://www.instagram.com/suxrob_578_uzb"
              target="_about"
            >
              <Image src={instagram} alt="instagram" className="w-[25px]" />
            </Link>
          </li>
          <li className="mx-3">
            <Link
              href="https://www.linkedin.com/in/suxrob-orifov-9252322b4/"
              target="_about"
            >
              <Image src={linkedin} alt="linkedin" className="w-[25px]" />
            </Link>
          </li>
          <li className="mx-3">
            <Link href="https://github.com/suxrob5" target="_about">
              <Image src={github} alt="github" className="w-[25px]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
