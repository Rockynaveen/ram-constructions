import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';
import { ConsultationModal } from './components/forms/ConsultationModal';
import { Toast } from './components/ui/Toast';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Insights } from './pages/Insights';
import { ArticleDetail } from './pages/ArticleDetail';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0F1115] text-[#EAE8E3] font-sans selection:bg-[#C5A880]/30 selection:text-white">
        {/* Global Navigation */}
        <Navbar />
        
        {/* Full-Screen Mobile Drawer */}
        <MobileMenu />

        {/* Global Consultation Modal */}
        <ConsultationModal />

        {/* Global Toast Notifications */}
        <Toast />

        {/* Main Routed Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Luxury Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
