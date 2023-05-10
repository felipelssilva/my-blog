import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-2">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <Avatar name={author.name} picture={author.picture} />
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="mb-4 text-sm text-zinc-500">
        <Date dateString={date} />
      </div>
    </div>
  );
}
