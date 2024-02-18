const Partner = ({ id, img, name }) => {
  const image = img[name.toLowerCase()];

  return (
    <div
      key={id}
      className="flex items-end justify-end h-[36px] mx-20"
    >
      <img src={image} alt={name} className="object-cover w-full h-full" />
    </div>
  );
};

export default Partner;
