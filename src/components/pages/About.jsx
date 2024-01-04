import { useState } from "react";
import ButtonInc from "../buttons-inc/ButtonInc";
import DisplayCount from "../display-count/DisplayCount";
import Layout from "../layout/Layout";
import UpdateIncrementDecrement from "../update-inc/UpdateIncrementDecrement";

function About() {
  const [count, setCount] = useState(100);
  const [incrementValue, setIncrementValue] = useState(10);
  const [decrementValue, setDecrementValue] = useState(10);

  const o = count || 50
  console.log('value of 0', o);

  count && console.log('count has a value', o);

  function increment() {
    setCount(count + incrementValue);
  }

  function decrement() {
    setCount(count - decrementValue);
  }

  function handleIncrementChange(e) {
    setIncrementValue(parseInt(e.target.value));
  }
  function handleDecrementChange(e) {
    setDecrementValue(parseInt(e.target.value));
  }

  return (
    <Layout>
      <h1>I am About page</h1>
      <DisplayCount count={count} />
      <UpdateIncrementDecrement
        incrementValue={incrementValue}
        decrementValue={decrementValue}
        handleIncrementChange={handleIncrementChange}
        handleDecrementChange={handleDecrementChange}
      />
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
