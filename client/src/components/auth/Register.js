import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };

        console.log(newUser);
    };
    
    render() {
        const { errors } = this.state;

        return (
            <RegisterContainer className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to
                                home
                        </Link>
                        <div className="content-wrapper col s12">
                            <h4><b>Register</b> below</h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                />
                                <label htmlFor="password2">Confirm Password</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    type="submit"
                                    className="submit btn btn-large waves-effect waves-light hoverable green accent-3"
                                >
                                Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </RegisterContainer>
        )
    }
}

export default Register;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */
const RegisterContainer = styled.div`
  .content-wrapper {
    paddingLeft: 11.250px;
  }
  
  .submit {
    width: 150px;
    borderRadius: 3px;
    letterSpacing: 1.5px;
    marginTop: 1rem;
  }
`;