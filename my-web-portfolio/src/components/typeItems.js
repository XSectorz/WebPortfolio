import React from "react";

export default function TypeItems({projectTypes}) {

    return(
        <div className="flex mr-2">
            <div className=" bg-[#282828] text-white font-sans font-semibold text-sm rounded-full p-[5px]">
                {projectTypes}
            </div>
        </div>
    )
}