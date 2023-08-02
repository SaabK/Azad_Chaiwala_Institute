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

export const coursesData = [
  {
    name: 'Graphics Design Course',
    description: "We will make you a Graphic Designer in only 4 weeks. Opening many paths of earning for you. You will secure not only an in-demand skill but boost your confidence too. Enroll now & be impressed with what you are capable of.",
    duration: "2 Months",
    pr_price: 80000,
    price: 59000,
    image: graphicsDesignCourseImg,
    yellowImage: graphicsDesignCourseImgYellow,
    className: 'col-span-2 col-span-3',
  },
  {
    "popular": true,
    "name": "Web Development Course",
    "description": "We'll make you full stack developer, mastering skills such as front-end languages (HTML, CSS, JavaScript), backend technologies and frameworks (PHP, Laravel), database management (MySQL), version control (Git), and managing web hosting server software.",
    "duration": "4 Months",
    "pr_price": 400000,
    "price": 149000,
    "image": webDevelopmentCourseImg,
    "yellowImage": webDevelopmentCourseImgYellow,
    "className": "col-span-2 col-span-3"
  },
  {
    "name": "Video Filming & Editing Course",
    "description": "Within only 4 weeks, we'll not only make you a decent video editor but also make you a good videographer by giving you hands-on class & field based training. No prior knowledge of video editing needed. All equipment such as DSLR Cameras, Lighting, Mic's, Drones etc will be provided by us during your training.",
    "duration": "2 Months",
    "pr_price": 80000,
    "price": 59000,
    "image": videoEditingCourseImg,
    "className": "col-span-2 col-span-6",
    big: true
  },
  {
    "name": "Digital Marketing Course",
    "description": "Want to skyrocket your business sales with Facebook & Google Ads? Or do you want to start a profitable new career in Digital Marketing? In only 4 weeks, our digital marketing course will do just that. Enroll now to learn to run highly effective ad campaigns that drive results.",
    "duration": "2 Months",
    "pr_price": 200000,
    "price": 89000,
    "image": digitalMarketingCourseImg,
    "className": "col-span-3 col-span-3"
  },
  {
    "name": "Advanced Computer Course",
    "description": "Learn how to use a computer from beginner to mid-level. We'll teach you how to use a computer right from turning it on & off. Right up to playing simple games, using Microsoft products like Word, Excel, etc. Yeh course karne k baad jab bhi koi computer ki baat karega, aap sharam se bhaag nahi jaoge.",
    "duration": "1 Month",
    "pr_price": 20000,
    "price": 10000,
    "image": computerCourseImg,
    "className": "col-span-3 col-span-3"
  },
  {
    "name": "Python Course",
    "description": "Python is an easy-to-learn language used to build websites, apps, basic games, software, automate tasks, analyze data, power machine learning & AI. We’ll teach you from the basics, but take you all the way to creating a portfolio of projects to fast-track your career in a high-demand field as a Python programmer.",
    "duration": "4 Months",
    "pr_price": 300000,
    "price": 189000,
    "image": pythonCourseImg,
    "className": "col-span-2 col-span-6",
    big: true
  },
  {
    "name": "App Development Course",
    "description": "We’ll unlock your full potential by teaching you how to build mobile apps for iOS & Android in React Native. You’ll gain in-demand skills & knowledge from industry expert teachers. Enabling you to launch your career as a sought-after app developer.",
    "duration": "4 Months",
    "pr_price": 400000,
    "price": 249000,
    "image": appDevelopmentCourseImg,
    "className": "col-span-2 col-span-3"
  },
  {
    "name": "Game Development Course",
    "description": "We’ll teach how to create your own 3D Games with Unity using the C# programming language. We will also guide you through the process of publishing your games across various platforms, including the web, pc, mac, the iphone app store & the android play store respectively.",
    "duration": "4 Months",
    "pr_price": 80000,
    "price": 59000,
    "image": gameDevelopmentCourseImg,
    "className": "col-span-2 col-span-3"
  }

];


import naveedTariq from '../assets/images/people/naveed-tariq.webp';
import tahaFather from '../assets/images/people/taha-father.webp';
import khalilUrRehman from '../assets/images/people/khalil-ur-rehman.webp';
import empty from '../assets/images/people/empty.webp';
import warisAhmad from '../assets/images/people/malik-waris-muhammad.webp';
import zaheerHussain from '../assets/images/people/zaheer-hussain.webp';

