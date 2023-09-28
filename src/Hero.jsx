import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My React Projects</h1>
          <p>
            I've had the pleasure of working on several React projects that
            demonstrate my passion for front-end development and user-centric
            design. These projects reflect my commitment to creating engaging
            and responsive web applications. 
            
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
