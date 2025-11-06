// const UserProfile = (props) => {
//     return (
//       <div>
//         <h2>{props.name}</h2>
//         <p>Age: {props.age}</p>
//         <p>Bio: {props.bio}</p>
//       </div>
//     );
//   };
  
//   export default UserProfile;

// import React, { useContext } from "react";
// import UserContext from "../UserContext";

// function UserProfile() {
//   const userData = useContext(UserContext);

//   return (
//     <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
//       <h2 style={{ color: "blue" }}>{userData.name}</h2>
//       <p>Email: <span style={{ fontWeight: "bold" }}>{userData.email}</span></p>
//     </div>
//   );
// }

// export default UserProfile;


import React, { useContext } from "react";
// import UserContext from "../UserContext"; // ✅ correct path
import UserContext from "./UserContext";


function UserProfile() {
  const userData = useContext(UserContext);

  if (!userData) {
    return <p>No user data found.</p>;
  }


  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{userData.name}</h2>
      <p>Email: <span style={{ fontWeight: "bold" }}>{userData.email}</span></p>
    </div>
  );
}

export default UserProfile;
