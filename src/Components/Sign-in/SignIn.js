import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { contents2 } from "../../Static/data";

const schema = yup.object().shape({
  fullname: yup.string().required().min(6),
  email: yup.string().required("Please enter a valid email"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (props) => console.log(props);

  return (
    <div className="sign-in">
      <h1>Have an account Already</h1>
      <h3>Sign in here!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {contents2.inputs.map((input, key) => {
          return (
            <div key={key}>
              <label htmlFor={input.name}>{input.label}</label>
              <br />
              <input
                type={input.type}
                name={input.name}
                {...register(input.name)}
              />
              <br />
              <span className="message">{errors[input.name]?.message}</span>
            </div>
          );
        })}
   

        <Link to='/scrumboard'><button>SIGN IN</button> </Link>
      </form>
        <p>Don't Have an account? <Link to='/signup'>Sign Up</Link></p>
        <p><Link to='/'>Back to Home</Link></p>
    </div>
  );
};

export default SignIn;
