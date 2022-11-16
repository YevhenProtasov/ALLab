import { useContext } from "react";
import AdsDataContext from "../context/AdsDataContext";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  const { adPerPage, currentPage, Back, Next, Paginate, adsData } =
    useContext(AdsDataContext);
  const totalAds = adsData?.length;
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalAds / adPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="bg-slate-100 lg:bg-white rounded drop-shadow-md w-fit mx-auto">
      <ul className="flex gap-2">
        <li className="mr-[38px] relative after:absolute after:content-[''] after:w-[2px] after:h-[30px] after:bg-[#DEE3EF] after:top-[50%] after:mt-[-15px] after:right-0">
          <button
            onClick={() => {
              if (Back) Back(currentPage);
            }}
            className="py-[14px] px-[24px] rounded-l-lg text-[#70778B] text-2xl font-black hover:text-sky-600 hover:cursor-pointer hover:bg-sky-50 "
          >
            <IoIosArrowBack />
          </button>
        </li>
        {pageNumber.map((number) => (
          <li key={number}>
            <button
              onClick={() => {
                if (Paginate) Paginate(number);
              }}
              className={`h-full px-2.5 pt-[3px] text-xl font-bold hover:text-sky-600 border-b-[3px] ${
                number === currentPage
                  ? "border-sky-600 text-sky-600"
                  : "text-[#70778B] border-transparent"
              }  hover:border-b-[3px] hover:bg-sky-50 hover:cursor-pointer`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="ml-[38px] relative after:absolute after:content-[''] after:w-[2px] after:h-[30px] after:bg-[#DEE3EF] after:top-[50%] after:mt-[-15px] after:left-0">
          <button
            onClick={() => {
              if (Next) Next(currentPage, pageNumber.length);
            }}
            className="py-[14px] px-[24px] rounded-r-lg text-[#70778B] text-2xl font-black hover:text-sky-600 hover:cursor-pointer hover:bg-sky-50"
          >
            <IoIosArrowForward />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
