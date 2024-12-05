//fotoları import et
export const ShopContainer = () => {
  return (
    <>
      <section className="flex justify-center bg-bgGray py-4">
        <div className="flex flex-col justify-center basis-[85%] gap-4 pb-6">
          <div className="flex max-md:flex-col justify-between items-center px-4">
            <h3 className="font-bold text-2xl">Shop</h3>

            <div className="py-5">
              <a className="font-bold text-sm hover:underline" href="/">
                Home
              </a>
              <i className="fa-solid fa-chevron-right m-2 text-muted"></i>
              <a
                className="font-bold text-sm text-muted hover:underline"
                href="/shop"
              >
                Shop
              </a>
            </div>
          </div>
          <div className="flex justify-between max-lg:justify-center flex-wrap gap-4">
            <div className="relative basis-[18%] max-lg:basis-[30%] max-md:basis-[45%] max-sm:basis-[85%] aspect-[1/1.1] max-md:aspect-[1.1/1]">
              <img
                className="w-full h-full object-cover hover:opacity-75"
                src={shop1}
                alt="shop.jpg"
              />
              <div className="absolute flex flex-col bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%] text-white">
                <h3 className="font-bold text-base">CLOTHS</h3>
                <p className="font-normal text-sm">5 Items</p>
              </div>
            </div>
            <div className="relative basis-[18%] max-lg:basis-[30%] max-md:basis-[45%] max-sm:basis-[85%] aspect-[1/1.1] max-md:aspect-[1.1/1]">
              <img
                className="w-full h-full object-cover hover:opacity-75"
                src={shop2}
                alt="shop.jpg"
              />
              <div className="absolute flex flex-col bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%] text-white">
                <h3 className="font-bold text-base">CLOTHS</h3>
                <p className="font-normal text-sm">5 Items</p>
              </div>
            </div>
            <div className="relative basis-[18%] max-lg:basis-[30%] max-md:basis-[45%] max-sm:basis-[85%] aspect-[1/1.1] max-md:aspect-[1.1/1]">
              <img
                className="w-full h-full object-cover hover:opacity-75"
                src={shop3}
                alt="shop.jpg"
              />
              <div className="absolute flex flex-col bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%] text-white">
                <h3 className="font-bold text-base">CLOTHS</h3>
                <p className="font-normal text-sm">5 Items</p>
              </div>
            </div>
            <div className="relative basis-[18%] max-lg:basis-[30%] max-md:basis-[45%] max-sm:basis-[85%] aspect-[1/1.1] max-md:aspect-[1.1/1]">
              <img
                className="w-full h-full object-cover hover:opacity-75"
                src={shop4}
                alt="shop.jpg"
              />
              <div className="absolute flex flex-col bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%] text-white">
                <h3 className="font-bold text-base">CLOTHS</h3>
                <p className="font-normal text-sm">5 Items</p>
              </div>
            </div>
            <div className="relative basis-[18%] max-lg:basis-[30%] max-md:basis-[45%] max-sm:basis-[85%] aspect-[1/1.1] max-md:aspect-[1.1/1]">
              <img
                className="w-full h-full object-cover hover:opacity-75"
                src={shop5}
                alt="shop.jpg"
              />
              <div className="absolute flex flex-col bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%] text-white">
                <h3 className="font-bold text-base">CLOTHS</h3>
                <p className="font-normal text-sm">5 Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
