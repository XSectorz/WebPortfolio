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
            <div className="flex mt-20 w-full justify-start">
                <div className="flex text-white text-2xl w-full">
                    {projectName}
                </div>
            </div>
        </div>
    );
}