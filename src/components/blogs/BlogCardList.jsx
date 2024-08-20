import React from 'react';
import BlogCard from './BlogCard';

const blogData = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/05460110aeeaa7f808539bf83ad645c966d5f32d9915921a2aa163c053f24b3b?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "How to make a website look more attractive with illustrations",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/05460110aeeaa7f808539bf83ad645c966d5f32d9915921a2aa163c053f24b3b?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "How to make a website look more attractive with illustrations",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/05460110aeeaa7f808539bf83ad645c966d5f32d9915921a2aa163c053f24b3b?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "How to make a website look more attractive with illustrations",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/05460110aeeaa7f808539bf83ad645c966d5f32d9915921a2aa163c053f24b3b?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "How to make a website look more attractive with illustrations",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/05460110aeeaa7f808539bf83ad645c966d5f32d9915921a2aa163c053f24b3b?placeholderIfAbsent=true&apiKey=b0c497e9dfc54574b68d5cdde728b1cb",
    title: "How to make a website look more attractive with illustrations",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
];

const BlogCardList = () => {
  return (
    <section className="flex flex-wrap justify-center gap-4">
      {blogData.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </section>
  );
};

export default BlogCardList;