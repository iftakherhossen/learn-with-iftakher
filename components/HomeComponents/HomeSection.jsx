import React from 'react';
import BlogsSection from './BlogsSection';
import SideBar from './SideBar';

const HomeSection = ({ blogs }) => {
    return (
        <div className="px-[5.5rem] py-6">
            <main className="grid grid-rows-1 md:grid-cols-[minmax(300px,_1fr)_300px] lg:grid-cols-[minmax(600px,_1fr)_350px] gap-5">
                <BlogsSection blogs={blogs} />
                <SideBar />
            </main>
        </div>
    );
};

export default HomeSection;