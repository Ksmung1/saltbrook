import React, { useEffect, useState } from "react";
import {
  FaRegCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import axiosInstance from "../../api";
import SlideIn from "../effects/SlideIn"; // ← adjust path if needed

export default function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [academicEvents, setAcademicEvents] = useState([
    { date: "2025-02-12", title: "Teacher's Training & Orientation", type: "academic" },
    { date: "2025-02-13", title: "Teacher's Training & Orientation", type: "academic" },
    { date: "2025-02-14", title: "Staff Get Together", type: "event" },
    { date: "2025-02-17", title: "Regular Classes Commence", type: "academic" },
    { date: "2025-02-20", title: "Zomi Nam Ni", type: "holiday" },
    { date: "2025-03-21", title: "Inauguration of Board of Prefects", type: "event" },
    { date: "2025-04-18", title: "Good Friday", type: "holiday" },
    { date: "2025-05-15", title: "FA-I Result Declaration", type: "academic" },
    { date: "2025-05-16", title: "Hmar Martyrs' Day", type: "holiday" },
    { date: "2025-06-30", title: "Summer Vacation Begins", type: "holiday" },
    { date: "2025-08-04", title: "Classes Resume", type: "academic" },
    { date: "2025-08-15", title: "Independence Day", type: "holiday" },
    { date: "2025-09-12", title: "SA-I Result Declaration", type: "academic" },
    { date: "2025-09-13", title: "Black Day", type: "holiday" },
    { date: "2025-10-02", title: "Gandhi Jayanti", type: "holiday" },
    { date: "2025-10-06", title: "Annual Sports", type: "event" },
    { date: "2025-11-01", title: "Kut", type: "holiday" },
    { date: "2025-12-10", title: "FA-II Result Declaration", type: "academic" },
    { date: "2025-12-20", title: "Winter Break Begins", type: "holiday" },
    { date: "2026-01-05", title: "Classes Resume", type: "academic" },
    { date: "2026-03-06", title: "SA-II Result Declaration", type: "academic" },
    { date: "2026-03-09", title: "New Admissions Begin", type: "academic" },
  ]);

  // API fetch
  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const res = await axiosInstance.get("/api/calendar");
        if (isMounted && Array.isArray(res.data)) {
          setAcademicEvents(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 11 },
    (_, i) => today.getFullYear() - 5 + i
  );

  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();

  // Small deterministic "random" to vary pulse duration per date
  const getPulseDuration = (type, y, m, d) => {
    if (!type) return null;
    const base =
      type === "holiday" ? 2.4 : type === "event" ? 1.8 : 2.1; // seconds
    // deterministic seed based on date so it doesn’t jump every render
    const seed = (y * 10000 + (m + 1) * 100 + d * 997) % 10; // 0..9
    const factor = 0.7 + seed / 20; // 0.7 .. 1.2
    return `${(base * factor).toFixed(2)}s`;
  };

  // metadata for a particular date
  const getMetaForDate = (y, m, d) => {
    const dateStr = `${y}-${String(m + 1).padStart(2, "0")}-${String(d)
      .padStart(2, "0")}`;

    const events = academicEvents.filter((ev) => ev.date === dateStr);
    const isSunday = new Date(y, m, d).getDay() === 0;

    let cellType = null; // 'holiday' | 'event' | 'academic' | null

    if (events.some((ev) => ev.type === "holiday") || isSunday) {
      cellType = "holiday";
    } else if (
      events.some(
        (ev) => ev.type === "event" || ev.type === "events"
      )
    ) {
      cellType = "event";
    } else if (events.some((ev) => ev.type === "academic")) {
      cellType = "academic";
    }

    return { dateStr, events, isSunday, cellType };
  };

  // render a single month's grid
  const renderMonthGrid = (y, m) => {
    const daysInMonth = getDaysInMonth(y, m);
    const firstDay = new Date(y, m, 1).getDay(); // 0..6
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const cells = [];

    for (let cell = 0; cell < totalCells; cell++) {
      const dayNumber = cell - firstDay + 1;
      if (dayNumber < 1 || dayNumber > daysInMonth) {
        cells.push(
          <div
            key={`empty-${m}-${cell}`}
            className="border border-gray-100 bg-gray-50 min-h-[18px]"
          />
        );
        continue;
      }

      const { cellType, events } = getMetaForDate(y, m, dayNumber);

      let bgClass = "bg-white";
      let textClass = "text-gray-700";
      let ringClass = "";
      let animationClass = "";
      let animationStyle = {};

      if (cellType === "holiday") {
        bgClass = "bg-red-50";
        textClass = "text-red-700";
        ringClass = "ring-1 ring-red-200";
      } else if (cellType === "event") {
        bgClass = "bg-blue-50";
        textClass = "text-blue-700";
        ringClass = "ring-1 ring-blue-200";
      } else if (cellType === "academic") {
        bgClass = "bg-green-50";
        textClass = "text-green-700";
        ringClass = "ring-1 ring-green-200";
      }

      if (cellType) {
        animationClass = "animate-pulse";
        animationStyle = { animationDuration: getPulseDuration(cellType, y, m, dayNumber) };
      }

      cells.push(
        <div
          key={`${y}-${m}-${dayNumber}`}
          className={`border border-gray-100 p-[1px] flex items-center justify-center ${bgClass} ${ringClass} ${
            cellType ? animationClass : ""
          }`}
          style={cellType ? animationStyle : undefined}
          title={events.map((e) => e.title).join(" • ")}
        >
          <div className="text-[9px] lg:text-[11px] font-medium">
            <span className={textClass}>{dayNumber}</span>
          </div>
        </div>
      );
    }

    return (
      <div>
        {/* week headers */}
        <div className="grid grid-cols-7 text-[8px] lg:text-[10px] font-semibold text-center text-gray-500 mb-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="px-1">
              {d}
            </div>
          ))}
        </div>

        {/* days */}
        <div className="grid grid-cols-7 gap-0">{cells}</div>
      </div>
    );
  };

  // previous / next year handlers
  const prevYear = () => setYear((prev) => prev - 1);
  const nextYear = () => setYear((prev) => prev + 1);

  // events list for the selected year
  const yearEvents = academicEvents
    .filter((ev) => ev.date.startsWith(String(year)))
    .sort((a, b) => a.date.localeCompare(b.date));

  const yearSummary = yearEvents.reduce(
    (acc, ev) => {
      if (ev.type === "holiday") acc.holiday += 1;
      else if (ev.type === "event" || ev.type === "events") acc.event += 1;
      else if (ev.type === "academic") acc.academic += 1;
      return acc;
    },
    { holiday: 0, event: 0, academic: 0 }
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.20em] text-green-700">
              Calendar
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              Academic Calendar
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                {year}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              View key academic dates, examinations, holidays and school events
              across the year at Salt Brook School.
            </p>

            <div className="flex flex-col gap-4 mt-10 lg:flex-row lg:items-center lg:justify-between">
              {/* Year controls */}
              <div className="flex items-center gap-2 lg:gap-3">
                <button
                  onClick={prevYear}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-800 border border-gray-200 transition"
                  aria-label="Previous Year"
                >
                  <FaChevronLeft />
                </button>

                <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 bg-white shadow-sm">
                  <FaRegCalendarAlt className="text-gray-500" />
                  <select
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                    className="text-sm outline-none bg-transparent text-gray-800"
                  >
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={nextYear}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-800 border border-gray-200 transition"
                  aria-label="Next Year"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Small summary badges */}
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-200 border border-green-300" />
                  Academic:{" "}
                  <span className="font-semibold">
                    {yearSummary.academic}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-200 border border-blue-300" />
                  Events:{" "}
                  <span className="font-semibold">{yearSummary.event}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 bg-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-200 border border-red-300" />
                  Holidays / Sundays:{" "}
                  <span className="font-semibold">{yearSummary.holiday}</span>
                </span>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Calendar + Events */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-2">
              {/* Calendar months */}
              <div className="p-3 lg:p-4 bg-white shadow-lg border border-gray-100 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-base lg:text-lg text-gray-900">
                    Salt Brook School Academic Calendar — {year}
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3">
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm p-2 hover:shadow-md transition"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-[11px] font-semibold text-gray-800">
                          {monthNames[idx]}
                        </h3>
                        <div className="text-[10px] text-gray-500">{year}</div>
                      </div>

                      {renderMonthGrid(year, idx)}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-green-50 border border-green-200" />
                    <span>Academic day / result / class</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-blue-50 border border-blue-200" />
                    <span>School event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-red-50 border border-red-200" />
                    <span>Holiday / Sunday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-white border border-gray-200" />
                    <span>Regular class day</span>
                  </div>
                </div>
              </div>

              {/* Event list */}
              <div className="w-full">
                <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center justify-between">
                    Academic Events — {year}
                    <span className="text-xs font-normal text-gray-500">
                      {yearEvents.length}{" "}
                      {yearEvents.length === 1 ? "entry" : "entries"}
                    </span>
                  </h3>

                  {yearEvents.length === 0 ? (
                    <p className="text-sm text-gray-500">
                      No events scheduled for this year.
                    </p>
                  ) : (
                    <div className="space-y-2 text-sm max-h-[720px] overflow-y-auto pr-1">
                      {yearEvents.map((ev, i) => (
                        <div
                          key={`${ev.date}-${i}`}
                          className="flex items-start justify-between gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 transition"
                        >
                          <div className="min-w-[110px] text-gray-700 text-xs md:text-sm">
                            {new Date(ev.date).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                          <div className="flex-1 text-gray-800 text-xs md:text-sm">
                            {ev.title}
                          </div>
                          <div
                            className={`text-[10px] md:text-xs px-2 py-1 rounded-full capitalize whitespace-nowrap ${
                              ev.type === "holiday"
                                ? "bg-red-50 text-red-700 border border-red-100"
                                : ev.type === "event" || ev.type === "events"
                                ? "bg-blue-50 text-blue-700 border border-blue-100"
                                : "bg-green-50 text-green-700 border border-green-100"
                            }`}
                          >
                            {ev.type}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="mt-4 text-[11px] text-gray-500 border-t pt-3">
                    Note: Dates are subject to change based on official
                    notifications or unforeseen circumstances. Updated
                    schedules, if any, will be communicated through the school
                    office.
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
