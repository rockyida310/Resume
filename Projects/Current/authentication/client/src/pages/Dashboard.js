import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const URL_BASE = "http://localhost:3001/api";

const Dashboard = () => {
  const [quote, setQuote] = useState("");
  const [tempQuote, setTempQuote] = useState("");
  const navigate = useNavigate();

  const populateQuote = async () => {
    const req = await fetch(URL_BASE + "/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();

    if (data.status === "ok") {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  };

  const updateQuote = async (event) => {
    event.preventDefault();
    const req = await fetch(URL_BASE + "/quote", {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
        "x-access-token": localStorage.getItem("token"),
      },
      body:JSON.stringify({
        quote: tempQuote
      })
    });

    const data = await req.json();

    if (data.status === "ok") {
      setQuote(tempQuote);
      setTempQuote('');
    } else {
      alert(data.error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate(-1);
      } else {
        console.log(user);
        populateQuote();
      }
    }
    // else{
    //   navigate(-1); //go one page back
    // }
  }, []);

  return (
    <div>
      <h1>Your Quote: {quote || "No Quote Found"} </h1>
      <form onSubmit={updateQuote}>
        <input
          type="text"
          placeholder="Quote"
          value={tempQuote}
          onChange={(e) => setTempQuote(e.target.value)}
        />
        <input type="submit" value="Update quote" />
      </form>
    </div>
  );
};

export default Dashboard;
