import './App.css'
import CreateFilter from '../features/filter/components/CreateFilter'
import AvailiableFilters from '../features/filter/components/AvailableFilters'
import { useCallback, useEffect, useState } from 'react';
import { AllFilterLocalStorage, FilterStruct, FilterType } from '../types/types';
import { clearFilters, getFilters, upsertFilter } from '../helpers/filterLocalStorageHelper';
import DeleteAllFilters from '../features/filter/components/DeleteAllFilters';

function App() {
  const [availableFilters, setAvailableFilters] = useState<AllFilterLocalStorage>({});


  const [filter, setFilter] = useState<FilterStruct>({
    filterName: '',
    tabGroupName: '',
    filterValues: [],
    filterType: FilterType.URL,
  });

  const getAvailableFilters = useCallback(() => {
    return getFilters();
  }, []);

  useEffect(() => {
    getAvailableFilters().then((filters) => {
      setAvailableFilters(filters);
    });
  }, [getAvailableFilters]);

  const handleAddFilter = () => {
    // Add filter to local storage
    upsertFilter(filter).then(() => {
      // Update state
      getAvailableFilters().then((filters) => {
        setAvailableFilters(filters);
      });
    });
  }

  const handleClaenInpts = () => {
    setFilter({
      filterName: '',
      tabGroupName: '',
      filterValues: [],
      filterType: FilterType.URL,
    });
  }

  const handleDeleteAllFilters = () => {
    // Delete all filters
    clearFilters();
    // Clear state
    setAvailableFilters({});
  };
  return (
    <>
      <CreateFilter
        handleAddFilter={handleAddFilter}
        handleClaenInpts={handleClaenInpts}
        filter={filter}
        setFilter={setFilter}
      />
      <DeleteAllFilters handleDeleteAllFilters={handleDeleteAllFilters} />
      <AvailiableFilters availableFilters={availableFilters} />
    </>
  )
}

export default App
