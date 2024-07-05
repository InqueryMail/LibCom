const ContactInfo = ({
  className = "",
  contact,
  redirect,
  target,
  heading,
  icon,
}) => {
  return (
    <div
      className={`self-stretch rounded-2xl bg-palegoldenrod overflow-hidden flex flex-row items-center justify-start py-[9px] px-[11px] gap-[25px] text-left text-6xl text-darkslategray font-roboto border-[1px] border-solid border-whitesmoke-200 mq450:flex-wrap ${className}`}
    >
      <div className="rounded-2xs bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-[17px] px-[19px] w-[86] h-[83]">
        <div className="w-[48px] h-[48.99px] flex justify-center items-center">
          <img className="w-[48px] h-[48.99px] absolute" alt="" src={icon} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border min-w-[140px]">
        <h3 className="m-0 relative text-[25px] font-extrabold font-inherit inline-block mq450:text-xl">
          <p className="m-0">{heading}</p>
        </h3>
        <div className="w-[179px] relative text-lg leading-[30px] font-open-sans text-dimgray-100 inline-block whitespace-nowrap">
          <a
            className="text-[inherit]"
            href={`${redirect}${contact}`}
            target={target}
          >
            {contact}
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutUs = ({ className = "" }) => {
  return (
    <div
      className={`w-full box-border max-w-full overflow-hidden flex flex-col items-center justify-center p-2.5 leading-[normal] tracking-[normal] border-r-[10px] border-solid border-burlywood-200 border-l-[10px] ${className}`}
    >
      <main className="w-[1400px] flex flex-col items-center justify-start gap-[47px] max-w-full mq750:gap-[23px]">
        <section className="self-stretch h-[98px] relative text-45xl font-salsa text-silver-100 text-center inline-block shrink-0 mq450:text-19xl mq1050:text-32xl">
          About Us
        </section>
        <section className="self-stretch flex flex-row items-center justify-center gap-[75px] max-w-full text-left text-31xl text-burlywood-100 font-roboto mq750:gap-[37px] mq450:gap-[19px] mq1150:flex-wrap">
          <img
            className="w-[623px] relative rounded-6xl max-h-full object-cover min-h-[640px] max-w-full mq1150:flex-1"
            loading="lazy"
            alt=""
            src="/frame-57-824@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-center py-[43.5px] px-0 box-border gap-[34px] min-w-[456px] max-w-full mq750:gap-[17px] mq750:pt-7 mq750:pb-7 mq750:box-border mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-center gap-[10px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit mq450:text-11xl mq1050:text-21xl">
                Libra Communication: Where design meets communication.
              </h1>
              <div className="w-[690px] relative text-lg leading-[165.4%] font-open-sans text-silver-200 inline-block max-w-full">
                Libra Communication was established in 1998 with the goal of
                revolutionizing the way people and businesses communicate. Under
                the leadership of our CEO, Rakesh Vaghela, we have consistently
                pushed the boundaries of innovation in the communication
                industry. Over the years, we have grown into a trusted name in
                the field, known for our expertise, reliability, and dedication
                to excellence.
              </div>
            </div>
            <div className="w-[372px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full">
              <ContactInfo
                contact="rakesh@libracom.org"
                redirect="mailto:"
                target="_blank"
                heading="Mail"
                icon="/mail.svg"
              />
              <ContactInfo
                contact="+91 9825700741"
                redirect="tel:"
                target="_blank"
                heading="Contact Us"
                icon="/group-28-841.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
