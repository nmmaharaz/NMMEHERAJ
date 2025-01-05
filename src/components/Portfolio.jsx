import { HiOutlineExternalLink } from "react-icons/hi";
import car from "../../public/car.png";
import gadget from "../../public/gadget.jpg"
import discount from "../../public/discount.jpg"
import { DiGithubBadge } from "react-icons/di";
const Portfolio = () => {
  return (
    <div className="bg-[#141119] py-12 lg:py-0 min-h-screen flex items-center">
      <div className="w-10/12 mx-auto">
        <p className="text-center mb-7">
          <span className="text-[#8750f7] text-5xl text-center font-extrabold">
            My
          </span>
          <span className="text-5xl font-extrabold text-[#b7a0e4]">
            {" "}
            Project
          </span>
        </p>
        <div className=" grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          <div className=" rounded-2xl bg-[#220f36] hover:bg-[#2f1452] transition duration-300 shadow-xl">
            <figure className="px-8 pt-8">
              <img src={car} alt="Shoes" className="rounded-xl h-64" />
            </figure>
            <div className="px-8 pb-8 pt-8">
              <p className="text-[#8750f7] text-2xl font-bold">Rental Car</p>
              <p className="text-white py-2 font-semibold">
                A responsive car rental website.
              </p>
                <div className="flex items-center justify-between">
                  <a href="https://alta-car-rentals.web.app/" target="_blank" className="flex items-center cursor-pointer">
                    <HiOutlineExternalLink className="mr-1 text-2xl text-[#8750f7]" /> <p className="text-[#8750f7]">Live Link</p>
                  </a>
                  <a href="https://github.com/programming-hero-web-course2/b10a11-client-side-nmmaharaz" target="_blank" className="cursor-pointer">
                   <DiGithubBadge className="text-[#8750f7] hover:text-white text-3xl"/>
                  </a>
                </div>
            </div>
          </div>
          <div className="card bg-[#220f36] hover:bg-[#2f1452] transition duration-300 shadow-xl">
            <figure className="px-8 pt-8">
              <img src={gadget} alt="Shoes" className="rounded-xl h-64" />
            </figure>
            <div className="px-8 pb-8 pt-4">
              <p className="text-[#8750f7] text-2xl font-bold">Gadget Shop</p>
              <p className="text-white font-semibold py-2">
                A responsive car rental website.
              </p>
                <div className="flex items-center justify-between">
                  <a href="https://silver-manatee-fef76c.netlify.app/" target="_blank" className="flex items-center cursor-pointer">
                    <HiOutlineExternalLink className="mr-1 text-2xl text-[#8750f7]" /> <p className="text-[#8750f7]">Live Link</p>
                  </a>
                  <a href="https://github.com/programming-hero-web-course1/b10-a9-authentication-nmmaharaz" target="_blank" className="cursor-pointer">
                   <DiGithubBadge className="text-[#8750f7] hover:text-white text-3xl"/>
                  </a>
                </div>
            </div>
          </div>
          <div className="card bg-[#220f36] hover:bg-[#2f1452] transition duration-300 shadow-xl">
            <figure className="px-8 pt-8">
              <img src={discount} alt="Shoes" className="rounded-xl h-64" />
            </figure>
            <div className="px-8 pb-8 pt-4">
              <p className="text-[#8750f7] text-2xl font-bold">Game Review</p>
              <p className="text-white font-semibold py-2">
                A responsive car rental website.
              </p>
                <div className="flex items-center justify-between">
                  <a href="https://chill-game-8b0b0.web.app/" target="_blank" className="flex items-center cursor-pointer">
                    <HiOutlineExternalLink className="mr-1 text-2xl text-[#8750f7]" /> <p className="text-[#8750f7]">Live Link</p>
                  </a>
                  <a href="https://github.com/programming-hero-web-course2/b10-a10-client-side-nmmaharaz" target="_blank" className="cursor-pointer">
                   <DiGithubBadge className="text-[#8750f7] hover:text-white text-3xl"/>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
