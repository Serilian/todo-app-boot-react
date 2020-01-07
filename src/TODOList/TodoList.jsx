import React from 'react';

const TodoList = () => {

    let todos =
        [
            {id: 1, description: "Learn Java", deadline: new Date(), isCompleted: false},
            {id: 2, description: "Learn React",deadline: new Date(), isCompleted: false},
            {id: 3, description: "Learn SQL",deadline: new Date(), isCompleted: false},
            {id: 4, description: "Learn some more Java",deadline: new Date(), isCompleted: false}
        ];

    return (
        <div style={{width: "100%",height: "100%", display: "flex", flexDirection: "column"}}>
            <h3>List of your TODOS</h3>
            <table >
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Deadline</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => {
                    return (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.deadline.toDateString()}</td>
                            <td>{todo.isCompleted.toString()}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>


        </div>
    );
};

export default TodoList;