export const parentsReviewsData = [
  {
    name: 'Khalid',
    review: 'With your guidance my son Mubashir Mehmood Awan has developed into a confident and capable child. Thank you for being such an important part in our child’s development. I am really happy with how our child has developed. You gave a good skill in Graphic Designing to our child. Thank you for your assistance, my son is very happy. Before Join your Insitute My son Learn from youtube but now join your Graphic Design course.He doing incredibly well, he always talks about your institute. Our Child has learned a lot from the very helpful and skilled teachers. I owe you my lifelong respect. ',
    picture: empty
  },
  {
    name: 'Asia',
    review: 'With your guidance my son Usama Ajmal has developed into a confident and capable child. Thank you for being such an important part in our child’s development. I am really happy with how our child has developed. You gave a good skill in video editing to our child. Thank you for your assistance, my son is very happy. He doing incredibly well, he always talks about your institute. Our Child has learned a lot from the very helpful and skilled teachers. I owe you my lifelong respect.',
    picture: empty
  },
  {
    name: 'Zaheer Hussain',
    review: 'Aslam o alykum Sir My daughter Adrish Brishna is studying graphic designing in your institute, it is very important in her education, she is very dedicated and we came to know about your institute through social media. Your teachers work very hard on our children.we like your institute environment and helping to get new dimensions of in life and IT and helping them to get on their feet in race or world thank-you so much',
    picture: zaheerHussain
  },
  {
    name: 'Naveed Tariq',
    review: 'My son okasha is learning graphic designing course with azad chaiwala institute and I Really Like how he is Passionate with his work I heard about you from my son and I also like your Way of teaching I am well satisfied from you Thank you!',
    picture: naveedTariq
  },
  {
    name: 'Taha\'s Father',
    review: 'I am the father of Taha My child never liked school and ratification, but he is still very knowledgeable from the internet now in my life I have seen that my kid learned skills I had looked his practice is amazing he traveled from Karachi to Rawalpindi for it and is fully worth it. (Thank you)',
    picture: tahaFather
  },
  {
    name: 'Khalil-Ur-Rehman',
    review: 'I, Khalil-Ur-Rehman, hereby confirming that my daughter Ms. Hafsa Khalil is enrolled for the Graphic Designing Course at your institute, Azad Chaiwala Institute, Rawalpindi. The respected institute is a great place of quality education. The instructor ensures the friendly and peaceful environment and has a very positive student-teacher relation.',
    picture: khalilUrRehman
  },

  {
    name: 'M Waris Muhammad',
    review: 'My Son has done Graphic Designing Course from AzadChaiwala. I am so pleased with how our child Hasham has progressed. Thank you for your skill you gave to my child. He learnt a lot of things from your Institute. We are fully Satisfied with your Institute. Thank you Azad Bhai.',
    picture: warisAhmad
  },

];

import ahsanYaqubImage from '../assets/images/people/ahsan-yaqub.webp';
import sabaTariqImage from '../assets/images/people/saba-tariq.webp';
import aishaSiddiqueImage from '../assets/images/people/aisha-siddiqa.webp';

export const testimonialsData = [
  {
    title: 'I wasted my 4 years!',
    review: "I feel I wasted 4 years of my life in University because this one month here taught me a lot, and I feel like I've learnt a skill for the first time in my life.",
    name: "Saba Tariq",
    location: "Islamabad",
    picture: sabaTariqImage
  },
  {
    title: 'COLLEGE ISN’T MY THING',
    review: "I didn't learn how to use computer in 10 years of schooling. I came to learn ‘how to use a computer’ so i could later go become a graphic designer.",
    name: "Ahsan Yaqub",
    location: "Kotli AJK",
    picture: ahsanYaqubImage
  },
  {
    title: 'I WILL DO MORE COURSES!',
    review: "I didn’t learn anything in my degree that I could use to make money that’s why I joined Azad Chaiwala Institute. Now I’m planning on doing more courses here",
    name: "Aisha Siddique",
    location: "Islamabad",
    picture: aishaSiddiqueImage
  },
];

import faziArts from '../assets/images/people/google/FaZi-ArTs.png';
import bunerPrankster from '../assets/images/people/google/Buner-Prankster.png';
import nasirDubai from '../assets/images/people/google/Nasir-Dubai.png';
import syedKumailHaider from '../assets/images/people/google/Syed-Kumail-Haider.png';
import zainSaduzai from '../assets/images/people/google/Zain-Saduzai.png';
import zillRehman from '../assets/images/people/google/Zill-Rehman.png';

export const googleReviewsData = [
  {
    name: "FaZi ArTs",
    review: "It's very amazing intiative step for our beloved country from SIR AZAD CHAIWALA. May Allah protect and bless this person. Ameen Great work sir 👍👍👍👍",
    picture: faziArts
  },
  {
    name: "Buner Prankster",
    review: "Azad chaiwala is one of the best person who think about yourself and your people as well. I am supporting every statement because our education system is completely use less.",
    picture: bunerPrankster
  },
  {
    name: "Nasir Dubai",
    review: "A warm welcome from #Bhai Azad. Office is pretty good also staff doing their best to communicate their visitors. It's my first to met #BhaiAzad and I really appreciate #BhaiAzad and their team.",
    picture: nasirDubai
  },
  {
    name: "Zain Saduzai",
    review: "The Only Hope for the Youth of Pakistan. Even your parents don't think about your future that much in these difficult times as he is concerned. So be a part of this Institute and make him feel proud and his mission and vision come true.",
    picture: zainSaduzai
  },
  {
    name: "Zill Rehman",
    review: "I went there a week ago and the atmosphere and whole institute was very nice and welcoming. Very nice place to learn something from.",
    picture: zillRehman
  },
  {
    name: "Syed Kumail Haider",
    review: "This is future of Pakistan inshaAllah Strongly recommend to everyone who want to be educated and don't wont to waste his time and money Loved this institute.",
    picture: syedKumailHaider
  },
];

export const institutionImages = [...generateImages('institution', 12)];

function generateImages(baseUrl: string, n: number): string[] {

  const arr = [];

  for (let i = 1; i <= n; i++) {
    const imagePath = baseUrl + `/${i}s.webp`;

    arr.push(imagePath);
  }

  return arr;
}

export const comparisonData = {
  university: [
    'Ratta',
    'Theory',
    'Obsolete Syllabus',
    '24 - 72 Months',
    'Become Nothing',
    'Zero Demand',
    'Not Job Ready',
    'No ROI',
  ],
  institute: [
    'Education',
    'Practical',
    'Latest Syllabus',
    '1 - 2.5 Months',
    'Become Skillful',
    'Market Demand',
    'Job Ready',
    'Instant ROI'
  ],
  number: [
    '1', '2', '3', '4', '5', '6', '7', '8'
  ]
};