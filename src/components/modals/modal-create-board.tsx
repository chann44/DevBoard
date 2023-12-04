import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateBoard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Create Snippet Board</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg py-20 px-10">
        <DialogHeader className=" w-full">
          <DialogTitle className="text-2xl text-center">
            Create Snippet Board
          </DialogTitle>
        </DialogHeader>
        <div className="my-6">
          <Label htmlFor="name" className="text-right">
            Board Name
          </Label>
          <Input
            id="name"
            placeholder="'Custom React Hooks' or 'js utils'"
            className="col-span-3"
          />
        </div>

        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
