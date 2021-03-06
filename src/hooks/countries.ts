import { useState, useEffect } from "react";
import axios from "axios";

import {
  CountriesResponse,
  CountriesDict,
  NativeNameDTO,
} from "../types/common";

const getNativeName = (name: NativeNameDTO | undefined): string | undefined => {
  if (name) {
    // just take first ¯\_(ツ)_/¯
    return Object.values(name)[0].official;
  }
};

const castData = (resp: CountriesResponse): CountriesDict => {
  return resp.reduce<CountriesDict>((acc, country) => {
    const iata = country.cca2;

    acc[iata] = {
      iata,
      name: country.name.official,
      nativeName: getNativeName(country.name.nativeName),
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      currencies: country.currencies,
      languages: country.languages,
      population: country.population,
      tld: country.tld,
      borders: country.borders,
    };
    return acc;
  }, {});
};

export const useFetchCoutries = () => {
  const [countries, setCountries] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await axios.get<CountriesResponse>(
          "https://restcountries.com/v3.1/all"
        );
        const data = resp?.data;
        const result = castData(data);

        setCountries(result);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error();
      }
    };

    fetchData();
  }, []);

  return { countries, isLoading };
};
