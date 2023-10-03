import React from "react";
import FormInstructors from "../Components/FormInstructors/FormInstructors";

function FormInscriptions(props) {

    function onExtractData(data, date){
        var filterArray = data.filter( (item) => {
            if(item.identifier != date.identifier){
                return item
            }
        })
        data = [...filterArray, date]
        props.onExtract(data)
    }

    return <FormInstructors onExtract={onExtractData}/>
}

export default FormInscriptions;