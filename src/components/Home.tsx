import { useContext } from "react";
import AdsDataContext from "../context/AdsDataContext";
import Ads from "./Ads";
import Pagination from "./Pagination";

const Home = () => {
  const { isLoading } = useContext(AdsDataContext);
  return (
    <div className="bg-slate-300 min-h-screen">
      <div className="container mx-auto p-2 md:p-7">
        <ul className="flex flex-col gap-2 mb-[50px]">
          {isLoading ? (
            <li>
              <h1>Loading...</h1>
            </li>
          ) : (
            <Ads />
          )}
        </ul>
        {isLoading ? null : <Pagination />}
      </div>
    </div>
  );
};

export default Home;
