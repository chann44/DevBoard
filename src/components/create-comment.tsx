import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export function CreateComment() {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <Textarea placeholder="Leave a comment" className="" rows={10} />
      <Button className="self-end">Comment</Button>
    </div>
  );
}
