import { comparisonData } from "../data/data";

function Comparison() {
  return (
    <div className="grid grid-cols-7 gap-2 py-4 xl:pb-0">
      <div className="col-span-3">
        <h1 className="text-center text-lg bg-black text-white py-1 font-bold rounded-tl-md mb-2">University</h1>
        <ul className="flex flex-col gap-2">
          {
            comparisonData.university.map((point, index) => (
              <li key={index} className="list-none bg-myBlue/20 text-center py-1">{point}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h1 className="text-center text-lg bg-black text-white py-1 font-bold mb-2">VS</h1>
        <ul className="flex flex-col gap-2">
          {
            comparisonData.number.map(num => (
              <li key={num} className="list-none bg-yellow/20 text-center py-1">{num}</li>
            ))
          }
        </ul>
      </div>
      <div className="col-span-3">
        <h1 className="text-center text-lg bg-black text-white py-1 font-bold rounded-tr-md mb-2">Our Institute</h1>
        <ul className="flex flex-col gap-2">
          {
            comparisonData.institute.map((point, index) => (
              <li key={index} className="list-none bg-myBlue/20 text-center py-1">{point}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Comparison;