import "../App.css";

export const ShopCard = () => {
  return (
    <section className="text-sm">
      <div className="flex w-5/6 mx-auto flex-col gap-4 py-12 md:flex-row">
        <div className="bg-[url('../../src/assets/cardimage1.jpg')] basis-1/2 w-full  mx-auto bg-cover bg-center flex items-end pt-[340px]">
          <div className="bg-[#2D8BC0] bg-opacity-75 p-10">
            <h2 className="text-white text-2xl font-bold py-6">
              Top Product Of the Week
            </h2>
            <button className="text-white font-bold text-sm border border-white px-8 py-4 rounded-[4px]">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 basis-1/2">
          <div className="bg-[url('../../src/assets/cardimage2.png')] w-full   mx-auto bg-cover bg-center flex items-end pt-[120px]">
            <div className="bg-[#2D8BC0] bg-opacity-75 p-10">
              <h2 className="text-white text-2xl font-bold py-6">
                Top Product Of the Week
              </h2>
              <button className="text-white font-bold text-sm border border-white px-8 py-4 rounded-[4px]">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
          <div className="bg-[url('../../src/assets/cardimage3.jpg')] w-full   mx-auto bg-cover bg-center flex items-end pt-[120px]">
            <div className="bg-[#2D8BC0] bg-opacity-75 p-10">
              <h2 className="text-white text-2xl font-bold py-6">
                Top Product Of the Week
              </h2>
              <button className="text-white font-bold text-sm border border-white px-8 py-4 rounded-[4px]">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
