class Btn extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true };

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        // bind1:使用 bind() 函数改变 this 的上下文
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       this.setState({
           isToggleOn : !this.state.isToggleOn
       })
       // prevState 是框架自动保存
        /*  this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));  */

    }

    render() {
        return (
            // bind3:在具体使用该函数的地方绑定this的上下文到实例对象
            <button onClick={this.handleClick.bind(this)}>
                  {this.state.isToggleOn ? 'ON' : 'OFF'}
              </button>
              // bind2:es6的箭头函数
           /*  <button onClick={() => this.handleClick()}>
                  {this.state.isToggleOn ? 'ON' : 'OFF'}
              </button> */
              // bind1
            /*   <button onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'ON' : 'OFF'}
              </button>  */
        )
    }
}


ReactDOM.render(
    <Btn />,
    document.getElementById("btnReact")
); 