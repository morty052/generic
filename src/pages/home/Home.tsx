import { Hero, CoreFeatures, SecondaryFeature, Testimonial } from ".";
import { CTA, Layout } from "../../components";
import { OpenPositions } from "../careers";
import AltHero from "./AltHero";

type Props = {}

function Home({}: Props) {
  return (
   <>
   <Layout>
    <AltHero/>
    <OpenPositions/>
    <Hero/>
    <CoreFeatures/>
    <SecondaryFeature/>
    <Testimonial/>
    <CTA/>
   </Layout>
   </>
  )
}

export default Home