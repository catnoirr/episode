import React, { useState } from "react";
import "../style/login.css"; // Combined styling for login and signup

const AuthSection = () => {
  // State to toggle between login and sign-up form
  const [isLogin, setIsLogin] = useState(true);

  // Handle form submission (optional)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log("Login form submitted");
      // Add your login logic here (e.g., API call to authenticate)
    } else {
      console.log("Sign-up form submitted");
      // Add your sign-up logic here (e.g., API call to register)
    }
  };

  return (
    <div className="login-container ">
      <header>
        <h1>{isLogin ? "Login to Episode.in" : "Sign up for Episode.in"}</h1>
        <p>{isLogin ? "Access your account and enjoy our services" : "Create an account and join our community"}</p>
      </header>

      <div className="login-form">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input type="text" placeholder="Full Name" required />
            </>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && (
            <>
              <input type="password" placeholder="Confirm Password" required />
            </>
          )}
          <input type="submit" value={isLogin ? "Login" : "Sign Up"} />
        </form>

        <p>
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <a href="#!" onClick={() => setIsLogin(false)}>
                Sign up here
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="#!" onClick={() => setIsLogin(true)}>
                Login here
              </a>
            </>
          )}
        </p>
      </div>

      <footer>
        <p>&copy; 2024 Episode.in. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthSection;
