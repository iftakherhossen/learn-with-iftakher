import React from 'react';
import BlogCard from './BlogCard';

const BlogsSection = ({ blogs }) => {
    console.log(blogs);

    return (
        <section>
            {
                blogs.map(blog => <BlogCard
                    key={blog.id}
                    singleBlog={blog}
                />)
            }
        </section>
    );
};

export default BlogsSection;