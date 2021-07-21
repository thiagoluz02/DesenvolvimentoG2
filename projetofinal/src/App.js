import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import css from "./components/module.css"

export default function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filteredPopulation, setFilteredPopulation] = useState(0)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const json = await res.json();

      let allCountries = json.map(({ name, numericCode,topLevelDomain ,flag, population, capital }) => {
        return {
          id: numericCode,
          name,
          topLevelDomain,
          filterName: name.toLowerCase(),
          flag,
          population,
          capital,
        }
      });
      // console.log(allCountries)
      const filteredPopulation = allCountries.reduce(
        (accumulator, current) => {
          return accumulator + current.population;
        },
        0
      );
      setAllCountries(allCountries);
      setFilteredCountries(Object.assign([], allCountries));
      setFilteredPopulation(filteredPopulation);
    }
    getCountries();
  }, [])

  const handleChangeFilter = (evt) => {
    const newText = evt.target.value;
    setFilter(newText)
    const filterLowerCase = newText.toLowerCase();
    const filteredCountries = allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const filteredPopulation = filteredCountries.reduce(
      (accumulator, current) => {
        return accumulator + current.population;
      },
      0
    );

    setFilteredCountries(filteredCountries);
    setFilteredPopulation(filteredPopulation);
  };

  return (
    <div className="container">
      <h1 className={css.title}>PAISES</h1>
      <Header
        filter={filter}
        countryCount={filteredCountries.length}
        totalPopulation={filteredPopulation}
        onChangeFilter={handleChangeFilter}
      />
      <Countries countries={filteredCountries} />
    </div>
  );
};