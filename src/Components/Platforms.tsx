import TVChannels from '../assets/images/channels.png';

import youtubeIcon from '../assets/images/icons/youtube.png'
import facebookIcon from '../assets/images/icons/facebook.png'
import instagramIcon from '../assets/images/icons/instagram.png'
import tiktokIcon from '../assets/images/icons/tik-tok.png'

import Icon from './Icon';

function Platforms() {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-lg">
      <div>
        <h1 className="text-2xl font-bold uppercase">As seen on</h1>
        <img src={TVChannels} alt="As seen on" className='w-full' />
      </div>
      {/* <div className='border-l-2 border-myBlue/40 -my-10 self-stretch' /> */}
      <div className='flex justify-between gap-6'>
        <Icon href='https://www.facebook.com/AzadChaiwala/' icon={facebookIcon} followers='1.4 Million' />
        <Icon href='https://www.youtube.com/channel/UCM5QNdoIefx6eumjPk8ZTMw' icon={youtubeIcon} followers='1.4 Million' />
        <Icon href='https://www.tiktok.com/@azadchaiwalaofficial?lang=en' icon={tiktokIcon} followers='1 Million' />
        <Icon href='https://www.instagram.com/azadchaiwala/?hl=en' icon={instagramIcon} followers='133,000' />
      </div>
    </div>
  )
}

export default Platforms;