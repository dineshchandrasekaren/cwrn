import React from "react";
import { signInWithGoogle} from "../../firebase/firebase.util";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: "", password: ""});
    };
    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        required
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type="submit">SignIn</CustomButton>
                    <CustomButton onClick={() => signInWithGoogle()} GoogleSignIn>signInWithGoogle</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
