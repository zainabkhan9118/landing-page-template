import { Link } from 'react-router-dom'
import {Card} from './ui/card'

const BlogCard = ({ blog }) => {
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image Container - Fixed Height */}
        <div className="h-48 overflow-hidden">
          <img 
            src={blog.image}  
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content Container - Flexible Height */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-3 self-start">
            {blog.category}
          </span>
          
          {/* Title - Fixed Height */}
          <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 min-h-[3.5rem]">
            {blog.title}
          </h2>
          
          {/* Excerpt - Flexible Height */}
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {blog.excerpt}
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span className="font-medium">{blog.author}</span>
            <span>{blog.readTime}</span>
          </div>
          
          {/* Read More Link - Always at Bottom */}
          <Link 
            to={`/blog/${blog.slug || blog.id}`} 
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-200 mt-auto"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;