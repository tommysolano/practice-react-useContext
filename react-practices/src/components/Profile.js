import React, { useContext } from "react";
import UserContext from "../context/user/UserContext"

function Profile() {

  const { selectedUser } = useContext(UserContext)

  return (
    <>
      {selectedUser ? (<div>
        <img src={selectedUser.avatar}/>
        <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
        <h3>email: {selectedUser.email}</h3>
      </div>) : (<div>Not User selected</div>)}
    </>
  );
}

export default Profile;