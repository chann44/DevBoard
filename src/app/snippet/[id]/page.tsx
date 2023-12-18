import { CodeRender } from "@/components/code-render";
import { CreateComment } from "@/components/create-comment";
import { UserAvatar } from "@/components/user-avatar";

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
        <UserAvatar />
        <div className="text-primary text-xl flex items-center gap-1">
          <p className="underline underline-offset-1">Chann44</p>
          <span>/</span>
          <p className="underline-offset-1 underline">CustomHook</p>
        </div>
      </div>
      {/* code */}
      <hr className="my-4 h-[1px]" />
      <div className="mx-auto max-w-5xl">
        <CodeRender />
        <div className="flex mt-6 gap-2">
          <UserAvatar />
          <CreateComment />
        </div>
      </div>
    </section>
  );
}
