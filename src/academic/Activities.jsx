import { Link } from "react-router-dom";
import SlideIn from "../effects/SlideIn";
import { Book, Notebook } from "lucide-react";

const Activities = () => {
  const nonScholastics = [
    {
      activity: "Games & Sports",
      desc:
        "The school strongly believes in the all-round development of every student. Weekly sports activities are conducted throughout the year, culminating in the Annual Sports Week at the end of the academic session.",
      desc2: (
        <>
          Students are grouped into four Houses —{" "}
          <span className="inline-flex flex-wrap gap-2">
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-900 text-white">
              Panthers
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500 text-white">
              Leopards
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-500 text-white">
              Tigers
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-yellow-600 text-white">
              Lions
            </span>
          </span>{" "}
          — promoting teamwork, discipline and leadership through inter-house
          competitions and sports events.
        </>
      ),
    },
    {
      activity: "Co-Curricular Activities",
      desc:
        "A wide range of co-curricular activities are organised to develop creativity, confidence, communication and teamwork.",
      desc2:
        "Literary programs, art and craft, music, dance and cultural events provide students with a platform to showcase their talents and grow beyond textbooks.",
    },
    {
      activity: "Competitive Exam Training",
      desc:
        "The school conducts the SBS Competitive Exam, where students attempt national-level competitive exam questions.",
      desc2:
        "This familiarises them with exam patterns and procedures, improves preparedness and builds confidence for future competitive examinations.",
    },
    {
      activity: "SBS Hallmark",
      desc: (
        <>
          The school publishes <span className="font-medium">SBS Hallmark</span>,
          a monthly bulletin showcasing students’ writing, artwork and
          achievements.
        </>
      ),
      desc2:
        "It offers a valuable platform for students to refine their writing, thinking and communication skills while celebrating their creative expression.",
    },
    {
      activity: "Awards & Recognition",
      desc:
        "At the end of each academic session, the school recognises and celebrates student achievements across different areas.",
      desc2:
        "Awards are given for academic excellence, sports, cultural participation, discipline and overall conduct — motivating students to pursue excellence in every aspect of school life.",
    },
  ];

  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 100; // adjust if your navbar height changes
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.20em] text-green-700">
              School Activities
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              Activities
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Scholastic &amp; Non-Scholastic
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              At Salt Brook School, learning goes beyond the classroom. Alongside
              strong academics, we focus on sports, co-curricular activities,
              competitions, creativity and character-building to ensure the
              all-round development of every child.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="#scholastic"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("scholastic");
                }}
                className="inline-flex items-center rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 hover:bg-green-700 transition"
              >
                Scholastic Activities
              </Link>

              <Link
                to="#non-scholastic"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("non-scholastic");
                }}
                className="inline-flex items-center rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition"
              >
                Non-Scholastic Activities
              </Link>
            </div>

          </SlideIn>
        </div>
      </section>

      {/* SCHOLASTIC OVERVIEW */}
      <section id="scholastic" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scholastic Programme
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-10" />
          </SlideIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SlideIn direction="up" delay={0.08}>
              <div className="group rounded-3xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-400 h-full hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg">
                    <Book />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Academics & Curriculum
                  </h3>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    The school follows the prescribed syllabus and textbooks of
                    the Board of Secondary Education, Manipur (BoSEM) for all
                    classes from Class I to Class X. For Kindergarten, teaching
                    is child-centred, activity-based and age-appropriate.
                  </p>
                  <div>
                    <h4 className="font-semibold text-black mb-1 text-sm md:text-base">
                      Audio-visual & modern teaching:
                    </h4>
                    <p>
                      Teachers regularly use audio-visual aids and digital tools
                      to make concepts clearer, build curiosity and keep
                      classroom learning interactive and engaging.
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.06}>
              <div className="group rounded-3xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-400 h-full hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <Notebook />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Scholastic Support
                  </h3>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Regular assessments, class tests and examinations are
                    conducted to monitor progress and reinforce learning.
                    Teachers provide guidance, remedial support and personalised
                    feedback.
                  </p>
                  <p>
                    The focus is on understanding rather than memorisation —
                    building strong foundations in core subjects and preparing
                    students for higher studies and future challenges.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* NON-SCHOLASTIC SECTION */}
      <section id="non-scholastic" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Non-Scholastic Activities
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-10" />
            <p className="max-w-3xl text-gray-600 leading-relaxed text-sm md:text-base">
              Beyond academics, Salt Brook School offers a rich variety of
              activities that build character, confidence, teamwork and
              creativity. Students are encouraged to explore their interests and
              discover their strengths through sports, arts, competitions and
              leadership opportunities.
            </p>
          </SlideIn>

          <div className="mt-10 space-y-16">
            {nonScholastics.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <SlideIn key={item.activity} direction="up" delay={0.08 * index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Text block */}
                    <div
                      className={`${
                        isEven ? "md:order-1" : "md:order-2"
                      } order-1`}
                    >
                      <h3 className="text-2xl md:text-3xl mb-5 font-bold text-gray-900">
                        {item.activity}
                      </h3>
                      <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                        <p>{item.desc}</p>
                        <p>{item.desc2}</p>
                      </div>
                    </div>

                    {/* Image placeholder (alternates side on desktop) */}
                    <div
                      className={`${
                        isEven ? "md:order-2" : "md:order-1"
                      } order-2`}
                    >
                      <div className="bg-gray-100 rounded-2xl h-64 md:h-80 flex items-center justify-center shadow-sm">
                        <span className="text-gray-400 text-xs md:text-sm">
                          Activity visual / photo placeholder
                        </span>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
