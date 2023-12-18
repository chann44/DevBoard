import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function UserAvatar() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/avatars/01.png" alt="@shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  );
}
