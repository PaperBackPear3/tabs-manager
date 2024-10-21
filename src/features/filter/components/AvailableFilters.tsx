import { ColumnDef } from "@tanstack/react-table";
import { AllFilterLocalStorage, FilterStruct } from "../../../types/types";
import { DataTable } from "../../../components/ui/data-table";
import runFilter from "@/helpers/filtersHelper";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { collapseGroup } from "@/helpers/tabGroupHelper";
import { Button } from "@/components/ui/button";
import { CircleEllipsis, MoreHorizontal } from "lucide-react"
import { Dispatch } from "react";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type AvailiableFiltersProps = {
  availableFilters: AllFilterLocalStorage;
  deleteElement: (filterName: string) => void;
  setFilter: Dispatch<FilterStruct>;
};

const AvailiableFilters = ({ availableFilters, deleteElement, setFilter }: AvailiableFiltersProps) => {

  const columns: ColumnDef<FilterStruct>[] = [
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex flex-row w-full max-w-48 gap-1">
            <Button variant="ghost" onClick={() => {
              runFilter(row.original)
            }}
              className="text-yellow-600 hover:!text-yellow-600 hover:!bg-yellow-100">
              Run
            </Button>
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
                    runFilter(row.original)
                  }}
                  className="text-yellow-600 hover:!text-yellow-600 hover:!bg-yellow-100">
                  Run now
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {
                  collapseGroup(row.original.tabGroupName)
                }}>Collapse</DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  setFilter(row.original)
                }}>Edit</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    deleteElement(row.original.filterName)
                  }}
                  className="text-red-600 hover:!text-red-600 hover:!bg-red-100">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


          </div>
        );
      },
    },
    {
      accessorKey: "filterName",
      header: "Filter name",
    },
    {
      accessorKey: "tabGroupName",
      header: "Group name",
    },
    {
      accessorKey: "filterValues",
      header: "Values",
      cell: ({ row }) => {
        const isDisabled = row.original.filterValues.length === 1 ? true : false;
        return (
          <Popover>
            <PopoverTrigger disabled={isDisabled}>
              <Button
                className="flex flex-row gap-2"
                variant={isDisabled ? "ghost" : "outline"}

              >
                <b>{row.original.filterType + ':'}</b> <span className="text-sm">{row.original.filterValues[0]}</span>
                {!isDisabled && <CircleEllipsis size={12} />}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <h2><b>{row.original.filterType}</b>  can contain:</h2>
              <ul className="list-disc list-inside">
                {row.original.filterValues.map((value, index) => {
                  return (
                    <li key={index}>{value}</li>
                  )
                })}
              </ul>
            </PopoverContent>
          </Popover>
        )
      }
    },
    {
      accessorKey: "autoRun",
      header: "Auto run",
      cell: ({ row }) => {
        return (<Switch checked={row.original.autoRun} disabled={true} />)
      }
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