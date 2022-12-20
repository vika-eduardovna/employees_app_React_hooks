import EmployeesListItem from "../employees-list-item"
import './employees-list.css'

const EmployeesList = ({ data, onDelete }) => {
    return (
        <ul className="app-list list-group">
            {
                data.map(elem => <EmployeesListItem
                    key={elem.id} {...elem}
                    onDelete={onDelete} />)
            }
        </ul>
    )
}

export default EmployeesList