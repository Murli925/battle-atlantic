import { Quote } from 'lucide-react';
import {Ephesis} from "next/font/google"

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: ["400"]
})


export default function QuoteSection() {
  return (

<section className={`py-5 bg-[var(--primary-color)] md:py-12`} >

  <div className="max-w-7xl mx-auto px-5" data-aos="fade-up">

      {/* Text */}

        <div className="max-w-full md:max-w-[1000px] mx-auto text-center">
<Quote className='text-white mx-auto mb-5' size={40} style={{ color: "var(--accent-color)" }} />
          <h2 className={`${ephesis.className} md:text-4xl text-2xl text-center mb-5 text-white tracking-wider`} >The Battle of the Atlantic was the dominating factor all through the war. Never for one moment could we forget that everything happening elsewhere, on land, at sea, or in the air depended ultimately on its outcome.</h2>
          <p className="text-xl text-center text-white mb-4">Winston Churchill</p>

<small className={`text-[var(--text-white)] mt-4 d-block`}>The only defended industrial harbour in North America attacked by German U-boats during the Second World War</small>

    </div>

  </div>

</section>


  )
}