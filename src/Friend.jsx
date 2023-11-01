export default function Friend({ friend }) {
  console.log(friend);
  const { name, email, username } = friend;
  console.log(name, email, username);
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "20px",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <h4>Name: {name}</h4>
      <h4>User Name: {username}</h4>
      <h4>Email: {email}</h4>
    </div>
  );
}
