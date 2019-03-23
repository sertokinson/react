class HelloWorld extends  React.Component{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time:(new Date).toLocaleTimeString()
        };
        this.updateTime();
    }
    updateTime(){
        setInterval(()=>{
            this.setState({
                time:(new Date).toLocaleTimeString()
            })
        },1000)
    }
    render(){
        return <h1>{this.state.time}</h1>
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('content')
);