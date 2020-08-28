import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <LoginContainer className="container">
        <div className="content-wrapper row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="login-content-wrapper col s12">
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>

            <form noValidate onSubmit={this.onSubmit}>
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
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"
                  className="login btn btn-large waves-effect waves-light hoverable green accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </LoginContainer>
    );
  }
}

export default Login;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */
const LoginContainer = styled.div `
    .content-wrapper {
        marginTop: 4rem;
    }

    .login-content-wrapper {
        paddingLeft: 11.250px;
    }

    .login {
        width: 150px;
        borderRadius: 3px;
        letterSpacing: 1.5px;
        marginTop: 1rem;
    }
`;