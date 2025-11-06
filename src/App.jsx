import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />

        <section id="gallery" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Galeri</h2>
              <p className="mt-2 text-gray-600">Dokumentasi kegiatan dan pelatihan.</p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map((n) => (
                <img key={n} loading="lazy" className="h-48 w-full object-cover rounded-xl hover:brightness-110 transition" src={`https://picsum.photos/seed/hisou-${n}/600/400`} alt={`Galeri ${n}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-red-50/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Kontak Kami</h2>
              <p className="mt-2 text-gray-700">Silakan tinggalkan pesan, tim kami akan menghubungi Anda.</p>
              <form className="mt-6 grid grid-cols-1 gap-4">
                <input className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Nama" />
                <input type="email" className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Email" />
                <textarea rows={4} className="rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Pesan" />
                <button type="button" className="inline-flex items-center justify-center rounded-full bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700">Kirim Pesan</button>
              </form>
              <div className="mt-6 text-sm text-gray-700">
                Telp/WA: <a className="text-red-600" href="tel:+6281234567890">+62 812-3456-7890</a> • Email: <a className="text-red-600" href="mailto:info@hisoustyle.id">info@hisoustyle.id</a>
              </div>
            </div>
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-red-100">
                <iframe title="Lokasi LPK" className="w-full h-full" loading="lazy" src="https://www.google.com/maps?q=-8.451155,115.344699&z=14&output=embed" allowFullScreen />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
