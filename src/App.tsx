import React from "react";
import countries from "./country-data.json";
import { CountryList } from "./components/CountryList/CountryList";
import { Badge } from "./components/Babge/Badge";
import { transformCountries } from "./components/mappers/transformCountries";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <h1 className="p-3">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
