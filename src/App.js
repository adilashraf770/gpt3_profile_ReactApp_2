import './App.scss';
import { Navbar, Brand } from './componants'
import { Blogs, CTA, Features, Footer, Header, Possibility, Whatgpt3 } from './containers'
function App() {
  return (
    <div className="app">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
