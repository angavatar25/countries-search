import { useState } from "react";
import CardCountry from "../components/CardCountry";
import FilterBy from "../components/FilterBy";
import InputSearch from "../components/InputSearch";
import { countryData as countriesData } from "../countryData";
import NavBar from "../components/NavBar";

const SearchPage = () => {
  const currentDarkMode = localStorage.getItem('weatherDarkMode') === 'true';

  const [searchKeyword, setSearchKeyword] = useState('');

  const [arrayOfCountry, setArrayOfCountry] = useState(countriesData);

  const [showFilter, setShowFilter] = useState(false);
  const [currentMode] = useState(currentDarkMode);

  const handleSearchCountries = (e: string) => {
    setSearchKeyword(e);

    const filteredCountries = countriesData.filter(country => {
      const countryName = country.name.toLowerCase();
      const inputtedKeyword = searchKeyword.toLowerCase();
  
      return countryName.includes(inputtedKeyword);
    });

    setArrayOfCountry(filteredCountries)
  };
  

  const onClickFilter = (continent: string) => {
    const filteredCountries = countriesData.filter(country => {
      const continentName = country.region.toLowerCase();
  
      return continentName.includes(continent);
    });

    setArrayOfCountry(filteredCountries);
  }

  return (
    <>
      <NavBar
        isDarkMode={currentMode}
      />
      <div className="bg-blue-very-dark-blue-dark-mode w-full min-h-screen px-10 py-6 mt-20">
        <div className="flex justify-between">
          <InputSearch
            placeholder="Search for a country..."
            onChange={handleSearchCountries}
            value={searchKeyword}
          />
          <FilterBy
            onClickFilter={onClickFilter}
            onClickShow={() => setShowFilter(!showFilter)}
            show={showFilter}
          />
        </div>
        <div className="mt-10 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {arrayOfCountry.map((country) => (
            <CardCountry
              key={`country-${country.alpha3Code}`}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country?.capital}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
    </>
  )
};

export default SearchPage;