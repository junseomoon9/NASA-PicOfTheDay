import React from 'react'

const LeftRightButtons = ({updateDateLeftArrowButton, updateDateRightArrowButton, date}) => {

    const previousDateString = "<- Previous Date";
    const nextDateString = "Next Date ->";
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/")
    const datenow = `${year}-${month}-${day}`

    return (
        <div className="left-right">
            <button type="button" id="btn-left" onClick={updateDateLeftArrowButton}> {previousDateString} </button>
            <button type="button" id="btn-right" onClick={updateDateRightArrowButton} disabled={date === datenow}> {nextDateString} </button>
        </div>
    )
}

export default LeftRightButtons;