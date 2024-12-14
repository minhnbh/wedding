import sectionTitle from "../../assets/images/section-title.png";

interface Props {
  heading: string;
  subHeading: string;
}

export function SectionTitle({ heading, subHeading }: Props) {
  return (
    <div className="row">
      <div className="wpo-section-title">
        <span>{heading}</span>
        <h2>{subHeading}</h2>
        <div className="section-title-img">
          <img src={sectionTitle} alt="" width={126} height={61} />
        </div>
      </div>
    </div>
  );
}
