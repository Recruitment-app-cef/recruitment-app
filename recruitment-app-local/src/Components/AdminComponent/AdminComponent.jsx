import UplineComponent from '../../Utils/UplineComponent/UplineComponent';
import './AdminComponent.css'
import MenuComponent from './MenuComponent/MenuComponent';

function AdminComponent(){
    return(
        <div className='adminComponent'>
            <UplineComponent/>
            <MenuComponent/>
            <section className='requestSection'>
                <article className='searchResults'>
                    <h3>Resultados de búsqueda</h3>
                    <p>Estado: sin aceptar</p>
                    <p>Ciclo: ####</p>
                    <p>Contratación: lorem ipsum</p>
                    <p>Resultados encontrados: ####</p>
                </article>
                <div className='requestListSection'>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                    <section>Admin</section>
                </div>
                <p>UCA (CEF) Sistema de Reclutamiento de Personal ® Derechos reservados</p>
            </section>
        </div>
    )
}

export default AdminComponent;