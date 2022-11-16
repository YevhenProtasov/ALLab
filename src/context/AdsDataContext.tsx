import { createContext, useState, useEffect, useRef } from "react";
import { IAdsDataContext, IAdvertisement } from "../types/types";

const defaultState = {
  isLoading: true,
  adPerPage: 15,
  currentPage: 1,
  adsData: [],
  currentAds: [],
};

const AdsDataContext = createContext<IAdsDataContext>(defaultState);

export const AdsDataProvider = ({ children }: any) => {
  const effectRan = useRef(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (effectRan.current === false) {
      fetch(
        "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?acces_token=",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setAdsData(res);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
      effectRan.current = true;
    }
  }, []);

  const [adsData, setAdsData] = useState<IAdvertisement[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const adPerPage = 15;

  const indexOfLastAd = currentPage * adPerPage;
  const indexOfFirstAd = indexOfLastAd - adPerPage;
  const currentAds = adsData.slice(indexOfFirstAd, indexOfLastAd);

  const Paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const Back = (pageNumber: number) =>
    pageNumber > 1 ? setCurrentPage(pageNumber - 1) : null;
  const Next = (currentPage: number, pageNumber: number) =>
    currentPage < pageNumber ? setCurrentPage(currentPage + 1) : null;

  return (
    <AdsDataContext.Provider
      value={{
        isLoading,
        adsData,
        currentAds,
        adPerPage,
        Paginate,
        Back,
        Next,
        currentPage,
      }}
    >
      {children}
    </AdsDataContext.Provider>
  );
};

export default AdsDataContext;
