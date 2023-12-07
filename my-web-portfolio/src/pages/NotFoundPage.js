import React from "react";
import NavBar from "../components/navbar";
import BottomNavBar from "../components/bottomNavBar";
import { FaSearch } from "react-icons/fa";

export default function NotFound() {
    return(
        <div className="flex flex-col bg-black h-[950px] w-full">
            <div className="flex">
                <NavBar/>
            </div>
            <div className="flex items-center justify-center text-7xl text-white mt-40 animate-pulse">
                <FaSearch />
            </div>
            <div className="flex w-full justify-center">
                <div className="flex flex-row text-8xl w-full justify-center font-bold items-center text-[#ff4d5a]">
                    <div className="flex h-full items-end mt-3" style={{fontSize: '180px'}}>
                        O
                    </div>  
                    <div className="flex h-full items-end" style={{fontSize: '130px'}}>
                        OPS!
                    </div> 
                </div>
            </div>
            <div className="flex w-full justify-center mt-2">
                <div className="flex text-[#ff4d5a] text-2xl w-full justify-center font-bold items-center">
                    404 - PAGE NOT FOUND
                </div>
            </div>
            <div className='fixed bottom-0 left-0 w-full h-32 bg-[#282828] justify-center items-center'>
                <div className='flex'>
                    <BottomNavBar />
                </div>
            </div>
        </div>
    );
}