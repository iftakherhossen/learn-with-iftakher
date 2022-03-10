import React from 'react';
import Head from 'next/head';
import BlogContent from '../../components/HomeComponents/BlogContent';

const singleBlog = () => {
    return (
        <div>
            <Head>
                <title>Learn with Iftakher - Blog</title>
                <meta name="Learn with Iftakher" content="Learn new technologies with Iftakher" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BlogContent />
        </div>
    );
};

export default singleBlog;