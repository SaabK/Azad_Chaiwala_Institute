import GoogleMap from "./GoogleMap";
import Introduction from "./Introduction";

function Location() {
  return (
    <div className=" container flex flex-col py-8">
      <h1 className="text-4xl font-bold self-center border-b-4 border-dark pb-1 capitalize">Join us today</h1>
      <div className="mt-8 mb-2 grid grid-cols-1 overflow-hidden gap-y-10 xl:grid-cols-3">
        <Introduction />
        <GoogleMap />
      </div>
    </div>
  )
}

export default Location;