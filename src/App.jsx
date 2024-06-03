import React from "react";
import logo from "./images/logo.png";
import steak from "./images/steak.png";
import home from "./images/home.png";
import scooter from "./images/scooter.png";
import smile from "./images/smile.png";
import woman from "./images/woman.png";
import chicken from "./images/chicken.png";
import salad from "./images/salad.png";
import burger from "./images/burger.png";
import saladd from "./images/saladd.png";
import sallad from "./images/sallad.png";
import salladd from "./images/salladd.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Rating,
  IconButton,
} from "@material-tailwind/react";

export function App() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#home"
          className="flex items-center text-orange hover:text-orange duration-300"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#features"
          className="flex items-center text-gray hover:text-orange duration-300"
        >
          Features
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#about"
          className="flex items-center text-gray hover:text-orange duration-300"
        >
          About us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#menu"
          className="flex items-center text-gray hover:text-orange duration-300"
        >
          Menu
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#contact"
          className="flex items-center text-gray hover:text-orange duration-300"
        >
          Contact us
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 inset-x-0 z-10 h-max max-w-full rounded-none">
        <header className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <Typography
                as="a"
                href=""
                className="cursor-pointer py-1.5 font-medium"
              >
                <img src={logo} alt="logo" />
              </Typography>
              <div className="mr-4 hidden lg:block">{navList}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="lg:flex items-center gap-x-1 hidden">
                <Button
                  variant="gradient"
                  size="md"
                  className="bg-orange hover:text-orange border border-transparent hover:border-orange hover:bg-transparent font-normal duration-300"
                >
                  <span>Booking Now</span>
                </Button>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="black"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="black"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button
                variant="gradient"
                size="md"
                className="bg-orange hover:text-orange border border-transparent hover:border-orange hover:bg-transparent font-normal duration-300"
              >
                <span>Booking Now</span>
              </Button>
            </div>
          </MobileNav>
        </header>
      </Navbar>
      <main className="flex flex-col gap-20">
        <section className="container flex flex-row items-center justify-center pt-20 2xl:pt-0 gap-40 w-full 2xl:justify-between">
          <div className="max-w-[560px] flex flex-col 2xl:items-start items-center gap-10 2xl:text-left text-center">
            <h1 className="text-5xl font-semibold">
              Making time a good time by making food the good food.
            </h1>
            <p className="text-gray">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment,
            </p>
            <div className="flex flex-row gap-10">
              <Button
                variant="gradient"
                className="bg-orange hover:text-orange border border-transparent hover:border-orange hover:bg-transparent font-normal duration-300"
              >
                Order Now
              </Button>
              <Button
                variant="gradient"
                className="bg-orange hover:text-orange border border-transparent hover:border-orange hover:bg-transparent font-normal duration-300"
              >
                Food Details
              </Button>
            </div>
          </div>
          <div className="2xl:flex hidden">
            <img src={steak} alt="steak" width={800} />
          </div>
        </section>
        <section className="container flex flex-col items-center gap-3">
          <span id="features" className="text-orange">
            FEATURES
          </span>
          <h1 className="text-3xl font-semibold">Food with a New Passion</h1>
        </section>
        <section className="container flex flex-wrap flex-row items-center xl:justify-between justify-center gap-16">
          <div className="flex flex-col justify-center items-center text-center max-w-[300px] max-h-[228] gap-4">
            <div className="rounded-full bg-pink-50 p-5">
              <img src={home} alt="home" />
            </div>
            <h1 className="font-semibold text-2xl">Quality Food</h1>
            <p className="text-gray">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center max-w-[300px] max-h-[228] gap-4">
            <div className="rounded-full bg-pink-50 p-5">
              <img src={scooter} alt="home" />
            </div>
            <h1 className="font-semibold text-2xl">Food Delivery</h1>
            <p className="text-gray">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center max-w-[300px] max-h-[228] gap-4">
            <div className="rounded-full bg-pink-50 p-5">
              <img src={smile} alt="home" />
            </div>
            <h1 className="font-semibold text-2xl">Super Taste</h1>
            <p className="text-gray">
              It can be a very secure path to earn good money and make you very
              successful creative entrepreneur.
            </p>
          </div>
        </section>
        <section className="container flex flex-row xl:justify-between justify-center xl:text-left text-center items-center">
          <div className="xl:flex hidden">
            <img src={woman} alt="woman" className="rounded-[40px]" />
          </div>
          <div className="max-w-[450px] gap-10 flex flex-col items-center xl:items-start">
            <span id="about" className="text-orange">
              ABOUT US
            </span>
            <h1 className="font-semibold text-3xl">
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.{" "}
            </h1>
            <p className="text-gray">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </p>
            <Button
              variant="gradient"
              size="md"
              className="bg-orange hover:text-orange border border-transparent hover:border-orange hover:bg-transparent font-normal duration-300"
            >
              <span>Read more</span>
            </Button>
          </div>
        </section>
        <section className="container flex flex-col items-center gap-7">
          <div className="flex flex-col items-center">
            <span id="menu" className="text-orange text-xl">
              MENU
            </span>
            <h1 className="text-2xl font-semibold">Food Full of treaty Love</h1>
          </div>
          <p className="text-gray max-w-[750px] text-center">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers,{" "}
          </p>
          <div className="flex flex-row flex-wrap gap-y-20 gapx-10 items-center justify-center lg:justify-between">
            <div className="max-w-[370px]">
              <img src={chicken} alt="chicken" />
              <div className="pr-7 pl-3 flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl font-semibold">Vegie Muffen</h1>
                  <span className="text-xl font-semibold">16$</span>
                </div>
                <p className="text-gray">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex items-center justify-center flex-1 h-full p-2 rounded-md bg-orange max-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <Rating value={4} readonly ratedColor="amber" />
                </div>
              </div>
            </div>

            <div className="max-w-[370px]">
              <img src={salad} alt="salad" />
              <div className="pr-7 pl-3 flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl font-semibold">Salads</h1>
                  <span className="text-xl font-semibold">12$</span>
                </div>
                <p className="text-gray">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex items-center justify-center flex-1 h-full p-2 rounded-md bg-orange max-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <Rating value={5} readonly ratedColor="amber" />
                </div>
              </div>
            </div>

            <div className="max-w-[370px]">
              <img src={burger} alt="burger" />
              <div className="pr-7 pl-3 flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl font-semibold">Burger</h1>
                  <span className="text-xl font-semibold">10$</span>
                </div>
                <p className="text-gray">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex items-center justify-center flex-1 h-full p-2 rounded-md bg-orange max-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <Rating value={3} readonly ratedColor="amber" />
                </div>
              </div>
            </div>

            <div className="max-w-[370px]">
              <img src={sallad} alt="salad" />
              <div className="pr-7 pl-3 flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl font-semibold">
                    Delmonico Steak dish
                  </h1>
                  <span className="text-xl font-semibold">14$</span>
                </div>
                <p className="text-gray">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex items-center justify-center flex-1 h-full p-2 rounded-md bg-orange max-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <Rating value={2} readonly ratedColor="amber" />
                </div>
              </div>
            </div>

            <div className="max-w-[370px]">
              <img src={saladd} alt="salad" />
              <div className="pr-7 pl-3 flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl font-semibold">Egg Masala</h1>
                  <span className="text-xl font-semibold">9$</span>
                </div>
                <p className="text-gray">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex items-center justify-center flex-1 h-full p-2 rounded-md bg-orange max-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <Rating value={4} readonly ratedColor="amber" />
                </div>
              </div>
            </div>

            <div className="max-w-[370px]">
              <img src={salladd} alt="salad" />
              <div className="pr-7 pl-3 flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                  <h1 className="text-xl font-semibold">Peach Melba dish</h1>
                  <span className="text-xl font-semibold">15$</span>
                </div>
                <p className="text-gray">
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex items-center justify-center flex-1 h-full p-2 rounded-md bg-orange max-w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <Rating value={3} readonly ratedColor="amber" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center bg-pink-50 py-10 gap-8">
          <span id="contact" className="text-orange text-xl">
            contact
          </span>
          <p className="text-[25px] font-semibold max-w-[600px] text-center">
            Food Stalls with Persons but also specialized equipment, Skills to
            manage.
          </p>
          <div className="flex flex-row items-center">
            <input
              type="text"
              placeholder="Enter your message"
              className="bg-white rounded-l-lg px-5 md:px-10 py-3"
            />
            <Button
              variant="gradient"
              size="lg"
              className="bg-orange hover:text-orange border border-transparent hover:border-orange hover:bg-transparent font-normal duration-300"
            >
              Send
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-footer">
        <div className="container flex flex-wrap sm:flex-nowrap flex-row justify-center gap-10 sm:gap-0 sm:justify-between py-10">
          <div className="hidden md:flex flex-col gap-3">
            <img src={logo} alt="logo" width={100} />
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              www.company name.com
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              companyname@gmail.com
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Phone: +7 485-118-03-25
            </span>
          </div>
          <div className="flex flex-col gap-3 min-w-28">
            <span className="text-white">Home</span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Landingpage
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Documentation
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Referral Program
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              UI & UX Design
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Web Design
            </span>
          </div>
          <div className="flex flex-col gap-3 min-w-28">
            <span className="text-white">Menu</span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Landingpage
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Documentation
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Referral Program
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              UI & UX Design
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Web Design
            </span>
          </div>
          <div className="flex flex-col gap-3 min-w-28">
            <span className="text-white">Company</span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Landingpage
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Documentation
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Referral Program
            </span>
            <span className="text-blue-gray-300 hover:text-green-400 cursor-pointer duration-300">
              Web Design
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
