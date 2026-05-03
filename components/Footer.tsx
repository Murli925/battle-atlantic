import Image from "next/image"

export default function Footer() {
  return (

    <footer className="bg-gray-900 text-gray-300">
    <Image src={`/images/Bell-Island-Battle-of-the-Atlantic-Expedition-Banner.jpg`} className="w-full" width="1920" height="300"alt="" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-14">

        <div>
          <Image src={`/images/logo.png`} width="120" height="300"alt="Battle of Atlantic Logo" />

        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>

          <ul className="space-y-2 text-sm">
            <li>Expedition Objectives</li>
            <li>Our Team</li>
            <li>Blogs</li>
            <li>Support Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>

          <p className="text-sm">
            Email: <a href="mailto:bellislandexpedition@gmail.com">bellislandexpedition@gmail.com</a>
          </p>
          
        </div>

      </div>

      <div className="border-t border-gray-800 text-center text-sm py-4">
        Copyright © Battle of the Atlantic Virtual Memorial 2026 | All Rights Reserved | Powered By <a href="https://www.adaan.com/" target="_blank" className="underline">Adaan Digital Solutions Pvt Limited</a>
      </div>

    </footer>
  )
}