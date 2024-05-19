import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data}) => {
    const employeesListItems = data.map(item => {
        return (
            <EmployeesListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {employeesListItems}
        </ul>
    );
}

export default EmployeesList;