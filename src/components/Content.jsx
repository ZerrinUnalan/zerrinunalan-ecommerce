import content1 from "../assets/content1.png";
import content2 from "../assets/content2.png";

export const Content = () => {
  return (
    <>
      <section className="content flex flex-col py-16 gap-8 md:gap-0 md:flex-row md:w-4/5 lg:pl-8 items-center justify-between mx-auto">
        <div className="flex flex-row gap-4">
          <img
            className="lg:w-[217px] lg:h-[498px]"
            src={content1}
            alt="content1"
          />
          <img
            className="lg:w-[280px] lg:h-[498px]"
            src={content2}
            alt="content2"
          />
        </div>
        <div className="flex flex-col w-3/5 mx-auto gap-4 md:w-2/5">
          <h2 className=" text-buttonPrimarycolor font-bold">
            Featured Products
          </h2>
          <h1 className="text-darkBackground font-bold text-[40px]">
            We love what we do
          </h1>
          <p className="text-secondTextcolor text-sm ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <p className="text-secondTextcolor text-sm ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </section>
    </>
  );
};
