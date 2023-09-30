import {
  Hero,
  Benefits,
  Howitworks,
  Signup,
  Partners,
  Footer,
  FaqPage,
  Testimonials,
} from "./home";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Benefits />
      <Howitworks />
      <Testimonials /> 
      <FaqPage />

      <Signup />

      <Partners />
      
    </main>
  );
}
