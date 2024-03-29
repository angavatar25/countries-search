import { useState } from "react";

const continentData = [
  { id: 1, name: 'africa' },
  { id: 2, name: 'america' },
  { id: 3, name: 'asia' },
  { id: 4, name: 'europe' },
  { id: 5, name: 'oceania' },
];

interface TFilterBy {
  show: boolean;
  onClickFilter: (continent: string) => void;
  onClickShow: (show: boolean) => void;
  isDarkMode: boolean;
};

const FilterBy = (props: TFilterBy) => {
  const [currentFilter, setCurrentFilter] = useState('');

  const handleChangeFilter = (filter: string) => {
    props.onClickFilter(filter);
    setCurrentFilter(filter);
  };

  const handleShowFilter = () => {
    props.onClickShow(props.show)
  }
  return (
    <div className="relative max-w-60 w-full">
      <div
        onClick={handleShowFilter}
        className={`${props.isDarkMode ? 'bg-blue-dark-blue text-white' : 'bg-white text-blue-very-dark-blue-light-mode'} cursor-pointer outline-none transition rounded-md shadow-md capitalize leading-[50px] pl-6 text-xs w-full`}
      >
        {currentFilter ? currentFilter : 'Filter by Region'}
      </div>
      {props.show ? (
        <div className={`${props.isDarkMode ? 'bg-blue-dark-blue text-white' : 'bg-white text-blue-very-dark-blue-light-mode'} absolute transition rounded-md -bottom-60 p-6 w-full grid gap-4`}>
          {continentData.map(continent => (
            <p
              key={`continent-${continent.id}`}
              className="capitalize cursor-pointer"
              onClick={() => handleChangeFilter(continent.name)}
            >
              {continent.name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
};

export default FilterBy;