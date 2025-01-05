import { CgFacebook } from "react-icons/cg";
import photo from "../../public/image.png"
import { FaLinkedinIn } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const Hero = () => {
  const pdf_file = "http://localhost:5173/CV.pdf" 

  const handleDownload = (url)=>{
      const filname = url.split("/").pop()
      const aTag = document.createElement("a")
      aTag.href = url
      aTag.setAttribute("download", filname)
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
  }

  return (
   <div className="bg-gradient-to-tr to-[#1e0b40] from-[#121212] py-32 lg:py-0">
     <div className="flex w-10/12 mx-auto min-h-screen items-center justify-center flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 mt-10 lg:mt-0">
      <p className="text-gray-400 text-lg">Welcome to my world</p>
        <p className="text-white text-6xl font-extrabold leading-tight mb-4">Hi, I’m Nadimul Mawla Meheraj<br /> <span className="text-purple-500">Full Stack Developer</span></p>
        
        <p className="text-gray-300 text-2xl">I am a React-based front-end web developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.</p>
        <div className="flex mt-6 items-center">
        <button onClick={()=>handleDownload(pdf_file)} className="hover:bg-purple-700 mr-6 border border-solid border-[#8750f7] text-[#8750f7] px-6 py-2 rounded-3xl shadow-lg hover:text-white font-semibold ">Download CV</button>
        <div className="flex *:mr-3">
        <a href="https://www.facebook.com/nmmaharaz" target="_blank" className="border border-solid border-[#8750f7] hover:bg-purple-700  flex items-center justify-center w-10 h-10 rounded-full">
        <CgFacebook className="text-[#8750f7] hover:text-white text-3xl"/>
        </a>
        <a href="https://www.linkedin.com/in/md-nadimul-mawla-maharaz-01737b269/" target="_blank" className="border border-solid   border-[#8750f7] hover:bg-purple-700 flex items-center justify-center w-10 h-10 rounded-full">
        <FaLinkedinIn className="text-[#8750f7] hover:text-white text-2xl"/>
        </a>
        <a href="https://github.com/nmmaharaz" target="_blank" className="border hover:bg-purple-700  border-solid border-[#8750f7] flex items-center justify-center w-10 h-10 rounded-full">
        <DiGithubBadge className="text-[#8750f7] hover:text-white text-3xl"/>
        </a>
        </div>
        </div>
      </div>
      <div className="lg:w-1/2">
      <img className="ml-0 w-72 bg-[#4D4D4F] rounded-2xl lg:ml-48" src={photo} alt="" /></div>
    </div>
   </div>
  );
};

export default Hero;
