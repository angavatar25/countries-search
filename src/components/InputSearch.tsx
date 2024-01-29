interface TInputSearch {
  placeholder: string,
  onChange: (value: string) => void;
  value: string;
};

const InputSearch = (props: TInputSearch) => {
  const handleInputCollectionName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }
  return (
    <div
      className="bg-blue-dark-blue leading-[50px] pl-6 max-w-96 w-full shadow-md"
    >
      <input
        className="bg-transparent w-full text-xs text-white placeholder:text-white outline-none"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleInputCollectionName}
      />
    </div>
  )
};

export default InputSearch;