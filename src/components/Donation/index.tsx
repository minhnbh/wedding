import { SectionTitle } from "../SectionTitle";
import qrcode from "../../assets/images/qrcode.jpg";
import qrcode1 from "../../assets/images/qrcode_1.jpg";

export function Donation() {
  return (
    <>
      <SectionTitle heading="No Cash?" subHeading="Don't worry" />
      <div className="row">
        <div className="wpo-section-title">
          <h5>Please send us the message with your name</h5>
          <br />
          <img
            src={qrcode}
            alt="QR Code"
            style={{ width: "30vw", objectFit: "contain", marginRight: 16 }}
          />
          <img
            src={qrcode1}
            alt="QR Code"
            style={{ width: "30vw", objectFit: "contain", marginLeft: 16 }}
          />
        </div>
      </div>
    </>
  );
}
