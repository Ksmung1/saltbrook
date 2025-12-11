import { Target, Eye, Award } from "lucide-react";
import { Link } from "react-router-dom";
import doc from "../assets/doc.jpg"

const Timing = () => {
  const missions = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description:
        "Mould and nurture lifelong learners equipped with strong academic skills through a progressive curriculum and diverse extracurricular activities.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Our Vision",
      description:
          "Foster value-based ethical competency and knowledge so students grow into responsible citizens dedicated to serving their community and the global society."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Our Values",
      description:
          "Cultivate a Christian learning environment where students, teachers and parents embrace the presence of God to enrich the world we inhabit."    
    },
  ];

  const infos = [
          { title: "Mandatory Public Disclosure Link", link: "/about" },
          { title: "CBSE Affiliation Letter", link: "#" },
          { title: "Trust / Society Registration Certificate", link: "#" },
          { title: "No Objection Certificate (NoC)", link: "#" },
          { title: "Recognition Certificate under RTE Act, 2009", link: "#" },
          { title: "Building Safety Certificate", link: "#" },
          { title: "Fire Safety Certificate", link: "#" },
          { title: "Self-Certificate – Appendix II", link: "#" },
          { title: "Water Health & Sanitation Certificate", link: "#" },
          { title: "School Management Committee Details", link: "#" },
          { title: "Parent-Teacher Association (PTA)", link: "#" },
          { title: "School Self-Affidavit", link: "#" },
          ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />

          <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl opacity-40 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.20em] text-green-700">
          Timing
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
          Check   
          <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
          School Timings
          </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae sit, odit perspiciatis mollitia quasi cumque dolore quidem commodi labore.
          </p>
            <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                    to="#story"
                    className="inline-flex items-center rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 hover:bg-green-700 transition"
                    >
                    Our Story
                    </Link>

                    <Link
                    to="#info"
                    className="inline-flex items-center rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-100 transition"
                    >
                    School Info
                    </Link>
          </div>
          </div>
      </section>        

    </div>
  );
};

export default Timing;
