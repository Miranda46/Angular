import { Country } from "./countries.interfaces";
import { Region } from "./region.type";

export interface CacheStore{
    byCountry : CountryTerm;
    byCapital : CountryTerm;
    byRegion:   ByRegion;

}

interface CountryTerm{
    term: string,
    countries: Country[]
}

interface ByRegion{
    region?: Region,
    countries: Country[]
}