import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onSwitchProp}) => {
    const employeesListItems = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id}
                               {...itemProps}
                               onDelete={() => onDelete(id)}
                               onSwitchProp={(e) => onSwitchProp(id,
                                   e.currentTarget.getAttribute("data-switch"))}
            />
        );
    });

    return (
        <ul className="app-list list-group">
            {employeesListItems}
        </ul>
    );
};

export default EmployeesList;