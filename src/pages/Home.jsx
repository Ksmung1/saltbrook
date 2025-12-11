import React, { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { newsData } from "../data/newsData";
import { Award, BookOpen, ImageIcon, Users } from "lucide-react";
import { photosData } from "../data/photosData";
import SlideIn from "../effects/SlideIn.jsx"
import building from "../assets/home.jpg"
import video from "../assets/output.MP4"

import school from "../assets/school.png"
import ground from "../assets/campus.jpg"
const schoolName = "Saltbrook School";

const slides = [
  {
    key: "building",
    label: "School",    
    image:school,
    media: video,
    title: "Main Campus Building",
    description:
      "The main academic block with modern architecture, spacious corridors, and well-ventilated classrooms designed for focused learning.",
  },
  {
    key: "classroom",
    label: "Classroom",
    image: building,
    media:building,
    title: "Smart Classroom",
    description:
      "Technology-enabled classrooms with interactive boards, flexible seating, and engaging teaching tools for an immersive learning experience.",
  },
  {
    key: "playground",
    label: "Playground",
    image:ground,
    media: ground,
    title: "Sports & Playground",
    description:
      "Expansive playground with football, basketball, athletics track, and dedicated zones for younger kids to play safely.",
  },
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Academic Excellence",
    description:
      "Comprehensive curriculum designed to foster critical thinking and academic success.",
    link: "/academic",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experienced Management",
    description:
      "Dedicated leadership team committed to student growth and school development.",
    link: "/management",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Performance Records",
    description:
      "Track our students' outstanding achievements and academic milestones.",
    link: "/performance",
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "School Gallery",
    description:
      "Explore our campus, events, and student activities through photos.",
    link: "/gallery",
  },
];

const news = newsData;


