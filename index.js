class Person {
    constructor(name) {
        this.name = name;

    }
    getName() {
        return this.name;
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            persons: []
        }
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleChange(e) {
        this.setState({ name: e.target.value });
    }
    _handleSubmit(e) {
        let { name, persons } = this.state;
        persons.push(new Person(name));
        this.setState({ persons: persons, name: "" })
        e.preventDefault();

    }
    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this._handleChange} />
                    <input type="submit" value="Save" />
                </form>
                <ul>
                    {this.state.persons.map(person => {
                        return <li>{person.getName()}</li>
                    })}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById("root"));