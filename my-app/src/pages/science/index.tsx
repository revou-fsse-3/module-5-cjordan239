// pages/gadget/index.js
import Layout from '@/Layout';
import NewsList from '@/Component/NewsList';

const SciencePage = () => {

  return (
    
    <Layout>
        <NewsList topic={'science'} />;
    </Layout>
  )
};

export default SciencePage;
