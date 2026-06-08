import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './themeContext';
import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import MethodPage from './pages/MethodPage';
import PlansPage from './pages/PlansPage';
import ContactPage from './pages/ContactPage';
import './styles/global.css';

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <ScrollToTop />
        <Cursor />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="method" element={<MethodPage />} />
            <Route path="offres" element={<PlansPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
