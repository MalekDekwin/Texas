import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import "../styles/categories.scss";
import "../styles/SingleProduct.scss";
import "../styles/custom.scss";


import "../styles/products.scss";
import "../styles/navbar.scss";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
