import axios from "axios";
import { Counties } from "./types";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";

function App() {
  const [countries, setCountries] = useState<Counties>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<Counties>(
        "https://restcountries.com/v2/all"
      );
      setCountries(data);
    } catch (e) {
      console.log("An error occurred while fetching lists.", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  console.log({ ...countries });

  return (
    <div>
      <Loading loading={loading}>
        {countries.map((country) => {
          return <Country key={country.name} country={country}></Country>;
        })}
      </Loading>
    </div>
  );
}

export default App;
