import Navbar from '../components/Navbar'
import Hero from '../components/Hero';

function LandingPage() {
  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default LandingPage;