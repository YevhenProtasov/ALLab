export interface IAdsDataContext {
  isLoading: boolean;
  adPerPage: number;
  currentPage: number;
  adsData: IAdvertisement[];
  currentAds: IAdvertisement[];
  Paginate?: (pageNumber: number) => void;
  Back?: (currentPage: number) => void;
  Next?: (currentPage: number, pageNumber: number) => void;
}

export interface IAdvertisement {
  id: string;
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
  location: { lat: number; long: number };
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updatedAt: string;
}

export interface IGeo {
  name?: string;
  country?: string;
  city?: string;
}

export interface MapProps {
  name: string;
  address: string;
  phone: string;
  email: string;
  location: {
    lat: number;
    long: number;
  };
}
