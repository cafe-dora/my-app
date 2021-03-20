import React from 'react'
import CommentList from './Components/CommentList/CommentList.jsx'
import Form from './Components/Form/Form'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      comments:['初期コメント']
    }
    this.addComment = this.addComment.bind(this)
  }

  addComment(comment){
    this.setState({comments:[...this.state.comments, comment]})
  }


  render(){
    return(
      <div　className="App">
        <h1>掲示板</h1>
        <Form onSubmit={(body)=>{
          console.log('body?', body)
          this.addComment(body)
        }}/>
        <CommentList comments={this.state.comments} />
      </div>
    ) 
  }
}

export default App;
