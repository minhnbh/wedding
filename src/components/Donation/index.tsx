import { SectionTitle } from "../SectionTitle";
import qrcode from "../../assets/images/qrcode.jpg";
import qrcode1 from "../../assets/images/qrcode_1.jpg";

export function Donation() {
  return (
    <>
      <SectionTitle heading="No Cash?" subHeading="Don't worry" />
      <div className="row">
        <div className="wpo-section-title">
          <p>Please send us the message with your name</p>
          <br />
          <img
            src={qrcode}
            alt="QR Code"
            style={{
              width: "16vw",
              objectFit: "contain",
              marginRight: "4vw",
              minWidth: 400,
            }}
          />
          <img
            src={qrcode1}
            alt="QR Code"
            style={{
              width: "16vw",
              objectFit: "contain",
              marginLeft: "4vw",
              minWidth: 400,
            }}
          />
        </div>
      </div>
    </>
  );
}
