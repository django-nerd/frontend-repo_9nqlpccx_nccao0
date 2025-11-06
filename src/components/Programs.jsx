function Programs() {
  const items = [
    {
      title: 'Bahasa Jepang',
      desc: 'Pembelajaran intensif hiragana, katakana, kanji, percakapan, dan budaya kerja.',
    },
    {
      title: 'Etos Kerja',
      desc: 'Pembentukan kedisiplinan, komunikasi profesional, dan sikap kerja sesuai standar industri Jepang.',
    },
    {
      title: 'Skill Teknis',
      desc: 'Pelatihan keterampilan sesuai kebutuhan penempatan kerja seperti manufaktur dan perawatan.',
    },
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Program Pelatihan</h2>
          <p className="mt-2 text-gray-600">Rancang perjalanan karier Anda ke Jepang melalui kurikulum terstruktur.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="h-12 w-12 rounded-xl bg-red-50 text-red-600 grid place-items-center font-semibold">JP</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-full transition-all bg-red-500 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
