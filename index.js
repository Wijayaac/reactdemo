class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            count: 0
        }
        this._start = this._start.bind(this);
        this._stop = this._stop.bind(this);
    }
    _start() {
        let { count } = this.state;
        this.countId = setInterval(() => {
            count = count + 1;
            this.setState({ count: count });
        }, 1000);
        this.setState({ isStarted: true });
    }
    _stop() {
        clearInterval(this.countId);
        this.setState({ count: 0, isStarted: false });
    }
    render() {
        return (
            <div>
                <h1>My Time</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this._start} disabled={this.state.isStarted}>Start</button>
                <button onClick={this._stop}>Stop</button>
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById("root"));