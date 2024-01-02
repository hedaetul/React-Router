import { useState } from "react";
import ButtonInc from "../buttons-inc/ButtonInc";
import DisplayCount from "../display-count/DisplayCount";
import Layout from "../layout/Layout";

function About() {
  const [count, setCount] = useState(100);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <Layout>
      <h1>I am About page</h1>
      <DisplayCount count={count} />
      <ButtonInc increment={increment} decrement={decrement} />
    </Layout>
  );
}

export default About;

/**
 * When a component rerenders?
 * -when a props change
 * -when state changes
 * -when parent rerenders
 */
