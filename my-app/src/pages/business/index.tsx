// pages/gadget/index.js
import Layout from '@/Layout';
import { useRouter } from 'next/router';
import NewsList from '@/Component/NewsList';

const BusinessPage = () => {
  
  return (
    <Layout>
        <NewsList topic={'business'} />;
    </Layout>
  )
};

export default BusinessPage;
