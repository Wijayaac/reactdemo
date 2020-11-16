class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
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