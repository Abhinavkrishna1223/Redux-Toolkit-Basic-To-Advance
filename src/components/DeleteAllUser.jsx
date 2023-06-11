import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/actions/Action"; 

export const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const clearAllUsers=()=>{
    dispatch(deleteUser())
  }

  return <div>
    <button onClick={clearAllUsers}>
      clear users
    </button>
  </div>;
};
