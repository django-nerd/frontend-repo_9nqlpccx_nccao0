function About() {
  return (
    <section id="about" className="py-20 bg-red-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tentang Kami</h2>
          <p className="mt-3 text-gray-700">
            LPK Hisou Universal Style berdiri sejak tahun 2016 dengan fokus pada pelatihan dan penempatan kerja ke Jepang.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li><span className="font-semibold text-gray-900">Alamat:</span> Jl. Kresna No. 180, Banjar Penaga, Desa Yangapi, Kec. Tembuku, Kab. Bangli.</li>
            <li><span className="font-semibold text-gray-900">Fokus:</span> Pelatihan bahasa, budaya, etos kerja, dan skill teknis untuk karier di Jepang.</li>
            <li><span className="font-semibold text-gray-900">Berdiri:</span> Sejak 2016</li>
          </ul>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-red-100 bg-white p-5">
              <h3 className="font-semibold text-red-700">Visi</h3>
              <p className="mt-1 text-gray-700">Mencetak tenaga kerja profesional, berintegritas, dan berdaya saing global.</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-white p-5">
              <h3 className="font-semibold text-red-700">Misi</h3>
              <ul className="mt-1 list-disc pl-5 text-gray-700 space-y-1">
                <li>Pembelajaran bahasa Jepang yang efektif dan aplikatif.</li>
                <li>Penanaman etos kerja dan budaya profesional.</li>
                <li>Kemitraan dengan industri untuk penempatan kerja.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <img src="https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1200&auto=format&fit=crop" alt="Kegiatan 1" className="rounded-xl object-cover h-40 w-full" />
          <img src="https://images.unsplash.com/photo-1553532435-93d532a45f56?q=80&w=1200&auto=format&fit=crop" alt="Kegiatan 2" className="rounded-xl object-cover h-40 w-full" />
          <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1200&auto=format&fit=crop" alt="Kegiatan 3" className="rounded-xl object-cover h-40 w-full" />
          <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop" alt="Kegiatan 4" className="rounded-xl object-cover h-40 w-full" />
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop" alt="Kegiatan 5" className="rounded-xl object-cover h-40 w-full" />
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" alt="Kegiatan 6" className="rounded-xl object-cover h-40 w-full" />
        </div>
      </div>
    </section>
  )
}

export default About
