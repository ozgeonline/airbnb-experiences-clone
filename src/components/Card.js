function Card(){
  return(
    <div className="card-container">
      <img src="./katie.png" alt="card-img" className="card-img" />
      <button>Sold Out</button>
      <div className="container-exp">
        <div className="star-container">
          <img src="../images/Star.png" alt="star-img" className="star-img"/>
          <span className="number">5.0</span>
          <span className="point"></span>
          <span className="number2">(6)</span>
          <span className="point"></span>
          <span className="country">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span>From $136 </span>/ person</p>
      </div>
    </div>
  )
}

export default Card;