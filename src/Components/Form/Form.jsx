import React from 'react'
import Button from '../Button/Button'

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      body: '',
    }

    this.handleChange  = this.handleChange.bind(this)
    this.sendBodyToParent = this.sendBodyToParent.bind(this)
  }

  handleChange(event){
    const field = event.target.name;
    this.setState({
      [field]: this.state.value
    })
  }

  sendBodyToParent(){
    let body = this.state.body.trim();

    if (!body) {
      alert('何も入力されていません');
      return;
    }

    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(body);
    }

    this.setState({bdoy: ''})
  }

  render(){
    return(
      <div>
        <div className="Form-textarea">
          <textarea
            name="body" 
            cols="30" 
            rows="5"
            value={this.state.body}
            onChange={this.handleChange}
            ></textarea>
        </div>
        <Button onClickHandler={this.sendBodyToParent}>コメントする</Button>
      </div>
    )
  }
}

export default Form