import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';


const App = () => (
    <div>
        <h2>Item List</h2>
        <UserList />
        <hr />
        <h2>Item Details</h2>
        <UserDetails />
    </div>
);

export default App;
