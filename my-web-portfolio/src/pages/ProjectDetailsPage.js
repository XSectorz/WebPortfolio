import React, {useEffect,useState } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import NavBar from "../components/navbar";
import data from "../data/projectListData";

export default function ProjectDetails() {
    const navigate = useNavigate();
    
    const location = useLocation();
    const [dataTags,setDataTags] = useState([]);

    const dataPass = location.state;

    useEffect(() => {

        /*console.log("Loc " ,location);
        console.log("Proj ", dataPass.project.projectName);*/
        console.log("Loc " ,location);
        const isProjectValid = data.some(projects => projects.projectName === dataPass.project.projectName);

        if (!isProjectValid) {
            navigate('/PageNotFound');
        } else {
            dataPass.project.projectTags.split(',').forEach(element => {
                console.log(element);
            });
        }
          
    },[navigate]);

    return( 
        <div className='flex flex-col bg-black h-full'>
            <div className='flex bg-[#272727] w-full fixed items-center justify-center' style={{ zIndex: 2 }}>
                <NavBar/> 
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
                        {dataPass.project.projectName}
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="flex text-white text-6xl font-sans font-bold">
                        {dataPass.project.projectName}
                    </div>
                </div>
                <div className="flex flex-row mt-8 h-full w-full">
                    <div className='flex h-full w-1/3 items-start'>
                        <div className='flex h-[450px] w-[600px] rounded-lg mx-2'
                            style={{
                            backgroundImage: 'url(/img/siam_6.jpg)', 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                        }}/>
                    </div>
                    <div className='flex w-5/12 text-white font-sans font-semibold text-lg ml-16'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ex diam, nec elementum tellus porta et. In hac habitasse platea dictumst. Praesent a consectetur nulla. Curabitur mattis ipsum felis, non suscipit nunc pretium in. Integer id orci non ex interdum consequat in tincidunt dolor. Aenean ante ante, iaculis at vehicula vel, porta sit amet nibh. Aliquam in odio ornare, convallis lorem id, lacinia metus.

                        Quisque tincidunt ex vehicula risus rutrum, nec imperdiet magna sollicitudin. Donec faucibus fringilla vssim sed eros id, varius dignissim nibh. Phasellus porta, quam non auctor vestibulum, leo ex condimentum ligula, nec sodales diam odio eget est. Proin a lectus lobortis, mollis magna sed, luctus mauris. Nulla est dui, ornare sit amet nisi a, consectetur laoreet orci. Fusce tempor viverra lorem at pretium.
                    </div>
                </div>
            </div>
        </div>
    );
}