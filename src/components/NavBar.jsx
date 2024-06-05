export const NavBar = () => {
  return (
    <section className="text-sm">
      <address className="bg-darkBackground text-white flex justify-between px-5 py-2">
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-phone "></i>
            <p>(225) 555-0118</p>
          </div>
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-envelope"></i>
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Follow Us :</p>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-x-twitter"></i>
        </div>
      </address>
      <article className="flex justify-between px-5 py-3 items-center">
        <div className="flex gap-9  items-center">
          <h1 className="text-2xl">Bandage</h1>
          <nav className="flex text-[#737373] gap-2">
            <a href="">Home</a>
            <a href="">
              Shop{" "}
              <span>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Pages</a>
          </nav>
        </div>
        <div className="flex gap-5 text-[#23A6F0] items-center">
          <div className="">
            <i className="fa-regular fa-user"> </i>
            <span> </span>
            <button> Login</button>/<button>Register</button>
          </div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-regular fa-heart"></i>
        </div>
      </article>
    </section>
  );
};
