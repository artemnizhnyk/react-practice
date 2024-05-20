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
                {id: 1, name: "Artem", salary: 800, isToIncrease: true, isStared: false},
                {id: 2, name: "Daniel", salary: 1000, isToIncrease: false, isStared: false},
                {id: 3, name: "Eugene", salary: 700, isToIncrease: true, isStared: false}
            ]
        };
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    };

    render() {
        return (<div className={'app'}>
            <AppInfo/>

            <div className={'search-panel'}>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={this.state.data}
                           onDelete={this.onDelete}/>

            <EmployeeAddForm/>

        </div>);
    }
}

export default App;