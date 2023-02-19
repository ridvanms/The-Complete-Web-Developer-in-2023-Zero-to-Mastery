import React from "react";
import './Rank.css'

const Rank = () => {
    const name = "Maho"
    let rank = 0
    return (
        <div>
            <div className={`white f3`}>
                {`${name} your rank is `}
            </div>
            <div className={`white f1`}>
                {`#${rank}`}
            </div>
        </div>
    )
}
export default Rank;