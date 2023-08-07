import './SearcherComponent.css'
import {BiSearch} from 'react-icons/bi'

function SearcherComponent(){
    return(
        <div className='searcherComponent'>
            <input type='text' placeholder='Ej: 00009919 ó Mireya'/>
            <BiSearch className='searchIcon'/>
        </div>
    )
}

export default SearcherComponent;