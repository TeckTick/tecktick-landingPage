const Partner = ({ id, img, name }) => {
  const image = img[name.toLowerCase()];
  return (
    <div key={id} className="flex items-center justify-center h-[36px] w-fit mx-auto">
      <img src={image} alt={name} className="object-cover w-full h-full" />
    </div>
  );
};

export default Partner;
