type DeleteAllFiltersProps = {
  handleDeleteAllFilters: () => void;
};


const DeleteAllFilters = ({ handleDeleteAllFilters }: DeleteAllFiltersProps) => {

  return (
    <button onClick={handleDeleteAllFilters}>Delete All Filters</button>
  );
}

export default DeleteAllFilters;