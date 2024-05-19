import "./search-panel.css";

const SearchPanel = () => {
    return (
        <input className={"form-control"}
               placeholder={"Find an employee"}
               type={"text"}/>
    );
};

export default SearchPanel;