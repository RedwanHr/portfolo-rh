import React from "react";
import userData from "@constants/data";

export default function Projects() {
    return (
        <div>
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Projects
                </h1>
            </div>
            <section className="bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 py-20 pb-40">
                    <div className="w-full md:w-1/2">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Project 1: Webdesign Advanced</h2>
                            </div>
                            <div className="pt-3">
                                <p>For my project that was given in my first year at Thomas More for <b><u>Webdesign Advanced</u></b>, me and my colleague designed a website for a lifestyle studio named 'Power Up Fitness'. Normally this project was meant to made by 3 persons but 1 colleague decided to quit his traject. This meant that we needed to work harder to achieve a good result. Me and my colleague splitted the work equally and delivered a very nice website. I learned a lot of new things such as using Github as workflow, building a responsive website, a navigation menu with JavaScript and much more! I'm very proud of the results and I hope to learn much more in the feature. Make sure to click on my project image to see it yourself!</p>
                            </div>
                            <div className="pt-4">
                                <a href="https://power-up-fitness.netlify.app" target="_blank" className="inline-block transition duration-300 transform hover:scale-110">
                                    <img src="/project1.png" alt="project 1"/>
                                </a>
                            </div>
                            <div className="pt-10">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">My part: Webdesign Advanced</h2>
                            </div>
                            <div className="pt-3">
                                <p>As you can see in the photo section. I created subscription plans for customers to join Power Up Fitness. In the down right corner there is a 'To top of page' button that I also created. At first it looks simple but this button only shows itself when you are not on top of the page. I created this with Java Script. A big challenge where I learned a lot from. Together with my colleague we created a special navigation menu that is transparent when you are on top of the page but when you start scrolling this gradually changes to a black background. One of the hardest things in this project I must say.</p>
                            </div>
                            <div className="pt-4">
                                <img src="/my-part1.png" alt="project 1"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <div className="pt-10">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Project 2: Requirements analyses</h2>
                            </div>
                            <div className="pt-3">
                                <p>For my project <b><u>KVV Rauw</u></b>, assigned during my project week at Thomas More for <b><u>Requirements Analysis</u></b>, I collaborated with a group of seven highly motivated students. Our objective was multifaceted: we aimed to develop a comprehensive understanding of the requirements through analysis. This involved creating intricate use case diagrams, crafting a robust data model, and designing prototypes that aligned seamlessly with the envisioned functionality. Through effective communication and coordination, we navigated the intricacies of the project, ensuring alignment with the client's expectations and objectives. Reflecting on the journey, I am immensely proud of the results we achieved as a team. Make sure to click on my project to see it yourself!</p>
                                <p className="mt-3">Prototype:</p>
                            </div>
                            <div className="pt-4 relative">
                                <a href="https://5rw5ij.axshare.com/" target="_blank" className="inline-block transition duration-300 transform hover:scale-110">
                                    <img src="/project2.png" alt="project 1"/>
                                    <span className="absolute inset-0 flex items-center justify-center text-4xl text-black opacity-50 pointer-events-none">Click here</span>
                                </a>
                            </div>
                            <div className="pt-10">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">My part: Requirements analyses</h2>
                            </div>
                            <div className="pt-3">
                                <p>The first image was merely a prototype of the homepage for our website dedicated to <b><u>KVV Rauw</u></b>. Today, I've developed several functional pages. Below, I'll showcase one of these pages and explain its purpose. One of the pages I've created serves to verify a parent after they've requested an account for their child to apply for soccer training. The parent fills in the necessary information, triggering a verification request sent to all admin mailboxes to notify them of the account request. Only after approval from the admins can the parent log into their account.</p>
                            </div>
                            <div className="pt-4">
                                <img src="/my-part1.png" alt="project 1"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <div className="pt-10">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Project 3: Taskmanager App in C# with SQLite</h2>
                            </div>
                            <div className="pt-3">
                                <p>I've always harbored the desire to develop a straightforward, functional application tailored to my own needs. During the first semester, I enrolled in a course focused on DevOps and Security, where we were presented with a choice among three topics. One of these topics entailed building a basic application integrated with a database. It dawned on me that this was the perfect opportunity to bring my app idea to life.

                                    After brainstorming, I settled on creating a simple yet effective task manager application. This app would serve as a repository for tasks that I needed to complete. Venturing into unfamiliar territory, I opted to develop the app using C#, a programming language with which I had no prior experience.

                                    This project became a significant learning experience for me, as I navigated the challenges of mastering C# and implementing database functionality into the application.</p>
                            </div>
                            <div className="pt-4">
                                <img src="/task-manager.png" alt="project 1"/>
                            </div>
                            <div className="pt-10">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Taskmanager: a look in my database (MySqlite)</h2>
                            </div>
                            <div className="pt-3">
                                <p>Creating a useful application mostly requires a database. This was necessary for keeping my tasks after I created one. As you can see in the image below my application stored several records that I thought were handy. Working on my task manager application learned me how to make a connection to a database in C#. I like to experiment with this in the future. </p>
                            </div>
                            <div className="pt-4">
                                <img src="/task-manager2.png" alt="project 1"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <div class="pt-10">
                                <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Project 4: Image classification (A.I.)</h2>
                            </div>
                            <div className="pt-3">
                                <p>In my second year of studies, I embarked on a captivating project: an image predictor. The task at hand was to develop a deep learning model capable of distinguishing between five distinct types of cats: housecat, cheetah, lion, tiger, and leopard. Training the model was a fascinating journey into the realm of machine learning. </p>
                                <p className="pt-5">Once our model was trained, our instructor provided us with a set of 473 randomly selected images for testing purposes. Our objective was to predict whether each image depicted one of the specified cat types and meticulously label them in an Excel file. It was a thrilling experience to work with real data and images, applying theoretical knowledge to tangible, practical scenarios.</p>
                                <p className="pt-5">In the image below you will see a confusion matrix. This is a plot in Python to check how good my model can guess the train images. <b><u>0 = housecat, 1 = cheetah, 2 = leopard, 3 = lion and 4 = tiger</u></b> and you see that for a housecat that it guessed 71 times correct. You also see for a housecat that it also guessed wrong 2 times thinking a cat was a cheetah or a leopard which is fine for me because the numers are very low.</p>

                            </div>
                            <div className="pt-4">
                                <img src="/AI.png" alt="project 1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        // <section className="bg-white dark:bg-gray-800">
        //
        //     <div>
        //         <div className="bg-[#F1F1F1] dark:bg-gray-900">
        //             <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 py-20 pb-40">
        //                 {userData.projects.map((proj, idx) => (
        //                     <div key={idx} className="w-full md:w-1/2">
        //                         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        //                             <div className="p-4">
        //                                 <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        //                                     {proj.title}
        //                                 </h2>
        //                                 <p className="text-gray-600 dark:text-gray-400">{proj.description}</p>
        //                             </div>
        //                             <ProjectCard
        //                                 title={proj.title}
        //                                 link={proj.link}
        //                                 imgUrl={proj.imgUrl}
        //                                 number={`${idx + 1}`}
        //                             />
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
}



const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl" target="_blank">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl text-red-500">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};


