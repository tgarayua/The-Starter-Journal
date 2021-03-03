import React from "react";
import GratitudeCard from "./GratitudeCard";

function GratitudeList({ gratitude_list }) {

    return(
        <div className="list-gratitude">
            <h3>GratitudeList</h3>
            <ul>
                {gratitude_list?.map(gratitude_item => {
                    return <GratitudeCard 
                        key={gratitude_item.id} 
                        gratitude_item={gratitude_item}
                    />
                })}
            </ul>
        </div>
    )
}

export default GratitudeList;