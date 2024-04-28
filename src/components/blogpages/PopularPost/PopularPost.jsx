import { FaRegComment } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";

const PopularPost = ({ posts, numberOfPosts, category, title }) => {
  return (
    <div>
      {title && <h4 className="font-jost font-[500] text-3xl mb-4">{title}</h4>}
      <div className="flex flex-col gap-8  max-w-[420px]">
        {posts.slice(0, numberOfPosts).map((post) => (
          <article key={post.id} className="flex gap-3 max-w-[388px]">
            <img
              src={post.img}
              loading="lazy"
              alt={post.title}
              className="size-[90px] object-cover"
            />
            <div className="flex flex-col justify-between ">
              <h6 className="font-jost font-[500] text-xl leading-[24px] capitalize line-clamp-2 ">
                {post.title}
              </h6>
              <div className="flex text-[12px] gap-[6px] tracking-wider font-spartan uppercase text-[#555555]">
                <p>{post.date}</p>
                <BsDashLg className="text-black" />
                {category && (
                  <>
                    <p className="uppercase">#{post.category}</p>
                    <BsDashLg className="text-black" />
                  </>
                )}
                <FaRegComment />
                <p className="">{post.comments}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
