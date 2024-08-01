import React, { useState } from "react";
import Loading from "./Loading";

interface LoginData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /*
      Here i take the name and value of the input target
    */
    const { name, value } = e.currentTarget;

    setLoginData({
      ...loginData,
      [name]: value,
    });

    /*
      This code block verify errors while the user is typing
    */
    let error = "";
    if (name == "username") {
      error = verifyUsername(value);
    } else if (name == "password") {
      error = verifyPassword(value);
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    /*
      Here i got the possible errors to verify if username and password
      matches the requirements.
    */
    const usernameError = verifyUsername(loginData.username);
    const passwordError = verifyPassword(loginData.password);

    if (usernameError || passwordError) {
      setIsLoading(false);
      setErrors({
        username: usernameError,
        password: passwordError,
      });
    } else {
      setTimeout(() => {
        setIsLoading(false);
        window.alert(JSON.stringify(loginData));
      }, 5000);
    }
  };

  return (
    <form
      method="POST"
      className="flex-[3] bg-neutral-500 px-8 py-4 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg duration-300"
    >
      <h3 className="text-[1.6rem] text-center text-gray-200 font-bold">
        Log in with awesome new thing
      </h3>
      <div className="flex flex-col flex-1 mt-4 gap-6">
        <div>
          <input
            name="username"
            type="text"
            required
            onChange={handleChange}
            placeholder="username or email"
            className={`peer h-[4.5rem] w-full text-gray-200 font-dm bg-gray-700 rounded-md text-2xl px-4 outline-none focus:ring focus:ring-gray-400 placeholder:px-1 ${
              errors.username &&
              "outline outline-offset-0 outline-[.2rem] outline-red-500 placeholder-red-500 text-gray-800 bg-yellow-100 focus:ring-0 ring-0"
            }`}
          />
          {errors.username && (
            <p className="text-red-700 text-2xl mt-2">{errors.username}</p>
          )}
        </div>
        <div>
          <input
            name="password"
            type="password"
            required
            onChange={handleChange}
            placeholder="password"
            className={`peer h-[4.5rem] w-full text-gray-200 font-dm bg-gray-700 rounded-md text-2xl px-4 outline-none focus:ring focus:ring-gray-400 placeholder:px-1 ${
              errors.password &&
              "outline outline-offset-0 outline-[.2rem] outline-red-500 placeholder-red-500 text-gray-800 bg-yellow-100 focus:ring-0 ring-0"
            }`}
          />
          {errors.password && (
            <p className="text-red-700 text-2xl mt-2">{errors.password}</p>
          )}
        </div>
      </div>
      <p className="text-2xl text-neutral-400 mt-4 cursor-pointer hover:text-gray-300 transition-all">
        Forgot your password?
      </p>
      <button
        type="submit"
        onClick={handleSubmit}
        className="absolute md:flex w-[6rem] h-[6rem] sm:top-[50%] right-0 -translate-y-[50%] translate-x-[50%] justify-center items-center text-xl text-gray-300 font-bold bg-[#fa5e30] hover:bg-orange-700 outline outline-[.8rem] outline-gray-800 rounded-full duration-300"
      >
        {isLoading ? (
          <Loading />
        ) : (
          <span className="material-symbols-outlined">arrow_forward</span>
        )}
      </button>
    </form>
  );
};

export default LoginForm;

const verifyUsername = (username: string): string => {
  if (!username) {
    return "Username or Email is required.";
  }
  if (username.length < 6 || username.length > 50) {
    return "Username or Email must be between 6 and 50 characters.";
  }
  return "";
};

const verifyPassword = (password: string): string => {
  if (!password) {
    return "Password is required.";
  }

  /*
    This Regex is responsible for verify if the password provided
    has letters, numbers and special characters.
  */
  if (
    password.length < 10 ||
    !/[a-zA-Z]/.test(password) ||
    !/\d/.test(password) ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    return "Password must be at least 10 characters long and contain at least one letter, one number, and one special character.";
  }
  return "";
};
