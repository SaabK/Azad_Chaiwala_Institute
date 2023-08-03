import picture from '../assets/images/people/azad_chaiwala/azad-chaiwala.webp'

function Introduction() {
  return (
    <div className='flex flex-col items-start gap-5 bg-dark/5 p-5 col-span-2 order-2 md:flex-row md:order-1'>
      <img src={picture} alt="Azad Chaiwala" className='w-full' />
      <div className='flex flex-col gap-4 text-justify xl:gap-6'>
        <h1 className='font-bold text-3xl  '>Who is Azad Chaiwala?</h1>
        <p className=''>I'm a British - Pakistani Entrepreneur who became a millionaire at the age of 21 through IT. I have more than a billion users of my gaming portal and over 1 billion downloads of my apps to date & growing. Alhamdulillah!</p>
        <p>I have been teaching IT skills in Pakistan for the past 16 years. Over 10 lakh students have learnt skills that have helped them earn a living, from me and my institutes. Over 35 lakh followers across multiple social media platforms, follow me in Pakistan.</p>
      </div>
    </div>
  )
}

export default Introduction;