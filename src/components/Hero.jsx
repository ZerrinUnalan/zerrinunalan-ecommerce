import HeroLogo from "../assets/col-md-6.png";

export const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="flex basis-[95%] flex-col bg-gradient-custom pl-14">
        <div className="flex items-center basis-[90%] pl-14">
          <div className="basis-1/2">
            <p className="font-bold text-base text-hoverTextcolor py-4">
              SUMMER 2024
            </p>
            <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px]">
              NEW COLLECTION
            </h1>
            <p className="font-normal text-xl text-secondTextcolor py-4 max-w-xs">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="bg-buttonPrimarycolor text-white font-bold text-2xl w-[221px] h-[62px] p-[15px_40px] rounded-[5px] gap-[10px]">
              SHOP NOW
            </button>
          </div>
          <div className="basis-1/2 relative z-10">
            <img
              className="w-full min-w-[328px] relative"
              src={HeroLogo}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
