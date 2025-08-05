// In your Blog.jsx page
import { blogs, blogCategories } from '../data/blogs'
import BlogCard from '../components/BlogCard'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      
      {/* Blog grid */}
      <div className="relative">
            <Carousel className="w-full">
              <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500" />
              <CarouselContent className="-ml-2 md:-ml-4">
                {blogs.slice(0, 5).map((blog) => (
                  <CarouselItem key={blog.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <BlogCard blog={blog} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500" />
            </Carousel>
          </div>
    </div>
  )
}

export default Blog