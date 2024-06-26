import "./employee-add-form.css";
import {Component} from "react";

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.salary) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            });
        }
    };

    render() {
        const {name, salary} = this.state;

        return (<>
                <div className="app-add-form">
                    <h3>Add new employee</h3>
                    <form className="add-form d-flex"
                          onSubmit={this.onSubmit}>
                        <input type="text"
                               minLength="3"
                               maxLength="20"
                               className="form-control new-post-label"
                               placeholder="Name?"
                               name="name"
                               value={name}
                               onChange={this.onValueChange}/>
                        <input type="number"
                               min="100"
                               max="30000"
                               className="form-control new-post-label"
                               placeholder="Salary in $?"
                               name="salary"
                               value={salary}
                               onChange={this.onValueChange}/>

                        <button type="submit"
                                className="btn btn-outline-light">Add
                        </button>
                    </form>
                </div>
            </>);
    }
}

export default EmployeeAddForm;