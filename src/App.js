import 'bootstrap/dist/css/bootstrap.min.css';
import { Header,Banner, Services, Product, Recommendation ,TypesOrganization,
  TypesOfSign,OurPromisses, BrandDeserve , FaqsPage , CompanyDetails , Footer  } 
  from './components';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Product />
      <Recommendation />
      <TypesOrganization />
      <TypesOfSign />
      <OurPromisses />
      <BrandDeserve />
      <FaqsPage />
      <CompanyDetails />
      <Footer  />
    </>
  );
}

export default App;
