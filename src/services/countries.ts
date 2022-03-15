import { createContext } from "react";

import { CountriesDict, Coutry } from "../types/common";

export const CoutriesContext = createContext<{
  isLoading: boolean;
  countries: CountriesDict;
  getCountryByIata: (iata: string) => null | Coutry;
}>({
  isLoading: false,
  countries: {},
  getCountryByIata: (_iata: string) => null,
});
