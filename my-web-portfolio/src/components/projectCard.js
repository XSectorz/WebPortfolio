import React, { useState } from 'react';

const ProjectCard = ({projectName,imgPath,projectType }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return(
    <div class="rounded-lg shadow mx-5"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
        <div className='flex h-[160px] w-60 overflow-hidden'>
            <img className={`h-[160px] w-60 rounded-t-lg ${isHovered ? 'transition-transform transform scale-110 duration-500' : 'transition-transform transform scale-100 duration-500'}`} src={imgPath}></img>
        </div>
        <div className='flex flex-col h-40 w-60 px-2 pt-2 rounded-b-lg bg-[#252525]'>
            <div className="flex text-white font-sans font-bold text-xl">
                {projectName}
            </div>
            <div className="flex text-white font-sans h-20">
                desc....
            </div>
            <div className={`flex text-gray-400 font-sans font-bold items-center justify-center ${isHovered ? 'custom-fade-in-up' : 'custom-fade-in-down'}`} >
                {isHovered ? 'Show project' : projectType}
            </div>
        </div>
    </div>
    );
}

export default ProjectCard;