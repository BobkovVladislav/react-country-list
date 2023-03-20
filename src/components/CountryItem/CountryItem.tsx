import React from "react";
import { Badge } from "../Babge/Badge";
import { Country } from "../types/types";

interface CountryItemProps {
  countries: Country;
}

export const CountryItem = ({
  countries: { flag, name, capital, region, area, population },
}: CountryItemProps) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <img src={flag} width={100} height={70} alt="flag" />
      <p className="m-2">{name}</p>
      <p className="m-2">{capital}</p>
      <p className="m-2">{region}</p>
      <Badge color="bg-primary" value={area} label="area" />
      <Badge color="bg-secondary" value={population} label="area" />
    </li>
  );
};
