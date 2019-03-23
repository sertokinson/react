class HelloWorld extends  React.Component{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}



ReactDOM.render(
    <HelloWorld name={'Sergey'}/>,
    document.getElementById('content')
);