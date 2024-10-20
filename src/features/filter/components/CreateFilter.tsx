import { Dispatch } from "react";
import { FilterStruct, FilterType } from "../../../types/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type CreateFilterProps = {
  filter: FilterStruct;
  setFilter: Dispatch<FilterStruct>;
  handleAddFilter: (filter: FilterStruct) => void;
  handleClaenInpts: () => void;
};


const CreateFilter = ({ handleAddFilter, handleClaenInpts, filter, setFilter }: CreateFilterProps) => {

  const handleFilterNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, filterName: e.target.value });
  };

  const handleTabGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, tabGroupName: e.target.value });
  };

  const handleFilterValuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, filterValues: e.target.value.split(',') });
  };

  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, filterType: e.target.value as FilterType });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Filter</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Filter name"
          type="text"
          value={filter.filterName}
          onChange={handleFilterNameChange}
        />
        <Label htmlFor="tabGroupName">Tab Group</Label>
        <Input
          id="tabGroupName"
          placeholder="Work, Personal, etc."
          type="text"
          value={filter.tabGroupName}
          onChange={handleTabGroupNameChange}
        />
        <Label htmlFor="filterValues">Values</Label>
        <Input id="filterValues"
          placeholder="values"
          type="text" value={filter.filterValues.join(',')}
          onChange={handleFilterValuesChange}
        />

        <Select onValueChange={() => handleFilterTypeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="filter type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={FilterType.URL}>URL</SelectItem>
            <SelectItem value={FilterType.TITLE}>Title</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button onClick={() => handleAddFilter(filter)}>Add Filter</Button>
        <Button variant="secondary" onClick={handleClaenInpts}>Clear Inputs</Button>
      </CardFooter>
    </Card>
  );


};

export default CreateFilter;