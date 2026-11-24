import type { Metadata } from "next";
import { FEE_ROWS, FEES_NOTE } from "@/lib/fees";
import { SCHOOL } from "@/lib/site";

export const metadata: Metadata = { title: "Fees" };

export default function FeesPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">School Fees</h1>
      <p className="mt-2 rounded-xl2 bg-wheat/40 p-3 text-lg font-bold">{FEES_NOTE}</p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[560px] overflow-hidden rounded-xl2 bg-white text-left shadow">
          <thead className="bg-leaf text-white">
            <tr><th className="p-3">Class</th><th className="p-3">Admission Fee</th><th className="p-3">Monthly Fee</th><th className="p-3">Bus Fee</th></tr>
          </thead>
          <tbody>
            {FEE_ROWS.map((r) => (
              <tr key={r.cls} className="border-t">
                <td className="p-3 font-bold">{r.cls}</td><td className="p-3">{r.admission}</td>
                <td className="p-3">{r.monthly}</td><td className="p-3">{r.transport}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href={`tel:${SCHOOL.phoneTel}`} className="btn mt-6 bg-leaf text-white">📞 Call to ask about fees</a>
    </section>
  );
}
