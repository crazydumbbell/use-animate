import { useAnimate } from "../hooks";

const C = ({}) => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <div
      ref={detectedRef}
      className="bg-blue-100 min-h-screen flex flex-col justify-center items-center"
    >
      <img
        className={`w-96 h-96 ${
          isObserve && "animate__animated animate__rubberBand animate__infinite"
        } `}
        src="./img/frog.webp"
        alt="owl"
      />
    </div>
  );
};

export default C;
