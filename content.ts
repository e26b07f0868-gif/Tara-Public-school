import { SCHOOL } from "./site";

/** Site language is simple English. Hindi toggle comes later (Phase 2b). */
export const TEXT = {
  heroTitle: `${SCHOOL.name.en}, Nunera`,
  heroSub: "Where village dreams take flight.",
  quick: [
    { icon: "📝", label: "Apply for Admission", href: "/admissions" },
    { icon: "💰", label: "Fees", href: "/fees" },
    { icon: "🏆", label: "Results", href: "/#results" },
    { icon: "🖼️", label: "Photos", href: "/#gallery" },
    { icon: "📞", label: "Contact", href: "/contact" },
  ],
  directorTitle: "Message from our Director",
  directorMsg:
    "Every child has a talent. Our job is to give them the right push and the right guidance. " +
    "At Tara Public School, we work hard so that every child from our villages can study well, " +
    "score well and go ahead in life. // REPLACE WITH REAL DATA: director's own words",
  about:
    "Tara Public Senior Secondary School is in Nunera, near Sohna, Gurugram. We started in 2007 and teach students up to Class 12 under the Haryana Board.",
};

export const RESULT_POSTERS = [
  { src: "/images/results/class10-march-2025.jpeg", alt: "Class 10 results, March 2025: 100% result with student photos", w: 335, h: 597 },
  { src: "/images/results/science-and-toppers-director.jpg", alt: "100% result in Science stream, Class 10 toppers and Director R.S. Bhamla", w: 386, h: 518 },
  { src: "/images/results/commerce-stream.jpg", alt: "100% result in Commerce stream with student photos", w: 386, h: 518 },
] as const;

export const GALLERY = [
  { src: "/images/school/building-1.jpg", alt: "School building", w: 515, h: 388 },
  { src: "/images/school/main-gate.jpg", alt: "School main gate", w: 399, h: 300 },
  { src: "/images/school/stage-event.jpeg", alt: "School programme on stage", w: 638, h: 480 },
] as const;
