import { Dispatch } from "react";
import { FilterStruct, FilterType } from "../../../types/types";

type CreateFilterProps = {
  filter: FilterStruct;
  setFilter: Dispatch<FilterStruct>;
  handleAddFilter: (filter: FilterStruct) => void;
  handleClaenInpts: () => void;
};


const CreateFilter = ({ handleAddFilter, handleClaenInpts, filter, setFilter }: CreateFilterProps) => {

  const handleFilterNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, filterName: e.target.value });
  };

  const handleTabGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, tabGroupName: e.target.value });
  };

  const handleFilterValuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, filterValues: e.target.value.split(',') });
  };

  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, filterType: e.target.value as FilterType });
  };

  return (
    <div>
      <input type="text" value={filter.filterName} onChange={handleFilterNameChange} />
      <input type="text" value={filter.tabGroupName} onChange={handleTabGroupNameChange} />
      <input type="text" value={filter.filterValues.join(',')} onChange={handleFilterValuesChange} />
      <select value={filter.filterType} onChange={handleFilterTypeChange}>
        <option value={FilterType.URL}>URL</option>
        <option value={FilterType.TITLE}>Title</option>
      </select>
      <button onClick={() => handleAddFilter(filter)}>Add Filter</button>
      <button onClick={handleClaenInpts}>Clear Inputs</button>
    </div>
  );


};

export default CreateFilter;