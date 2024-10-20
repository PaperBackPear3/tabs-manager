import { ColumnDef } from "@tanstack/react-table";
import { AllFilterLocalStorage, FilterStruct } from "../../../types/types";
import { DataTable } from "./data-table";

type AvailiableFiltersProps = {
  availableFilters: AllFilterLocalStorage;
};

const AvailiableFilters = ({ availableFilters }: AvailiableFiltersProps) => {

  if (availableFilters === undefined || Object.keys(availableFilters).length === 0) {
    return <div>No filters available</div>;
  }


  const columns: ColumnDef<FilterStruct>[] = [
    {
      accessorKey: "filterName",
      header: "filter name",
    },
    {
      accessorKey: "tabGroupName",
      header: "tab group name",
    },
    {
      accessorKey: "filterValues",
      header: "vals",
    },
    {
      accessorKey: "filterType",
      header: "type",
    },
  ]

  const data = Object.values(availableFilters);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default AvailiableFilters;