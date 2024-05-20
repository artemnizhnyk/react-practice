import "./app-info.css"

const AppInfo = ({data}) => {
    return (
        <div className="app-info">
        <h1>Accounting of employees in AnyCompany</h1>
        <h2>Total number of employees: {data.length}</h2>
        <h2>Number of employees will get the prize:
            {data.filter(employee=>employee.isToPrize).length}
        </h2>
    </div>
    );
}

export default AppInfo;