import shape1 from "../../assets/images/story/shape-1.png";
import shape2 from "../../assets/images/story/shape-2.png";
import shape3 from "../../assets/images/story/shape-3.png";
import shape4 from "../../assets/images/story/shape-4.png";
import shape5 from "../../assets/images/story/shape-5.png";
import shape6 from "../../assets/images/story/shape-6.png";

interface Props {
  imgSrc: string;
  idx: number;
  className?: string;
}

export function StoryImage({ imgSrc, idx, className }: Props) {
  const shapeIdx = idx % 3;
  const shapes: Record<string, string[]> = {
    0: [shape1, shape2],
    1: [shape3, shape4],
    2: [shape5, shape6],
  };

  return (
    <div className={className}>
      <img
        src={imgSrc}
        alt=""
        className="img img-responsive"
        width={350}
        height={450}
      />
      <div className="story-shape-img-1">
        <img src={shapes[shapeIdx][0]} alt="" width={206} height={243} />
      </div>
      <div className="story-shape-img-2">
        <img src={shapes[shapeIdx][1]} alt="" width={270} height={216} />
      </div>
    </div>
  );
}
