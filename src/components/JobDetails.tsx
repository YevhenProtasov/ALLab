import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import AdsDataContext from "../context/AdsDataContext";
import { IAdvertisement } from "../types/types";
import { BsBookmark, BsShareFill } from "react-icons/bs";
import { IoIosArrowBack, IoMdStarOutline } from "react-icons/io";
import TimeAgo from "../utilities/TimeAgo";
import Map from "./Map";

const JobDetails = () => {
  const { id } = useParams();
  const { currentAds } = useContext(AdsDataContext);

  let adDetails: IAdvertisement = currentAds
    .filter((ad) => ad.id === id)
    .at(0) as IAdvertisement;

  const timeAgo = TimeAgo(adDetails.createdAt);

  return (
    <div className="bg-white">
      <div className="container mx-auto p-4 pt-6 md:p-7">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div className="flex flex-col max-w-[723px] pl-0 md:pl-20">
            <section className="mb-10">
              <div className="flex flex-col md:flex-row justify-between text-left md:border-b-[1px] border-[#3A4562] mb-10">
                <h2 className="text-[28px] font-bold text-[#3A4562] mb-10 md:mb-2 border-b-[1px] md:border-none border-[#3A4562]">
                  Job Details
                </h2>
                <div className="flex gap-8 items-center flex-row">
                  <span className="flex gap-4 items-center text-[#3A4562]">
                    <BsBookmark className="text-[#70778B] hidden md:block" />
                    <IoMdStarOutline className="text-[#70778B] text-[26px] md:hidden" />
                    Save to my list
                  </span>
                  <span className="flex gap-4 items-center text-[#3A4562]">
                    <BsShareFill className="text-[#70778B] text-[20px]" />
                    Share
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <a
                  href="#"
                  className="hidden md:block ml-auto md:ml-0 mr-auto bg-[#384564] rounded-lg uppercase text-xs text-white py-[18px] px-[30px] mb-8 hover:bg-slate-600"
                >
                  Apply now
                </a>
                <div>
                  <div className="flex flex-wrap justify-between items-center md:items-start gap-2 mb-2">
                    <h3 className="font-bold text-2xl text-[#3A4562] text-left w-full md:w-[70%]">
                      {adDetails.title}
                    </h3>
                    <div className="flex flex-col-reverse md:flex-col order-1 md:order-none items-end md:items-start">
                      <span className="font-bold text-xl text-[#3A4562]">
                        {adDetails.salary}
                      </span>
                      <span className="text-[#3A4562]">Brutto, per year</span>
                    </div>
                    <span className="text-sm md:text-lg text-[#38415D]/30 text-left col-span-2">
                      {timeAgo}
                    </span>
                  </div>
                  <p className="text-left mb-10">{adDetails.description}</p>
                  <h4 className="font-bold text-xl text-[#3A4562] text-left mb-2">
                    Compensation & Benefits:
                  </h4>
                  <ul className="text-left mb-10 pl-5">
                    {adDetails.benefits.map((item, index) => (
                      <li
                        key={index}
                        className="relative after:absolute after:content-[''] after:w-[9px] after:h-[9px] after:bg-[#DEE3EF] after:top-[50%] after:mt-[-6px] after:left-[-19px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="ml-auto md:ml-0 mr-auto bg-[#384564] rounded-lg uppercase text-xs text-white py-[18px] px-[30px] mb-8 hover:bg-slate-600"
                >
                  Apply now
                </a>
              </div>
            </section>
            <section className="text-left mb-14 order-1 md:order-none">
              <div className="flex justify-between border-b-[1px] border-[#3A4562] mb-10">
                <h2 className="text-[28px] font-bold text-[#3A4562] mb-2">
                  Additional info
                </h2>
              </div>
              <span className="inline-block mb-[10px]">Employment type</span>
              <div className="flex gap-2">
                {adDetails?.employment_type.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#55699E]/30 w-[222px] h-[49px] rounded-lg border-[1px] border-[#55699E]/30 flex justify-center items-center text-[#55699E] font-bold mb-6"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <span className="inline-block mb-[10px]">Benefits</span>
              <div className="flex gap-2">
                {adDetails?.benefits.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#FFCF00]/20 w-[222px] h-[49px] rounded-lg border-[1px] border-[#FFCF00] flex justify-center items-center text-[#988B49] font-bold mb-6"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-10">
              <div className="flex justify-between border-b-[1px] border-[#3A4562] mb-10">
                <h2 className="text-[28px] font-bold text-[#3A4562] mb-2">
                  Attached images
                </h2>
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {adDetails.pictures.map((item, index) => (
                  <figure
                    key={index}
                    className="min-w-fit overscroll-x-contain"
                  >
                    <img
                      src={item + `?random=${index}`}
                      alt="photo"
                      className="w-[210px] h-[115px] rounded-lg object-cover"
                    />
                  </figure>
                ))}
              </div>
            </section>
          </div>
          <Map
            name={adDetails.name}
            address={adDetails.address}
            phone={adDetails.phone}
            email={adDetails.email}
            location={adDetails.location}
          />
        </div>
        <div className=" hidden md:flex md:justify-start">
          <Link
            to="/"
            className="relative mr-auto bg-[#384564]/10 rounded-lg uppercase font-bold text-xs text-[#3A4562] py-[18px] pl-[52px] pr-[30px] mb-8 hover:bg-slate-100"
          >
            <IoIosArrowBack className="absolute top-[50%] left-[15px] transform translate-y-[-50%] text-3xl text-[#384564]" />
            RETURN TO JOB BOARD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
