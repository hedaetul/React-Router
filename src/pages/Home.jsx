import Layout from '../components/layout/Layout';
import Section from '../components/section/Section';

const Experiences = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus laboriosam voluptatibus pariatur reiciendis. Est in beatae error facilis eos commodi asperiores ipsam distinctio voluptas, assumenda consectetur alias nobis. Dolore.',

  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus laboriosam voluptatibus pariatur reiciendis. Est in beatae error facilis eos commodi asperiores ipsam distinctio voluptas, assumenda consectetur alias nobis. Dolore.',

  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus laboriosam voluptatibus pariatur reiciendis. Est in beatae error facilis eos commodi asperiores ipsam distinctio voluptas, assumenda consectetur alias nobis. Dolore.',
];
const Education = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus laboriosam voluptatibus pariatur reiciendis. Est in beatae error facilis eos commodi asperiores ipsam distinctio voluptas, assumenda consectetur alias nobis. Dolore.',

  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus laboriosam voluptatibus pariatur reiciendis. Est in beatae error facilis eos commodi asperiores ipsam distinctio voluptas, assumenda consectetur alias nobis. Dolore.',

  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus laboriosam voluptatibus pariatur reiciendis. Est in beatae error facilis eos commodi asperiores ipsam distinctio voluptas, assumenda consectetur alias nobis. Dolore.',
];

function Home() {
  return (
    <Layout>
    <Section title='Experiences' items={Experiences} />
      <Section title='Education' items={Education} />
    </Layout>
  );
}

export default Home;
