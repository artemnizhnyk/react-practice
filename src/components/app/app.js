import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employee-add-form/employee-add-form";

function App() {
    const data = [
        {id: 1, name: "Artem", salary: 800, isToIncrease: true, isStared: false},
        {id: 2, name: "Daniel", salary: 1000, isToIncrease: false, isStared: false},
        {id: 3, name: "Eugene", salary: 700, isToIncrease: true, isStared: false}
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