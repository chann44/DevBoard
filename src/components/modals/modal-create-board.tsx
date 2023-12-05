import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { URLs } from "@/lib/network";
import { useState } from "react";

export function CreateBoard() {
  const [boardName, setBoardName] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const mutation = useMutation({
    mutationFn: (newBoard: { name: string }) => {
      return axios.post(URLs.createBoard, newBoard);
    },
    onSuccess: () => {
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            value={boardName}
            onChange={(e) => {
              setBoardName(e.target.value);
            }}
            id="name"
            placeholder="'Custom React Hooks' or 'js utils'"
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button
            disabled={mutation.isLoading || !boardName}
            onClick={() => {
              if (boardName) {
                mutation.mutate({ name: boardName });
              }
            }}
            type="submit"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
