import "./user.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark , faEye } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function User({ userDisplay, setUserDisplay }) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [usersInfoList, setUsersInfoList] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  // Validation functions
  const validateUsername = (username) => username.trim().length > 2;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.trim().length >= 8;

  const isFormValid = () => {
    return (
      validateUsername(form.username) &&
      validateEmail(form.email) &&
      validatePassword(form.password)
    );
  };

  useEffect(() => {
    
  }, [usersInfoList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      username: form.username,
      email: form.email,
      password: form.password,
    };

    // Check if the email already exists
    if (usersInfoList.some((user) => user.email === userInfo.email)) {
      setError("This email is already subscribed.");
      setSuccessMessage(""); // Clear success message if error occurs
      return;
    }

    setUsersInfoList((prevList) => [...prevList, userInfo]);
    setSuccessMessage("Subscription successful!"); // Set success message
    setError("");
    setForm({ username: "", email: "", password: "" }); // Clear form after submission

    setTimeout(() => {
      setUserDisplay("none");
      setSuccessMessage("");
    }, 2500);
  };


  const [tp , setTp] = useState("password");

  return (
    <div style={{ display: userDisplay }} className="user-container">
      <form  method="post" action="" className="user" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            autoComplete="off"
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
          />
        </label>
        <label>
          Email
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="off"
            type="text"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </label>
        <label>
          Password

          <div className="wrap-inp">
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              autoComplete="off"
              type={tp} // Changed to password type for security
              id="password"
              name="password"
              required
              placeholder="Password"
            />

            <span onClick={() => {
                setTp(tp === "password" ? "text" : "password")
            }} className="eye-btn">
                <FontAwesomeIcon icon={faEye} />
            </span>
          </div>

        </label>
        <button type="submit" disabled={!isFormValid()} className="sub-scribe">
          Subscribe
        </button>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {successMessage && (
          <p style={{ color: "green", textAlign: "center" }}>
            {successMessage}
          </p>
        )}{" "}
        {/* Success message */}
        <button onClick={() => setUserDisplay("none")} className="close-user">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </form>
    </div>
  );
}
