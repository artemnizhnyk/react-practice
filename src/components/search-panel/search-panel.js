import "./search-panel.css";
import {Component} from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    onSearchInputChange = (e) => {
        const query = e.target.value;
        this.setState({query});
        this.props.onUpdateSearch(query)
    };

    render() {
        const {query} = this.state;

        return (
            <input className={"form-control"}
                   placeholder="Find an employee"
                   type="text"
                   name="query"
                   value={query}
                   onChange={this.onSearchInputChange}/>
        );
    }
}

export default SearchPanel;