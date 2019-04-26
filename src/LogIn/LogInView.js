import React from 'react';

const LogInView = ({onSubmit}) => {
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Email
                    <input
                        style = {{width: "100%"}}
                        name = "email"
                        type = "email"
                        placeholder = "Email"
                    >

                    </input>
                </label>
                <label>
                    Password
                    <input
                        style = {{width: "100%"}}
                        name = "password"
                        type = "password"
                        placeholder = "Password"
                    >

                    </input>
                </label>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}

export default LogInView;