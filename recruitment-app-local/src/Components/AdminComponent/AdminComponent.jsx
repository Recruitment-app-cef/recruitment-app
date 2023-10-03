import UplineComponent from '../../Utils/UplineComponent/UplineComponent';
import './AdminComponent.css'
import MenuComponent from './MenuComponent/MenuComponent';
import NoneRender from '../../Utils/NoneRender/NoneRender'
import RequestComponent from './RequestComponent/RequestComponent';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';

function AdminComponent(){

    const requests = [
        <RequestComponent/>,
        <RequestComponent/>,
        <RequestComponent/>,
        <RequestComponent/>
    ]

    const navigate = useNavigate();

    function noneRenderRequest(){
        if(requests.length == 0){
            return <NoneRender/>
        }else{
            return requests
        }   
    }

    function returnPage(){
        swal.fire({
            title: 'Volver a la página anterior?',
            showDenyButton: true,
            confirmButtonText: 'Regresar',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate("/recruitment");
            }
          })
    }

    return(
        <div className='adminComponent'>
            <UplineComponent/>
            <MenuComponent/>
            <section className='requestSection'>
                <button className='buttonExit' onClick={returnPage}>Salir</button>
                <article className='searchResults'>
                    <h3>Resultados de búsqueda</h3>
                    <p>Estado: sin aceptar</p>
                    <p>Ciclo: ####</p>
                    <p>Contratación: lorem ipsum</p>
                    <p>Resultados encontrados: ####</p>
                </article>
                <div className='requestListSection'>
                    {noneRenderRequest()}
                </div>
                <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
            </section>
        </div>
    )
}

export default AdminComponent;