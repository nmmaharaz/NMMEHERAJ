import { NavLink } from "react-router-dom";
import logo from "../../public/image.png";
import { MdOutlineFileDownload } from "react-icons/md";
const Navbar = ({skills, handleScroll, aboutme, porfolio, contact, education}) => {
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
   <div className=" fixed z-50 w-full">
      <div className="bg-opacity-5 bg-black">
     <div className="w-10/12 mx-auto">
     <div className="navbar">
      <div className="navbar-start">
        <img className="w-14 rounded-full" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <NavLink className={({ isActive }) => (isActive ? "text-white" : "text-white")}>Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-white" : "text-white")} onClick={() => handleScroll(aboutme)}>About Me</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-white" : "text-white")} onClick={() => handleScroll(skills)}>Skills</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => (isActive ? "text-white" : "text-white")} onClick={() => handleScroll(education)}>Education</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => (isActive ? "text-white" : "text-white")} onClick={() => handleScroll(porfolio)}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-white" : "text-white")} onClick={() => handleScroll(contact)}>Contact</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:block">
        <button onClick={()=>handleDownload(pdf_file)} className="hover:bg-purple-700 border border-solid border-[#8750f7] text-[#8750f7] px-6 py-2 rounded-3xl shadow-lg hover:text-white font-semibold ">Download CV</button>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 text-white w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow"
          >
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-[#8750f7]" : "text-[#8750f7]")}>Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-[#8750f7]" : "text-[#8750f7]")} onClick={() => handleScroll(aboutme)}>About Me</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-[#8750f7]" : "text-[#8750f7]")} onClick={() => handleScroll(skills)}>Skills</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => (isActive ? "text-[#8750f7]" : "text-[#8750f7]")} onClick={() => handleScroll(education)}>Education</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => (isActive ? "text-[#8750f7]" : "text-[#8750f7]")} onClick={() => handleScroll(porfolio)}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-[#8750f7]" : "text-[#8750f7]")} onClick={() => handleScroll(contact)}>Contact</NavLink>
            </li>
            <button onClick={()=>handleDownload(pdf_file)} className="hover:bg-purple-700 border border-solid border-[#8750f7] text-[#8750f7] px-6 py-2 rounded-3xl shadow-lg hover:text-white font-semibold ">Download CV</button>
          </ul>
        </div>
      </div>
      </div>
     </div>
    </div>
   </div>
  );
};

export default Navbar;
