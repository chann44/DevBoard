import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const userAvatarVariant = cva("border", {
  variants: {
    size: {
      default: "h-8 w-8",
      sm: "h-10 w-10",
      lg: "w-20 h-20",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof userAvatarVariant> {
  className?: string;
}

export function UserAvatar(props: UserAvatarProps) {
  return (
    <Avatar
      className={cn(userAvatarVariant({ size: props.size }), props.className)}
    >
      <AvatarImage src="/avatars/01.png" alt="@shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  );
}
