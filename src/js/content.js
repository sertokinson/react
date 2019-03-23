class HelloWorld extends React.Component {
    render() {
        return React.createElement('h1',null,`Hello ${this.props.name}!`)
    }
}


ReactDOM.render(
    React.createElement('div', null,
        React.createElement(HelloWorld, {id: '1', name: 'Oleg'}),
        React.createElement(HelloWorld, {id: '2', name: 'Sergey'}),

    )
    , document.getElementById('content'));