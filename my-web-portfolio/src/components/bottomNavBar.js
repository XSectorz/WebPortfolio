import React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail,IoLogoLinkedin   } from "react-icons/io";

export default function BottomNavBar() {

    const openGitHubProfile = () => {
        window.open('https://github.com/XSectorz');
      };

    const openLinkedInProfile = () => {
        window.open('https://www.linkedin.com/in/panat-kathinthong-40202b2a5/');
    };


    return(
        <div className='flex justify-center items-center w-full'>    
            <div className='flex flex-row justify-center items-center text-4xl text-white absolute bottom-16'>
                <div className='flex px-1' onClick={openGitHubProfile}>
                    <div className='flex transition-transform transform hover:scale-125 duration-500 scale-100 cursor-pointer'>
                        <FaGithub />
                    </div>
                </div>
                <a href="mailto:panat.kth@gmail.com" className='flex px-1 items-center'>
                    <div className='flex transition-transform transform hover:scale-125 duration-500 scale-100 cursor-pointer text-[#282828] bg-white rounded-2xl'>
                        <IoIosMail />
                    </div>
                </a>
                <div className='flex px-1' onClick={openLinkedInProfile}>
                    <div className='flex transition-transform transform hover:scale-125 duration-500 scale-100 cursor-pointer text-[#282828] bg-white rounded-2xl'>
                        <IoLogoLinkedin />
                    </div>
                </div>
            </div>
            <div className=' absolute flex items-center justify-center bottom-5 text-white font-sans text-sm'>
                PANAT KATHINTHONG ©2023
            </div>
        </div>
    )
}