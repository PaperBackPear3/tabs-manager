import { ColumnDef } from "@tanstack/react-table";
import { AllFilterLocalStorage, FilterStruct } from "../../../types/types";
import { DataTable } from "../../../components/ui/data-table";
import { Button } from "@/components/ui/button";

type AvailiableFiltersProps = {
  availableFilters: AllFilterLocalStorage;
  deleteElement: (filterName: string) => void;
};

const AvailiableFilters = ({ availableFilters, deleteElement }: AvailiableFiltersProps) => {

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
    {
      accessorKey: "autoRun",
      header: "auto run",
    },
    {
      id: "delete",
      header: "delete",
      cell: ({ row }) => {
        return (
          <div className="flex flex-col w-full max-w-24 gap-1">
            <Button
              className="mr-2 p-2"
              variant="destructive"
              onClick={() => {
                deleteElement(row.original.filterName)
              }}
            >
              Delete
            </Button>
            <Button
              className="mr-2 p-2"
              variant="default"
              onClick={() => {
                console.log(row.original)
              }}
            >
              Run
            </Button>
          </div>
        );
      },
    }
  ]

  const data = Object.values(availableFilters);

  return (
    <div className="min-w-24 mx-auto py-10 ">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default AvailiableFilters;