const Banner = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className="fa-solid fa-star" />
      </li>
    );
  }

  return (
    <div className="top-banner text-center">
      <h2 className="tx-dark mb-20">Top Rated <span style={{color:"#09A6F3"}}>Expense App</span></h2>
      <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20" style={{fontSize:"20px", fontStyle:"italic"}}>
        “The expense management app also provides real-time visibility into expense data, which can 
help businesses identify trends, monitor spending, and make better-informed decisions.”
      </p>
      {/* <div className="d-inline-flex align-items-center">
        <ul className="d-flex style-none rating">{stars}</ul>
        <div className="fs-20 ms-4">
          <strong className="fw-500 tx-dark">4.8</strong>{" "}
          <span className="tx-dark opacity-25">(30k Reviews)</span>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
