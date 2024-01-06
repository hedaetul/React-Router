import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

function Help() {
  const [state, setState] = useState({name:''});
  // const [name, setName] = useState("Hedaetul");

  useEffect(() => {
    setTimeout(() => {
      setState({ name: "Hedaetul" });
      console.log("name changed");
    }, 3000);
    console.log("Rendering");
  }, []);

  const data = [
    { name: "hedaetul", email: "hedaetul@gmail.com" },
    { name: "musa", email: "musa@gmail.com" },
    { name: "sojol", email: "sojol@gmail.com" },
  ];

  return (
    <Layout>
      {/*name && <h1>Hello {name}, I am Help age</h1>}
  {!name && <h1>Hello Guist, I am Help page</h1>*/}

      {state.name ? (
        <h1>Hello {state.name}, I am Help age</h1>
      ) : (
        <h1>Hello Guist, I am Help page</h1>
      )}
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li>
              {item.name},({item.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no data</p>
      )}
    </Layout>
  );
}

export default Help;
