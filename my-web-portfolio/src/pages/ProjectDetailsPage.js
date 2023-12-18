import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import NavBar from "../components/navbar";
import data from "../data/projectListData";
import TypeItems from "../components/typeItems";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import BottomNavBar from "../components/bottomNavBar";
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRightLong } from "react-icons/fa6";


export default function ProjectDetails() {
    const navigate = useNavigate();

    const location = useLocation();
    const [dataTags, setDataTags] = useState([]);
    const { projectName } = useParams();
    const [projectTranslateXValue, setProjectTranslateXValue] = useState(0);
    const [currentShowProjIndex, setCurrentShowProjIndex] = useState(0);

    const isValid = data.some(projects => projects.projectName === projectName);

    useEffect(() => {

        /*console.log("Loc " ,location);
        console.log("Proj ", dataPass.project.projectName);*/
        // console.log("Loc " ,location);
        // console.log("ProjName ", projectName);
        window.scrollTo(0, 0);

        if (!isValid) {
            navigate('/PageNotFound');
        } else {
            setDataTags(matchingProject.projectTags.split(','));
        }


    }, [projectName]);

    if (!isValid) {
        return null;
    }

    let matchingProject = data.find(projects => projects.projectName === projectName);
    //console.log("Slide: ", matchingProject.imgSlides);
    //console.log("SlideSize: ", matchingProject.imgSlides.split(',').length);
    /*console.log(dataPass.project.projectTags);
    console.log(dataPass.project.projectTags.split(','));
    console.log(dataTags);*/

    const handlePrevClick = () => {

        if (currentShowProjIndex > 0) {
            setProjectTranslateXValue((projectTranslateXValue) => projectTranslateXValue + 100);
            setCurrentShowProjIndex(currentShowProjIndex - 1);
        }
    };

    const handleNextClick = () => {

        if(matchingProject.imgSlides.split(",").length <= 4) {
            return;
        }

        if (currentShowProjIndex < Math.floor(matchingProject.imgSlides.split(",").length/2)) {
            setProjectTranslateXValue((projectTranslateXValue) => projectTranslateXValue - 100);
            setCurrentShowProjIndex(currentShowProjIndex + 1);
        }
    };

    const openGithubProjects = () => {
        window.open(`${matchingProject.projectGithub}`);
    };


    return (
        <div className='flex flex-col bg-black h-full'>
            <div className='flex bg-[#272727] w-full fixed items-center justify-center' style={{ zIndex: 2 }}>
                <NavBar />
            </div>
            <div id="projectmain" className="flex flex-col mt-36 justify-start lg:px-10 px-4">
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
                    <div className="flex text-white text-6xl font-sans font-bold">
                        {projectName}
                    </div>
                </div>
                <div className="flex flex-row mt-4 w-full h-full">
                    {
                        dataTags.map((item, index) => (
                            <TypeItems key={index} projectTypes={item} />
                        ))
                    }
                </div>
                <div className="flex lg:flex-row flex-col mt-12 h-full w-full">
                    <div className='flex h-full lg:w-2/3 w-full items-start'>
                        <div className='flex lg:h-[450px] h-[350px] w-full md:rounded-3xl md:mx-2 sm:mr-4'>
                            <img src={`/img/${matchingProject.pageImg}`} className="lg:object-fill object-contain rounded-2xl w-full h-full"/>
                        </div>
                    </div>
                    <div className="flex w-full h-full flex-col mr-4 mt-5 px-4">
                        <div className='flex lg:h-[400px] h-full text-white font-sans font-semibold lg:text-xl text-base mr-4 break-words'>
                            {matchingProject.projectFullDesc}
                        </div>
                        <div className={`flex lg:w-1/6 w-1/5 justify-center items-center mt-4 cursor-pointer font-bold py-2 bg-transparent duration-500 hover:bg-[#FF0000] text-[#FF0000] text-base hover:text-white md:px-8 px-6 border border-[#FF0000] hover:border-transparent rounded`}
                         onClick={openGithubProjects}>
                            <div className="flex flex-row">
                                <div className="flex">
                                    Github
                                </div>
                                <div className="flex ml-4 justify-center items-center font-bold">
                                    <FaArrowRightLong />
                                </div>
                                
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex hidden justify-center items-center">
                <div className='flex h-[450px] w-full relative p-5 mt-20'>
                    {/* Arrow */}
                    <button className=' absolute top-[50%] -translate-x-0 -translate-y-1/2 left-5 text-3xl p-2 text-white bg-[#252525] rounded-full bg-opacity-80'
                        style={{ zIndex: 2 }} onClick={() => handlePrevClick()}>
                        <FaChevronLeft />
                    </button>
                    <button className=' absolute top-[50%] -translate-x-0 -translate-y-1/2 right-4 text-3xl p-2 text-white bg-[#252525] rounded-full bg-opacity-80'
                        style={{ zIndex: 2 }} onClick={() => handleNextClick()}>
                        <FaChevronRight />
                    </button>
                    <div className={`flex w-full h-full pl-3 ml-7 mr-9 bg-black py-5 overflow-hidden ${matchingProject.imgSlides.split(",").length < 5 ? 'justify-center' : 'justify-start'}`} style={{ zIndex: 1 }}>
                        {matchingProject.imgSlides.split(",").map((imgProj, index) => (
                            <div
                                key={index}
                                className='project-img-slide'
                                style={{
                                    transition: 'transform 0.3s ease-in-out',
                                    transform: `translateX(${projectTranslateXValue}%)`
                                }}
                            >
                                <div className="flex h-full w-[400px] rounded-2xl mx-10" >
                                    <img src={`/img/${imgProj}`} className=" object-contain rounded-2xl w-full h-full"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex flex-col h-full w-full mt-10">
                {matchingProject.imgSlides.split(",").map((imgProj, index) => (
                    <div key={index}
                        className="flex h-full mx-4 my-3"
                         >
                        <img src={`/img/${imgProj}`} className="object-contain w-full h-full"/>
                    </div>
                ))}
            </div>
            <div className=' relative flex flex-col h-40 bg-[#282828] mt-20 justify-center items-center w-full'>
                <ScrollLink
                    to="projectmain"
                    smooth={true}
                    duration={2000}
                    className={`absolute flex text-white text-4xl top-[-20px] bg-[#ff4d5a] animate-bounce-on-hover-v2 cursor-pointer`}
                >
                    <MdOutlineKeyboardDoubleArrowUp />
                </ScrollLink>
                <div className='flex'>
                    <BottomNavBar />
                </div>
            </div>
        </div>
    );
}