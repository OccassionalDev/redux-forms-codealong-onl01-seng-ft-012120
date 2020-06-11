import React, { Component } from 'react'
 
class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={ this.handleChange }value={ this.state.text }/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
 
export default connect(null, mapDispatchToProps)(CreateTodo);