import { useState } from 'react';
import Layout from '../layout/Layout';

function About() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <Layout>
      <h1>I am About page</h1>
      <h1>Count: {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </Layout>
  );
}

export default About;
