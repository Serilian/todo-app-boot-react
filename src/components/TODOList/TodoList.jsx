import React from 'react';
import axios from "axios";

class TodoList extends React.Component {

    state = {
        todos: [],
    };

    fetchTodos = () => {
        axios.get(`http://localhost:8080/users/${this.props.user}/todos`)
            .then(response => this.setState({
                todos: response.data
            }))
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.fetchTodos();
    }

    handleDeleteSingleTodo = (id) => {
        axios.delete(`http://localhost:8080/users/${this.props.user}/todos/${id}`)
            .then(response => {
                console.log(response.data);
                this.fetchTodos();
            });
    };


    handleUpdateTodo = (id) => {
        console.log(id);
        this.props.history.push(`/todos/${id}`);
    };


    render() {
        return (
            <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
                <h3>List of your TODOS</h3>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Completed</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.todos.map((todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.deadline}</td>
                                <td>{todo.completed.toString()}</td>
                                <td>
                                    <button className={"btn btn-info"}
                                            onClick={() => this.handleUpdateTodo(todo.id)}>Update
                                    </button>
                                </td>
                                <td>
                                    <button className={"btn btn-danger"}
                                            onClick={() => this.handleDeleteSingleTodo(todo.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default TodoList;