import { Dispatch } from "react";
import { FilterStruct, FilterType } from "../../../types/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

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

  const handleFilterTypeChange = (val: FilterType) => {
    setFilter({ ...filter, filterType: val });
  };

  const handleAutoRunChange = () => {
    setFilter({ ...filter, autoRun: !filter.autoRun });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Filter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-start space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Filter name"
            type="text"
            value={filter.filterName}
            onChange={handleFilterNameChange}
          />
          <Label htmlFor="tabGroupName">Tab Group Nam</Label>
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
          <div className="flex gap-8">
            <Label htmlFor="autoRun">Auto Run</Label>
            <Switch checked={filter.autoRun} onCheckedChange={handleAutoRunChange} />
          </div>
          <Label htmlFor="filterType">Filter Type</Label>
          <Select onValueChange={(val) => handleFilterTypeChange(val as FilterType)}>
            <SelectTrigger>
              <SelectValue placeholder="filter type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={FilterType.URL}>URL</SelectItem>
              <SelectItem value={FilterType.TITLE}>Title</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="gap-8">
        <Button onClick={() => handleAddFilter(filter)}>Add Filter</Button>
        <Button variant="secondary" onClick={handleClaenInpts}>Clear Inputs</Button>
      </CardFooter>
    </Card>
  );


};

export default CreateFilter;