import FadeIn from "../effects/FadeIn";
import SlideIn from "../effects/SlideIn";

const Admission = () => {
  const fees = {
    session: "2025–26",
    annual: {
      preKG: "Rs. 5500/-",
      oldStudents: [
        { label: "LKG & UKG", amount: "Rs. 5200/-" },
        { label: "Class I–V", amount: "Rs. 5500/-" },
        { label: "Class VI–VIII", amount: "Rs. 5800/-" },
        { label: "Class IX–X", amount: "Rs. 6100/-" },
      ],
      newStudents: [
        { label: "LKG & UKG", amount: "Rs. 5900/-" },
        { label: "Class I–V", amount: "Rs. 6200/-" },
        { label: "Class VI–VIII", amount: "Rs. 6500/-" },
        { label: "Class VI–X", amount: "Rs. 6800/-" },
      ],
      note:
        "Class IX & XI BSEM registration and enrolment fees will be charged separately when required.",
    },
    course: {
      note: "* Fees must be submitted on or before the 10th of every month.",
      items: [
        { label: "Class Pre-KG – V", amount: "Rs. 1200/- per month" },
        { label: "Class VI – X", amount: "Rs. 1300/- per month" },
      ],
    },
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen mx-auto bg-white">
      {/* HEADER */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/50 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <span className="inline-block rounded-full bg-green-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-green-700 shadow-sm">
              Admission 2025–26
            </span>
          </FadeIn>

          <FadeIn delay={0.04}>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              Join{" "}
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Salt Brook School
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Learn about our admission process, eligibility, and fee structure
              for boarding and day scholars from Pre-Kindergarten to Class VIII.
            </p>
          </FadeIn>

          <FadeIn delay={0.055}>
            <div className="mt-10 flex flex-wrap gap-3">

              <button
                type="button"
                onClick={() => scrollToSection("admission-process")}
                className="inline-flex items-center rounded-full bg-slate-100 px-7 py-3 
                text-xs font-semibold uppercase tracking-wide text-slate-700
                hover:bg-slate-200 transition-all 
                focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Admission Process
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("selection")}
                className="inline-flex items-center rounded-full bg-indigo-50 px-7 py-3 
                text-xs font-semibold uppercase tracking-wide text-indigo-700
                hover:bg-indigo-100 transition-all 
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                Selection
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("requirement")}
                className="inline-flex items-center rounded-full bg-rose-50 px-7 py-3
                text-xs font-semibold uppercase tracking-wide text-rose-700
                hover:bg-rose-100 transition-all
                focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
              >
                Requirements
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("fee")}
                className="group inline-flex items-center rounded-full bg-emerald-600 px-7 py-3 
                text-xs font-semibold uppercase tracking-wide text-white shadow-md 
                hover:bg-emerald-700 hover:shadow-lg transition-all 
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Fee Structure
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

            </div>


          </FadeIn>
        </div>
      </section>

      {/* ADMISSION PROCESS / RULES */}
      <section
        id="admission-process"
        className="py-20 bg-gray-50 border-y border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              School Admission
            </h2>
            <div className="w-16 h-1 bg-green-500 rounded-full mb-10" />
          </SlideIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Boarding Admission */}
            <SlideIn direction="up" delay={0.08}>
              <div className="group rounded-2xl bg-white p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Boarding Admission
                  </h3>
                </div>
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Applicants seeking admission to the boarding section must
                    submit the application form along with all required
                    documents. The admission process usually begins in the first
                    week of January, and it is encouraged to book seats by
                    December after the final examination.
                  </p>
                  <p>
                    After clearing the admission test, the applicant will be
                    interviewed by the Principal. If selected, admission may be
                    secured the following day.
                  </p>
                </div>
              </div>
            </SlideIn>

            {/* Day School Admission */}
            <SlideIn direction="up" delay={0.05}>
              <div className="group rounded-2xl bg-white p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Day School Admission
                  </h3>
                </div>
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Admission generally starts in the first week of January.
                    Application forms for Pre-Kindergarten are available from
                    the first week of December (subject to yearly updates).
                    Children must have completed 3 years of age. Priority is
                    given to siblings of existing students and staff children;
                    remaining seats are allotted by lottery. For LKG, the
                    minimum age is 4 years.
                  </p>
                  <p>
                    Admission from Lower Kindergarten to Class VIII depends on
                    seat availability. There is no admission for Classes IX and X.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* General Rules */}
          <SlideIn direction="up" delay={0.05}>
            <div className="mt-10 rounded-2xl bg-white p-7 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Admission Rules & Conditions
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                {[
                  "Admission tests are conducted for new candidates upon submission of required documents. The school reserves the right to place a candidate in a class suitable to his/her level.",
                  "Every fresh candidate must be introduced in person to the Principal by a parent or guardian.",
                  "Submission of application forms and appearing for tests/interviews does not guarantee admission.",
                  "Test results will be published on the school notice board on the following day.",
                  "Fees once paid are non-refundable under any circumstances.",
                  "Admission acceptance or rejection is entirely at the discretion of the school administration.",
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-green-50 text-green-700 text-xs flex items-center justify-center font-semibold">
                      {idx + 1}
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* SELECTION */}
      <section id="selection" className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Selection Process
            </h2>
            <div className="w-16 h-1 bg-green-500 rounded-full mb-10" />
          </SlideIn>

          <SlideIn direction="up" delay={0.06}>
            <div className="rounded-2xl bg-gray-50 p-7 shadow-sm border border-gray-100">
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center shadow-sm">
                    <span className="text-white font-semibold text-lg">1</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    For Pre-Kindergarten and Lower Kindergarten, admission is
                    granted based on age eligibility and the child’s general
                    conduct during the interaction session.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center shadow-sm">
                    <span className="text-white font-semibold text-lg">2</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    For Upper Kindergarten to Class VIII, admission tests are
                    conducted in English and Mathematics based on the syllabus
                    of the previously completed class. Selection is based on the
                    previous class results and performance in the admission test.
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section
        id="requirement"
        className="py-20 bg-gray-50 border-y border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Admission Requirements
            </h2>
            <div className="w-16 h-1 bg-green-500 rounded-full mb-10" />
          </SlideIn>

          <SlideIn direction="up" delay={0.05}>
            <div className="rounded-2xl bg-white p-7 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                Required Documents
              </h3>
              <p className="mb-5 text-gray-600 text-sm">
                The following documents must be submitted along with the
                completed application form:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Original birth certificate (required for Pre-Kindergarten and Lower Kindergarten).",
                  "Recent passport-sized photographs of the student.",
                  "Transfer Certificate (for admission to Upper Kindergarten to Class VIII).",
                  "Progress report cards of the previously completed class.",
                ].map((req, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors"
                  >
                    <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-white border border-green-200 text-green-700 flex items-center justify-center text-xs font-semibold">
                      {idx + 1}
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* FEE STRUCTURE */}
      <section id="fee" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                Session {fees.session}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Fee Structure
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Salt Brook School • Churachandpur
              </p>
              <div className="w-16 h-1 bg-green-500 rounded-full mx-auto mt-5" />
            </div>
          </SlideIn>

          {/* Annual Fees */}
          <div className="mb-16">
            <SlideIn direction="up" delay={0.08}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                I. Annual Fees
                <span className="block text-sm font-normal text-gray-500 mt-1">
                  Payable at the time of admission
                </span>
              </h3>
            </SlideIn>

            <SlideIn direction="up" delay={0.06}>
              <div className="rounded-2xl bg-gray-50 p-7 shadow-sm border border-gray-100">
                {/* Pre-KG */}
                <div className="mb-7 pb-7 border-b border-gray-200">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <span className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center text-white text-xs font-semibold">
                        PK
                      </span>
                      Pre–Kindergarten
                    </h4>
                    <span className="text-xl font-bold text-green-700 bg-white px-5 py-2 rounded-lg shadow-sm">
                      {fees.annual.preKG}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  {/* Old Students */}
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Old Students
                      </h4>
                      <span className="px-3 py-1 text-[10px] uppercase tracking-wide text-green-700 bg-green-50 rounded-full font-semibold">
                        Existing
                      </span>
                    </div>
                    <div className="space-y-3">
                      {fees.annual.oldStudents.map((row, idx) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-sm text-gray-700 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-white border border-green-200 flex items-center justify-center text-[10px] font-semibold text-green-700">
                              {idx + 1}
                            </span>
                            {row.label}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            {row.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* New Students */}
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="text-lg font-semibold text-gray-900">
                        New Students
                      </h4>
                      <span className="px-3 py-1 text-[10px] uppercase tracking-wide text-emerald-700 bg-emerald-50 rounded-full font-semibold">
                        Fresh
                      </span>
                    </div>
                    <div className="space-y-3">
                      {fees.annual.newStudents.map((row, idx) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-sm text-gray-700 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-[10px] font-semibold text-emerald-700">
                              {idx + 1}
                            </span>
                            {row.label}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            {row.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="mt-7 p-4 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold text-gray-900">Note:</span>{" "}
                    {fees.annual.note}
                  </span>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Monthly Course Fee */}
          <div>
            <SlideIn direction="up" delay={0.04}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                II. Course Fee
                <span className="block text-sm font-normal text-gray-500 mt-1">
                  To be paid on or before the 10th of every month
                </span>
              </h3>
            </SlideIn>

            <SlideIn direction="up" delay={0.032}>
              <div className="rounded-2xl bg-gray-50 p-7 shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fees.course.items.map((item, idx) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white font-semibold text-base">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-800 mb-1">
                            {item.label}
                          </h4>
                          <p className="text-xl font-bold text-green-700">
                            {item.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{fees.course.note}</span>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
