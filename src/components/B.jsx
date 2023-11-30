import ImageComp from "./ImageComp.jsx";

const B = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center gap-20">
      <ImageComp animateName="animate__bounce" image="frog.webp" alt="frog" />
      <ImageComp animateName="animate__bounce" image="frog.webp" alt="frog" />
    </div>
  );
};

export default B;
