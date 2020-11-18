class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleColor: 'blue'
        };
        this._changeColor = this._changeColor.bind(this);
    }

    _changeColor() {
        let { titleColor } = this.state;
        if (titleColor === 'blue') {
            this.setState({ titleColor: 'red' });
        } else {
            this.setState({ titleColor: 'blue' });
        }
    }
    render() {
        return (
            <div>
                <button onClick={this._changeColor}>Ganti Warna</button>
                <h1 style={{ color: this.state.titleColor }}>{this.props.title}</h1>
                <span>{this.props.subTitle}</span>
            </div>
        );
    }
}
class Container extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p> Welcome to Our Tutorial</p>
                <p> Free Tutorial Coursee</p>
            </div>);
    }
}
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<span> copyright by wijaya</span>);
    }
}
class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header title="Kadek Wijaya" subTitle="Tutorial React" />
                <Container />
                <Footer />
            </div>);
    }
}

ReactDOM.render(<Page />, document.getElementById("root"));