import { Quote } from 'lucide-react';
import {Cormorant} from "next/font/google"

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400"]
})


export default function QuoteSection() {
  return (

<section className={`py-5 px-5 bg-[var(--primary-color)] md:py-12 depthShadow`} >

  <div className="max-w-7xl mx-auto px-5 py-8" data-aos="fade-up">
        <div className="max-w-full md:max-w-[1100px] mx-auto text-center">
<Quote className='text-white mx-auto mb-5 quote-1' size={30} style={{ color: "var(--accent-color)" }} />
          <h2 className={`${cormorant.className} md:text-3xl text-2xl text-center !italic mb-5 text-white tracking-wider`} >The Battle of the Atlantic was the dominating factor all through the war. Never for one moment could we forget that everything happening elsewhere, on land, at sea, or in the air depended ultimately on its outcome.</h2>
<Quote className='text-white mb-5 quote-2' size={30} style={{ color: "var(--accent-color)" }} />
          <p className="text-xl text-center text-white mb-8">Winston Churchill</p>

<small className={`text-[var(--text-white)] mt-4 d-block`}>The only defended industrial harbour in North America attacked by German U-boats during the Second World War</small>

    </div>

  </div>

</section>


  )
}
