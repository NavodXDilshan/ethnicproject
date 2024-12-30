import { Header } from "components/ui/Header";
import FormSection from "components/ui/sections/Form";
import { HeroSection } from "components/ui/sections/Hero";
import { ServiceSelectionSection } from "components/ui/sections/ServiceSelection";
import SimulatorSection from "components/ui/sections/Simulator";

const Simulator = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SimulatorSection />
    </div>
  );
};

export default Simulator;
