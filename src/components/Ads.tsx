import { useContext } from "react";
import AdsDataContext from "../context/AdsDataContext";
import Ad from "./Ad";

const Ads = () => {
  const { currentAds } = useContext(AdsDataContext);

  return (
    <>
      {currentAds.map((advData) => (
        <Ad
          key={advData.id}
          createdAt={advData.createdAt}
          location={advData.location}
          address={advData.address}
          benefits={advData.benefits}
          description={advData.description}
          email={advData.email}
          employment_type={advData.employment_type}
          id={advData.id}
          name={advData.name}
          phone={advData.phone}
          pictures={advData.pictures}
          salary={advData.salary}
          title={advData.title}
          updatedAt={advData.updatedAt}
        />
      ))}
    </>
  );
};

export default Ads;
