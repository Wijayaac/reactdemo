class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let { data } = this.state;
        data++;
        this.setState({ data: data });
    }


    render() {
        return (
            <div>
                <h1>React JS Child event</h1>
                <Child handleClick={this.handleClick} data={this.state.data} />
            </div>
        );
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>
                    Click Me
                 </button>
                <h2>
                    {this.props.data}
                </h2>
            </div>
        );
    }
}

ReactDOM.render(<Parent />, document.getElementById("root"));