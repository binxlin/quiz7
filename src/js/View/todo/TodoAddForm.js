import React from 'react';
class TodoAddForm extends React.Component {
        constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }
      componentDidMount() {
        this.refs.itemName.focus();
      }
      onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;
        
        if(newItemValue) {
          this.props.addItem({newItemValue});
          this.refs.form.reset();
        }
      }
      render () {
        return (
          <form ref="form" onSubmit={this.onSubmit} className="form-inline">
            <input type="text" ref="itemName" className="form-control" placeholder="今天還想做些什麼><"/>
            <button type="submit" className="btn btn-default">新增</button> 
          </form>
        );   
      }
}
export default TodoAddForm