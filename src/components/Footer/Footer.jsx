const LinkComponent = ({ to, children }) => {
  return (
    <li className="mb-4">
      <a href={to} className=" hover:text-cyan-300">
        {children}
      </a>
    </li>
  );
};

const HeadingComponent = ({ children }) => {
  return (
    <h2 className="mb-6 text-sm font-semibold uppercase text-white">
      {children}
    </h2>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-inherit dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-between flex-wrap gap-15">
          <div className="mb-10 flex">
            <a href="/" className="flex items-center flex-col gap-4">
              <img src="libra-logo.png" className="h-10" alt="FlowBite Logo" />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-[18px]">
                  <a href="/" target="_blank">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/-twitter-853.svg"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/libraprintpack"
                    target="_blank"
                  >
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/-instagram-855.svg"
                    />
                  </a>
                  <a href="/" target="_blank">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/linkedin-logo.svg"
                    />
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div className="flex gap-20 flex-wrap justify-between">
            <div>
              <HeadingComponent children="Categories" />
              <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <LinkComponent to="/products" children="Incense stick box" />
                <LinkComponent to="/products" children="Metalic sticker" />
                <LinkComponent to="/products" children="Perfume Box" />
                <LinkComponent to="/products" children="Pharma box" />
                <LinkComponent to="/products" children="Packaging" /> <br />
              </ul>
            </div>
            <div>
              <HeadingComponent children="Pages" />
              <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <LinkComponent to="/about" children="About Us" />
                <LinkComponent to="/products" children="Shop" />
                <LinkComponent to="/inquiry" children="Contact Us" />
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="w-full text-center">
          <span className="text-sm text-gray-400 text-center dark:text-gray-400">
            © {year}{" "}
            <a href="/" className="hover:text-cyan-300">
              Libra Communiction
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
