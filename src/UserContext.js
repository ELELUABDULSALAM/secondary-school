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
    const getInfo = await localStorage.getItem("info");

    if (!username || !password) {
      return alert("Kindly provide your username and password");
    }
    // debugger;
    const identity = localStorage.getItem("info");
    try {
      const response = await myAPI.post("/login", {
        username,
        password,
        userType: getInfo,
      });
      if (
        response.data.message === "success" &&
        identity === response.data.profile.memberType
      ) {
        await localStorage.setItem("token", response.data.token);
        await localStorage.setItem(
          "username",
          JSON.stringify(response.data.profile)
        );
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
    } catch (err) {
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
