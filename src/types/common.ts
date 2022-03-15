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
  cca2: string; // iata
  region: string;
  population: number;
  capital?: string[];
  subregion?: string;
  currencies?: { [key: string]: Currency };
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
  tld: string[];
};

export type CountriesResponse = CoutryDTO[];

export type Coutry = {
  iata: string;
  name: string;
  region: string;
  population: number;
  capital?: string[];
  nativeName?: string;
  subregion?: string;
  currencies?: { [key: string]: Currency };
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
  tld: string[];
};

export type CountriesDict = {
  [iata: string]: Coutry;
};
