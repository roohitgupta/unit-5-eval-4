import "../App.css"


export const Login = () => {
  return (
    <div>
      <input
        className="username inputBar"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password inputBar"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit">Login</button>
    </div>
  );
};
