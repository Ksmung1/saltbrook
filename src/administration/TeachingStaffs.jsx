import { staffsData } from "../data/staffsData";
import SlideIn from "../effects/SlideIn"; // remove this import if you don't want animations

const TeachingStaffs = () => {
  const filteredItems = staffsData.filter(
    (staff) => staff.category === "teaching"
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
              Teaching Staff
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              Our School&apos;s
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Teaching Staff
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Meet the dedicated teachers of Salt Brook School who guide,
              mentor and inspire our students every day — building strong
              foundations in both academics and character.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.03}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredItems.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-40 aspect-square object-cover object-top transition-transform duration-300 ease-out hover:scale-105"
                    />
                  </div>

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

export default TeachingStaffs;
