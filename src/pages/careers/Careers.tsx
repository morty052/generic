import { Hero, Carousel, CoreValues, Perks, OpenPositions, DeliveryDrivers } from "."
import { CTA } from "../../components"
import {Layout} from "../../components"

type Props = {}

function Careers({}: Props) {
  return (
    <>
    <Layout>
    <div className="space-y-10">
    <Hero/>
    <Carousel/>
    <CoreValues/>
    <Perks/>
    <DeliveryDrivers/>
    <OpenPositions/>
    <CTA/>
    </div>
    </Layout>
    </>
  )
}

export default Careers