class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
        this._handleChange = this._handleChange.bind(this);
    }
    _handleChange(e) {
        this.setState({ data: e.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this._handleChange}></input>
                <h2>{this.state.data}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById("root"));