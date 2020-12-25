import React from 'react';

const PostList = ({posts}) => {
    const elements = posts.map((todo) =>{
        return (
            <li className="list-group-item">
              <span>{todo.id}</span>
              {todo.title}
              <div><input type='checkbox' checked={todo.title}/></div>
            </li>
          )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;