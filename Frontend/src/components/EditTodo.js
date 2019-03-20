import React, { Component } from 'react'
import axios from 'axios';

class EditTodo extends Component {

  constructor(props) {

    super(props);
    this.state = {
      description: '',
      responsible: '',
      priority: '',
      completed: ''
    }


    this.onChangeDescriptionHandler = this.onChangeDescriptionHandler.bind(this);
    this.onChangeResponsibleHandler = this.onChangeResponsibleHandler.bind(this);
    this.onChangePriorityHandler = this.onChangePriorityHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({
          description: res.data.description,
          responsible: res.data.responsible,
          priority: res.data.priority,
          completed: res.data.completed
        })
      }).catch(function(err){
        console.log(err);
      });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state.description);
    console.log(this.state.responsible);
    console.log(this.state.priority);
    console.log(this.state.completed);

    const newTodo = {
      description: this.state.description,
      responsible: this.state.responsible,
      priority: this.state.priority,
      completed: this.state.completed
    }

    axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, newTodo)
      .then(res => console.log(res.data));                                                               //tpmpi


    this.props.history.push('/');
  }

  onChangeDescriptionHandler(e) {
    this.setState({
      description: e.target.value
    });

  }

  onChangeResponsibleHandler(e) {
    this.setState({
      responsible: e.target.value
    });

  }

  onChangePriorityHandler(e) {
    this.setState({
      priority: e.target.value
    });

  }

  onChangeTodoCompleted(e) {
    this.setState({
      completed: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Update Todo</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group" >
            <label >Description:</label>
            <input type="text" className="form-control" id="des" onChange={this.onChangeDescriptionHandler} value={this.state.description} />
          </div>

          <div className="form-group">
            <label >Responsible:</label>
            <input type="text" className="form-control" id="res" onChange={this.onChangeResponsibleHandler} value={this.state.responsible} />
          </div>

          <div className="form-group">
            <div className=" form-check form-check-inline">
              <input type="radio" className="form-check-input" name="optradio" value="Low" checked={this.state.priority === 'Low'} onChange={this.onChangePriorityHandler} />
              <label className="form-check-label">Low</label>
            </div>

            <div className=" form-check form-check-inline">
              <input type="radio" className="form-check-input" name="optradio" value="Medium" checked={this.state.priority === 'Medium'} onChange={this.onChangePriorityHandler} />
              <label className="form-check-label">Medium</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="optradio" value="High" checked={this.state.priority === 'High'} onChange={this.onChangePriorityHandler} />
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-group"> {/* For checking for completed or not*/}
          <div className=" form-check form-check-inline">
              <input type="radio" className="form-check-input" name="complete" value="Completed" checked={this.state.completed === 'Completed'} onChange={this.onChangeTodoCompleted } />
              <label className="form-check-label">Completed</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" className="form-check-input" name="complete" value="Not Completed" checked={this.state.completed === 'Not Completed'} onChange={this.onChangeTodoCompleted} />
              <label className="form-check-label">Not Completed</label>
            </div>
          </div>

          
          <br />

          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Update Todo" />


          </div>


        </form>

      </div>
    )
  }
}

export default EditTodo;
