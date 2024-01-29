interface TCountryData {
  name: string,
  population: number,
  region: string,
  capital: string | undefined,
  flag: string,
}

const CardCountry = (props: TCountryData) => {
  return (
    <>
      <div className="bg-blue-dark-blue text-white">
        <div className="h-52">
          <img
            className="w-full object-cover h-full"
            src={props.flag}
            alt=""
          />
        </div>
        <div className="px-5 py-6">
          <p className=" font-bold text-xl mb-6">{props.name}</p>
          <div className="text-sm grid gap-2">
            <p><span className="font-bold">Population:</span> {props.population}</p>
            <p><span className="font-bold">Region:</span> {props.region}</p>
            <p><span className="font-bold">Capital:</span> {props.capital}</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default CardCountry;