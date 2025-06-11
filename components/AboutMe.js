import React from "react";
import userData from "@constants/data";

const SkillCard = ({ name, level }) => {
  return (
    <div className="p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {name}
      </h4>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
        <div
          className="h-4 rounded-full"
          style={{
            width: `${level}%`,
            backgroundColor: "#BFBDE8", // same as button color
          }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{level}%</p>
    </div>
  );
};

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left text-gray-600">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20"></div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Left column */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 pb-5">
                Redwan Hramch
              </h1>
              <img src="/Me.jpg" alt="Redwan Hramch" />
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm actively exploring opportunities in Data & AI. If you think I might be a good fit for your team, feel free to check out my resume. I'd be excited to connect and collaborate.
                <br />
                <a 
  href="https://www.dropbox.com/scl/fi/xqg2rl1x6ljimf4lstl6u/resume_redwan_hramch.pdf?rlkey=7t5keeo59if70250bjt2oqgc7&st=p5ohsi04&dl=0"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-200"
>
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
  Download Resume (PDF)
</a>
              </p>
            </div>
            {/* Social Links can be added here if you want */}
          </div>

          {/* Right column: About description + Skills */}
          <div className="col-span-1 md:col-span-2">
            {/* About description paragraphs */}
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}

            {/* Skills Section */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              Experience
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {userData.skills.map(({ name, level }, idx) => (
                <SkillCard key={idx} name={name} level={level} />
              ))}
            </div>
              <div className="mt-10 text-center">
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                To see all my experiences, download my Resume.
              </p>
             <a 
  href="https://www.dropbox.com/scl/fi/ottc7wyqoiv98tckdmeoo/cv_redwan-hramch.pdf?rlkey=rrybvn8x91ryvaazb3jmgsjkk&st=jfjtsmav&dl=1"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-200"
>
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
  Download Resume (PDF)
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
