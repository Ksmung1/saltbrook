// src/pages/NewsDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { newsData } from "../data/newsData";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsId = Number(id);
  const selectedNews = newsData.find((n) => n.id === newsId);

  const [mediaUploads, setMediaUploads] = useState([]);

  if (!selectedNews) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            This news item could not be found.
          </p>
          <Link
            to="/news"
            className="text-sm font-semibold text-green-700 hover:text-green-900"
          >
            ← Back to all news
          </Link>
        </div>
      </div>
    );
  }



  const getAllMedia = () => {
    const baseMedia = [];
    if (selectedNews.image) {
      baseMedia.push({
        url: selectedNews.image,
        type: "image",
        name: "Cover image",
      });
    }
    if (selectedNews.video) {
      baseMedia.push({
        url: selectedNews.video,
        type: "video",
        name: "Video",
      });
    }
    return [...baseMedia, ...mediaUploads];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header (optional: same as list) */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/news")}
            className="mb-4 text-xs font-semibold text-gray-500 hover:text-gray-800 flex items-center gap-1"
          >
            ← Back to all news
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
            {selectedNews.category && (
              <span className="rounded-full bg-green-50 px-2 py-0.5 font-medium text-green-700">
                {selectedNews.category}
              </span>
            )}
            <span className="uppercase tracking-wide">
              {new Date(selectedNews.date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {selectedNews.title}
          </h1>

          {selectedNews.summary && (
            <p className="text-sm md:text-base text-gray-600 mb-4 max-w-2xl">
              {selectedNews.summary}
            </p>
          )}
        </div>
      </section>

      {/* Content + media */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main content */}
          <div className="max-w-3xl text-sm text-gray-700 leading-relaxed mb-10">
            {selectedNews.content ||
              "Full details of this news item will be available soon."}
          </div>

          {/* Media gallery */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Media
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {getAllMedia().length > 0 ? (
                getAllMedia().map((media, index) => (
                  <div
                    key={`${media.url}-${index}`}
                    className="relative overflow-hidden rounded-lg bg-gray-100 aspect-video"
                  >
                    {media.type === "video" ? (
                      <video
                        src={media.url}
                        controls
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={media.url}
                        alt={media.name || selectedNews.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-500">
                  No media added yet for this news.
                </p>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
