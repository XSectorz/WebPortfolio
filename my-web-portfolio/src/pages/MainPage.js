import React, {useState} from 'react';
import EducationInfo from '../components/educationList';
import ProjectCard from '../components/projectCard';
import data from '../data/projectListData';

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

export default function MainPage() {

    const [hoverIndex,setHoverIndex] = useState(0);
    const [currentShowProjIndex,setCurrentShowProjIndex] = useState(0);
    const [educationIndex,setEducationIndex] = useState(1);
    const [projectTranslateXValue,setProjectTranslateXValue] = useState(0);

    const hoverMenu = (index) => {
        setHoverIndex(index);
    }

    const changeEducation = (index) => {


        if(educationIndex === index) {
            setEducationIndex(0);
        } else {
            setEducationIndex(index);
        }
    }

    const handlePrevClick = () => {
        
        if(currentShowProjIndex > 0) {
            setProjectTranslateXValue((projectTranslateXValue) => projectTranslateXValue + 100);
            setCurrentShowProjIndex(currentShowProjIndex-1);
        }
      };
    
      const handleNextClick = () => {
        if(currentShowProjIndex+4 < data.length){
            setProjectTranslateXValue((projectTranslateXValue) => projectTranslateXValue - 100);
            setCurrentShowProjIndex(currentShowProjIndex+1);
        }
      };

    const projects = Array.from({ length: data.length }).map((_, index) => ({
        projectName: data[index].projectName,
        imgPath: data[index].imgPath,
        projectType: data[index].projectType,
    }));

    return(
        <div className='flex flex-col bg-black h-full'>
            <div className='flex flex-col justify-center mt-8'>
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
            <div className='items-center justify-center mt-8'>
                <div className='flex flex-col items-center h-[750px] justify-center'
                  style={{
                    backgroundImage: 'url(/img/BG2.jpg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}> 
                    <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-md">
                        <div className='flex text-white text-9xl font-sans font-bold tracking-widest'>
                            XSECTORZ
                        </div>
                        <div className='flex text-white text-2xl font-sans tracking-wider mt-4'>
                            GAME & WEB DEVELOPER
                        </div>
                        <button class=" mt-16 bg-transparent duration-500 hover:bg-[#FF0000] text-[#FF0000] text-2xl font-semibold hover:text-white py-3 px-14 border border-[#FF0000] hover:border-transparent rounded">
                            CONTACT
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-20 mx-32 mb-20'>
                <div className='flex justify-center text-white text-6xl font-sans font-bold'>
                    Education
                </div>
                <div className='flex flex-col mt-20'>
                <div className={`flex w-[700px] h-[55px] rounded-lg justify-between duration-500 ${educationIndex===1 ? 'bg-[#CE1212]' : 'bg-[#810000]'}`}
                     onClick={() => changeEducation(1)}>
                        <div className='flex items-center w-[620px] justify-between'>
                            <div className='flex mx-5 text-white text-lg font-sans font-bold'>
                                Bachelor's degree @ KMITL 
                            </div>
                            <div className='flex ml-52 text-white text-lg font-sans font-bold'>
                                2021 - PRESENT
                            </div>
                        </div>
                        <button className='flex text-white items-center font-sans text-2xl mr-6 '>
                            {educationIndex === 1 ? '-' : '+'}
                        </button>
                    </div>
                    <div className={`flex flex-row ${educationIndex===1 ? ' h-72 transition-all' : ' h-0 transition-all'} overflow-hidden duration-700`}>
                        <EducationInfo position="Bangkok, Thailand" website="www.kmitl.ac.th" description={
                                <>
                                In my studies there, I worked on IOT projects such as FPGA, STM32, and
                                Arduino. Website projects included product auction websites, sales
                                websites, as well as developing games using SFML, <br />Godot Engine.
                                <br />
                                <strong>GPA 3.41</strong>
                              </>
                        }
                        information="Computer Engineering" imgPath="/img/logokmitl.png" imgAlt="kmitlimg"/>
                    </div>
                </div>
                <div className='flex flex-col mt-6'>
                    <div className={`flex w-[700px] h-[55px] rounded-lg justify-between duration-500 ${educationIndex===2 ? 'bg-[#CE1212]' : 'bg-[#810000]'}`}
                    onClick={() => changeEducation(2)}>
                        <div className='flex items-center  w-[620px] justify-between'>
                            <div className='flex mx-5 text-white text-lg font-sans font-bold'>
                                High School @ Singburi School  
                            </div>
                            <div className='flex ml-52 text-white text-lg font-sans font-bold'>
                                2018 - 2021 
                            </div>
                        </div>
                        <button className='flex text-white items-center font-sans text-2xl mr-6 '>
                            {educationIndex === 2 ? '-' : '+'}
                        </button>
                    </div>
                    <div className={`flex flex-row ${educationIndex===2 ? ' h-60 transition-all' : ' h-0 transition-all'} overflow-hidden duration-700`}>
                        <EducationInfo position="Singburi, Thailand" website="sing.ac.th" description="During my studies, I developed a project on maintaining a straw mushroom farm using Arduino and competed in various programming competitions."
                         information="Sciences - Mathmatics Program" imgPath="/img/logoschool.png" imgAlt="schoolimg"/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-full'>
                <div className='flex flex-row'>
                    <div className='flex flex-col w-4/6 mr'>
                        <div className='text-white font-san ml-[350px] font-bold text-8xl mr-[100px]'>
                            My<br/> Projects
                        </div>
                        <div className='text-white font-sans ml-[350px] font-bold text-md mt-10 pl-1 mr-[100px]'>
                            bla bla bla... bla bla bla... bla bla bla... bla bla bla... bla bla bla... bla bla bla... bla bla bla... bla bla bla...
                            bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
                            bla bla bla...bla bla bla...
                            bla bla bla...bla bla bla...bla bla bla... ปิ่นจัง
                        </div>
                    </div>
                    <div className='flex w-2/6 h-[450px] text-white items-center justify-start mr-28 overflow-hidden'>
                        <img className='w-[500px]' src="/img/gibiseeproject.png" alt="gibi"></img>
                    </div>
                </div>
                <div className='flex flex-row mt-10'>
                    <div className='flex text-gray-500 font-sans font-bold text-base ml-[350px]'>
                        Filter by
                    </div>
                    <div className='relative flex text-[#CE1212] font-sans font-bold text-base ml-4'>
                        <div className='absolute top-[-8px] right-[-12px] font-sans font text-xs'>10</div>
                        All
                    </div>
                    <div className='text-gray-500 font-sans text-base ml-4 font-bold'> / </div>
                    <div className='relative flex text-gray-500 font-sans font-bold text-base ml-4'>
                        <div className='absolute top-[-8px] right-[-12px] font-sans font text-xs'>02</div>
                        Game Development
                    </div>
                    <div className='text-gray-500 font-sans text-base ml-4 font-bold'> / </div>
                    <div className='relative flex text-gray-500 font-sans font-bold text-base ml-4'>
                        <div className='absolute top-[-8px] right-[-12px] font-sans font text-xs'>02</div>
                        Web Development
                    </div>
                    <div className='text-gray-500 font-sans text-base ml-4 font-bold'> / </div>
                    <div className='relative flex text-gray-500 font-sans font-bold text-base ml-4'>
                        <div className='absolute top-[-8px] right-[-12px] font-sans font text-xs'>02</div>
                        App Development
                    </div>
                </div>
            </div>
            <div className='flex h-[500px] w-full justify-center mt-5'>
                <div className='flex h-[400px] w-[1200px] bg-black relative p-5'>
                    
                    {/* Arrow */}
                    <button className=' absolute top-[50%] -translate-x-0 -translate-y-1/2 left-5 text-3xl p-2 text-white'
                    style={{ zIndex: 2 }} onClick={() => handlePrevClick()}>
                        <FaChevronLeft />
                    </button>
                    <button className=' absolute top-[50%] -translate-x-0 -translate-y-1/2 right-5 text-3xl p-2 text-white'
                    style={{ zIndex: 2 }} onClick={() => handleNextClick()}>
                        <FaChevronRight />
                    </button>
                    <div className={`flex w-full h-full bg-black py-5 overflow-hidden pl-5 ${data.length < 4 ? 'justify-center' : 'justify-start'}`} style={{ zIndex: 1 }}>
                        {data.map((project, index) => (
                            <div
                            key={index}
                            className='project-card'
                            style={{
                                transition: 'transform 0.3s ease-in-out',
                                transform: `translateX(${projectTranslateXValue}%)`
                            }}
                            >
                            <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}