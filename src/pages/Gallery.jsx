import { useEffect, useState } from "react";
import { photosData } from "../data/photosData";
import SlideIn from "../effects/SlideIn.jsx";
import video from "../assets/video.MP4"
import thumbnail from "../assets/school.png"
const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSelectVideo = (item) => {
    setSelectedVideo(item);
  };
  const handleSelectPhoto = (item) => {
    setSelectedPhoto(item);
  };
  const closeVideoModal = () => setSelectedVideo(null);
  const closePhotoModal = () => setSelectedPhoto(null);

  const [galleryItems] = useState(photosData);
  const [galleryVideos, setGalleryVideos] = useState([
    {
      id: 1,
      category: "Campus",
      image: thumbnail,
      title: "School Building Walkthrough",
      date: "8/12/2025 01:00 PM",
      url: video,
    },
    {
      id: 2,
      category: "Campus",
      title: "Library Tour",
      date: "01/01/2025 01:00 PM",
      url: "https://youtu.be/ZR-esz7Te5o?si=3q4nAFOx0GIJHTwx",
    },

  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories] = useState([
    "All",
    "Campus",
    "Events",
    "Sports",
    "Academics",
    "Awards",
  ]);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const filteredVideos =
    selectedCategory === "All"
      ? galleryVideos
      : galleryVideos.filter((item) => item.category === selectedCategory);

  const [tab, setTab] = useState("photos");
  const isActive = (name) => tab === name;

  const handleTabChange = (name) => {
    setTab(name);

    const el = document.getElementById("scroll");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };


  const getYoutubeId = (url) => {
    try {
      const u = new URL(url);

      if (u.hostname === "youtu.be") {
        return u.pathname.slice(1);
      }

      if (u.hostname.includes("youtube.com")) {
        return u.searchParams.get("v");
      }

      return null;
    } catch {
      return null;
    }
  };

  const getThumbnail = (item) => {
    if (item.image) return item.image;

    if (item.url) {
      const id = getYoutubeId(item.url);
      if (id) {
        return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
      }
    }

    return "https://via.placeholder.com/640x360?text=No+Preview";
  };




  useEffect(() => {
  async function fetchYouTubeRSS(channelId) {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const res = await fetch(url);
  const text = await res.text();

  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "application/xml");
  const entries = [...xml.querySelectorAll("entry")];

  return entries.map(entry => ({
    title: entry.querySelector("title").textContent,
    url: entry.querySelector("link").getAttribute("href"),
    date: entry.querySelector("published").textContent,
    id: entry.querySelector("yt\\:videoId, videoId").textContent,
    image: `https://i.ytimg.com/vi/${entry.querySelector("yt\\:videoId, videoId").textContent}/hqdefault.jpg`
  }));
}
    fetchYouTubeRSS("UClFW6oNPtiLI5qvq6Gz85EQ").then(setGalleryVideos);
  }, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.20em] text-green-700">
              Gallery
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              School
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                Photos & Videos
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Step into campus life at Salt Brook School — explore classrooms,
              events, and everyday moments captured through photos and videos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* Photos */}
              <button
                onClick={() => handleTabChange("photos")}
                className={`
                  inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold
                  border transition-all duration-200
                  ${
                    isActive("photos")
                      ? "bg-green-600 text-white border-green-600 shadow-md shadow-green-500/30 scale-[1.02]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm"
                  }
                `}
              >
                Photos
              </button>

              {/* Videos */}
              <button
                onClick={() => handleTabChange("videos")}
                className={`
                  inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold
                  border transition-all duration-200
                  ${
                    isActive("videos")
                      ? "bg-green-600 text-white border-green-600 shadow-md shadow-green-500/30 scale-[1.02]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm"
                  }
                `}
              >
                Videos
              </button>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Category Filter */}
      <section id="scroll" className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up" delay={0.05}>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm font-medium transition-colors pb-2 ${
                    selectedCategory === category
                      ? "text-black border-b-2 border-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* CONTENT: Photos & Videos with slide transition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[260px]">
            {/* Photos grid */}
            <div
              className={`transition-all duration-500 ease-out ${
                tab === "photos"
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 -translate-x-8 pointer-events-none absolute inset-0"
              }`}
            >
              {filteredItems.length === 0 ? (
                <p className="text-center text-gray-500 text-sm">
                  No photos available in this category yet. Please check back
                  soon.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, index) => (
                    <SlideIn
                      key={item.id}
                      direction="up"
                      delay={0.05 * index}
                    >
                      <div
                        onClick={() => handleSelectPhoto(item)}
                        className="group cursor-pointer"
                      >
                        <div className="aspect-video bg-gray-100 flex items-center justify-center relative overflow-hidden mb-4 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
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
                    </SlideIn>
                  ))}
                </div>
              )}
            </div>

            {/* Videos grid */}
            <div
              className={`transition-all duration-500 ease-out ${
                tab === "videos"
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-8 pointer-events-none absolute inset-0"
              }`}
            >
              {filteredVideos.length === 0 ? (
                <p className="text-center text-gray-500 text-sm">
                  No videos available in this category yet. Please check back
                  soon.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.map((item, index) => {
                    const thumb = getThumbnail(item);
                    return (
                      <SlideIn
                        key={item.id}
                        direction="up"
                        delay={0.05 * index}
                      >
                        <div
                          onClick={() => item.url && handleSelectVideo(item)}
                          className={`group cursor-pointer ${
                            !item.url ? "opacity-70 cursor-default" : ""
                          }`}
                        >
                          <div className="aspect-video bg-gray-100 flex items-center justify-center relative overflow-hidden mb-4 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                            <img
                              src={thumb}
                              alt={item.title}
                              className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                            />

                            {/* Play Button Overlay */}
                            {item.url && (
                              <div
                                className="
                                  absolute inset-0 flex items-center justify-center 
                                  bg-black/20 opacity-0 group-hover:opacity-100 
                                  transition duration-300
                                "
                              >
                                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-7 h-7 text-green-700"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            )}
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
                            <span className="text-xs lg:hidden block text-gray-800 uppercase tracking-wide">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </SlideIn>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl relative">
            <button
              onClick={(e)=>{e.stopPropagation();closePhotoModal()}}
              className="absolute z-1 top-3 right-3 text-white bg-black/40 rounded-full p-2 min-w-10 flex items-center justify-center hover:bg-black/60 transition"
            >
              ✕
            </button>

            <div className="aspect-video bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain bg-black"
              />
            </div>

            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {selectedPhoto.category}
                </p>
                <h3 className="text-sm font-semibold text-gray-900">
                  {selectedPhoto.title}
                </h3>
              </div>
              {selectedPhoto.date && (
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {selectedPhoto.date}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl relative">
            <button
              onClick={closeVideoModal}
              className="absolute top-3 z-1 right-3 text-white bg-black/40 rounded-full p-2 min-w-10 flex items-center justify-center hover:bg-black/60 transition"
            >
              ✕
            </button>

            <div className="aspect-video">
              {selectedVideo.url &&
              (selectedVideo.url.includes("youtube") ||
                selectedVideo.url.includes("youtu.be")) ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYoutubeId(
                    selectedVideo.url
                  )}?autoplay=1&controls=1`}
                  className="w-full h-full"
                  allowFullScreen
                  title={selectedVideo.title}
                ></iframe>
              ) : (
                <video
                  src={selectedVideo.url || ""}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
