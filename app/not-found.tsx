import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 text-center">
      <h1 className="text-8xl font-bold text-slate-200">404</h1>
      <h2 className="font-bold text-4xl">Oops! Stránka nenalezena</h2>
      <p>
        Omlouváme se, ale stránka kterou hledáte neexistuje, byla odstraněna
        nebo je dočasně nedostupná.{" "}
      </p>

      <Link
        href="/"
        className="bg-slate-600 text-white py-2 px-4 mt-7 rounded hover:scale-105 transition-all hover:bg-slate-200 hover:text-slate-700 font-bold"
      >
        Zpátky na úvodní stranu
      </Link>
    </div>
  );
}
