export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export interface SmallCountry{
  name:  string;
  cca3:         string;
  borders:     string[];
}

export interface Country {
  name:         Name;
  // tld?:         string[];
  // cca2:         string;
  // ccn3?:        string;
  cca3:         string;
  // cioc?:        string;
  // independent?: boolean;
  status:       Status;
  unMember:     boolean;
  // currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

//Borrado porque vamos a usar mas regiones
// export enum Region {
//   Europe = "Europe",
// }

export interface Currencies {
  EUR?: All;
  GIP?: All;
  RUB?: All;
  HUF?: All;
  CHF?: All;
  RSD?: All;
  GBP?: All;
  JEP?: All;
  BGN?: All;
  DKK?: All;
  FOK?: All;
  IMP?: All;
  MKD?: All;
  NOK?: All;
  BYN?: All;
  ALL?: All;
  UAH?: All;
  MDL?: All;
  ISK?: All;
  GGP?: All;
  PLN?: All;
  RON?: All;
  BAM?: BAM;
  CZK?: All;
  SEK?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  slk?: string;
  cnr?: string;
  eng?: string;
  ell?: string;
  tur?: string;
  deu?: string;
  fra?: string;
  nld?: string;
  rus?: string;
  hun?: string;
  gsw?: string;
  ita?: string;
  roh?: string;
  srp?: string;
  nrf?: string;
  est?: string;
  cat?: string;
  bul?: string;
  sqi?: string;
  dan?: string;
  fao?: string;
  lat?: string;
  glv?: string;
  swe?: string;
  mkd?: string;
  gle?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  bel?: string;
  hrv?: string;
  lit?: string;
  ltz?: string;
  lav?: string;
  fin?: string;
  ukr?: string;
  ron?: string;
  nor?: string;
  spa?: string;
  isl?: string;
  nfr?: string;
  pol?: string;
  de?:  string;
  slv?: string;
  bos?: string;
  ces?: string;
  por?: string;
  mlt?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
