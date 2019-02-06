var BlueCounter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
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
        return React.createElement('div', {className: 'blue'},
            React.createElement('button', {onClick: this.increment}, 'Add'),
            React.createElement('button', {onClick: this.decrement}, 'Reduce'),
            React.createElement('div', {}, 'Licznik ' + this.state.counter)
        );
    }
});