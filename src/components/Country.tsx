import { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = ({ country }) => {
  return (
    <div>
      <p>
        {country.name} - {country.capital}
      </p>
    </div>
  );
};

export default Country;
