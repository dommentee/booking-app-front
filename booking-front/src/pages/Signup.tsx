import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { api } from "../helpers/api";
import { User } from "../helpers/User";

const currentApi = api(api);

const Signup = (props: any) => {
  const defaultForm = { firstName: "", lastName: "", email: "", password: "" };
  let [newUser, setNewUSer] = useState(defaultForm);

  const handleChange = (e: any) => {
    setNewUSer({ ...newUser, [e.target.name]: e.target.value });
  };

  const createUser = (newUSer: User) => {
    axios
      .post(`${currentApi}/auth/register`, newUSer)
      .then((response: AxiosResponse<any>) => {
        console.log(response);
      })
      .catch((err) => console.error(err.message));
    console.log(JSON.stringify(newUSer));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newUser.firstName ||
      !newUser.lastName ||
      !newUser.email ||
      !newUser.password
    ) {
      return;
    }
    createUser(newUser);
  };

  return (
    <div className="form-wrap">
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first name">first name</label>
        <br />
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={newUser.firstName}
          required
          className="input"
          placeholder="first name"
        />
        <br />
        <br />
        <label htmlFor="last name">last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={newUser.lastName}
          required
          className="input"
          placeholder="last name"
        />
        <br />
        <br />
        <label htmlFor="email">email</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={newUser.email}
          required
          className="input"
          placeholder="last name"
        />
        <br />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={newUser.password}
          required
          className="input"
          placeholder="password"
        />
        <br />
        <br />
        <input className="registe-user" type="submit" value="SUBMIT"></input>
      </form>
    </div>
  );
};
export default Signup;
