import React from "react";

const Option = ({valueOption, textOption,}) => {
    return (
        <option value={valueOption}
        // Si tiene la clase li 
        > {textOption} </option>
    )
}

export default Option;