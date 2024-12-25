export const Card = ({ post }) => {
  return (
    <div className="text-pretty">
      <div className="relative h-80 w-full rounded-xl overflow-hidden cursor-pointer">
        <img
          src={post.banner}
          alt="blog_img"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <div className="px-2 max-w-max text-white font-normal text-sm rounded-r-full bg-indigo-600">
          {post.genre}
        </div>
        <div className="text-lg font-medium">{post.title}</div>
        <div className="line-clamp-2">{post.content}</div>
        <div className="text-md font-medium">{post.author}</div>
      </div>
    </div>
  );
};

// Loading card
export const CardLoader = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => (
        <div className="text-pretty" key={index}>
          <div className="relative h-80 w-full rounded-xl overflow-hidden">
            <div className="h-full w-full bg-gray-300 animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <div className="px-2 max-w-max font-normal text-sm rounded-r-full bg-gray-300 text-gray-300 animate-pulse">
              Lorem, ipsum dolor.
            </div>
            <div className="text-lg font-medium bg-gray-300 text-gray-300 animate-pulse rounded-md">
              Lorem ipsum dolor si consectetur.
            </div>
            <div className="line-clamp-2 bg-gray-300 text-gray-300 animate-pulse rounded-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sapiente, facilis?
            </div>
            <div className="text-md font-medium bg-gray-300 text-gray-300 animate-pulse rounded-md max-w-max">
              Lorem, ipsum dolor.
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
