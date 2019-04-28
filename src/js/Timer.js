class TimerDisplay extends React.Component {
    render() {

        if(this.props.time===0)
            document.getElementById('end').play();
        return <div>
            <h2>Осталось: {this.props.time}</h2>
        </div>
    }

}

class Button extends React.Component {
    handleTimer() {
        const {onClick, time} = this.props;
        return onClick(time)
    }

    render() {
        return <button onClick={this.handleTimer.bind(this)}>{this.props.children}</button>
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.timer = this.timer.bind(this);
        this.state = {
            time: null,
            timer: null
        }
    }

    timer(time) {
        clearInterval(this.state.timer);
        document.getElementById('end').pause();
        document.getElementById('end').currentTime = 0;
        let timer = setInterval(() => {
            let timeLeft = this.state.time - 1;
            if (timeLeft === 0)
                clearInterval(timer);
            this.setState({
                time: timeLeft
            });
        }, 1000);
        return this.setState({time, timer})
    }

    render() {

        return <div>
            <h1>Таймер</h1>
            <Button time="5" onClick={this.timer}>5 секунд</Button>
            <Button time="10" onClick={this.timer}>10 секунд</Button>
            <TimerDisplay time={this.state.time}/>
            <audio id="end" preload="auto" src="media/5ive - Everybody Get Up.mp3"/>
        </div>
    }
}

ReactDOM.render(
    <Timer/>,
    document.getElementById('content')
);