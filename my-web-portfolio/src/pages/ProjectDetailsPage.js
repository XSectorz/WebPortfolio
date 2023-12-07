import React from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../components/navbar";

export default function ProjectDetails() {

    const { projectName } = useParams();

    return( 
        <div className="flex flex-col bg-black h-[1000px] w-full">
            <div className="flex">
                <NavBar/>
            </div>
            <div className="flex mt-20 w-full justify-start">
                <div className="flex text-white text-2xl w-full l">
                    {projectName}
                </div>
            </div>
        </div>
    );
}