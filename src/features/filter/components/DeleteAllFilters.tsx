import { Button } from "@/components/ui/button";

type DeleteAllFiltersProps = {
  handleDeleteAllFilters: () => void;
};


const DeleteAllFilters = ({ handleDeleteAllFilters }: DeleteAllFiltersProps) => {

  return (
    <Button variant="destructive" onClick={handleDeleteAllFilters}>Delete All Filters</Button>
  );
}

export default DeleteAllFilters;