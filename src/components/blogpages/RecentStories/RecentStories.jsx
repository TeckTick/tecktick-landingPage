import { BsDashLg } from "react-icons/bs";

const RecentStories = ({ posts, numberOfPosts, title }) => {
  return (
    <div>
      {title && (
        <h5 className="font-jost font-[500] text-3xl mb-4 ">{title}</h5>
      )}
      <div className="flex flex-col gap-5">
        {posts.slice(0, numberOfPosts).map((post) => (
          <article key={post.id}>
            <img
              loading="lazy"
              src={post.img}
              alt={post.img}
              className="w-[307px] h-[150px] object-cover "
            />
            <div className="pt-2 flex items-center gap-2  text-[#555555] tracking-wider uppercase  font-spartan ">
              <p>{post.date}</p>
              <BsDashLg className="text-black" />
              <p>#{post.category}</p>
            </div>
            <div className="w-full h-[1px] bg-[#DDDDDD] my-2"></div>
            <h4 className="py-2 font-jost font-[500] text-xl capitalize line-clamp-2">
              {post.title}
            </h4>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RecentStories;
