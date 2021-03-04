import React, { useReducer } from "react";
import myAPI from "./API/managerAPI";

const DataManager = React.createContext();

const stateReducer = (state, action) => {
  switch (action.type) {
    case "request_done":
      return { ...state, requestDone: action.payload };
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(stateReducer, {
    user: {},
  });

  const signIn = async (history, username, password) => {
    // await dispatch({ type: "request_done", payload: true });
    const getInfo = await localStorage.getItem("info");

    if (!username || !password) {
      // await dispatch({ type: "request_done", payload: false });
      return alert("Kindly provide your username and password");
    }

    try {
      const response = await myAPI.post("/login", {
        username,
        password,
        userType: getInfo,
      });
      // debugger;
      // console.log(response.data.message);
      if (response.data.message === "success") {
        await localStorage.setItem("token", response.data.token);
        await localStorage.setItem(
          "username",
          JSON.stringify(response.data.profile)
        );

        // await localStorage.setItem(
        //   "profile",
        //   JSON.stringify(response.data.profile)
        // );
        await dispatch({
          type: "request_done",
          payload: response.data.profile,
        });
        history.push("/resolve");
      } else if (response.data.message === "type-issue") {
        alert(response.data.info);
        if (window.confirm("Did you want to re-select account type")) {
          history.push("/");
        }
      } else {
        console.log(response.data.message);
      }
      // await dispatch({ type: "request_done", payload: user });
      // await dispatch({ type: "request_done", payload: false });
    } catch (err) {
      // await dispatch({ type: "request_done", payload: false });
      alert("No network connection");
    }
  };

  const boundActions = {
    signIn,
  };

  return (
    <DataManager.Provider value={{ state: state, ...boundActions }}>
      {props.children}
    </DataManager.Provider>
  );
};

export default DataManager;
