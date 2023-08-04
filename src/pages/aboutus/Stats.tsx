

type Props = {}

function Stats({}: Props) {
  return (
    // <!-- Features -->
<div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8  mx-auto">
  {/* <!-- Grid --> */}
  <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
    {/* <!-- Stats --> */}
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 ">Accuracy rate</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">74.95%</p>
      <p className="mt-1 text-gray-500">In handling common pain points.</p>
    </div>
    {/* <!-- End Stats --> */}

    {/* <!-- Stats --> */}
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 ">Provided</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">200+</p>
      <p className="mt-1 text-gray-500">Jobs this year</p>
    </div>
    {/* <!-- End Stats --> */}

    {/* <!-- Stats --> */}
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 ">Always</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">100%</p>
      <p className="mt-1 text-gray-500">Eco-Friendly</p>
    </div>
    {/* <!-- End Stats --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
  )
}

export default Stats