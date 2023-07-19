import InputComponent from './InputComponent/InputComponent'
import './UserComponent.css'
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function UserComponent(){

    const navigate = useNavigate();

    function onClickButton(e){
        e.preventDefault();

        swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'acces granted',
            showConfirmButton: false,
            timer: 1000
          })

        navigate("/recruitment/grant");
    }

    return(
        <form className='formUserSystem'>
            <div className='inputsFormSystem'>
                <InputComponent title="Username:" placeholder="Ej: @username"/>
                <InputComponent title="Password:" placeholder=""/>
            </div>
            <button onClick={onClickButton}>Login</button>
        </form>
    )
}

export default UserComponent