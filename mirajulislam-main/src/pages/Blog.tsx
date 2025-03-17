
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog: React.FC = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring Robotics in Environmental Conservation',
      description: 'How robotic solutions can help address environmental challenges and promote sustainability.',
      date: 'June 15, 2023',
      readTime: '5 min read',
      category: 'Robotics',
    },
    {
      id: 2,
      title: 'Water Salinity Research: Methods and Findings',
      description: 'An overview of my research methods and key findings in the area of water salinity.',
      date: 'August 22, 2023',
      readTime: '7 min read',
      category: 'Research',
    },
    {
      id: 3,
      title: 'My Journey Through Science Competitions',
      description: 'Reflections on participating in national and international science competitions.',
      date: 'October 10, 2023',
      readTime: '4 min read',
      category: 'Personal',
    },
    {
      id: 4,
      title: 'The Impact of Technology on Education',
      description: 'How technology is transforming education and creating new opportunities for learning.',
      date: 'December 5, 2023',
      readTime: '6 min read',
      category: 'Education',
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">My Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, ideas, and experiences from my journey in technology and environmental research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{post.category}</div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
