class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        console.log("constructor");
    }

    componentDidMount() {
        /* this.timerID = setInterval(
            () => this.tick(),
            1000
        ); */
        let that = this;
        this.timerID = setInterval(function(){
            return that.tick();
        },1000);
        console.log("挂载");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("卸载");
    }

    tick() {
        this.setState({
            date: new Date()
        });
        console.log("tick");
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}

ReactDOM.render(
    <Clock />,
    document.getElementById('example')
);