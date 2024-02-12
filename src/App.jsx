import CallToAction from "./components/CallToAction";
import CountdownTimer from "./components/CountdownTimer";
import Form from "./components/Form";
import Founder from "./components/Founder";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyChooseMeSection from "./components/WhyChooseMeSection";

export default function App() {
  return (
    <div>
      <Header />
      <div className="w-5/6 mx-auto mt-36">
        <HeroSection />
        <Founder />
        <WhyChooseMeSection />
        <CountdownTimer />
        <CallToAction />
        <Form />
      </div>
    </div>
  )
}