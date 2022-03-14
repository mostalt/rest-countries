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

const prepareDict = (resp: CountriesResponse): CountriesDict => {
  const result = resp.reduce<CountriesDict>((acc, country) => {
    const iata = country.cca3;

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

  return result;
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
        const result = data.reduce((acc, country) => {
          const iata = country.cca3;
          const native = getNativeName(country.name.nativeName);

          return {
            ...acc,
            [iata]: {
              iata,
              capital: country.capital,
              region: country.region,
              subregion: country.subregion,
              currencies: country.currencies,
              languages: country.languages,
              population: country.population,
              tld: country.tld,
              borders: country.borders,
            },
          };
        }, {});

        console.log(result, "result");
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
