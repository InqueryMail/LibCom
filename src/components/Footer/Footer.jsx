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

const SocialMediaComponent = ({ src, alt, href }) => {
  return (
    <a href={href} target="_blank">
      <img className="h-6 w-6 relative min-h-[24px]" loading="lazy" src={src} />
    </a>
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
              <img src="/libra-logo.png" className="h-10" alt="FlowBite Logo" />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-[18px]">
                  <SocialMediaComponent src={"/-twitter-853.svg"} href={"/"} />
                  <SocialMediaComponent
                    src={"/-instagram-855.svg"}
                    href={"https://www.instagram.com/libraprintpack"}
                  />
                  <SocialMediaComponent src={"/linkedin-logo.svg"} href={"/"} />
                </div>
              </div>
            </a>
          </div>
          <div className="flex gap-20 flex-wrap justify-between">
            <div>
              <HeadingComponent children="Categories" />
              <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <LinkComponent to="/list/0" children="Shopping Bags" />
                <LinkComponent
                  to="/list/1"
                  children="Ice cream and Kufli Industries"
                />
                <LinkComponent to="/list/2" children="Food Packaging" />
                <LinkComponent to="/list/3" children="Tea Industries" />
                <LinkComponent to="/list/4" children="DryFruit Packaging" />
                <LinkComponent to="/list/5" children="Comestics Packaging" />
                <br />
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
            © {year + " "}
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
