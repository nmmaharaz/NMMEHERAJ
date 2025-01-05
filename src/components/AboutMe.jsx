import photo from "../../public/image.png"
const AboutMe = () => {
    return (
      <div className="bg-black min-h-screen py-12 lg:py-0 flex items-center">
        <div className="w-10/12 mx-auto">
        <p className="text-center mb-7">
          <span className="text-[#8750f7] text-5xl text-center font-extrabold">
            About
          </span>
          <span className="text-5xl font-extrabold text-[#b7a0e4]">
            {" "}
            Me
          </span>
        </p>
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 mb-10 lg:mb-0 flex items-center justify-center ">
                <div className="bg-[#141119] p-8 rounded-2xl block">
                <img className="bg-[#4D4D4F] rounded-2xl" src={photo} alt="" />
                </div>
            </div>
            <div className="lg:w-2/3 lg:ml-16 text-2xl flex bg-[#141119] rounded-2xl p-8 text-[#8750f7]">
            Hello! I am Nadimul Mawla Meheraj, a passionate and dedicated Front-end developer with a knack for creating visually appealing, responsive, and dynamic web applications. With expertise in modern front-end technologies like React, Tailwind CSS, and DaisyUI & others UI components, I strive to deliver seamless user experiences. On the backend, I leverage Node.js and MongoDB to build robust and scalable applications. Currently, I’m pursuing my studies while honing my skills to stay ahead in the ever-evolving tech landscape. Whether it's developing innovative platforms like Service Orbit or crafting sleek designs for Film Fusion, I thrive on solving challenges and turning ideas into reality. Let’s collaborate to bring your vision to life!
            </div>

        </div>
        </div>
      </div>
    );
};

export default AboutMe;