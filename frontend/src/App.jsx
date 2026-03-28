import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
