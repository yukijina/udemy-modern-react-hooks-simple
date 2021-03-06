import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const  App = () => {
  // const [currentValue, setcurrentValue] = function from React - useState(initialValue)
  const [resource, setResource] = useState('posts')
    return (
      <div>
        <div>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={() => setResource('todos')}>Todos</button>
        </div>
        <ResourceList resource={resource} />
        <UserList />
      </div>
    );
}

export default App;
