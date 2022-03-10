import React from 'react';
import { FaHeart, FaEye, FaComment, FaShare, FaClock, FaDev } from 'react-icons/fa';
import moment from "moment";
import Link from 'next/link';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

const BlogCard = ({ singleBlog }) => {
    const { title, description, slug, url, comments_count, public_reactions_count, social_image, cover_image, published_at, reading_time_minutes, tag_list, user } = singleBlog;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        toast.success('Link copied successfully!')
    }

    return (
        <section>
            <div><Toaster /></div>
            <div className="mb-5 border-b-[1px] py-4 px-6 shadow-sm rounded-xl bg-slate-100">
                <Link href={`/blog/${slug}`} passHref><h2 className="text-2xl font-semibold cursor-pointer hover:text-purple-800">{title}</h2></Link>
                <article className="my-1.5">{description} <Link href={`/blog/${slug}`} passHref><span className="hover:underline hover:text-purple-800">Read More</span></Link></article>
                <div className="flex mt-5 mb-8">
                    {
                        tag_list.map(tag => <div className="px-3 py-1 border-2 border-stone-200 rounded-full w-auto mx-1 text-sm cursor-pointer" key={tag}>
                            {tag}
                        </div>)
                    }
                </div>
                <div className="text-slate-500 font-medium flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="flex items-center mr-4">
                            <FaHeart className="mr-2 text-rose-500 text-lg" /> {public_reactions_count}
                        </span>
                        <span className="flex items-center mr-4">
                            <FaEye className="mr-2 text-blue-800 text-lg" /> {reading_time_minutes} Min
                        </span>
                        <span className="flex items-center mr-4">
                            <FaComment className="mr-2 text-green-600 text-lg" /> {comments_count}
                        </span>
                        <button onClick={handleCopyLink}>
                            <FaShare className="text-lg mr-4" />
                        </button>
                        <a href={url} target="_blank" without rel="noreferrer">
                            <FaDev className="text-xl text-black" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <FaClock className="mr-2" />
                        <p>{moment(published_at).fromNow()}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogCard;