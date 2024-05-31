export const NavBar = () => {
  return (
    <section className="text-sm">
      <address className="bg-headerBlue flex justify-between px-5 py-2">
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
    </section>
  );
};
