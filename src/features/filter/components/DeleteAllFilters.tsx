import { Button } from "@/components/ui/button";

type DeleteAllFiltersProps = {
  handleDeleteAllFilters: () => void;
};


const DeleteAllFilters = ({ handleDeleteAllFilters }: DeleteAllFiltersProps) => {

  return (
    <Button onClick={handleDeleteAllFilters}>Delete All Filters</Button>
  );
}

export default DeleteAllFilters;