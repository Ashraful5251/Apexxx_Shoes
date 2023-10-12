import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <header className="text-center py-8">
          <h1 className="text-4xl">Shoe Shop Blog</h1>
        </header>
        <div className="container mx-auto mt-8">
          {/* Blog posts go here */}
          <div className="blog-post mb-8 border-b-2 border-gray-600 pb-4">
            <h2 className="text-2xl mb-4">
              The Latest Shoe Trends for This Season
            </h2>
            <p className="text-lg">
              Discover the hottest shoe styles for this season. From comfy
              sneakers to elegant heels, we've got you covered.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              Read more
            </a>
          </div>

          {/* Add more blog posts here */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
