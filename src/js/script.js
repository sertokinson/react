class HelloWorld extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: (new Date).toLocaleTimeString()
        };

    }
    componentDidMount(){
        this.updateTime();
    }

    updateTime() {
        let interval = setInterval(() => {
            this.setState({
                time: (new Date).toLocaleTimeString()
            })
        }, 1000);
        this.setState({interval})
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                <p>Осталось: {this.props.second}</p>
            </div>
        )
    }
}


let second = 5;
setInterval(() => {
    if (second === 0) {
        ReactDOM.render(
            <div>
                <p>Clock has been removed!</p>
            </div>,
            document.getElementById('content')
        )
    }
    else {
        ReactDOM.render(
            <Clock second={second}/>,
            document.getElementById('content')
        );
        second -= 1;
    }
}, 1000);
