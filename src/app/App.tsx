import './App.css'
import CreateFilter from '../features/filter/components/CreateFilter'
import AvailiableFilters from '../features/filter/components/AvailableFilters'
import { useEffect, useState } from 'react';
import { AllFilterLocalStorage, FilterStruct, FilterType } from '../types/types';
import { clearFilters, deleteFilter, getFilters, upsertFilter } from '../helpers/filterLocalStorageHelper';
import DeleteAllFilters from '../features/filter/components/DeleteAllFilters';

function App() {
  const initialFilter: FilterStruct = {
    filterName: '',
    tabGroupName: '',
    filterValues: [],
    filterType: FilterType.URL,
    autoRun: false,
  };

  const [filter, setFilter] = useState<FilterStruct>(initialFilter);
  const [availableFilters, setAvailableFilters] = useState<AllFilterLocalStorage>({});

  useEffect(() => {
    getFilters().then((filters) => {
      setAvailableFilters(filters);
    });
  }, []);

  const handleAddFilter = () => {
    // Add filter to local storage
    upsertFilter(filter).then(() => {
      // Update state
      getFilters().then((filters) => {
        setAvailableFilters(filters);
      });
    });
  }

  const handleClaenInpts = () => {
    setFilter(initialFilter);
  }

  const handleDeleteAllFilters = () => {
    // Delete all filters
    clearFilters();
    // Clear state
    setAvailableFilters({});
  };

  const handleDeleteFilter = (filterName: string) => {
    // Delete filter
    // Delete filter from local storage
    // Update state
    deleteFilter(filterName).then(() => {
      // Update state
      getFilters().then((filters) => {
        setAvailableFilters(filters);
      });
    });
  }

  return (
    <>
      <div className="flex flex-row gap-8">
        <div>
          <CreateFilter handleAddFilter={handleAddFilter} handleClaenInpts={handleClaenInpts} filter={filter} setFilter={setFilter} />
        </div>
        {Object.keys(availableFilters).length > 0 && (
          <div>
            <DeleteAllFilters handleDeleteAllFilters={handleDeleteAllFilters} />

            <AvailiableFilters
              availableFilters={availableFilters}
              deleteElement={handleDeleteFilter}
              setFilter={setFilter}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default App
