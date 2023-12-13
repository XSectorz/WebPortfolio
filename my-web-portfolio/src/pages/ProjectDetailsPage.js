import React, {useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import NavBar from "../components/navbar";
import data from "../data/projectListData";

export default function ProjectDetails() {

    const { projectName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const isProjectValid = data.some(project => project.projectName === projectName);

        if(!isProjectValid) {
            navigate('/PageNotFound');
        }
          
    },[projectName]);

    return( 
        <div className='flex flex-col bg-black h-full'>
            <div className='flex bg-[#272727] w-full fixed items-center justify-center' style={{ zIndex: 2 }}>
                <NavBar/> 
            </div>
            <div className="flex flex-col ml-36 mt-36 w-full justify-start">
                <div className="flex flex-row text-[#c5c5b6]">
                    <div className="flex text-md font-sans font-bold">
                        Home
                    </div>
                    <div className="flex text-md font-sans font-bold px-2">
                        &gt;
                    </div>
                    <div className="flex text-md font-sans font-bold">
                        Projects
                    </div>
                    <div className="flex text-md font-sans font-bold px-2">
                        &gt;
                    </div>
                    <div className="flex text-md font-sans font-bold">
                        {projectName}
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="flex text-white text-6xl w-full font-sans font-bold">
                        {projectName}
                    </div>
                </div>
            </div>
        </div>
    );
}