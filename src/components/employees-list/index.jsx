import EmployeesListItem from "../employees-list-item"
import './employees-list.css'

const EmployeesList = ({data}) => {
    return (
        <ul className="app-list list-group">
            {
                data.map(elem => <EmployeesListItem key={elem.id} {...elem}/>)
            }
        </ul>
    )
}

export default EmployeesList