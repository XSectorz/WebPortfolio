import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import NavBar from "../components/navbar";
import data from "../data/projectListData";
import TypeItems from "../components/typeItems";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        if (currentShowProjIndex + 4 < matchingProject.imgSlides.split(",").length) {
            setProjectTranslateXValue((projectTranslateXValue) => projectTranslateXValue - 100);
            setCurrentShowProjIndex(currentShowProjIndex + 1);
        }
    };

    return (
        <div className='flex flex-col bg-black h-full'>
            <div className='flex bg-[#272727] w-full fixed items-center justify-center' style={{ zIndex: 2 }}>
                <NavBar />
            </div>
            <div className="flex flex-col ml-64 mt-36 justify-start">
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
                <div className="flex flex-row mt-12 h-full w-full">
                    <div className='flex h-full w-1/3 items-start'>
                        <div className='flex h-[450px] w-[600px] rounded-3xl mx-2'
                            style={{
                                backgroundImage: 'url(/img/siam_6.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }} />
                    </div>
                    <div className='flex w-5/12 text-white font-sans font-semibold text-lg ml-16'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ex diam, nec elementum tellus porta et. In hac habitasse platea dictumst. Praesent a consectetur nulla. Curabitur mattis ipsum felis, non suscipit nunc pretium in. Integer id orci non ex interdum consequat in tincidunt dolor. Aenean ante ante, iaculis at vehicula vel, porta sit amet nibh. Aliquam in odio ornare, convallis lorem id, lacinia metus.

                        Quisque tincidunt ex vehicula risus rutrum, nec imperdiet magna sollicitudin. Donec faucibus fringilla vssim sed eros id, varius dignissim nibh. Phasellus porta, quam non auctor vestibulum, leo ex condimentum ligula, nec sodales diam odio eget est. Proin a lectus lobortis, mollis magna sed, luctus mauris. Nulla est dui, ornare sit amet nisi a, consectetur laoreet orci. Fusce tempor viverra lorem at pretium.
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className='flex h-[450px] w-[1820px] relative p-5 mt-20'>
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
                                <div className="flex h-full w-[400px] rounded-2xl mx-3"
                                    style={{
                                        backgroundImage: `url(/img/${imgProj})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}