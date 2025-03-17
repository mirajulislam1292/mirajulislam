
import React from 'react';
import BlogCard, { BlogPost } from './BlogCard';

// Sample blog posts data
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Design: Trends to Watch in 2023',
    excerpt: 'Explore the cutting-edge design trends that are shaping the web landscape this year.',
    date: 'May 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    slug: 'the-future-of-web-design'
  },
  {
    id: '2',
    title: 'How to Build a Successful Content Strategy',
    excerpt: 'Learn how to create content that resonates with your audience and drives engagement.',
    date: 'April 28, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    slug: 'how-to-build-content-strategy'
  },
  {
    id: '3',
    title: 'The Psychology of User Experience',
    excerpt: 'Understand how psychology principles can be applied to create better user experiences.',
    date: 'April 12, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    slug: 'psychology-of-user-experience'
  },
  {
    id: '4',
    title: 'Mastering Modern JavaScript Frameworks',
    excerpt: 'A comprehensive guide to the most popular JavaScript frameworks in 2023.',
    date: 'March 30, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    slug: 'mastering-javascript-frameworks'
  },
  {
    id: '5',
    title: 'Sustainable Design Practices for Digital Products',
    excerpt: 'How to create environmentally conscious digital experiences without sacrificing quality.',
    date: 'March 15, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    slug: 'sustainable-design-practices'
  }
];

const FeaturedPosts: React.FC = () => {
  return (
    <section id="content" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              featured={index === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
