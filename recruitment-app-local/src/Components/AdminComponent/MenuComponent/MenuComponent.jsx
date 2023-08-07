import './MenuComponent.css'
import React from 'react'
import SearcherComponent from './SearcherComponent/SearcherComponent'
import Subjectsearch from './SubjectSearch/Subjectsearch'
import OptionsComponent from './OptionsComponent/OptionsComponent'

function MenuComponent(){

    const options = [
        {
            id: 1,
            title: 'Contratación:',
            options: ['Remunerado','Por Servicio Social','Ambas']
        },
        {
            id:2,
            title: 'Ciclo:',
            options: ['Enero - Junio 2021','Agosto - Diciembre 2021']
        },
        {
            id:3,
            title: 'Estado:',
            options: ['Aceptados','Rechazados', 'Todos']
        }
    ]

    return(
        <div className='menuComponent'>
            <h3>Búsqueda</h3>
            <SearcherComponent/>
            <div className='searchSpecifications'>
                <section className='priorityAndButtonsSection'>
                    <Subjectsearch/>
                    <button>Generar PDF</button>
                    <div className='buttonsSearch'>
                        <button>Buscar</button>
                        <button>Limpiar</button>
                    </div>
                </section>
                <section className='selectsContainer'>
                    {
                        options.map((op)=>{
                            return <OptionsComponent key={`${op.id}_item`} title={op.title} options={op.options}/>
                        })
                    }
                </section>
            </div>
        </div>
    )
}

export default MenuComponent