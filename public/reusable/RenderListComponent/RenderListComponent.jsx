import './RenderListComponent.css'

function RenderListComponent(props) {

    var list = props.items

    function renderItemsList() {
        if (list.length == 0 || list == undefined || list == []) {
            console.log('lista vacía')
        } else if (list.length == 1) {
            return <li key={`${list[0]}-item`}>{list[0]}</li>
        }
        else {
            return list.map((item) =>
                <li key={item}>- {item}</li>
            )
        }
    }

    return (
        <div className='listDiv'>
            <p>{props.text}</p>
            <ul className='listComponent'>
                {renderItemsList()}
            </ul>
        </div>
    )
}

export default RenderListComponent