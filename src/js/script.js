class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            null,
            'Hello ',
            this.props.name
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, { name: 'Sergey' }), document.getElementById('content'));
