const Education = () => {
  return (
    <div className="bg-black min-h-screen py-12 lg:py-0 flex items-center">
      <div className="w-10/12 mx-auto">
        <p className="text-center mb-7">
          <span className="text-[#8750f7]  text-5xl text-center font-extrabold">
            My
          </span>
          <span className="text-5xl font-extrabold text-[#b7a0e4]">
            {" "}
            Education
          </span>
        </p>

        <div className="grid gap-8 rounded-2xl grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center bg-[#141119] hover:bg-[#8750f7]">
          <div className="bg-purple-500 hover:bg-[#141119] h-full flex items-center justify-center p-4">
             <div>
             <span className="text-4xl font-bold text-white">GPA</span><br />
              <span className="text-4xl font-extrabold text-white mt-1">
                5.00
              </span>
             </div>
            </div>
            <div className="text-white p-7">
              <p className="text-white text-2xl font-bold mb-2">2018</p>
              <p className="font-bold text-3xl text-white">
                Junior School Certificate
              </p>
              <p className="text-xl font-semibold text-white mt-2">
                Gasua Adarsha High School
              </p>
              <p className="text-lg text-white font-semibold">
                Chattogram, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#141119] hover:bg-[#8750f7]">
          <div className="bg-purple-500 hover:bg-[#141119] h-full flex items-center justify-center p-4">
             <div>
             <span className="text-4xl font-bold text-white">GPA</span><br />
              <span className="text-4xl font-extrabold text-white mt-1">
                4.86
              </span>
             </div>
            </div>
            <div className="text-white p-7">
              <p className="text-white text-2xl font-bold mb-2">2021</p>
              <p className="font-bold text-3xl text-white">
                secondary school certificate
              </p>
              <p className="text-xl font-semibold text-white mt-2">
                Gasua Adarsha High School
              </p>
              <p className="text-lg text-white font-semibold">
                Chattogram, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#141119] hover:bg-[#8750f7]">
            <div className="bg-purple-500 hover:bg-[#141119] h-full flex items-center justify-center p-4">
             <div>
             <span className="text-4xl font-bold text-white">GPA</span><br />
              <span className="text-4xl font-extrabold text-white mt-1">
                4.72
              </span>
             </div>
            </div>
            <div className="text-white p-7">
              <p className="text-white text-2xl font-bold mb-2">2023</p>
              <p className="font-bold text-3xl text-white">
                Higher Secondary School Certificate
              </p>
              <p className="text-xl font-semibold text-white mt-2">
                Al-Haz Mustofa Hakim University
              </p>
              <p className="text-lg text-white font-semibold">
                Chattogram, Bangladesh
              </p>
            </div>
          </div>
          <div className="bg-[#141119] hover:bg-[#8750f7]">
            <div className="text-white p-7">
              <p className="text-white text-2xl font-bold mb-2">Running</p>
              <p className="font-bold text-3xl text-white">
                Bachelor of Business Administration
              </p>
              <p className="text-xl font-semibold text-white mt-2">
                Al-Haz Mustofa Hakim University
              </p>
              <p className="text-lg text-white font-semibold">
                Chattogram, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
