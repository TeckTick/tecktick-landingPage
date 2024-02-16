import notification from "../../assets/images/notification.svg";
import media from "../../assets/images/media.svg";
import support from "../../assets/images/support.svg";
import community from "../../assets/images/community.svg";
import Partner from "./Partner";
import { partners } from "../../data/partners";

const Howitworks = () => {
  return (
    <section className="p-5 relative overflow-hidden max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 items-end justify-center mx-auto w-full h-[128px] mb-5">
        {partners.map((partner) => (
          <Partner key={partner.id} {...partner} />
        ))}
      </div>
      <hr className="mx-auto z-10 bg-black w-[90%] h-[2px] mt-20" />

      <section className="py-8 flex flex-col items-center justify-center gap-12">
        <h1 className="text-[24px] font-medium sm:text-[36px] font-montserrat text-center lg:text-[40px] text-[#5b5b80]">
          How It Works
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:items-start px-5 mx-auto w-full gap-5">
          <article className="how_it_works_article">
            <div className="how_it_works_image_container">
              <img src={media} alt="icon" className="how_it_works_image" />
            </div>
            <h2 className="how_it_works_heading">
              Launch into the TeckTick Galaxy
            </h2>
            <p className="how_it_works_paragraph ">
              Navigate through the vast expanse of TeckTick's universe and
              select your desired destination. Each portal offers a unique
              adventure tailored to your interests and aspirations.
            </p>
          </article>

          <article className="how_it_works_article">
            <div className="how_it_works_image_container">
              <img
                src={notification}
                alt="icon"
                className="how_it_works_image"
              />
            </div>
            <h2 className="how_it_works_heading">
              Connect with the Community Cosmos
            </h2>
            <p className="how_it_works_paragraph text-center">
              Immerse yourself in the dynamic Community Cosmos, where innovation
              thrives and connections flourish. Engage with like-minded cosmic
              explorers, share insights, and fuel the spirit of collaboration.
            </p>
          </article>

          <article className="how_it_works_article">
            <div className="how_it_works_image_container">
              <img src={support} alt="icon" className="how_it_works_image" />
            </div>
            <h2 className="how_it_works_heading">Explore Creative Realms</h2>
            <p className="how_it_works_paragraph">
              Venture into the Hackathon space, a pulsating hub of creativity
              and competition. Join forces with fellow cosmic coders, unleash
              your ingenuity, and compete for cosmic acclaim.
            </p>
          </article>

          <article className="how_it_works_article">
            <div className="how_it_works_image_container">
              <img src={community} alt="icon" className="how_it_works_image" />
            </div>
            <h2 className="how_it_works_heading">
              Engage with the TeckTick Cosmos
            </h2>
            <p className="how_it_works_paragraph">
              Journey through the Merchandise Cosmos and discover stellar
              treasures adorned with the TeckTick insignia. Elevate your cosmic
              style with exclusive merchandise that celebrates your passion for
              innovation.
            </p>
          </article>
        </div>
      </section>
      <div className="blur m-5 mx-auto absolute"></div>
    </section>
  );
};

export default Howitworks;
