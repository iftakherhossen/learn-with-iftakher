import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="sticky top-0 w-full z-50 text-gray-800">
            <div className="navbar bg-slate-200 flex items-center h-[70px] px-5">
                <div className="flex-1 pl-10 mx-2">
                    <h1 className="text-[1.6em] font-semibold">
                        Learn with <span className="text-rose-500">Iftakher</span>
                    </h1>
                </div>
                <div className="hidden px-2 mx-2 lg:flex pr-10">
                    <div className="flex items-center">
                        <Link href="/" passHref>
                            <button className="btn hover:bg-slate-50 btn-ghost rounded-md mx-1 px-3 py-2 font-medium hover:shadow-sm uppercase">
                                Home
                            </button>
                        </Link>
                        <Link href="/" passHref>
                            <button className="btn hover:bg-slate-50 btn-ghost rounded-md mx-1 px-3 py-2 font-medium hover:shadow-sm uppercase">
                                Quiz
                            </button>
                        </Link>
                        <Link href="/" passHref>
                            <button className="btn hover:bg-slate-50 btn-ghost rounded-md mx-1 px-3 py-2 font-medium hover:shadow-sm uppercase">
                                Playground
                            </button>
                        </Link>
                        <Link href="/" passHref>
                            <button className="btn hover:bg-slate-50 btn-ghost rounded-md ml-1 mr-3 px-3 py-2 font-medium hover:shadow-sm uppercase">
                                Contact
                            </button>
                        </Link>
                        <Link href="/" passHref>
                            <button className="btn bg-rose-500 text-white hover:bg-slate-600 mx-3 px-5 py-2.5 font-semibold transition duration-500 hover:shadow-sm uppercase">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex-none lg:hidden dropdown dropdown-left">
                    <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                        <li>
                            <Link href="/" passHref>
                                <button className="btn hover:bg-slate-50 btn-ghost rounded-md mx-1 px-3 py-2 font-medium hover:shadow-sm uppercase">HOME </button>
                            </Link>
                        </li>
                        <li className="my-3">
                            <Link href="/" passHref>
                                <button className="btn hover:bg-slate-50 btn-ghost rounded-md mx-1 px-3 py-2 font-medium hover:shadow-sm uppercase">COURSES</button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref>
                                <button className="btn hover:bg-slate-50 btn-ghost rounded-md mx-1 px-3 py-2 font-medium hover:shadow-sm uppercase">FORUM </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref>
                                <button className="btn hover:bg-slate-50 btn-ghost rounded-md mx-1 px-3 py-2 font-medium hover:shadow-sm uppercase">PLAYGROUND </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" passHref>
                                <button className="btn hover:bg-slate-50 btn-ghost mx-3 px-5 py-2 font-semibold hover:shadow-sm transition duration-500 uppercase">Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;