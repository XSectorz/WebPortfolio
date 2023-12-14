import React from "react";

export default function TypeItems({projectTypes}) {

    return(
        <div className="flex mr-2">
            <div className=" bg-[#282828] text-white font-sans font-semibold rounded-full p-[6px]">
                {projectTypes}
            </div>
        </div>
    )
}