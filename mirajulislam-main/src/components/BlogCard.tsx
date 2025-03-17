
import React from 'react';
import { CalendarIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
        featured
          ? 'md:col-span-2 md:row-span-2'
          : 'h-full'
      } hover:shadow-lg`}
    >
      <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={post.title}></Link>
      
      <div className="relative h-full flex flex-col">
        <div
          className={`relative overflow-hidden ${
            featured ? 'aspect-[16/9]' : 'aspect-[16/10]'
          }`}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="flex-1 p-6 bg-white dark:bg-gray-900">
          <div className="flex items-center text-xs text-muted-foreground space-x-4 mb-4">
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          
          <h2
            className={`font-display font-semibold mb-2 text-balance group-hover:text-primary transition-colors ${
              featured ? 'text-2xl' : 'text-xl'
            }`}
          >
            {post.title}
          </h2>
          
          <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
          
          <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
            <span className="text-sm font-medium text-primary relative overflow-hidden group-hover:after:right-0 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              Read More
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
