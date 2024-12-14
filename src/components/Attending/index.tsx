import { useState } from "react";

export function Attending() {
  const [shouldJoin, setShouldJoin] = useState(true);

  return (
    <section className="wpo-contact-section" id="RSVP">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="wpo-contact-form-area">
            <div className="wpo-section-title">
              <h2>Are you attending?</h2>
            </div>
            <form
              method="post"
              className="contact-validation-active"
              id="contact-form-main"
            >
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="radio-buttons">
                <p>
                  <input
                    type="radio"
                    id="attend"
                    name="radio-group"
                    checked={shouldJoin}
                    onChange={() => setShouldJoin(true)}
                  />
                  <label htmlFor="attend">Yes, I will be there</label>
                </p>
                <p>
                  <input
                    type="radio"
                    id="not"
                    name="radio-group"
                    checked={!shouldJoin}
                    onChange={() => setShouldJoin(false)}
                  />
                  <label htmlFor="not">Sorry, I can’t come</label>
                </p>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="what"
                  id="what"
                  placeholder="What Will You Be Attending"
                />
              </div>
              <div>
                <select name="guest" className="form-control" defaultValue={1}>
                  <option disabled>Number Of Guests</option>
                  <option value={1}>01</option>
                  <option value={2}>02</option>
                  <option value={3}>03</option>
                  <option value={4}>04</option>
                  <option value={5}>05</option>
                </select>
              </div>
              <div className="submit-area">
                <button type="submit" className="theme-btn-s3">
                  RSVP
                </button>
                <div id="c-loader">
                  <i className="ti-reload"></i>
                </div>
              </div>
              <div className="clearfix error-handling-messages">
                <div id="success">Thank you</div>
                <div id="error">
                  {" "}
                  Error occurred while sending email. Please try again later.
                </div>
              </div>
            </form>
            <div className="border-style"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
