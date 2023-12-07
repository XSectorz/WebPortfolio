import React, {useState, useEffect} from 'react';

export default function NavBar() {

    const [hoverIndex,setHoverIndex] = useState(0);
    const hoverMenu = (index) => {
        setHoverIndex(index);
    }

    return(
    <div className='flex bg-[#272727] w-full' style={{ zIndex: 2 }}>
        <div className='flex flex-col justify-center py-2 w-full'>
            <div className='flex mx-96'>
                <button  className={`flex w-1/5 text-sm font-mono font-bold mx-6 justify-end mt-2 ${ hoverIndex === 0 || hoverIndex === 1 ? 'text-slate-200 duration-300' : 'text-gray-500 duration-300'}`}
                onMouseEnter={() => hoverMenu(1)}
                onMouseLeave={() => hoverMenu(0)}>
                    01
                </button >
                <button  className={`flex w-1/5 text-sm font-mono font-bold mx-6 justify-end mt-2 ${ hoverIndex === 0 || hoverIndex === 2 ? 'text-slate-200 duration-300' : 'text-gray-500 duration-300'}`}
                onMouseEnter={() => hoverMenu(2)}
                onMouseLeave={() => hoverMenu(0)}>
                    02
                </button >
                <button  className={`flex w-1/5 text-sm font-mono font-bold mx-6 justify-end mt-2 ${ hoverIndex === 0 || hoverIndex === 3 ? 'text-slate-200 duration-300' : 'text-gray-500 duration-300'}`}
                onMouseEnter={() => hoverMenu(3)}
                onMouseLeave={() => hoverMenu(0)}>
                    03
                </button >
                <button  className={`flex w-1/5 text-sm font-mono font-bold mx-6 justify-end mt-2 ${ hoverIndex === 0 || hoverIndex === 4 ? 'text-slate-200 duration-300' : 'text-gray-500 duration-300'}`}
                onMouseEnter={() => hoverMenu(4)}
                onMouseLeave={() => hoverMenu(0)}>
                    04
                </button >
                <button  className={`flex w-1/5 text-sm font-mono font-bold mx-6 justify-end mt-2 ${ hoverIndex === 0 || hoverIndex === 5 ? 'text-slate-200 duration-300' : 'text-gray-500 duration-300'}`}
                onMouseEnter={() => hoverMenu(5)}
                onMouseLeave={() => hoverMenu(0)}>
                    05
                </button >
            </div>
            <div className='flex mx-96'>
            <button  className={`flex w-full text-lg font-mono font-bold mx-6 justify-end ${ hoverIndex === 0 || hoverIndex === 1 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}
                onMouseEnter={() => hoverMenu(1)}
                onMouseLeave={() => hoverMenu(0)}>
                    // home
                </button >
                <button  className={`flex w-full text-lg font-mono font-bold mx-6 justify-end ${ hoverIndex === 0 || hoverIndex === 2 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}
                onMouseEnter={() => hoverMenu(2)}
                onMouseLeave={() => hoverMenu(0)}>
                    // education
                </button >
                <button  className={`flex w-full text-lg font-mono font-bold mx-6 justify-end ${ hoverIndex === 0 || hoverIndex === 3 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}
                onMouseEnter={() => hoverMenu(3)}
                onMouseLeave={() => hoverMenu(0)}>
                    // projects
                </button >
                <button  className={`flex w-full text-lg font-mono font-bold mx-6 justify-end ${ hoverIndex === 0 || hoverIndex === 4 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}
                onMouseEnter={() => hoverMenu(4)}
                onMouseLeave={() => hoverMenu(0)}>
                    // experience
                </button >
                <button  className={`flex w-full text-lg font-mono font-bold mx-6 justify-end ${ hoverIndex === 0 || hoverIndex === 5 ? 'text-white duration-500' : 'text-gray-500 duration-500'}`}
                onMouseEnter={() => hoverMenu(5)}
                onMouseLeave={() => hoverMenu(0)}>
                    // contact me
                </button >
            </div>
        </div>
    </div>
    )
}