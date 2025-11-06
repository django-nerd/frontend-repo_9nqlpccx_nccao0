import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 text-white">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">Sejak 2016</span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">
              Membangun Profesionalisme untuk Masa Depan di Jepang
            </h1>
            <p className="mt-4 text-white/80 max-w-prose">
              LPK Hisou Universal Style berfokus pada pelatihan bahasa, budaya, dan etos kerja untuk mendukung karier Anda di Jepang.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-red-600 text-white px-5 py-3 font-medium shadow hover:bg-red-700 transition-colors">Ajukan Pelatihan</a>
              <a href="#about" className="inline-flex items-center rounded-full border border-white/30 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors">Pelajari Lebih Lanjut</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </section>
  )
}

export default Hero
