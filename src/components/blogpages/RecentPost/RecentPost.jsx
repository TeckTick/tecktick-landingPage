import { FaChevronRight } from "react-icons/fa6";

const RecentPost = ({ posts, numberOfPosts }) => {
  return (
    <>
      {posts.slice(0, numberOfPosts).map((post) => (
        <div
          key={post.id}
          className="flex w-[963px] h-[305px] border border-[#0000001A]">
          <div className="bg-[#EFF2FB] relative">
            <img
              src={post.img}
              loading="lazy"
              alt="article-cover"
              className="max-w-[360px] h-full
            object-cover"
            />
            <p className="py-1 px-2 bg-white text-sm font-semibold font-spartan tracking-wider absolute top-5 left-5">
              {post.category}
            </p>
          </div>
          <div className="flex flex-col justify-center px-10 ">
            <h3 className="font-jost font-medium text-3xl text-[#000000] mb-3 mr-2 line-clamp-2">
              {post.title}{" "}
            </h3>
            <p className="font-Spartan font-normal text-base leading-[25.5px] text-[#555555] mb-3 mr-2 line-clamp-3">
              {post.desc}{" "}
            </p>
            <div className="flex items-center gap-8 ">
              <div className="h-[1px] w-[433px] bg-black/10"></div>
              <div className="hover:btn-red-shadow flex items-center justify-center bg-[#EFF2FB] size-[50px] rounded-full cursor-pointer hover:text-white hover:bg-gradient-to-r from-[#2F007A] to-[#4698CA] ">
                <FaChevronRight />
              </div>
            </div>

            <div className="flex items-center font-spartan font-normal text-sm uppercase tracking-widest text-[#555555] gap-3">
              <p>{post.date} </p>
              <div className="w-[10px] h-[2px] bg-black"></div>
              <img
                src={post.avatar}
                loading="lazy"
                alt="avatar"
                className="size-[30px]"
              />
              <p>{post.author}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
