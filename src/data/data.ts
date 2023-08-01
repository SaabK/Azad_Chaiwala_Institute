import naveedTariq from '../assets/images/people/naveed-tariq.webp';
import tahaFather from '../assets/images/people/taha-father.webp';
import khalilUrRehman from '../assets/images/people/khalil-ur-rehman.webp';
import empty from '../assets/images/people/empty.webp';
import warisAhmad from '../assets/images/people/malik-waris-muhammad.webp';
import zaheerHussain from '../assets/images/people/zaheer-hussain.webp';

export const parentsReviewsData = [
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
    name: 'Khalid',
    review: 'With your guidance my son Mubashir Mehmood Awan has developed into a confident and capable child. Thank you for being such an important part in our child’s development. I am really happy with how our child has developed. You gave a good skill in Graphic Designing to our child. Thank you for your assistance, my son is very happy. Before Join your Insitute My son Learn from youtube but now join your Graphic Design course.He doing incredibly well, he always talks about your institute. Our Child has learned a lot from the very helpful and skilled teachers. I owe you my lifelong respect. ',
    picture: empty
  },
  {
    name: 'M Waris Muhammad',
    review: 'My Son has done Graphic Designing Course from AzadChaiwala. I am so pleased with how our child Hasham has progressed. Thank you for your skill you gave to my child. He learnt a lot of things from your Institute. We are fully Satisfied with your Institute. Thank you Azad Bhai.',
    picture: warisAhmad
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