export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isZooming, setIsZooming] = useState(true);
  const timeoutRef = useRef(null);
  const zoomTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const filteredItems = React.useMemo(
    () =>
      [...photosData]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3),
    []
  );


  const goTo = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrent(index);
  };

  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  useEffect(() => {
    setIsTransitioning(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 900);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  useEffect(() => {
    setIsZooming(true);
    if (zoomTimeoutRef.current) clearTimeout(zoomTimeoutRef.current);

    zoomTimeoutRef.current = setTimeout(() => {
      setIsZooming(false);
    }, 500);

    return () => clearTimeout(zoomTimeoutRef.current);
  }, [current]);

  const year = new Date().getFullYear() - 2003;


const videoRefs = useRef([]); 
const [isFading, setIsFading] = useState(false);
const fadeDuration = 0.5; 

useEffect(() => {
  videoRefs.current.forEach((vid, i) => {
    if (!vid) return;
    if (i !== current) {
      try { vid.pause(); vid.currentTime = 0; } catch (e) {}
    }
  });

  const v = videoRefs.current[current];
  if (!v) return;

  let restartTimeout = null;

  v.play().catch(() =>
     {});
  setIsFading(false);

  const onTimeUpdate = () => {
    if (!v.duration || isNaN(v.duration)) return;
    const remaining = v.duration - v.currentTime;

    if (remaining <= fadeDuration && !isFading) {
      setIsFading(true);

      restartTimeout = setTimeout(async () => {
        try {
          v.pause();              
          v.currentTime = 0;
          await v.play().catch(() => {});
        } catch (err) {}
        setTimeout(() => setIsFading(false), 50);
      }, fadeDuration * 600);
    }
  };

  const onPlay = () => setIsFading(false);

  v.addEventListener("timeupdate", onTimeUpdate);
  v.addEventListener("play", onPlay);

  return () => {
    v.removeEventListener("timeupdate", onTimeUpdate);
    v.removeEventListener("play", onPlay);
    clearTimeout(restartTimeout);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [current]);


  return (
    <div>
      {/* SLIDER */}
      <section className="w-full min-h-screen bg-white text-gray-900">
        <SlideIn direction="up" delay={0}>
          <div className="relative mx-auto">
            {/* TOP PREVIEWS */}
            <div
              className={`absolute md:right-44 right-4  bottom-20 z-10 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 ${
                isTransitioning
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              {slides.map((slide, index) => {
                const isActive = index === current;

                return (
                  <button
                    key={slide.key}
                    onClick={() => setCurrent(index)}
                    className={`group relative h-16 w-24 overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-green-500 shadow-sm shadow-green-100 scale-105"
                        : "border-gray-200  opacity-80"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300" />
                    <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-medium text-gray-800 shadow-sm">
                      {slide.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* MAIN SLIDE AREA */}
            <div className="relative min-h-[300px]">
              {slides.map((slide, index) => {
                const isActive = index === current;
                const imgScale =
                  isActive && isZooming ? "scale-105" : "scale-100";
const isVideo = typeof slide.media === "string" &&
  /\.(mp4|mov|webm|ogg)(\?.*)?$/i.test(slide.media);


                return (
                  <article
                    key={slide.key}
                    className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
                      isActive
                        ? "opacity-100 relative"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="relative h-[90vh] overflow-hidden">
                      {/* IMAGE */}

{isVideo ? (
  <video
    ref={(el) => (videoRefs.current[index] = el)}
    src={slide.media}
    poster={slide.image}      // prevents white flash while loading
    autoPlay
    // loop   <-- removed, we loop manually
    muted
    playsInline
    className={`h-full w-full object-cover ${imgScale} video-fade ${isFading ? "fade-out" : "fade-in"}`}
  />
) : (
  <img
    src={slide.media}
    alt={slide.label}
    className={`h-full w-full object-cover ${imgScale}`}
  />
)}



                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                      {/* TEXT OVER IMAGE */}
                      <div
                        className={`absolute max-w-7xl mx-auto inset-0 flex flex-col justify-end px-6 pb-20 md:px-10 md:pb-24 text-white transform transition-all duration-[600ms] ease-out ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        <header className="space-y-2 max-w-xl">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                            {schoolName}
                          </p>
                          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
                            {slide.title}
                          </h1>
                        </header>

                        <div className="mt-4 space-y-2 text-sm max-w-xl">
                          <h3 className="font-medium text-white/85">
                            Overview
                          </h3>
                          <p className="text-white/80 text-xs md:text-md max-w-[250px] md:max-w-6xl">
                            {slide.description}
                          </p>
                        </div>

                        <div className="mt-5">
                          <Link
                            to="/about"
                            className="inline-flex items-center rounded-full bg-green-500/95 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-green-500/30 hover:bg-green-600 transition"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>

                      {/* ARROWS OVER IMAGE */}
                      <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={goPrev}
                          className="flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-sm hover:bg-gray-100 hover:scale-[1.1] cursor-pointer transition"
                        >
                          <FaAngleLeft />
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          className="flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-sm hover:bg-gray-100 hover:scale-[1.1] cursor-pointer transition"
                        >
                          <FaAngleRight />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </SlideIn>
      </section>

      {/* Intro */}
      <section className="bg-gray-50 py-20">
        <SlideIn direction="up" delay={0.05}>
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div className="w-full lg:w-5/12">
              <p className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                Since 2003
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Welcome to{" "}
                <span className="block text-green-600">
                  Salt Brook School
                </span>
              </h1>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-gray-700">
                Private Co-Educational • Preparatory to Class X • BoSEM
                Affiliated
              </p>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="space-y-4 rounded-2xl bg-white p-4 md:p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
                <p className="text-gray-500 leading-relaxed">
                  Established in 2003, Salt Brook School is a private
                  co-educational institute, admitting students from
                  Preparatory to Class X and affiliated to the Board of
                  Secondary Education, Manipur (BoSEM). Located in Tuibuong,
                  Lamka, the school centers on English-medium teaching and
                  communication, acknowledging its national and global
                  importance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From humble beginnings with mud-ground classrooms and
                  kaccha walls, God has blessed the school immensely—allowing
                  it to become one of the finest institutions in the region.
                </p>

                <div className="mt-4 inline-flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-900">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                    {year}+
                  </span>
                  <span className="font-medium text-xs md:text-md">
                    Years of nurturing young minds with values and
                    excellence.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <SlideIn direction="up" delay={0.5}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 p-3 rounded-md md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <SlideIn
                  key={feature.title}
                  direction="up"          
                  delay={index * 0.05}   
                >
                  <Link
                    to={feature.link}
                    className="group block p-5 border border-gray-200 shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                  >
                    <div className="mb-4 text-gray-800 group-hover:text-green-500 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-black transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </Link>
                </SlideIn>
              ))}
            </div>
          </div>
        </SlideIn>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <SlideIn direction="up" delay={0.05}>
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row">
            {/* Left section */}
            <div className="w-full lg:w-4/12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Gallery
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Captured
                <span className="block text-green-600">Moments</span>
              </h1>

              <p className="mt-4 text-sm text-gray-600">
                Explore recent photos, events, and special moments from
                Saltbrook School.
              </p>

              <button
                type="button"
                onClick={()=>navigate('/gallery')}
                className="mt-6 inline-flex items-center rounded-full border border-green-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-green-700 transition-all hover:bg-green-600 hover:text-white hover:shadow-md"
              >
                View all photos
              </button>
            </div>

            {/* Right section */}
            <div className="w-full lg:w-8/12">
              <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-video bg-gray-100 flex items-center justify-center relative overflow-hidden mb-4 rounded-xl">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                        alt={item.title}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                          {item.category}
                        </span>
                        <h3 className="text-base font-medium mt-1 text-black">
                          {item.title}
                        </h3>
                      </div>

                      <div>
                        <span className="text-xs lg:hidden block text-gray-800 uppercase tracking-wide">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* Small Details */}
      <section className="py-20 bg-white">
        <SlideIn direction="up" delay={0.05}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-light text-black mb-3">
                  2000+
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">
                  Students
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-light text-black mb-3">
                  50+
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">
                  Faculty Members
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-light text-black mb-3">
                  20+
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* News */}
      <section className="bg-gray-50 py-20">
        <SlideIn direction="up" delay={0.05}>
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row">
            <div className="w-full lg:w-4/12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Updates
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Daily
                <span className="block text-green-600">News</span>
              </h1>
              <p className="mt-4 text-sm text-gray-600">
                Stay informed with the latest updates, achievements, and
                events from Saltbrook School.
              </p>
              <button
                type="button"
                onClick={()=>navigate('/news')}
                className="mt-6 inline-flex items-center rounded-full border border-green-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-green-700 transition-all hover:bg-green-600 hover:text-white hover:shadow-md"
              >
                View all news
              </button>
            </div>

            <div className="w-full lg:w-8/12">
              <div className="space-y-4">
                {[...news]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() -
                      new Date(a.date).getTime()
                  )
                  .slice(0, 3)
                  .map((item) => (
                    <article
                      key={item.id}
                      className="group flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-start sm:justify-between sm:p-5"
                    >
                      <div className="flex flex-col gap-2 text-left sm:flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                          {item.category && (
                            <span className="rounded-full bg-green-50 px-2 py-0.5 font-medium text-green-700">
                              {item.category}
                            </span>
                          )}
                          <span className="uppercase tracking-wide">
                            {new Date(item.date).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <div className="flex gap-4">
                          {item.image ? (
                            <div className="relative aspect-video w-26 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                              <img
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={item.image}
                                alt={item.title}
                              />
                            </div>
                          ) : (
                            <div className="relative aspect-video w-26 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                              <span className="text-gray-400 text-sm">
                                Image
                              </span>
                            </div>
                          )}

                          <div className="space-y-1">
                            <h2 className="text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700 sm:text-lg">
                              {item.title}
                            </h2>
                            {item.summary && (
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {item.summary}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 cursor-pointer self-end sm:self-center">
                        <button
                          onClick={() => navigate(`/news/${item.id}`)}
                          className="text-xs font-semibold text-green-700 transition-colors duration-200 hover:text-green-900"
                        >
                          Read more →
                        </button>
                      </div>
                    </article>
                  ))}

                {news.length === 0 && (
                  <p className="text-sm text-gray-500">
                    No news available at the moment. Please check back soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* END / Contact */}
      <section className="py-20 bg-white">
        <SlideIn direction="up" delay={0.05}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Have questions about admissions or our school?
            </h2>

            <p className="mt-4 text-base md:text-lg text-gray-600">
              Reach out to our team for details on enrollment, facilities, or to plan a campus visit.
              We’re here to help you make the right decision for your child.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-full border border-green-600 px-8 py-3 text-xs font-semibold uppercase tracking-wide text-green-700 transition-all hover:bg-green-600 hover:text-white hover:shadow-md"
            >
              Get in touch
            </Link>
          </div>
        </SlideIn>
      </section>

    </div>
  );
}
