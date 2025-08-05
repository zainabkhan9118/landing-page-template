import { Routes, Route } from 'react-router-dom'
import Layout from '../components/common/Layout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import UmrahGuide from '../pages/UmrahGuide'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Policy from '../pages/Policy'

function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/umrah-guide" element={<UmrahGuide />} />
        <Route path="/umrah-guide/:stepSlug" element={<UmrahGuide />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
    </Layout>
  )
}

export default Router
