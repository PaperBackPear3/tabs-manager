import { ColumnDef } from "@tanstack/react-table";
import { AllFilterLocalStorage, FilterStruct } from "../../../types/types";
import { DataTable } from "../../../components/ui/data-table";
import runFilter from "@/helpers/filtersHelper";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { collapseGroup } from "@/helpers/tabGroupHelper";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react"

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
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex flex-col w-full max-w-24 gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    deleteElement(row.original.filterName)
                  }}
                  className="text-red-600 hover:!text-red-600 hover:!bg-red-100">
                  Delete
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    runFilter(row.original)
                  }}
                  className="text-yellow-600 hover:!text-yellow-600 hover:!bg-yellow-100">
                  Run
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  collapseGroup(row.original.tabGroupName)
                }}>Collapse</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


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