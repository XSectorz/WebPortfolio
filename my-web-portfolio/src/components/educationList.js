import React from "react";

const EducationInfo = ({position,website,description,information,imgPath,imgAlt,typeInfo}) => {

    const openClickType = () => {

        if(typeInfo === "KMITL") {
            window.open('https://www.kmitl.ac.th/');
        } else {
            window.open('https://sing.ac.th/web/');
        }
    };

    return(
    <div className={`flex flex-row w-full mt-6 bg-[#3B0000] rounded-xl`}>
        <div className='flex flex-col mt-6 lg:w-3/4 w-full'>
            <div className='flex flex-row'>
                <i className='fas fa-map-marker-alt text-[#FF0000] ml-5 text-xl'> </i>
                <div className='flex ml-2 text-gray-400 font-sans font-semibold'>
                    {position}
                </div>
                <button className='flex ml-2 text-gray-400 font-sans font-semibold hover:text-[#FF0000]' onClick={openClickType}>
                    <i className='fas fa-external-link-square-alt text-[#FF0000] ml-5 text-xl items-center'></i>
                    <div className='flex ml-2'>
                        {website}
                    </div>
                </button>
            </div>
            <div className=' text-white mx-5 mt-2 font-sans font-medium'>
                {description}
            </div>
            <div className='flex flex-row'>
                <div className='text-gray-300 mt-5 py-1 px-3 items-center font-sans font-medium rounded-3xl ml-5 bg-[#BE3144]'>
                    {information}
                </div>
            </div>
        </div>
        <div className='lg:flex h-[150px] w-[150px] items-center mt-8 ml-4 justify-end hidden'>
            <img className='h-[150px] w-[150px]' src={imgPath} alt={imgAlt}></img>
        </div>
    </div>
    );
}

export default EducationInfo;