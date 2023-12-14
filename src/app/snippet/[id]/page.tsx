import { CodeRender } from "@/components/code-render";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SnippetDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <section className="p-4">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/avatars/01.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="text-primary text-xl flex items-center gap-1">
          <p className="underline underline-offset-1">Chann44</p>
          <span>/</span>
          <p className="underline-offset-1 underline">CustomHook</p>
        </div>
      </div>
      {/* code */}
      <hr className="my-4 h-[1px]" />
      <CodeRender />
    </section>
  );
}
