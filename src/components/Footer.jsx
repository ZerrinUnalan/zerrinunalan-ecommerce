export default function Footer() {
  return (
    <>
      <div className="w-full mx-auto font-display">
        <div className="w-full  bg-[#FAFAFA]">
          <div className="mx-auto flex flex-col w-5/6 md:flex-row md:justify-between md:items-center bg-[] pt-16 pb-12 gap-8 ">
            <h1 className="font-bold text-2xl text-textColor">Bandage</h1>
            <div className="flex gap-5">
              <i
                className="fa-brands fa-facebook fa-xl"
                style={{ color: "#23a6f0" }}
              ></i>
              <i
                className="fa-brands fa-instagram fa-xl"
                style={{ color: "#23a6f0" }}
              ></i>
              <i
                className="fa-brands fa-twitter fa-xl"
                style={{ color: "#23a6f0" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="w-5/6 flex flex-col pt-16 pb-16 gap-8 mx-auto md:flex-row lg:flex-row ">
          <div className="flex flex-col gap-3 md:w-1/6">
            <h1 className="font-bold text-textColor mb-2">Company Info</h1>
            <h2 className="font-bold text-sm text-secondTextcolor">About Us</h2>
            <h2 className="font-bold text-sm text-secondTextcolor">Carrier</h2>
            <h2 className="font-bold text-sm text-secondTextcolor">
              We are hiring
            </h2>
            <h2 className="font-bold text-sm text-secondTextcolor">Blog</h2>
          </div>
          <div className="flex flex-col gap-3 md:w-1/6">
            <h1 className="font-bold text-textColor mb-2">Legal</h1>
            <h2 className="font-bold text-sm text-secondTextcolor">About Us</h2>
            <h2 className="font-bold text-sm text-secondTextcolor">Carrier</h2>
            <h2 className="font-bold text-sm text-secondTextcolor">
              We are hiring
            </h2>
            <h2 className="font-bold text-sm text-secondTextcolor">Blog</h2>
          </div>
          <div className="flex flex-col gap-3 md:w-1/6">
            <h1 className="font-bold text-textColor mb-2">Features</h1>
            <h2 className="font-bold text-sm text-secondTextcolor">
              Business Marketing
            </h2>
            <h2 className="font-bold text-sm text-secondTextcolor">
              User Analytic
            </h2>
            <h2 className="font-bold text-sm text-secondTextcolor">
              Live Chat
            </h2>
            <h2 className="font-bold text-sm text-secondTextcolor">
              Unlimited Support
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:w-1/6">
            <h1 className="font-bold text-textColor mb-2">Resources</h1>
            <h2 className="font-bold text-sm text-secondTextcolor">
              IOS & Android
            </h2>
            <h2 className="font-bold text-sm text-secondTextcolor">
              Watch a Demo
            </h2>
            <h2 className="font-bold text-sm text-secondTextcolor">
              Customers
            </h2>
            <h2 className="font-bold text-sm text-secondTextcolor">API</h2>
          </div>
          <div className="w-full md:w-1/3 flex flex-col mx-auto">
            <h1 className="font-bold text-textColor mb-5">Get In Touch</h1>
            <div className="flex w-full md:flex-col lg:flex-row">
              <input
                className="text-secondTextcolor font-sm bg-[#F9F9F9] pl-4 py-4 border border-[#E6E6E6] rounded-tl-md rounded-bl-md w-2/3 md:w-full"
                type="text"
                placeholder="Your Email"
              />
              <button className="text-sm bg-[#23A6F0] text-white py-4 px-4 border border-[#E6E6E6] rounded-tr-md rounded-br-md w-1/3 md:w-full">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-secondTextcolor mt-2">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>

        <div className="w-full bg-[#FAFAFA] text-secondTextcolor text-sm font-bold text-center md:text-start">
          <div className=" w-5/12 md:w-5/6 mx-auto py-12">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </div>
    </>
  );
}
