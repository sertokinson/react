class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({counter: ++this.state.counter})}/>
                <Text counter={this.state.counter}/>
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}>
                Click
            </button>
        )
    }
}

class Text extends React.Component {
    render() {
        return (
            <h1>counter: {this.props.counter}</h1>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('content'));