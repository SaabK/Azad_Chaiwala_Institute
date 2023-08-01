import TVChannels from '../assets/images/channels.png';

function Platforms() {
  return (
    <div className="flex bg-yellow p-10">
      <div>
        <h1 className="font-bold text-2xl uppercase">As seen on</h1>
        <img src={TVChannels} alt="As see on" className='w-[400px]' />
      </div>
      <div></div>
    </div>
  )
}

export default Platforms;