import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

function App() {
    const data = [
        {name: "Artem", salary: 800, toIncrease: true},
        {name: "Daniel", salary: 1000, toIncrease: false},
        {name: "Eugene", salary: 700, toIncrease: true}
    ];

    return (<div className={'app'}>
        <AppInfo/>

        <div className={'search-panel'}>
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList data={data}/>

        <EmployeeAddForm/>

    </div>);
}

export default App;