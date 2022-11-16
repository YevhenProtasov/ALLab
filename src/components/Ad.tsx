import TimeAgo from "../utilities/TimeAgo";
import { AiFillStar } from "react-icons/ai";
import { BsFillGeoAltFill, BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IAdvertisement, IGeo } from "../types/types";
import { useEffect, useState } from "react";

const Ad = (props: IAdvertisement) => {
  const timeAgo = TimeAgo(props.createdAt);

  const [geo, setGeo] = useState<IGeo>();

  useEffect(() => {
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${props.location.lat}&lon=${props.location.long}&apiKey=92541730ced94fac957ad07ef83dde7b`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setGeo(result.features[0].properties);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <li>
      <Link
        to={`/job-details/${props.id}`}
        className="bg-[#EFF0F5] lg:bg-white rounded drop-shadow-lg px-6 py-4 flex flex-col-reverse lg:flex-row gap-6 justify-between hover:bg-slate-50"
      >
        <div className="flex gap-6">
          <div className=" shrink-0">
            <img
              src={props.pictures[0] + `?random=${props.id}`}
              className="rounded-full w-16 h-16 lg:w-20 lg:h-20 object-cover"
              alt="Job preview"
            />
          </div>
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[#3a4562] line-clamp-2 text-lg font-normal lg:text-xl lg:font-bold ">
              {props.title}
            </span>
            <div className="text-[#878D9D] text-base font-normal tracking-wide">
              {`${props.name} • ${props.address}`}
            </div>
            <div className="flex gap-2 items-baseline text-[#878D9D]">
              <BsFillGeoAltFill className="text-[#8d8d8d]" />{" "}
              <span>
                {geo?.city ? geo?.city + ", " : null}
                {geo?.country ? geo?.country : geo?.name}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-between ml-[88px] lg:ml-0">
          <div className="flex items-center">
            <div className="flex">
              <AiFillStar className="w-4 h-4 text-[#384564] lg:text-[#38415D] lg:w-5 lg:h-5" />
              <AiFillStar className="w-4 h-4 text-[#384564] lg:text-[#38415D] lg:w-5 lg:h-5" />
              <AiFillStar className="w-4 h-4 text-[#384564] lg:text-[#38415D] lg:w-5 lg:h-5" />
              <AiFillStar className="w-4 h-4 text-[#384564] lg:text-[#38415D] lg:w-5 lg:h-5" />
              <AiFillStar className="w-4 h-4 text-[#384564] lg:text-[#38415D] lg:w-5 lg:h-5" />
            </div>
          </div>
          <div className="flex flex-col justify-between items-end w-[160px] text-stone-500 text-sm font-light lg:text-base lg:font-normal">
            <span className="hidden lg:inline-block">
              <BsBookmark />
            </span>
            <span>{timeAgo}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Ad;
