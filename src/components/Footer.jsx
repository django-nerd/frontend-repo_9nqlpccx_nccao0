function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-red-400">LPK Hisou Universal Style</h3>
            <p className="mt-2 text-gray-300 text-sm">Jl. Kresna No. 180, Banjar Penaga, Desa Yangapi, Kec. Tembuku, Kab. Bangli</p>
            <p className="mt-1 text-gray-300 text-sm">Sejak 2016 • Fokus pelatihan & penempatan kerja ke Jepang</p>
          </div>
          <div>
            <h4 className="font-semibold text-red-400">Kontak</h4>
            <ul className="mt-2 text-sm text-gray-300 space-y-1">
              <li>Telp/WA: <a className="hover:text-white" href="tel:+6281234567890">+62 812-3456-7890</a></li>
              <li>Email: <a className="hover:text-white" href="mailto:info@hisoustyle.id">info@hisoustyle.id</a></li>
              <li>Instagram: <a className="hover:text-white" href="#">@hisou.universal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-400">Navigasi</h4>
            <ul className="mt-2 text-sm text-gray-300 space-y-1">
              <li><a className="hover:text-white" href="#about">Tentang</a></li>
              <li><a className="hover:text-white" href="#programs">Program</a></li>
              <li><a className="hover:text-white" href="#gallery">Galeri</a></li>
              <li><a className="hover:text-white" href="#contact">Kontak</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} LPK Hisou Universal Style. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
