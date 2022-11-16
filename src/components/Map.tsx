import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { BsFillGeoAltFill } from "react-icons/bs";
import { MapProps } from "../types/types";

const Map = ({ name, address, phone, email, location }: MapProps) => {
  const center = useMemo(() => ({ lat: location.lat, lng: location.long }), []);
  const containerStyle = {
    width: "100%",
    height: "50%",
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY!,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="flex lg:hidden md:ml-20 border-b-[1px] border-[#3A4562] mb-10">
        <h2 className="text-[28px] font-bold text-[#3A4562] mb-2">Contacts</h2>
      </div>
      <div className="flex flex-col w-[372px] md:w-[402px] h-[436px] mx-auto mb-10 rounded-lg overflow-hidden text-[#E7EAF0]">
        <div className="h-[50%] bg-[#2A3047] md:bg-slate-600 relative md:before:content-[''] md:before:absolute before:left-[-75px] before:top-[-15px] before:w-[273px] before:h-[273px] before:bg-[#202336] before:rounded-full">
          <div className="relative z-10 text-left px-14 pt-8">
            <h2 className="font-bold text-xl mb-2">{name}</h2>
            <div className="flex gap-2 items-baseline mb-2">
              <BsFillGeoAltFill className="text-[#8d8d8d]" />{" "}
              <span>{address}</span>
            </div>
            <ul>
              <li>{phone}</li>
              <li>{email}</li>
            </ul>
          </div>
        </div>
        <GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </section>
  );
};

export default Map;
