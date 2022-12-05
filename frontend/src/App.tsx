import React from "react";
import { Route, Routes } from "react-router-dom";
import { Fashion } from "./components/Fashion";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import { Layout } from "./container/Layout";
import { CategoryPage } from "./pages/Category/CategoryPage";
import { Checkout } from "./pages/Checkout";
import { ContactUs } from "./pages/ContactUs";
import { FashionBlog } from "./pages/FasionBlog";
import { FashionSingle } from "./pages/FasionBlog/FashionSingle";
import Index from "./pages/Index";
import { Profile } from "./pages/Profile";
import { SingleProductPage } from "./pages/SingleProduct/SingleProduct";
import { Trackorder } from "./pages/TrackOrder";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/category/*" element={<CategoryPage />}>
            <Route index element={<CategoryPage />} />
          </Route>
          <Route
            path="product/single-product--details/:name/*"
            element={<SingleProductPage />}
          />
          <Route path="product/checkout/*" element={<Checkout />} />
          <Route path="/users/profile" element={<Profile />} />
          <Route path="/users/fashion--blog/" element={<FashionBlog />}></Route>
          <Route
            path="/users/fashion--blog/fashion--single"
            element={<FashionSingle />}
          />
          <Route path="/users/contact-us" element={<ContactUs />} />
          <Route path="/users/track--order" element={<Trackorder />} />
        </Routes>
      </Layout>
      <Modal />
      <Footer />
    </div>
  );
};

export default App;
