import { useState } from "react";
import Layout from "../layout/Layout";

function Help() {
  // const [state, setState] = useState({});
  const [name, setName] = useState("Hedaetul");

  // setTimeout(() => {
  //   setState({ name: "Hedaetul" });
  // }, 1000);
  // console.log("Rendering");

  return (
    <Layout>
      {/*name && <h1>Hello {name}, I am Help age</h1>}
  {!name && <h1>Hello Guist, I am Help page</h1>*/}

      {name ? (
        <h1>Hello {name}, I am Help age</h1>
      ) : (
        <h1>Hello Guist, I am Help page</h1>
      )}
    </Layout>
  );
}

export default Help;
