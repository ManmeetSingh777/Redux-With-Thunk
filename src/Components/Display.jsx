import React, { useState } from "react";
import { createStore, applyMiddleware } from 'redux'
import {thunk} from "redux-thunk";
import axios from "axios";
import reducer from "./Reducers";
import { showError, showUser } from "./Action";

const store = createStore(reducer, applyMiddleware(thunk));

export default function Display() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        store.dispatch(showUser(users));
      })
      .catch((error) => {
        store.dispatch(showError(error.message));
      });
  };

  const handleClick = () => {
    if (data.length === 0) {
      fetchData();
    } else {
      setData([]);
    }
  };

  store.subscribe(() => {
    const userData = store.getState().user;
    setData(userData);
  });

  return (
    <div>
      <button onClick={handleClick}>Display Data</button>
      {data.map((person) => (
        <div key={person.id} className="container">
          <h2 className="name">{person.name}</h2>
          <p>{person.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
