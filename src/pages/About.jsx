import { Target, Eye, Award } from "lucide-react";
import { Link } from "react-router-dom";
import SlideIn from "../effects/SlideIn.jsx";
import doc from "../assets/doc.jpg";

const About = () => {
const missions = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Our Educational Philosophy",
    description:
      "Mould and nurture lifelong learners equipped with strong academic skills through a progressive curriculum and diverse extracurricular activities.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Character & Leadership Development",
    description:
      "Foster value-based ethical competency and knowledge so students grow into responsible citizens dedicated to serving their community and the global society.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Faith & Community Culture",
    description:
      "Cultivate a Christian learning environment where students, teachers and parents embrace the presence of God to enrich the world we inhabit.",
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
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.20em] text-green-700">
              About Us
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              Discover Our
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Vision & Journey
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Explore Salt Brook School’s story, purpose, and commitment to
              nurturing excellence and developing confident, lifelong learners.
            </p>

          </SlideIn>
        </div>
      </section>

      {/* STORY AND MISSIONS */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <SlideIn direction="up" delay={0.05}>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Established in 2003, Salt Brook School is a private
                    co-educational institute, admitting students from
                    Preparatory to Class X and affiliated to the Board of
                    Secondary Education, Manipur (BoSEM). Located in Tuibuong,
                    Churachandpur, the school—where students primarily acquire
                    English as a second language—focuses strongly on
                    English-medium classes and communication, recognizing its
                    importance as one of the two official languages of India and
                    its global relevance.
                  </p>

                  <p>
                    From humble beginnings with mud-ground classrooms and kaccha
                    walls, God Almighty has blessed the institution in countless
                    ways as it continues to serve the community. Today, it
                    stands proudly as one of the leading schools in the region.
                  </p>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.07}>
              <div className="relative aspect-video h-full md:h-full rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-md">
                <div className="absolute inset-0" />
                <span className="relative z-10 text-gray-400 text-sm md:text-base">
                  School Image Coming Soon
                </span>
              </div>
            </SlideIn>
          </div>

          {/* Missions Section */}
          <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
            <SlideIn direction="up" delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Mission, Vision & Values
              </h2>
            </SlideIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {missions.map((value, index) => (
              <SlideIn
                key={value.title}
                direction="up"
                delay={0.06 * index}
              >
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="flex gap-3 items-start mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-10">
              Our Achievements
            </h2>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Pass Rate", value: "95%" },
              { label: "Awards Won", value: "80+" },
              { label: "Sports Teams", value: "15+" },
              { label: "Clubs & Societies", value: "30+" },
            ].map((item, index) => (
              <SlideIn
                key={item.label}
                direction="up"
                delay={0.06 * index}
              >
                <div className="text-center rounded-2xl bg-white shadow-sm border border-gray-100 py-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-light text-black mb-3">
                    {item.value}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* School Information */}
      <section id="info" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                School Information
              </h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Mandatory public disclosure documents and key institutional
                information.
              </p>
            </div>
          </SlideIn>

          {/* Disclosure Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infos.map((item, index) => (
              <SlideIn
                key={item.title}
                direction="up"
                delay={0.05 * index}
              >
                <Link
                  to={item.link}
                  className="group flex items-start gap-3 p-5 rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md hover:border-green-500 transition-all"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-100 text-green-700 text-xl font-bold group-hover:bg-green-600 group-hover:text-white transition overflow-hidden">
                    <img
                      src={doc}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs text-green-600 opacity-0 group-hover:opacity-100 transition">
                      View Document →
                    </span>
                  </div>
                </Link>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
