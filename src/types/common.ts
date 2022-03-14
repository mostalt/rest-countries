export type NativeNameDTO = {
  [key: string]: {
    official: string;
    common: string;
  };
};

export type Currency = {
  name: "string";
  symbol: "string";
};

export type CoutryDTO = {
  name: { official: "string"; nativeName?: NativeNameDTO };
  cca3: string; // iata
  capital: string[];
  region: string;
  subregion: string;
  currencies: { [key: string]: Currency };
  languages: {
    [key: string]: string;
  };
  population: number;
  tld: string[];
  borders?: string[];
};

export type CountriesResponse = CoutryDTO[];

export type Coutry = {
  name: string;
  nativeName?: string;
  iata: string;
  capital: string[];
  region: string;
  subregion: string;
  currencies: { [key: string]: Currency };
  languages: {
    [key: string]: string;
  };
  population: number;
  tld: string[];
  borders?: string[];
};

export type CountriesDict = {
  [iata: string]: Coutry;
};
