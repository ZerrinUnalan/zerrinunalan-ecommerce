import features1 from "../assets/features1.svg";
import features2 from "../assets/features2.svg";
import features3 from "../assets/features3.svg";

export default function Features() {
  return (
    <section className="flex flex-col items-center gap-32 pt-24 w-full h-[1214px] lg:w-full lg:h-[632px]">
      <div className="flex flex-col items-center gap-2 w-[248px] h-[122px] lg:w-full">
        <h4 className="text-footerColor text-xl">Featured Products</h4>
        <h3 className="text-textColor text-2xl font-bold ">
          THE BEST SERVICES
        </h3>
        <p className="text-footerColor text-l">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="lg:flex lg:flex-row flex  lg:justify-around flex flex-col gap-32 w-[1045px] h-[274px]">
        <div className="flex flex-col justify-between  items-center gap-4  lg:w-full">
          <img src={features1} alt="features1" />

          <h3 className="text-darkBackground text-2xl font-bold">Easy Wins</h3>
          <p className="text-secondTextcolor text-center text-sm">
            Get your best looking smile now!
          </p>
        </div>
        <div className="flex flex-col  justify-between items-center gap-4 lg:w-full">
          <img src={features2} alt="features2" />

          <h3 className="text-darkBackground text-2xl font-bold">Concrete</h3>
          <p className="text-secondTextcolor text-center text-sm">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 lg:w-full">
          <img src={features3} alt="features3" />

          <h3 className="text-darkBackground text-2xl font-bold">
            Hack Growth
          </h3>
          <p className="text-secondTextcolor text-center text-sm">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>
    </section>
  );
}
