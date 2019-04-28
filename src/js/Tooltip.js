class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.toggle=this.toggle.bind(this)
    }

    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this);
        this.setState({
            visible: !this.state.visible,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft,
        })
    }


    render() {
        const style = {
            zIndex: this.state.visible ? 1 : -1,
            opacity: +this.state.visible,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        };
        return (
            <div style={{display: 'inline'}}>
                <span onMouseOut={this.toggle} onMouseEnter={this.toggle} style={{color: 'blue'}}>
                    {this.props.children}
                </span>
                <div className={'tooltip bottom'} style={style}>
                    <div className={'tooltip-arrow'}/>
                    <div className={'tooltip-inner'}>{this.props.text}</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        Навидите -> <Tooltip text={'whats a fuck!'}>сюда</Tooltip>
    </div>,
    document.getElementById('content')
);