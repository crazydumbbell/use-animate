import { useAnimate } from "../hooks";

const ImageComp = ({ animateName, image, alt }) => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <img
      ref={detectedRef}
      className={`w-96 h-96 ${
        isObserve && `animate__animated animate__infinite ${animateName}`
      } `}
      src={`./images/${image}`}
      alt={`${alt}`}
    />
  );
};

export default ImageComp;
