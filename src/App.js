import './App.css';
import {Component} from "react";

const Header = () => {
    return <h2>Hello world</h2>;
};

// const Field = () => {
//     const holder = `Enter here`;
//     const fieldStyles = {
//         width: `300px`
//     };
//     return <input style={fieldStyles}
//                   placeholder={holder}
//                   type="text"/>;
// };

class Field extends Component {
    render() {
        const holder = `Enter here`;
        const fieldStyles = {
            width: `800px`
        };
        return <input style={fieldStyles}
                      placeholder={holder}
                      type="text"/>;
    }
}

function Btn() {
    const text = `Log in`;
    const logged = false;
    // const res = () => {
    //     return `Log in`
    // }
    // const p = <p>{res()}</p>
    return <button>{logged ? `Enter` : text}</button>;
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <Btn/>
        </div>
    );
}

export {Header};
export default App;