import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    return(
        <Link to={{ pathname: `/projects/${project.projectName}` }}>

            <div className={`rounded-lg shadow lg:mx-5 mx-20 ${isHovered ? 'cursor-pointer' : 'cursor-default'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className='flex h-[160px] w-60 overflow-hidden'>
                    <img className={`h-[160px] w-60 rounded-t-lg ${isHovered ? 'transition-transform transform scale-110 duration-500' : 'transition-transform transform scale-100 duration-500'}`} src={project.imgPath}></img>
                </div>
                <div className='flex flex-col h-40 w-60 px-2 pt-2 rounded-b-lg bg-[#252525]'>
                    <div className="flex text-white font-sans font-bold text-xl">
                        {project.projectName}
                    </div>
                    <div className="flex text-white font-sans h-20">
                        desc....
                    </div>
                    <div className={`flex text-gray-400 font-sans font-bold items-center justify-center ${isHovered ? 'custom-fade-in-up' : 'custom-fade-in-down'}`} >
                        {isHovered ? 'Show project' : project.projectType}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;