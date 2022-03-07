import React from 'react';
import { FaHeart, FaEye, FaComment, FaShare, FaClock } from 'react-icons/fa';

const BlogCard = () => {
    return (
        <section>
            <div className="mb-5 border-b-[1px] py-4 px-6 shadow-sm rounded-xl bg-slate-100">
                <h2 className="text-2xl font-semibold">Cope with Next.js</h2>
                <article className="my-1.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe illum harum inventore dolore ab reiciendis accusamus. Perspiciatis, magni quibusdam ab minus rem error facilis vitae distinctio tempore id delectus harum debitis labore quod maxime asperiores quisquam omnis! Aliquid, cupiditate.</article>
                <div className="flex mt-3 mb-5">
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                </div>
                <div className="text-slate-500 font-medium flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="flex items-center mr-3">
                            <FaHeart className="mr-2 text-rose-500 text-lg" /> 50
                        </span>
                        <span className="flex items-center mr-3">
                            <FaEye className="mr-2 text-blue-800 text-lg" /> 1500
                        </span>
                        <span className="flex items-center mr-3">
                            <FaComment className="mr-2 text-green-600 text-lg" /> 5
                        </span>
                        <span className="flex items-center mr-3">
                            <FaShare className="mr-2 text-lg" /> 2
                        </span>
                    </div>
                    <div className="flex items-center">
                        <FaClock className="mr-2" />
                        <p>a day ago</p>
                    </div>
                </div>
            </div>
            <div className="mb-5 border-b-[1px] py-4 px-6 shadow-sm rounded-xl bg-slate-100">
                <h2 className="text-2xl font-semibold">Cope with Next.js</h2>
                <article className="my-1.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe illum harum inventore dolore ab reiciendis accusamus. Perspiciatis, magni quibusdam ab minus rem error facilis vitae distinctio tempore id delectus harum debitis labore quod maxime asperiores quisquam omnis! Aliquid, cupiditate.</article>
                <div className="flex mt-3 mb-5">
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                </div>
                <div className="text-slate-500 font-medium flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="flex items-center mr-3">
                            <FaHeart className="mr-2 text-rose-500 text-lg" /> 50
                        </span>
                        <span className="flex items-center mr-3">
                            <FaEye className="mr-2 text-blue-800 text-lg" /> 1500
                        </span>
                        <span className="flex items-center mr-3">
                            <FaComment className="mr-2 text-green-600 text-lg" /> 5
                        </span>
                        <span className="flex items-center mr-3">
                            <FaShare className="mr-2 text-lg" /> 2
                        </span>
                    </div>
                    <div className="flex items-center">
                        <FaClock className="mr-2" />
                        <p>a day ago</p>
                    </div>
                </div>
            </div>
            <div className="mb-5 border-b-[1px] py-4 px-6 shadow-sm rounded-xl bg-slate-100">
                <h2 className="text-2xl font-semibold">Cope with Next.js</h2>
                <article className="my-1.5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe illum harum inventore dolore ab reiciendis accusamus. Perspiciatis, magni quibusdam ab minus rem error facilis vitae distinctio tempore id delectus harum debitis labore quod maxime asperiores quisquam omnis! Aliquid, cupiditate.</article>
                <div className="flex mt-3 mb-5">
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                    <div className="px-3 py-1 bg-stone-200 rounded-full w-auto mx-1 text-sm">#react</div>
                </div>
                <div className="text-slate-500 font-medium flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="flex items-center mr-3">
                            <FaHeart className="mr-2 text-rose-500 text-lg" /> 50
                        </span>
                        <span className="flex items-center mr-3">
                            <FaEye className="mr-2 text-blue-800 text-lg" /> 1500
                        </span>
                        <span className="flex items-center mr-3">
                            <FaComment className="mr-2 text-green-600 text-lg" /> 5
                        </span>
                        <span className="flex items-center mr-3">
                            <FaShare className="mr-2 text-lg" /> 2
                        </span>
                    </div>
                    <div className="flex items-center">
                        <FaClock className="mr-2" />
                        <p>a day ago</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogCard;