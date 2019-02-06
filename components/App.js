var Counter = React.createClass({
    getDefaultProps(){
      console.log('component is getting default props')
    },
    getInitialState: function() {
        return {
            counter: 0,

        };
    },

    componentWillMount() {
       console.log('component is going to mount')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('button', {onClick: this.increment}, 'Add'),
            React.createElement('button', {onClick: this.decrement}, 'Reduce'),
            React.createElement('div', {}, 'Licznik ' + this.state.counter),
            React.createElement(BlueCounter, {}, ),
        );
    },
    componentDidMount(){
      console.log('component already mounted')
    },
    componentWillUpdate(){
      console.log('component is going to update')
    },
    componentDidUpdate(){
      console.log('component already updated')
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));