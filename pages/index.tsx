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
      <HeroSection />
      <ModelSection />
      <PromptSection />
      <MarketplaceSection />
      <FaqSection />
      <SocialSection />
    </Layout>
  )
}
