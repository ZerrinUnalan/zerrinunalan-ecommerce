import HeroLogo from "../assets/col-md-6.png";

export const Hero = () => {
  return (
    <section className="fa-fonts flex justify-center z-[-2] rounded-2xl bg-gradient-to-r from-heroLeftcolor to-heroRightcolor ">
      <div className="flex basis-[95%] flex-col bg-gradient-custom p-4 md:pl-14">
        <div className="flex flex-col md:flex-row items-center md:basis-[90%] p-4 md:pl-14">
          <div className="basis-1/2 mb-4 md:mb-0">
            <p className="font-bold text-base text-hoverTextcolor py-4">
              SUMMER 2024
            </p>
            <h1 className="font-bold text-[32px] md:text-[58px] leading-[40px] md:leading-[80px] tracking-[0.2px]">
              NEW COLLECTION
            </h1>
            <p className="font-normal text-xl text-secondTextcolor py-4 max-w-xs">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="bg-buttonPrimarycolor text-white font-bold text-2xl w-full md:w-[221px] h-[62px] p-[15px_40px] rounded-[5px] gap-[10px]">
              SHOP NOW
            </button>
          </div>
          <div className="basis-1/2 relative z-10">
            <img
              className="w-full min-w-[200px] md:min-w-[328px] relative"
              src={HeroLogo}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
