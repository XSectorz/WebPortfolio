import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Bars3BottomRightIcon, XMarkIcon, home } from '@heroicons/react/24/solid'
import { FaDev } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { PiProjectorScreenChart } from "react-icons/pi";


export default function NavBar() {

    const [hoverIndex, setHoverIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const hoverMenu = (index) => {
        setHoverIndex(index);
    }

    return (
        <div className='flex bg-[#272727] w-full' style={{ zIndex: 2 }}>
            <div className='flex flex-col justify-center lg:py-2 w-full'>
                <div className={`flex flex-row justify-between md:hidden mt-2`}>
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
                <div className={`md:hidden  bg-[#272727] pt-2 sticky top-0  ${isOpen ? ' h-36 transition-all' : ' h-0 transition-all'} overflow-hidden duration-500`}>
                    {
                        isOpen && (
                            <div className=''>
                                <div className={`flex ${hoverIndex === 0 || hoverIndex === 1 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("home", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex flex-row w-full text-md font-sans font-bold mx-6 `}
                                        onMouseEnter={() => hoverMenu(1)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        <div className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 font-bold justify-center items-center mt-[2px] mr-2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>
                                        </div>
                                        <div className='flex'>
                                            home
                                        </div>
                                    </Link>
                                </div>
                                <div className={`flex ${hoverIndex === 0 || hoverIndex === 2 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("education", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex flex-row w-full text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(2)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        <div className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 font-bold justify-center items-center mt-[2px] mr-2">
                                                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                                            </svg>

                                        </div>
                                        <div className='flex'>
                                            education
                                        </div>
                                    </Link>
                                </div>
                                <div className={`flex ${hoverIndex === 0 || hoverIndex === 3 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("projects", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex flex-row w-full text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(3)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        <div className='flex w-5 h-5 font-bold justify-center items-center mt-[2px] mr-2'>
                                            <IoNewspaper/>
                                        </div>
                                        <div className='flex'>
                                            projects
                                        </div>
                                    </Link>
                                </div>
                                <div className={`flex ${hoverIndex === 0 || hoverIndex === 4 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("experience", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex flex-row w-full text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(4)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        <div className='flex w-5 h-5 font-bold justify-center items-center mt-[2px] mr-2'>
                                            <PiProjectorScreenChart/>
                                        </div>
                                        <div className='flex'>
                                            experience
                                        </div>
                                    </Link>
                                </div>
                                <div className={`flex ${hoverIndex === 0 || hoverIndex === 5 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                                    <Link
                                        onClick={() => {
                                            setTimeout(() => {
                                                scroller.scrollTo("contact", { smooth: true, duration: 1600 });
                                            }, 200);
                                        }}
                                        to="/"
                                        className={`cursor-pointer flex w-full flex-row  text-md font-sans font-bold mx-6`}
                                        onMouseEnter={() => hoverMenu(5)}
                                        onMouseLeave={() => hoverMenu(0)}
                                    >
                                        <div className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 font-bold justify-center items-center mt-[2px] mr-2">

                                                <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clip-rule="evenodd" />
                                            </svg>

                                        </div>
                                        <div className='flex'>
                                            contact
                                        </div>
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