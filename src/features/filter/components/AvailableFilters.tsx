import { AllFilterLocalStorage } from "../../../types/types";

type AvailiableFiltersProps = {
  availableFilters: AllFilterLocalStorage;
};

const AvailiableFilters = ({ availableFilters }: AvailiableFiltersProps) => {

  if (availableFilters === undefined || Object.keys(availableFilters).length === 0) {
    return <div>No filters available</div>;
  }

  return (
    <div>
      {Object.keys(availableFilters).map((filterName) => {
        return (
          <div key={filterName}>
            <h3>{filterName}</h3>
            <div>
              <p>{availableFilters[filterName].tabGroupName}</p>
              <p>{availableFilters[filterName].filterValues.join(',')}</p>
              <p>{availableFilters[filterName].filterType}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AvailiableFilters;