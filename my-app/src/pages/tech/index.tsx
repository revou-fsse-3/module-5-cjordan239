// pages/gadget/index.js
import Layout from '@/Layout';
import NewsList from '@/Component/NewsList';

const TechnologyPage = () => {

  return (
    
    <Layout>
        <NewsList topic={'tech'} />;
    </Layout>
  )
};

export default TechnologyPage;
