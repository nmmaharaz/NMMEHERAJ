import html from "../../public/html.png"
import css from "../../public/csslogo.png"
import tailwind from "../../public/tailwind-removebg-preview.png"
import js from "../../public/js.webp"
import react from "../../public/reactjs.png"
import next from "../../public/next.png"
import node from "../../public/nodejs.png"

const Skill = () => {
    return (
        <div className="bg-[#141119] py-12 lg:py-0 min-h-screen flex items-center">
            <div className="w-10/12 mx-auto">
            <p className="text-center"><span className="text-[#8750f7] text-5xl text-center font-extrabold">My</span><span className="text-5xl font-extrabold text-[#b7a0e4]"> Skills</span></p>
            <p className="text-lg text-center text-gray-300 mt-4 mb-7">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 *:p-4">
                <div className="bg-[#220f36] hover:bg-[#2f1452] transition duration-300 rounded-2xl flex flex-col justify-between">
                    <img src={html} alt="" />
                    <p className=" text-gray-500 text-2xl font-extrabold text-center">97%</p>
                </div>
                <div className="bg-[#220f36] hover:bg-[#2f1452] transition duration-300  rounded-2xl flex flex-col justify-between">
                    <img src={css} alt="" />
                    <p className="text-gray-500 text-2xl font-extrabold text-center">98%</p>
                </div>
                <div className="bg-[#220f36] hover:bg-[#2f1452] transition duration-300  rounded-2xl flex flex-col justify-between">
                    <img src={tailwind} alt="" />
                    <p className="text-gray-500 text-2xl font-extrabold text-center">100%</p>
                </div>
                <div className="bg-[#220f36] hover:bg-[#2f1452] transition duration-300  rounded-2xl flex flex-col justify-between">
                    <img src={js} alt="" />
                    <p className="text-gray-500 text-2xl font-extrabold text-center">89%</p>
                </div>
                <div className="bg-[#220f36] hover:bg-[#2f1452] transition duration-300  rounded-2xl flex flex-col justify-between">
                    <img src={react} alt="" />
                    <p className="text-gray-500 text-2xl font-extrabold text-center">91%</p>
                </div>
                <div className="bg-[#220f36] hover:bg-[#2f1452]  transition duration-300 rounded-2xl flex flex-col justify-between">
                    <img src={next} alt="" />
                    <p className="text-gray-500 text-center text-2xl font-extrabold">82%</p>
                </div>
                <div className="bg-[#220f36] hover:bg-[#2f1452]  transition duration-300 rounded-2xl flex flex-col justify-between">
                    <img src={node} alt="" />
                    <p className="text-gray-500 text-center text-2xl font-extrabold">77%</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Skill;