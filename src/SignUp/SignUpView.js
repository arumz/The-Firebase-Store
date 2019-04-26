import React from 'react';

const SignUpView = ({onSubmit}) => {
    return(
        <div>
            <h1>Sign Up</h1>
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
                <label>
                    Re-enter Password
                    <input
                        style = {{width: "100%"}}
                        name = "passwordConf"
                        type = "password"
                        placeholder="Password"
                    />

                </label>
                <button type = "submit">Sign Up </button>
            </form>
        </div>
    )
}

export default SignUpView;