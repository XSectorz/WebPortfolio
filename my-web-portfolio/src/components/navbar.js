import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

export default function NavBar() {

    const [hoverIndex,setHoverIndex] = useState(0);
    const hoverMenu = (index) => {
        setHoverIndex(index);
    }

    return(
    <div className='flex bg-[#272727] w-full' style={{ zIndex: 2 }}>
        <div className='flex flex-col justify-center py-2 w-full'>
            <div className='flex flex-row justify-center py-2 w-full'>
                <div className={`relative flex mx-10 ${ hoverIndex === 0 || hoverIndex === 1 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                    <Link 
                        onClick={() => {
                            setTimeout(() => {
                            scroller.scrollTo("home", { smooth: true, duration: 1600 });
                            }, 200);
                        }} 
                        to="/"
                        className={`cursor-pointer flex w-full text-lg font-mono font-bold mx-6 justify-end`}
                        onMouseEnter={() => hoverMenu(1)}
                        onMouseLeave={() => hoverMenu(0)}
                    >
                            <div className='absolute top-[-8px] right-[23px] font-sans font text-xs'>01</div>
                            // home
                    </Link>
                </div>
                <div className={`relative flex mx-10 ${ hoverIndex === 0 || hoverIndex === 2 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                    <Link 
                        onClick={() => {
                            setTimeout(() => {
                            scroller.scrollTo("education", { smooth: true, duration: 1600 });
                            }, 200);
                        }} 
                        to="/"
                        className={`cursor-pointer flex w-full text-lg font-mono font-bold mx-6 justify-end`}
                        onMouseEnter={() => hoverMenu(2)}
                        onMouseLeave={() => hoverMenu(0)}
                    >
                            <div className='absolute top-[-8px] right-[23px] font-sans font text-xs'>02</div>
                            // education
                    </Link>
                </div>
                <div className={`relative flex mx-10 ${ hoverIndex === 0 || hoverIndex === 3 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                    <Link 
                        onClick={() => {
                            setTimeout(() => {
                            scroller.scrollTo("projects", { smooth: true, duration: 1600 });
                            }, 200);
                        }} 
                        to="/"
                        className={`cursor-pointer flex w-full text-lg font-mono font-bold mx-6 justify-end`}
                        onMouseEnter={() => hoverMenu(3)}
                        onMouseLeave={() => hoverMenu(0)}
                    >
                            <div className='absolute top-[-8px] right-[23px] font-sans font text-xs'>03</div>
                            // projects
                    </Link>
                </div>
                <div className={`relative flex mx-10 ${ hoverIndex === 0 || hoverIndex === 4 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                    <Link 
                        onClick={() => {
                            setTimeout(() => {
                            scroller.scrollTo("experience", { smooth: true, duration: 1600 });
                            }, 200);
                        }} 
                        to="/"
                        className={`cursor-pointer flex w-full text-lg font-mono font-bold mx-6 justify-end`}
                        onMouseEnter={() => hoverMenu(4)}
                        onMouseLeave={() => hoverMenu(0)}
                    >
                            <div className='absolute top-[-8px] right-[23px] font-sans font text-xs'>04</div>
                            // experience
                    </Link>
                </div>
                <div className={`relative flex mx-10 ${ hoverIndex === 0 || hoverIndex === 5 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}>
                    <Link 
                        onClick={() => {
                            setTimeout(() => {
                            scroller.scrollTo("contact", { smooth: true, duration: 1600 });
                            }, 200);
                        }} 
                        to="/"
                        className={`cursor-pointer flex w-full text-lg font-mono font-bold mx-6 justify-end`}
                        onMouseEnter={() => hoverMenu(5)}
                        onMouseLeave={() => hoverMenu(0)}
                    >
                            <div className='absolute top-[-8px] right-[23px] font-sans font text-xs'>05</div>
                            // contact me
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}