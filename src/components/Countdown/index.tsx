import CountdownTimer from "./CountdownTimer";

export default function Countdown() {
  return (
    <section className="wpo-wedding-time">
      <h2 className="hidden">some</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-xs-12">
            <div className="clock-grids">
              <div className="clock-grids-inner">
                <div className="wpo-wedding-time-text">
                  <h2>
                    We <i className="fi flaticon-heart-1"></i> Are{" "}
                    <i className="fi flaticon-heart-1"></i>
                    Getting <i className="fi flaticon-heart-1"></i> Married
                  </h2>
                  <p>Jan 05<sup>th</sup>, 2025 - Location: Nha Trang</p>
                  <CountdownTimer destinationDate="01-05-2025 19:00:00" />
                  <br />
                  <br />
                  <p>Jan 11<sup>th</sup>, 2025 - Location: Ho Chi Minh</p>
                  <CountdownTimer destinationDate="01-11-2025 19:00:00" />
                </div>
              </div>
              <div className="shape-1">
                <img
                  src="../../assets/images/date-shape.png"
                  height={40}
                  width={1600}
                  alt=""
                />
              </div>
              <div className="shape-2">
                <img
                  src="../../assets/images/date-shape.png"
                  height={40}
                  width={1600}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
