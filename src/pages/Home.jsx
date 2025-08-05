import React from 'react';
import HeroSection from '../components/HeroSection';
import BlogCard from '../components/BlogCard';
import GuideCard from '../components/GuideCard';
import { blogs, getFeaturedBlogs } from '../data/blogs';
import { getUmrahSteps } from '../data/umrahSteps';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section className="my-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Latest Blogs</h2>
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
      </section>
      <section className="my-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Umrah Step-by-Step Guide</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Follow these essential steps to perform your Umrah pilgrimage correctly according to Islamic teachings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getUmrahSteps().map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;