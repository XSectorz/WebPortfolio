import React, {useState, useEffect} from 'react';
import EducationInfo from '../components/educationList';
import ProjectCard from '../components/projectCard';
import data from '../data/projectListData';
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp  } from "react-icons/md";
import NavBar from '../components/navbar';
import BottomNavBar from '../components/bottomNavBar';
import {Link as ScrollLink} from 'react-scroll';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import '../css/animation.css';
import '../css/swalcustom.css';

export default function MainPage() {
    const [projectFilter,setprojectFilter] = useState("All");
    const [currentShowProjIndex,setCurrentShowProjIndex] = useState(0);
    const [educationIndex,setEducationIndex] = useState(1);
    const [projectTranslateXValue,setProjectTranslateXValue] = useState(0);
    const [isHoverSiamcraft,setIsHoverSiamcraft] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [filteredProjectsSize, setFilteredProjectsSize] = useState([]);

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
 
    const changeEducation = (index) => {

        if(educationIndex === index) {
            setEducationIndex(0);
        } else {
            setEducationIndex(index);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const data = {
            from_name: name,
            to_name: email,
            message: message,
        };

        if(!name || !email || !message) {
            Swal.fire({
                title: 'Oops...',
                html: '<span style="color: #ffffff;">Please fill in all fields.</span>',
                icon: 'error',
                confirmButtonText: 'Done',
                background: '#252525',
                customClass: {
                    title: 'swal-error-title',
                }
              })
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailRegex.test(email)) {
                emailjs.send('service_x45s4x5', 'template_mglnb7e', data, 'Z_ondRf4Ug79uXCkl')
                .then((result) => {
                    console.log(result.text);
                      Swal.fire({
                          title: 'Success',
                          html: '<span style="color: #ffffff;">Thank you. I will contact you back as soon as possible</span>',
                          icon: 'success',
                          confirmButtonText: 'Ok',
                          background: '#252525',
                          customClass: {
                              title: 'swal-error-title',
                          }
                        })
                }, (error) => {
                  Swal.fire({
                      title: 'Oops...',
                      text: 'There was a problem sending Please contact me directly via email',
                      icon: 'error',
                      confirmButtonText: 'Done',
                      background: 'red',
                    })
                });
            } else {
                Swal.fire({
                    title: 'Oops...',
                    html: '<span style="color: #ffffff;">Invailid email address</span>',
                    icon: 'error',
                    confirmButtonText: 'Done',
                    background: '#252525',
                    customClass: {
                        title: 'swal-error-title',
                    }
                  })
            }
        }
      };

    useEffect(() => {
        const initialProjects = [...data];

        const sizeByProjectType = projects.reduce((acc, project) => {
            const type = project.projectType;
    
            if (!acc[type]) {
                acc[type] = 1;
            } else {
                acc[type]++;
            }
    
            return acc;

        }, {});
        setFilteredProjectsSize(sizeByProjectType);
        setFilteredProjects(initialProjects);
        setprojectFilter("All");
    }, []);

    const clickChangeProjectFilter = (type) => {
        setprojectFilter(type);
        
        let filteredProjects;

        if(type === 'All') {
            filteredProjects = projects;
        } else {
            filteredProjects = [...data.filter(item => item.projectType === type)];
        }

        setCurrentShowProjIndex(0);
        setProjectTranslateXValue(0);
        setFilteredProjects(filteredProjects);

    }
    
    const returnNumberFormat = (num) => {

        if(num < 10) {
            return '0' + num;
        } else {
            return num;
        }

    }

    const handlePrevClick = () => {
        
        if(currentShowProjIndex > 0) {
            setProjectTranslateXValue((projectTranslateXValue) => projectTranslateXValue + 100);
            setCurrentShowProjIndex(currentShowProjIndex-1);
        }
      };
    
      const handleNextClick = () => {
        if(currentShowProjIndex+4 < filteredProjects.length){
            setProjectTranslateXValue((projectTranslateXValue) => projectTranslateXValue - 100);
            setCurrentShowProjIndex(currentShowProjIndex+1);
        }
      };

    const projects = Array.from({ length: data.length }).map((_, index) => ({
        projectName: data[index].projectName,
        imgPath: data[index].imgPath,
        projectType: data[index].projectType,
        projectTags: data[index].projectTags,
        imgSlides: data[index].imgSlides,
    }));

    return(
        <div className='flex flex-col bg-black h-full'>
            <div className='flex bg-[#272727] w-full fixed items-center justify-center' style={{ zIndex: 2 }}>
                <NavBar/> 
            </div>
            <div id='home'>
                <div  className='items-center justify-center mt-32'>
                    <div className='flex flex-col items-center h-[750px] justify-center'
                    style={{
                        backgroundImage: 'url(/img/BG2.jpg)', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                    }}> 
                        <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-md">
                            <div className='flex text-white text-9xl font-sans font-bold tracking-widest'>
                                XSECTORZ
                            </div>
                            <div className='flex text-white text-2xl font-sans tracking-wider mt-4'>
                                GAME & WEB DEVELOPER
                            </div>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={2000}
                                className={`cursor-pointer mt-16 bg-transparent duration-500 hover:bg-[#FF0000] text-[#FF0000] text-2xl font-semibold hover:text-white py-3 px-14 border border-[#FF0000] hover:border-transparent rounded`}
                            >
                                CONTACT
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
            <div id='education' className='flex flex-col items-center justify-center mx-32'>
                <div className='flex flex-col mt-20'>
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
            </div>
            <div id='projects' className='flex flex-col h-full'>
                <div className='flex flex-row mt-20'>
                    <div className='flex flex-col w-4/6 mr'>
                        <div className='text-white font-san ml-[350px] font-bold text-8xl mr-[100px] '>
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
                    <div className={`relative flex font-sans font-bold text-base ml-4 ${[projectFilter !== 'All' ? 'cursor-pointer text-gray-500' : 'cursor-default text-[#CE1212]']}`} 
                    onClick={() => clickChangeProjectFilter("All")}>
                        <div className={`absolute top-[-8px] right-[-12px] font-sans font text-xs`}>{returnNumberFormat(projects.length)}</div>
                        All
                    </div>
                    <div className='text-gray-500 font-sans text-base ml-4 font-bold'> / </div>
                    <div className={`relative flex font-sans font-bold text-base ml-4 ${[projectFilter !== 'Game Development' ? 'cursor-pointer text-gray-500' : 'cursor-default text-[#CE1212]']}`}
                    onClick={() => clickChangeProjectFilter("Game Development")}>
                        <div className='absolute top-[-8px] right-[-12px] font-sans font text-xs'>{returnNumberFormat(filteredProjectsSize["Game Development"])}</div>
                        Game Development
                    </div>
                    <div className='text-gray-500 font-sans text-base ml-4 font-bold'> / </div>
                    <div className={`relative flex font-sans font-bold text-base ml-4 ${[projectFilter !== "Web Development" ? 'cursor-pointer text-gray-500' : 'cursor-default text-[#CE1212]']}`}
                    onClick={() => clickChangeProjectFilter("Web Development")}>
                        <div className='absolute top-[-8px] right-[-12px] font-sans font text-xs'>{returnNumberFormat(filteredProjectsSize["Web Development"])}</div>
                        Web Development
                    </div>
                    <div className='text-gray-500 font-sans text-base ml-4 font-bold'> / </div>
                    <div className={`relative flexfont-sans font-bold text-base ml-4 ${[projectFilter !== "App Development" ? 'cursor-pointer text-gray-500' : 'cursor-default text-[#CE1212]']}`}
                    onClick={() => clickChangeProjectFilter("App Development")}>
                        <div className='absolute top-[-8px] right-[-12px] font-sans font text-xs'>{returnNumberFormat(filteredProjectsSize["App Development"])}</div>
                        App Development
                    </div>
                </div>
            </div>
            <div className='flex h-[450px] w-full justify-center mt-5'>
                <div className='flex h-[400px] w-[1200px] relative p-5'>
                    
                    {/* Arrow */}
                    <button className=' absolute top-[50%] -translate-x-0 -translate-y-1/2 left-5 text-3xl p-2 text-white'
                    style={{ zIndex: 2 }} onClick={() => handlePrevClick()}>
                        <FaChevronLeft />
                    </button>
                    <button className=' absolute top-[50%] -translate-x-0 -translate-y-1/2 right-5 text-3xl p-2 text-white'
                    style={{ zIndex: 2 }} onClick={() => handleNextClick()}>
                        <FaChevronRight />
                    </button>
                    <div className={`flex w-full h-full bg-black py-5 overflow-hidden pl-5 ${filteredProjects.length < 4 ? 'justify-center' : 'justify-start'}`} style={{ zIndex: 1 }}>
                        {filteredProjects.map((project, index) => (
                            <div
                            key={index}
                            className='project-card'
                            style={{
                                transition: 'transform 0.3s ease-in-out',
                                transform: `translateX(${projectTranslateXValue}%)`
                            }}
                            >
                            <ProjectCard key={project.projectName} {...project} project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id='experience' className='flex flex-col h-full w-full bg-black'>
                <div className='flex flex-col mt-20'>
                    <div className='flex justify-center items-center text-white text-6xl font-sans font-bold'>
                        Experience
                    </div> 

                    <div className='flex flex-col items-center h-[380px] justify-center mt-10'
                    style={{
                        backgroundImage: 'url(/img/experience_bg.png)', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                    }}> 
                        <div className="w-full h-[450px] flex flex-col justify-center items-center backdrop-blur-lg cursor-pointer"
                        onMouseEnter={() => setIsHoverSiamcraft(true)}
                        onMouseLeave={() => setIsHoverSiamcraft(false)}>
                            <div className={`flex flex-row text-2xl font-sans tracking-wider font-bold mt-4 ${!isHoverSiamcraft ? 'text-white' : 'text-[#FF0000]'}`}>
                                <div className='flex items-center'>
                                    I AM 
                                </div>
                                <div className={`flex font-bold px-2 text-4xl items-end ${!isHoverSiamcraft ? 'text-[#FF0000]' : 'text-white'}`}>DEVELOPER</div>
                                <div className='flex items-center'>
                                    AT    
                                </div> 
                            </div>
                            <div className={`flex text-8xl font-sans font-bold tracking-widest ${isHoverSiamcraft ? ' text-white transition-transform transform scale-110 duration-500' : 'text-[#FF0000] transition-transform transform scale-100 duration-500'} cursor-pointer`}>
                                SIAMCRAFT.NET
                            </div>
                            <div className={`flex flex-row text-2xl font-sans tracking-wider mt-4 font-bold ${!isHoverSiamcraft ? 'text-white' : 'text-[#FF0000]'}`}>
                                <div className='flex items-center'>
                                    MORE THAN
                                </div>
                                <div className={`flex font-bold px-2 text-4xl items-end ${!isHoverSiamcraft ? 'text-[#FF0000]' : 'text-white'}`}>2</div>
                                <div className='flex items-center'>
                                    YEARS   
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row bg-black  h-[600px]'>
                        <div className='flex flex-col w-1/2 h-full pl-32 justify-center'>
                            <div className='flex flex-row text-white font-sans font-bold text-3xl'>
                                <div className='flex items-center pt-1 text-[#FF0000]'>
                                    <FaLaptopCode />
                                </div>
                                <div className='flex items-center pl-2'>
                                    What's I Do?
                                </div>
                            </div>
                            <div className='flex flex-col text-gray-400 font-sans font-bold text-lg mt-5'>
                                <div className='flex'>
                                    I am the developer of most of the server systems in siamcraft<br/> to provide a good experience for more than 200 players.
                                    <br/><br/>
                                    Recently I have implemented an implementation of Jedis (Redis)<br/> to allow the game server to support more players.<br/> This is one of my achievements that I am very proud of.
                                    <br/><br/>
                                    The system that I have created is There are so many project names that start with XS
                                    <br/> 
                                </div>
                                <div className='flex flex-row'>
                                    <div className='flex'>
                                        which is my alias, such as 
                                    </div>
                                    <div className=' pl-2 flex hover:text-[#FF0000] text-white italic cursor-pointer'>
                                        XSEvent
                                    </div>
                                    <div className='flex'>
                                        ,
                                    </div>
                                    <div className=' pl-2 flex hover:text-[#FF0000] text-white italic cursor-pointer'>
                                        XSCasino
                                    </div>
                                    <div className='flex'>
                                        ,
                                    </div>
                                    <div className=' pl-2 flex hover:text-[#FF0000] text-white italic cursor-pointer'>
                                        XShop
                                    </div>
                                    <div className='flex pl-2'>
                                        and
                                    </div>
                                    <div className=' pl-2 flex hover:text-[#FF0000] text-white italic cursor-pointer'>
                                        more...
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-1/2 h-full p-5'>
                            <div className='flex flex-col w-full h-full'>
                                <div className='flex flex-row h-[400px] w-full'>
                                    <div className='flex h-full w-4/6 rounded-lg mx-2 my-2' style={{
                                        backgroundImage: 'url(/img/siam_2.jpg)', 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                    }}/>
                                    <div className='flex flex-col h-full w-1/2'>
                                        <div className='flex h-1/2 w-full bg-cyan-500 rounded-lg mx-2 mt-6'
                                        style={{
                                            backgroundImage: 'url(/img/siam_3.jpg)', 
                                            backgroundSize: 'cover', 
                                            backgroundPosition: 'center',
                                        }}/>
                                        <div className='flex h-1/2 w-full bg-indigo-800 rounded-lg mx-2 mt-6'
                                        style={{
                                            backgroundImage: 'url(/img/siam_7.jpg)', 
                                            backgroundSize: 'cover', 
                                            backgroundPosition: 'center',
                                        }}/>
                                    </div>
                                </div>
                                <div className='flex flex-row h-[200px] w-full'>
                                    <div className='flex h-full w-1/4 bg-indigo-800 rounded-lg mt-6 mx-2'
                                    style={{
                                        backgroundImage: 'url(/img/siam_4.jpg)', 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                    }}/>
                                    <div className='flex h-full w-1/2 bg-purple-400 rounded-lg mx-2 mt-6'
                                    style={{
                                        backgroundImage: 'url(/img/siam_5.jpg)', 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                    }}/>
                                    <div className='flex h-full w-1/2 bg-orange-700 rounded-lg mx-2 mt-6'
                                    style={{
                                        backgroundImage: 'url(/img/siam_6.jpg)', 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='contact' className='flex flex-col h-full bg-black pt-20 justify-center items-center'>
                <div className='flex flex-col w-[550px]'>
                    <div className='flex text-white text-6xl justify-center font-sans font-bold w-full'>
                            Contact Me
                    </div>
                    <div className='flex items-center pt-10 font-sans text-lg font-semibold text-gray-400'>
                        Have a question or want to work together?<br/> Leave your details and I'll get back to you as soon as possible.
                    </div>
                    <div className='flex flex-col pt-10'>
                        <input
                            className="rounded px-3 bg-[#282828] border-transparent focus:border-none focus:border-transparent outline-none w-full text-white py-2"
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />     
                    </div>
                    <div className='flex pt-2'>
                        <input
                            className="rounded px-3 bg-[#282828] border-transparent focus:border-none focus:border-transparent outline-none w-full text-white py-2"
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />     
                    </div>
                    <div className='flex pt-2'>
                        <textarea
                            className="rounded px-3 bg-[#282828] border-transparent focus:border-none focus:border-transparent outline-none w-full text-white py-2"
                            type="text"
                            placeholder="Message"
                            style={{
                                maxHeight: '140px', 
                                overflowY: 'auto',
                                resize: 'none',
                              }}
                              onChange={(e) => setMessage(e.target.value)}
                        />     
                    </div>
                    <div className='flex flex-row justify-between pt-2 text-white'>
                            <div className='flex'>
                              
                            </div>
                            <div className='flex font-sans text-lg font-bold border-b-4 border-[#ff4d5a] text-white hover:border-white items-center justify-center w-20 hover:text-[#ff4d5a] cursor-pointer hover:duration-300 duration-300'
                            onClick={sendEmail}>
                              SUBMIT
                            </div>
                    </div>
                </div>
            </div>
            <div className=' relative flex flex-col h-40 bg-[#282828] mt-20 justify-center items-center w-full'>
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={2000}
                    className={`absolute flex text-white text-4xl top-[-20px] bg-[#ff4d5a] animate-bounce-on-hover-v2 cursor-pointer`}
                >
                    <MdOutlineKeyboardDoubleArrowUp />
                </ScrollLink>
                <div className='flex'>
                    <BottomNavBar/>
                </div>
            </div>
        </div>
    );
}