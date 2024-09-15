import { Post } from "@/interfaces/post";
import { HeroPost } from "./HeroPost";
import { ContentTypeEnum } from "@/interfaces/contentType";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <div className="mb-10 grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2">
        {posts.map((post) => (
          <HeroPost
            title={post.title ?? ""}
            coverImage={post.coverImage ?? ""}
            date={post.date ?? ""}
            author={post.author ?? {}}
            slug={post.slug ?? ""}
            excerpt={post.excerpt ?? ""}
            contentType={ContentTypeEnum.ARTICLE}
          />
        ))}
      </div>
    </section>
  );
}
