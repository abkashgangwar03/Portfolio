import React from "react";

const Expandachivement = () => {
  return (
    <section id="exp" className=" h-fit w-auto mx-4 md:mx-10 mt-20 scroll-mt-12 md:scroll-mt-0 ">
      <h1
        className="text-start border-b-2 mt-5 border-neutral-600 text-2xl md:text-4xl font-extrabold
        p-2 bg-gradient-to-r brightness-175 from-neutral-600 to-textcolor to-30% md:to-20% text-transparent bg-clip-text"
      >
        Experince & Achivements
      </h1>
      <div className="flex flex-col items-center p-2 gap-10 mt-7 md:my-15">
        <div className=" p-2 h-fit w-full md:h-fit md:w-full gap-4 rounded-lg bg-neutral-950 brightness-150 flex flex-col md:flex-row justify-center items-center transition-transform duration-300 ease-in-out outline-1 outline-textcolor shadow-textcolor hover:scale-102 hover:shadow-lg">
          <img
            className="object-contain brightness-63 h-68 rounded md:ml-4 md:mr-20"
            alt="Project Picture"
            src="public/pic/Abkash Gangwar Offer Letter_page-0001.jpg"
            decoding="async"
            data-nimg="1"
            loading="lazy"
          />

          <p className="text-neutral-500 text-start">
            <strong>App Development Intern</strong> <br />
            Cloud9 Power Technologies | March 2025 – Present <br />
            <br />
            Working on <strong>
              React Native, JavaScript, Flutter and Dart  {" "}
            </strong>{" "}
            to build and optimize cross-platform mobile applications.
            Collaborating with designers and backend teams to create seamless
            UI/UX experiences, integrate APIs, and implement state management.{" "}
            <br />
            - Developing scalable, high-performance mobile apps. <br />
            - Writing clean, maintainable code following best practices. <br />
            - Debugging, testing, and optimizing app performance. <br />
            - Exploring new technologies to enhance app functionality. <br />
            Gaining hands-on experience in{" "}
            <strong>real-world mobile development</strong>, improving
            problem-solving skills, and adapting to industry best practices.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-center gap-7 md:gap-10">
          <div className=" p-2 h-60 outline-1 outline-textcolor brightness-150 bg-neutral-950 shadow-textcolor hover:scale-102 hover:shadow-lg transition-transform duration-300 ease-in-out focus:scale-102 focus:shadow-lg active:scale-102 active:shadow-lg rounded-lg">
            <img
              src="public/pic/CertificateOfCompletion_Python Essential Training 2022_page-0001.jpg"
              alt="Certificate"
              className=" object-cover h-full brightness-65"
              decoding="async"
              data-nimg="1"
              loading="lazy"
            />
          </div>
          <div className=" p-2 h-60 outline-1 outline-textcolor brightness-150 bg-neutral-950 shadow-textcolor hover:scale-102 hover:shadow-lg transition-transform duration-300 ease-in-out focus:scale-102 focus:shadow-lg active:scale-102 active:shadow-lg rounded-lg">
            <img
              src="public/pic/CertificateOfCompletion_React Essential Training (1)_page-0001.jpg"
              alt="Certificate"
              className=" object-cover h-full w-full brightness-65"
              decoding="async"
              data-nimg="1"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expandachivement;
