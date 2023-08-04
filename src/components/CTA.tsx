
type Props = {}

function CTA({}: Props) {
  return (
    // <!-- Subscribe -->
 <div className="bg-blue-600">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
  <div className="grid md:grid-cols-2 gap-8">
    <div className="max-w-md">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-white">Subscribe</h2>
      <p className="mt-3 text-white ">
        Subscribe and start making the most of every engagement.
      </p>
    </div>

    <form>
      <div className="w-full sm:max-w-lg md:ml-auto">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full">
            <label htmlFor="hero-input" className="sr-only">Search</label>
            <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500   " placeholder="Enter your email"/>
          </div>
          <a className="w-full text-blue-600 sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-white hover:bg-gray-200 cursor-pointer border border-transparent  font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 " >
            Subscribe
          </a>
        </div>
        <p className="mt-3 text-sm text-white">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
  </div>
</div>
 </div>
  )
}

export default CTA