const TestmonialCard = ({ avator, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-5 w-full max-w-[745px] text-center mx-auto text-[#303030]">
      <img
        src={avator}
        alt=""
        className="w-[90px] h-[90px] sm:w-[102px] sm:h-[102px] object-cover  mx-auto rounded-full border-4 border-white mt-[-70px]"
      />

      <h2 className="font-lato font-bold text-xl sm:text-[28px] mb-5 mt-3">
        {title}
      </h2>
      <p className="font-montserrat mb-10 text-sm sm:text-xl">{description}</p>
    </div>
  );
};

export default TestmonialCard;
