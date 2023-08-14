import imgGroup from "../images/Group.png";

function Hero(){
  return(
  <section>
    <img src={imgGroup} alt="group-img" className="img-hero"/>
    <h1 className="hero--header">Online Experiences</h1>
    <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
  </section>)
}
export default Hero;