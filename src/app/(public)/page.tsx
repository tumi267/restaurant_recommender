import Hero from "../components/(public)/Hero/Hero";
import SideScroller from "../components/(public)/SideScroller/SideScroller";
import { MOCK_RESTAURANTS } from '../constants';
export default function Home() {
  return (
    <main >
      <Hero/>
    {/* need location logic */}
      <SideScroller
      title='Near Your Location'
      subtitle='Gems discovered via Maps'
      horizontal={true}
      restaurant={MOCK_RESTAURANTS}
      />
      {/* sql logic rated value */}
      <SideScroller
      title='Highest Rated'
      subtitle='The absolute best of the best as voted by our community'
      horizontal={true}
      restaurant={MOCK_RESTAURANTS}
      />
    </main>
  )
}
