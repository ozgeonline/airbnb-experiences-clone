function Card(props){
  // console.log(props.openSpots);
  let badgeText;
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return(
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} alt="card-img" className="card-img" />
      <div className="container-exp">
        <div className="star-container">
          <img src="../images/Star.png" alt="star-img" className="star-img"/>
          <span className="number">{props.stats.rating}</span>
          <span className="point"></span>
          <span className="number2">({props.stats.reviewCount})</span>
          <span className="point"></span>
          <span className="country">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span>From ${props.price} </span>/ person</p>
      </div>
    </div>
  )
}

export default Card;