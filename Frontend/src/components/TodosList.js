import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../index.css';

const Todo = props => (

 
    <tbody>
      <tr>
        <td className={props.todo.completed ==='Completed' ? 'completed':''}>{props.todo.description}</td>
        <td className={props.todo.completed ==='Completed' ? 'completed':''}>{props.todo.responsible}</td>
        <td className={props.todo.completed ==='Completed' ? 'completed':''}>{props.todo.priority}</td>
        <td><Link to={"/edit/"+props.todo._id}>Edit</Link></td>    
      </tr>
    </tbody>
  
)

class TodosList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };

  }

  componentDidMount(){
    axios.get('http://localhost:4000/todos/').then(res => {console.log(res.data)

    this.setState({
      data:res.data
    });
    

  }).catch(err => {
    console.log(err);
  });
    

  }

  showTodos = () => {
    return (this.state.data.map(function(ctodo,i){
      return(<Todo todo={ctodo} key={i}/>);
    }));
  }
  

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Edits</th>
            </tr>
          </thead>
          {this.showTodos()}
        </table>
      </div>
    )
  }
}

export default TodosList
