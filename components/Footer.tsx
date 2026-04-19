export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-14">

        <div>
          <h3 className="text-white font-semibold mb-3">
            Battle of the Atlantic Virtual Memorial
          </h3>

          <p className="text-sm">
            A digital initiative dedicated to preserving the
            history of the Battle of the Atlantic and honoring
            those who served.
          </p>
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
            Virtual Memorial Research Project
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center text-sm py-4">
        © 2026 Battle of the Atlantic Virtual Memorial
      </div>

    </footer>
  )
}