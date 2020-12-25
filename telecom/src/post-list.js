import React from 'react';

import './post-list.css';

const PostList = ({posts}) => {
     
    const elements = posts.map((todo) =>{
        return (
            <div key={todo.id} className="list">
            <div key={todo.id} className="list-group-item">
                <div key="id" className="1">
                    {todo.id}
                </div>
                <div key="title" className="2">
                    {todo.title}
                </div>
                <div key="checkbox" className="3">
                    <input type='checkbox' checked={todo.completed}/>
                </div>
            </div>
            </div>
          )
    });
    return (
        <ul key className="app-list">
            {elements}
        </ul>
    )
}

export default PostList;