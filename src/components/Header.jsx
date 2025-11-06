import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-bold text-red-600 tracking-tight">
            <span className="inline-block h-3 w-3 rounded-sm bg-red-500" />
            <span>LPK Hisou Universal Style</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">Tentang</a>
            <a href="#programs" className="text-gray-700 hover:text-red-600 transition-colors">Program</a>
            <a href="#gallery" className="text-gray-700 hover:text-red-600 transition-colors">Galeri</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Kontak</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors">Ajukan Pelatihan</a>
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
            onClick={() => setOpen(v => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2 text-sm font-medium">
              <a onClick={() => setOpen(false)} href="#about" className="px-3 py-2 rounded hover:bg-red-50 hover:text-red-600">Tentang</a>
              <a onClick={() => setOpen(false)} href="#programs" className="px-3 py-2 rounded hover:bg-red-50 hover:text-red-600">Program</a>
              <a onClick={() => setOpen(false)} href="#gallery" className="px-3 py-2 rounded hover:bg-red-50 hover:text-red-600">Galeri</a>
              <a onClick={() => setOpen(false)} href="#contact" className="px-3 py-2 rounded hover:bg-red-50 hover:text-red-600">Kontak</a>
              <a onClick={() => setOpen(false)} href="#contact" className="mt-2 inline-flex items-center rounded-full bg-red-600 text-white px-4 py-2 hover:bg-red-700">Ajukan Pelatihan</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
