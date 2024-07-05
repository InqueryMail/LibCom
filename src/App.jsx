import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  ProductsPage,
  InquiryPage,
  AboutPage,
  InquiryList,
  ListPage,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="inq" element={<InquiryList />} />
        <Route path="inquiry" element={<InquiryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </>
  );
}
export default App;
