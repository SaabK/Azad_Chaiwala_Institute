import graphicsDesignCourseImg from '../assets/images/course/graphic-design-course.png';
import graphicsDesignCourseImgYellow from '../assets/images/course/graphic-design-course-yellow.png';
import webDevelopmentCourseImg from '../assets/images/course/programming-course.png';
import webDevelopmentCourseImgYellow from '../assets/images/course/programming-course-yellow.png';
import computerCourseImg from '../assets/images/course/computer-course.png';
import appDevelopmentCourseImg from '../assets/images/course/app-development.png';
import digitalMarketingCourseImg from '../assets/images/course/digital-marketing-course.png';
import gameDevelopmentCourseImg from '../assets/images/course/game-development.png';
import pythonCourseImg from '../assets/images/course/python.png';
import videoEditingCourseImg from '../assets/images/course/video-editing-course.png';

import affiliateProgram from '../assets/images/affiliate-program.png';

import CoursesCard from "./CoursesCard";

function Courses() {

  const wordLength = {
    long: 198,
    short: 140
  }

  return (
    <div className="bg-white">
      <section className="container py-5 flex flex-col gap-20">
        <div className="grid grid-cols-3 gap-20">
          <img src={affiliateProgram} alt="Join our affiliate program" className='col-span-3 cursor-pointer' />
          <CoursesCard
            name="Graphics Design Course"
            description="We will make you a Graphic Designer in only 4 weeks. Opening many paths of earning for you. You will secure not only an in-demand skill but boost your confidence too. Enroll now & be impressed with what you are capable of."
            duration="2 Months"
            pr_price={80000}
            price={59000}
            image={graphicsDesignCourseImg}
            yellowImage={graphicsDesignCourseImgYellow}
          />
          <CoursesCard
            popular={true}
            name="Web Development Course"
            description="We'll make you full stack developer, mastering skills such as front-end languages (HTML, CSS, JavaScript), backend technologies and frameworks (PHP, Laravel), database management (MySQL), version control (Git), and managing web hosting server software."
            duration="4 Months"
            pr_price={400000}
            price={149000}
            image={webDevelopmentCourseImg}
            yellowImage={webDevelopmentCourseImgYellow}
          />
          <CoursesCard
            name="Video Filming & Editing Course"
            description="Within only 4 weeks, we'll not only make you a decent video editor but also make you a good videographer by giving you hands-on class & field based training. No prior knowledge of video editing needed. All equipment such as DSLR Cameras, Lighting, Mic's, Drones etc will be provided by us during your training."
            duration="2 Months"
            pr_price={80000}
            price={59000}
            image={videoEditingCourseImg}
          />
        </div>
        <div className="grid grid-cols-2 gap-20 our-grid">
          <CoursesCard
            name="Digital Marketing Course"
            description="Want to skyrocket your business sales with Facebook & Google Ads? Or do you want to start a profitable new career in Digital Marketing? In only 4 weeks, our digital marketing course will do just that. Enroll now to learn to run highly effective ad campaigns that drive results."
            duration="2 Months"
            pr_price={200000}
            price={89000}
            image={digitalMarketingCourseImg}
            words={wordLength.long}
          />
          <CoursesCard
            name="Advanced Computer Course"
            description="Learn how to use a computer from beginner to mid-level. We'll teach you how to use a computer right from turning it on & off. Right upto playing simple games, using Microsoft products like Word, excel etc. Yeh course karne k bahd jab be koi computer ki baat kare ga, aap sharam se bhaag nahi jao ge."
            duration="1 Month"
            pr_price={20000}
            price={10000}
            image={computerCourseImg}
            words={wordLength.long}
          />
        </div>
        <div className="grid grid-cols-3 gap-20 our-grid">
          <CoursesCard
            name="Python Course"
            description="Python is an easy-to-learn language used to build websites, apps, basic games, software, automate tasks, analyze data, power machine learning & AI. We’ll teach you from the basics, but take you all the way to creating a portfolio of projects to fast-track your career in a high-demand field as a Python programmer."
            duration="4 Months"
            pr_price={300000}
            price={189000}
            image={pythonCourseImg}
          />
          <CoursesCard
            name="App Development Course"
            description="We’ll unlock your full potential by teaching you how to build mobile apps for iOS & Android in React Native. You’ll gain in-demand skills & knowledge from industry expert teachers. Enabling you to launch your career as a sought-after app developer."
            duration="4 Months"
            pr_price={400000}
            price={249000}
            image={appDevelopmentCourseImg}
          />
          <CoursesCard
            name="Game Development Course"
            description="We’ll teach how to create your own 3D Games with Unity using the C# programming language. We will also guide you through the process of publishing your games across various platforms, including the web, pc, mac, the iphone app store & the android play store respectively."
            duration="4 Months"
            pr_price={80000}
            price={59000}
            image={gameDevelopmentCourseImg}
          />
        </div>
      </section>
    </div>
  )
}

export default Courses;