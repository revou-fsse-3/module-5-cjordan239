// pages/gadget/index.js
import Layout from '@/Layout';
import NewsList from '@/Component/NewsList';

const FoodPage = () => {

  return (

    <Layout>
        <NewsList topic={'food'} />;
    </Layout>
  )
};

export default FoodPage;
