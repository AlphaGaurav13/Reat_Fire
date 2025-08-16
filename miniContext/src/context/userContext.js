import React from 'react';

//This is the user context file which is available to the entire application 
//and can be used to share user-related data across components.
//It creates a context with a default value of null, which can be updated later.
// context is nothing but gobal variable 
const UserContext = React.createContext(null);

export default UserContext;
//After creating the context , we need a provider to provide or wrap  the context to the components that need access to it.

