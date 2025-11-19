import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const CreateTaskForm = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Dialog>

      <form>

        <DialogTrigger asChild>
          <Button className="cursor-pointer">Create Task</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">

          <DialogHeader>
            <DialogTitle>Create Task.</DialogTitle>
            <DialogDescription>
              Make sure you filled out all the fields.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">

            <div className="grid">
              <Label htmlFor="title" className="mb-2">Title.</Label>
              <Input id="title" name="title" placeholder="Task Title..." />
            </div>

            <div className="grid">
              <Label htmlFor="description" className="mb-2">Description.</Label>
              <Textarea name="description" id="description" placeholder="Task Description"></Textarea>
            </div>

            <div className="flex justify-between">

              <div>
                <Label htmlFor="priotity" className="mb-2">Priority</Label>
                <Select defaultValue="Low">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Critical">Critical</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="taskType" className="mb-2">Task Type</Label>
                <Select defaultValue="Work">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Personal">Personal</SelectItem>
                    <SelectItem value="Hobby">Hobby</SelectItem>
                    <SelectItem value="Work">Work</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            <div className="grid">
                
              <Label htmlFor="date" className="mb-2">Finish Before</Label>

              <Popover open={open} onOpenChange={setOpen}>

                <PopoverTrigger asChild>
                  <Button variant="outline" id="date" className="w-48 justify-between font-normal">
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar mode="single" selected={date} required={true} captionLayout="dropdown"/>
                </PopoverContent>

              </Popover>

            </div>

          </div>

          <DialogFooter>
            <Button type="submit">Create Task</Button>
          </DialogFooter>

        </DialogContent>

      </form>

    </Dialog>
  );
};

export default CreateTaskForm;
