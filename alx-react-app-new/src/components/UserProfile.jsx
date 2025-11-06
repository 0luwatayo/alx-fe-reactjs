  const UserProfile = (props) => {
    return (
      <div
        style={{
          border: '1px solid gray',
          padding: '10px',
          margin: '10px',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          maxWidth: '300px'
        }}
      >
        <h2 style={{ color: 'blue', marginBottom: '5px' }}>{props.name}</h2>
        <p style={{ margin: '5px 0' }}>
          Age: <span style={{ fontWeight: 'bold', color: '#555' }}>{props.age}</span>
        </p>
        <p style={{ margin: '5px 0' }}>
          Bio: <span style={{ fontWeight: 'bold', color: '#555' }}>{props.bio}</span>
        </p>
        <p style={{ fontStyle: 'italic', color: '#555' }}>{props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;
  

  // <div>
  //       <h2>{props.name}</h2>
  //       <p>Age: {props.age}</p>
  //       <p>Bio: {props.bio}</p>
  //     </div>