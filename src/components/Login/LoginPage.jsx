import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "./../../tools/validators/validators";
import { Input } from "../common/formsControl/FormsControl";
import { loginVerification } from "../../State/authReducer";
import { connect } from "react-redux";
import { Route } from "react-router";
import style from "../common/formsControl/FormsControl.module.css";
//import {ReCAPTCHA} from "react-google-recaptcha";

const LoginForm = (props) => {
  return (
    <div>
      {/*<ReCAPTCHA sitekey={'6LfJiG4eAAAAAMhadrch4IvFJ9CkRieacehNt7Uc'} theme={"dark"} />*/}
      <h1>LOGIN</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          {" "}
          <Field
            placeholder={"Email"}
            name={"email"}
            component={Input}
            validate={[required]}
          />{" "}
        </div>
        <div>
          {" "}
          <Field
            placeholder={"Password"}
            name={"password"}
            type={"password"}
            component={Input}
            validate={[required]}
          />{" "}
        </div>
        <div>
          {" "}
          <Field
            type={"checkbox"}
            name={"rememberMe"}
            component={Input}
            validate={[required]}
          />{" "}
          Remember me{" "}
        </div>
        {props.error && (
          <div className={style.formSummaryError}> {props.error} </div>
        )}
        <div>
          {" "}
          <button>Sign in</button>{" "}
        </div>
      </form>
    </div>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const LoginPage = (props) => {
  // if (props.isAuth) {
  //   console.log("authenticated");
  //
  //   return <Route path='profile' render={() => <Redirect to={"/profile"}/> }  />;
  // }
  const onSubmit = (formData) => {
    props.loginVerification(
      formData.email,
      formData.password,
      formData.rememberMe
    );
  };

  return (
    <div>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { loginVerification })(LoginPage);