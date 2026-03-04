import Hero from './components/Hero';
import FoundersTrap from './components/FoundersTrap';
import Ecosystem from './components/Ecosystem';
import ProcessTimeline from './components/ProcessTimeline';
import FoundersNote from './components/FoundersNote';
import Comparison from './components/Comparison';
import ProjectShowcase from './components/ProjectShowcase';
import Reviews from './components/Reviews';
import BigExitFooter from './components/BigExitFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <Hero />
      <FoundersTrap />
      <Ecosystem />
      <ProcessTimeline />
      <FoundersNote />
      <Comparison />
      <ProjectShowcase />
      <Reviews />
      <BigExitFooter />
    </div>
  );
}

export default App;