import React, { useEffect, useRef, useState } from "react";

const Result = () => {
  const results = [
    { id: 1, year: 2022, registeredStudents: 128, passedStudents: 128 },
    { id: 2, year: 2023, registeredStudents: 111, passedStudents: 111 },
    { id: 3, year: 2024, registeredStudents: 99, passedStudents: 99 },
  ];

  const calculatePercentage = (registered, passed) =>
    ((passed / registered) * 100).toFixed(1);

  const totalRegistered = results.reduce(
    (sum, r) => sum + r.registeredStudents,
    0
  );
  const totalPassed = results.reduce(
    (sum, r) => sum + r.passedStudents,
    0
  );
  const overallPassRate = calculatePercentage(totalRegistered, totalPassed);
  const yearsTracked = results.length;

  // Smooth scroll with offset (e.g. for sticky header)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100; // offset 100px
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/50 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <span className="inline-block rounded-full bg-green-50 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-green-700">
              Academic Results
            </span>
          </FadeIn>

          <FadeIn delay={0.04}>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.1] text-gray-900 tracking-tight">
              Past Years&apos;{" "}
              <span className="block mt-1 bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
                Performance
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.04}>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
              An overview of our students&apos; performance over recent years,
              reflecting strong outcomes in the board examinations.
            </p>
          </FadeIn>

          <FadeIn delay={0.04}>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("results")}
                className="group inline-flex items-center rounded-full bg-green-600 px-7 py-3 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-all"
              >
                View Results
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("statistics")}
                className="inline-flex items-center rounded-full border border-gray-300 px-7 py-3 text-xs md:text-sm font-semibold text-gray-700 hover:border-green-500 hover:bg-gray-50 hover:text-green-700 transition-all"
              >
                Statistics
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results Overview Stats */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SlideIn direction="up" delay={0}>
              <div className="rounded-xl bg-white p-6 text-gray-900 shadow-sm border border-gray-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg border border-green-200 flex items-center justify-center text-[13px] font-semibold text-green-700">
                    PR
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-semibold mb-1">
                  {overallPassRate}%
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  Overall Pass Rate
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.04}>
              <div className="rounded-xl bg-white p-6 text-gray-900 shadow-sm border border-gray-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg border border-blue-200 flex items-center justify-center text-[13px] font-semibold text-blue-700">
                    TS
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-semibold mb-1">
                  {totalRegistered}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  Total Students Appeared
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.04}>
              <div className="rounded-xl bg-white p-6 text-gray-900 shadow-sm border border-gray-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg border border-purple-200 flex items-center justify-center text-[13px] font-semibold text-purple-700">
                    YR
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-semibold mb-1">
                  {yearsTracked}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  Years Tracked
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                Year-wise Results
              </h2>
              <div className="w-20 h-1 bg-green-500 rounded-full mx-auto" />
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={0.04}>
            <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wide">
                        Year
                      </th>
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wide">
                        Registered Students
                      </th>
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wide">
                        Passed Students
                      </th>
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wide">
                        Pass Percentage
                      </th>
                      <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wide">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {results.map((result, index) => (
                      <tr
                        key={result.id}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-[12px] font-semibold text-gray-700">
                              {index + 1}
                            </div>
                            <span className="text-base font-medium text-gray-900">
                              {result.year}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-base font-medium text-gray-800">
                            {result.registeredStudents}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-base font-medium text-green-700">
                            {result.passedStudents}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-base font-medium text-gray-900">
                            {calculatePercentage(
                              result.registeredStudents,
                              result.passedStudents
                            )}
                            %
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-[11px] font-semibold border border-green-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            100% Pass
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-gray-100">
                {results.map((result, index) => (
                  <div
                    key={result.id}
                    className="p-5 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-[12px] font-semibold text-gray-700">
                          {index + 1}
                        </div>
                        <span className="text-lg font-medium text-gray-900">
                          {result.year}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[11px] font-semibold border border-green-100">
                        {calculatePercentage(
                          result.registeredStudents,
                          result.passedStudents
                        )}
                        %
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Registered</span>
                        <span className="text-base font-medium text-gray-900">
                          {result.registeredStudents}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Passed</span>
                        <span className="text-base font-medium text-green-700">
                          {result.passedStudents}
                        </span>
                      </div>

                      <div className="pt-2 text-center text-xs font-medium text-gray-800">
                        Pass Rate:{" "}
                        {calculatePercentage(
                          result.registeredStudents,
                          result.passedStudents
                        )}
                        %
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Achievement Highlight */}
      <section id="statistics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <div className="rounded-2xl bg-white p-8 md:p-10 text-gray-900 shadow-sm border border-gray-200 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-green-500 to-emerald-400" />
              <div className="relative z-10 pl-4 md:pl-6">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Consistent Academic Performance
                </h2>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  Salt Brook School has maintained a{" "}
                  <span className="font-semibold text-gray-900">
                    {overallPassRate}% overall pass rate
                  </span>{" "}
                  over the tracked years. This reflects focused teaching,
                  committed students, and strong academic support systems.
                </p>

                <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-700">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Structured academic planning
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Individual student support
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Regular assessments &amp; feedback
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
};

/* Animation Components */

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

const SlideIn = ({ children, direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const directions = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directions[direction]}`
      }`}
    >
      {children}
    </div>
  );
};

export default Result;
