interface TInputSearch {
  placeholder: string,
  onChange: (value: string) => void;
  value: string;
  isDarkMode: boolean;
};

const InputSearch = (props: TInputSearch) => {
  const handleInputCollectionName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }
  return (
    <div
      className={`${props.isDarkMode ? 'bg-blue-dark-blue' : 'bg-white'} leading-[50px] pl-6 max-w-96 w-full rounded-md transition shadow-md`}
    >
      <input
        className={`bg-transparent w-full text-xs ${props.isDarkMode ? 'text-white' : 'text-blue-very-dark-blue-light-mode'} placeholder:${props.isDarkMode ? 'text-white' : 'text-blue-very-dark-blue-light-mode'} outline-none`}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleInputCollectionName}
      />
    </div>
  )
};

export default InputSearch;