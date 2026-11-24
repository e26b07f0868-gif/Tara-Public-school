import Link from "next/link";
import Image from "next/image";
import { SCHOOL } from "@/lib/site";
import { TEXT, RESULT_POSTERS, GALLERY } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero: simple photo hero for now. 3D scene is added in Phase 4. */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-sky/40 to-cream px-4 pb-10 pt-8 text-center">
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold sm:text-5xl">{TEXT.heroTitle}</h1>
        <p className="mt-2 text-xl text-sunrise font-bold">{TEXT.heroSub}</p>
        <div className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-xl2 shadow-xl">
          <Image src="/images/school/building-1.jpg" alt="Tara School building" width={515} height={388} priority className="h-auto w-full" />
        </div>
        <p className="mt-4 inline-block rounded-full bg-leaf px-4 py-2 font-bold text-white">
          ✔ Permanent Recognized · Haryana Board · School Code {SCHOOL.schoolCode}
        </p>
        <p className="mt-2 text-sm text-ink/60">{/* REPLACE WITH REAL DATA: recognition/affiliation number & certificate (add later) */}</p>
      </section>

      {/* Quick actions */}
      <section className="mx-auto grid max-w-4xl grid-cols-2 gap-3 px-4 sm:grid-cols-5">
        {TEXT.quick.map((q) => (
          <Link key={q.label} href={q.href} className="card flex flex-col items-center gap-1 py-5 text-center text-lg font-bold hover:-translate-y-1 hover:shadow-xl transition">
            <span className="text-4xl" aria-hidden>{q.icon}</span>{q.label}
          </Link>
        ))}
      </section>

      {/* Director */}
      <section className="mx-auto mt-12 max-w-4xl px-4">
        <div className="card">
          <h2 className="text-2xl font-extrabold">{TEXT.directorTitle}</h2>
          <p className="mt-1 font-bold text-sunrise">Director: {SCHOOL.director.en}</p>
          <p className="mt-3 text-lg">{TEXT.directorMsg}</p>
          <blockquote className="mt-4 border-l-4 border-wheat pl-3 italic">“{SCHOOL.motto.en}”</blockquote>
        </div>
      </section>

      {/* Results with student photos, shown as given */}
      <section id="results" className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold">Our Proud Achievers</h2>
        <p className="mt-1 text-center text-lg">100% result in Class 10, Science and Commerce. Tap a poster to see it big.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {RESULT_POSTERS.map((p) => (
            <a key={p.src} href={p.src} target="_blank" rel="noopener noreferrer" className="card block overflow-hidden p-2 transition hover:-translate-y-1">
              <Image src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="h-auto w-full rounded-lg" />
            </a>
          ))}
        </div>
      </section>

      {/* Fees preview */}
      <section className="mx-auto mt-12 max-w-4xl px-4">
        <div className="card text-center">
          <h2 className="text-2xl font-extrabold">Fees</h2>
          <p className="mt-2 text-lg">See class-wise fees in simple table form.</p>
          <Link href="/fees" className="btn mt-4 bg-wheat text-ink">💰 View Fees</Link>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold">Our School</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {GALLERY.map((g) => (
            <Image key={g.src} src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" className="h-auto w-full rounded-xl2 shadow-lg" />
          ))}
        </div>
      </section>

      {/* About + map */}
      <section className="mx-auto mt-12 max-w-4xl px-4">
        <div className="card">
          <h2 className="text-2xl font-extrabold">About Us</h2>
          <p className="mt-2 text-lg">{TEXT.about}</p>
          <p className="mt-2">📍 {SCHOOL.address.street}, {SCHOOL.address.village}, Sohna, Gurugram, Haryana. PIN: {SCHOOL.address.pin}</p>
        </div>
      </section>
    </>
  );
}
