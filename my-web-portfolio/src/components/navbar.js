import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { FaDev } from "react-icons/fa";

export default function NavBar() {

    const [hoverIndex, setHoverIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const hoverMenu = (index) => {
        setHoverIndex(index);
    }

    return (
        <div className='flex bg-[#272727] w-full' style={{ zIndex: 2 }}>
            <div className='flex flex-col justify-center lg:py-2 w-full'>
                <div className='flex flex-row justify-between md:hidden mt-2'>
                    <div className='flex text-5xl font-sans font-bold ml-5 cursor-pointer'>
                        <Link
                            onClick={() => {
                                setTimeout(() => {
                                    scroller.scrollTo("home", { smooth: true, duration: 1600 });
                                }, 200);
                            }}
                            to="/"
                            className={`bg-[#FF0000] text-white rounded-full border-spacing-x-10 items-center justify-center`}
                        >
                            <FaDev />
                        </Link>
                    </div>
                    <div className='flex mt-2 cursor-pointer w-10 h-10 text-white mr-5 ' onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                </div>
                <div className='md:hidden  bg-[#272727] text-white pt-2 sticky top-0'>
                    {
                        isOpen && (
                            <div className=''>
                                <div className={`flex text-white'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("home", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex w-full text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(1)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        // home
                                    </Link>
                                </div>
                                <div className={`flex text-white'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("education", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex w-full text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(1)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        // education
                                    </Link>
                                </div>
                                <div className={`flex text-white'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("projects", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex w-full text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(1)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        // projects
                                    </Link>
                                </div>
                                <div className={`flex text-white'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("experience", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex w-full text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(1)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        // experience
                                    </Link>
                                </div>
                                <div className={`flex text-white'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("contact", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex w-full text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(1)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        // contact me
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='md:flex flex-row justify-around py-2 w-full hidden lg:mx-10 mt-2'>
                    <div className={`relative flex ${hoverIndex === 0 || hoverIndex === 1 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                        <Link
                            onClick={() => {
                                setTimeout(() => {
                                    scroller.scrollTo("home", { smooth: true, duration: 1600 });
                                }, 200);
                            }}
                            to="/"
                            className={`cursor-pointer flex lg:text-lg text-lg font-mono font-bold lg:mx-6 w-full justify-start ml-4`}
                            onMouseEnter={() => hoverMenu(1)}
                            onMouseLeave={() => hoverMenu(0)}
                        >
                            <div className='absolute top-[-10px] right-[0px] lg:top-[-8px] lg:right-[23px] font-sans text-xs'>01</div>
                            // home
                        </Link>
                    </div>
                    <div className={`relative flex ${hoverIndex === 0 || hoverIndex === 2 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                        <Link
                            onClick={() => {
                                setTimeout(() => {
                                    scroller.scrollTo("education", { smooth: true, duration: 1600 });
                                }, 200);
                            }}
                            to="/"
                            className={`cursor-pointer flex w-full text-lg font-mono font-bold lg:mx-6 justify-end`}
                            onMouseEnter={() => hoverMenu(2)}
                            onMouseLeave={() => hoverMenu(0)}
                        >
                            <div className='absolute top-[-10px] right-[0px] lg:top-[-8px] lg:right-[23px] font-sans font text-xs'>02</div>
                            // education
                        </Link>
                    </div>
                    <div className={`relative flex ${hoverIndex === 0 || hoverIndex === 3 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                        <Link
                            onClick={() => {
                                setTimeout(() => {
                                    scroller.scrollTo("projects", { smooth: true, duration: 1600 });
                                }, 200);
                            }}
                            to="/"
                            className={`cursor-pointer flex w-full text-lg font-mono font-bold lg:mx-6 justify-end`}
                            onMouseEnter={() => hoverMenu(3)}
                            onMouseLeave={() => hoverMenu(0)}
                        >
                            <div className='absolute top-[-10px] right-[0px] lg:top-[-8px] lg:right-[23px] font-sans font text-xs'>03</div>
                            // projects
                        </Link>
                    </div>
                    <div className={`relative flex ${hoverIndex === 0 || hoverIndex === 4 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                        <Link
                            onClick={() => {
                                setTimeout(() => {
                                    scroller.scrollTo("experience", { smooth: true, duration: 1600 });
                                }, 200);
                            }}
                            to="/"
                            className={`cursor-pointer flex w-full text-lg font-mono font-bold lg:mx-6 justify-end`}
                            onMouseEnter={() => hoverMenu(4)}
                            onMouseLeave={() => hoverMenu(0)}
                        >
                            <div className='absolute top-[-10px] right-[0px] lg:top-[-8px] lg:right-[23px] font-sans font text-xs'>04</div>
                            // experience
                        </Link>
                    </div>
                    <div className={`relative flex ${hoverIndex === 0 || hoverIndex === 5 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                        <Link
                            onClick={() => {
                                setTimeout(() => {
                                    scroller.scrollTo("contact", { smooth: true, duration: 1600 });
                                }, 200);
                            }}
                            to="/"
                            className={`cursor-pointer flex w-full text-lg font-mono font-bold lg:mx-6 justify-end mr-4`}
                            onMouseEnter={() => hoverMenu(5)}
                            onMouseLeave={() => hoverMenu(0)}
                        >
                            <div className='absolute top-[-10px] right-[15px] lg:top-[-8px] lg:right-[23px] font-sans font text-xs'>05</div>
                            // contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}