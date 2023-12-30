import App from "../../App";

const InputGroup = (props) => {
  console.log(props);
  const label = props.label;
  const type = props.type;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        margin: "1rem",
      }}
    >
      <label
        style={{
          fontFamily: "arial",
          fontSize: "1rem",
          color: "#424242",
          fontWeight: "bold",
        }}
        htmlFor="name"
      >
        {label}
      </label>
      <input
        style={{
          padding: "0.5rem 1rem",
          outline: "none",
          border: "1px solid #ddd",
          borderRadius: "0.15rem",
          fontFamily: "arial",
          fontSize: "0.9rem",
          color: "#666",
        }}
        type={type}
        id="name"
      ></input>
    </div>
  );
};

export default InputGroup;
