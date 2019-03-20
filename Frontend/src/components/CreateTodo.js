import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class CreateTodo extends Component {

  constructor(props) {

    super(props);
    this.state = {
      description:'',
      responsible:'',
      priority:'',
      completed:false
    }

    this.onChangeDescriptionHandler = this.onChangeDescriptionHandler.bind(this);//This is a comment
    this.onChangeResponsibleHandler = this.onChangeResponsibleHandler.bind(this);
    this.onChangePriorityHandler = this.onChangePriorityHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state.description);
    console.log(this.state.responsible);
    console.log(this.state.priority);
    console.log(this.state.completed);

    const newTodo = {
      description:this.state.description,
      responsible:this.state.responsible,
      priority:this.state.priority,
      completed:this.state.completed
    }

    axios.post('http://localhost:4000/todos/add',newTodo)
    .then(res => console.log(res.data));


    this.setState({
      description:'',
      responsible:'',
      priority:'',
      completed:false

    });
  }

  onChangeDescriptionHandler(e){
    this.setState({
      description:e.target.value
    });

  }

  onChangeResponsibleHandler(e){
    this.setState({
      responsible:e.target.value
    });

  }

  onChangePriorityHandler(e){
    this.setState({
      priority:e.target.value
    });

  }

  




  render() {
    return (
      <div>
        <h3>Create TOdo</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group" >
            <label >Description:</label>
            <input type="text" className="form-control" id="des" onChange={this.onChangeDescriptionHandler} value={this.state.description}/>
          </div>

          <div className="form-group">
            <label >Responsible:</label>
            <input type="text" className="form-control" id="res" onChange={this.onChangeResponsibleHandler} value={this.state.responsible}/>
          </div>

          <div className="form-group">
            <div className=" form-check form-check-inline">
              <input type="radio" className="form-check-input" name="optradio" value="Low" checked={this.state.priority ==='Low'} onChange={this.onChangePriorityHandler }/>
              <label className="form-check-label">Low</label>
            </div>

            <div className=" form-check form-check-inline">
              <input type="radio" className="form-check-input" name="optradio" value="Medium" checked={this.state.priority ==='Medium'} onChange={this.onChangePriorityHandler }/>
              <label className="form-check-label">Medium</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="optradio" value="High" checked={this.state.priority ==='High'} onChange={this.onChangePriorityHandler }/>
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Create TOdo" onSubmit={this.onSubmitHandler} />
            

          </div>


        </form>
      </div>
    )
  }
}

export default CreateTodo
