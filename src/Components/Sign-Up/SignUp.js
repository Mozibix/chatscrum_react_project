import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { contents } from "../../Static/data";
import "./signup.css";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  fullname: yup.string().required().min(6),
  email: yup.string().required("Please enter a valid email"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="sign-up">
      <h1>Don't Have an account?</h1>
      <h3>Sign up here!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {contents.inputs.map((input, key) => {
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

        <label htmlFor="options">User Type</label>
        <select id="options">
          <option value="Developer">Developer</option>
          <option value="Owner">Owner</option>
        </select>

        <button>SIGN UP</button>
      </form>
      <p>
        Have an account? <Link to="/signin">Sign In</Link>
      </p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default SignUp;
