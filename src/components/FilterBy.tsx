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
        className="bg-blue-dark-blue cursor-pointer outline-none shadow-md capitalize leading-[50px] pl-6 text-white text-xs w-full"
      >
        {currentFilter ? currentFilter : 'Filter by Region'}
      </div>
      {props.show ? (
        <div className="bg-blue-dark-blue absolute -bottom-60 p-6 w-full text-white grid gap-4">
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