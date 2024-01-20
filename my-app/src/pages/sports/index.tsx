// pages/gadget/index.js
import Layout from '@/Layout';
import NewsList from '@/Component/NewsList';

const SportsPage = () => {

  return (
    <Layout>
        <NewsList topic={'sports'} />;
    </Layout>
  )
};

export default SportsPage;
