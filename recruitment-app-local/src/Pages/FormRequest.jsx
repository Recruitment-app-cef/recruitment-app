import React from "react";
import UserRequestComponent from '../Components/UserRequestComponent/UserRequestComponent'

function FormRequest(props){
    var data = props.data

    return <UserRequestComponent requestData={data}/>
}

export default FormRequest