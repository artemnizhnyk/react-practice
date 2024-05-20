import "./employees-list-item.css";
import {Component} from "react";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToIncrease: this.props.isToIncrease,
            isStared: this.props.isStared
        };
    }

    switchIsToIncrease = () => {
        this.setState(({isToIncrease}) => ({
            isToIncrease: !isToIncrease
        }));
    };

    switchIsStared = () => {
        this.setState(({isStared}) => ({
            isStared: !isStared
        }));
    };


    render() {
        const {name, salary, onDelete} = this.props;
        const {isToIncrease, isStared} = this.state;

        let liClassNames = "list-group-item d-flex justify-content-between";
        if (isToIncrease) {
            liClassNames += " increase";
        }
        if (isStared) {
            liClassNames += " like";
        }

        return (
            <li className={liClassNames}>
                <span className="list-group-item-label"
                      onClick={this.switchIsStared}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.switchIsToIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;