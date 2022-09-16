import React from "react";

const AlertMessage =  ({alertText, idMessage}) => {
    return (
        <p id={idMessage}> {alertText} </p>
    )
}

export default AlertMessage;