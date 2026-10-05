import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTawkTo } from "./useTawkTo";
import { CookieBanner } from "./CookieBanner";
import { RouteScroll } from "./components/layout/RouteScroll";
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from "./pages/product/ProductPage";
import { PrivacyPage } from "./pages/privacy/PrivacyPage";
import { TermsPage } from "./pages/terms/TermsPage";

function App() { useTawkTo(); return <BrowserRouter><RouteScroll /><Routes><Route path="/product" element={<ProductPage />} /><Route path="/privacy" element={<PrivacyPage />} /><Route path="/terms" element={<TermsPage />} /><Route path="*" element={<HomePage />} /></Routes><CookieBanner /></BrowserRouter>; }
export default App;

