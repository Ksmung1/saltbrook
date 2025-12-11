import { staffsData } from "../data/staffsData";
import SlideIn from "../effects/SlideIn"; // optional, remove if not used

const StudentCouncil = () => {
  const filteredItems = staffsData.filter(
    (staff) => staff.category === "council"
  );

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.20em] text-green-700">
              Student Council
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              Our School’s
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Student Council
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              The Student Council represents the voice of our learners—leading
              through responsibility, teamwork, and service. These student
              leaders help cultivate discipline, support school activities, and
              strengthen our community spirit.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.04}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredItems.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-40 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

    </div>
  );
};

export default StudentCouncil;
