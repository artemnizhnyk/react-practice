import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: "Artem", salary: 800, isToPrize: true, isStared: true},
                {id: 2, name: "Daniel", salary: 1000, isToPrize: false, isStared: false},
                {id: 3, name: "Eugene", salary: 700, isToPrize: true, isStared: false}
            ]
        };
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            };
        });
    };

    onAdd = (name, salary) => {
        const newEmployee = {
            id: this.state.data.length + 1,
            name,
            salary,
            isToPrize: false,
            isStared: false
        };

        this.setState(({data}) => ({data: [...data, newEmployee]}));
    };

    onSwitchProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(employee => {
                if (employee.id === id) {
                    return {...employee, [prop]: !employee[prop]};
                }
                return employee;
            })
        }));
    };

    render() {
        return (<div className={'app'}>
            <AppInfo data={this.state.data}/>

            <div className={'search-panel'}>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={this.state.data}
                           onDelete={this.onDelete}
                           onSwitchProp={this.onSwitchProp}
                           />

            <EmployeeAddForm onAdd={this.onAdd}/>

        </div>);
    }
}

export default App;