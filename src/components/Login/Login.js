import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

    const { user, loginWithRedirect, isAuthenticated, logout  } = useAuth0();
    return (
        <div>
            {isAuthenticated && <h3>Hello {user.name}</h3>}
            {isAuthenticated ? (
                <button onClick={e=>logout()}>>Logout</button>
                ):(
            <button onClick={e=>loginWithRedirect()}>Login with ridirect</button>
            )
            }
        </div>
    );
};

export default Login;