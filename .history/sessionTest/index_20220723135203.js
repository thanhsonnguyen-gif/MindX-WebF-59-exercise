import { useState } from "react";
const Image = ({ src, opacity }) => {
  const [isHovered, setIsHovered] = useState();
  return (
    <div
      style={{ opacity: isHovered ? opacity : 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {" "}
      <img src={src} alt="img" />{" "}
    </div>
  );
};
export default function Image() {
  return <Image src="image" opacity={0.5} />;
}
