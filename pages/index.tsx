import FaqSection from '@/components/home/FaqSection'
import HeroSection from '@/components/home/HeroSection'
import MarketplaceSection from '@/components/home/MarketplaceSection'
import ModelSection from '@/components/home/ModelSection'
import PromptSection from '@/components/home/PromptSection'
import SocialSection from '@/components/home/SocialSection'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="bg-[url('/images/gradientbg2.png')]">
        <HeroSection />
        <ModelSection />
      </div>
      <PromptSection />
      <MarketplaceSection />
      <div className="bg-[url('/images/gradientbg1.png')] bg-bottom bg-no-repeat">
        <FaqSection />
        <SocialSection />
      </div>
    </Layout>
  )
}
