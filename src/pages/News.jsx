import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";
import SlideIn from "../effects/SlideIn"; // adjust path if needed

const News = () => {
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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
              News
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              School
              <span className="block bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                News &amp; Updates
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Stay informed with the latest updates, announcements and
              achievements from Salt Brook School.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Latest updates
            </h2>
            {sortedNews.length > 0 && (
              <p className="text-xs text-gray-500">
                Showing {Math.min(sortedNews.length, 10)} of {sortedNews.length}{" "}
                news items
              </p>
            )}
          </div>

          {sortedNews.length === 0 && (
            <p className="text-sm text-gray-500">
              No news available at the moment. Please check back soon.
            </p>
          )}

          <div className="space-y-4">
            {sortedNews.slice(0, 10).map((item, index) => (
              <SlideIn
                key={item.id}
                direction="up"
                delay={0.04 * index}
              >
                <Link to={`/news/${item.id}`} className="block group">
                  <article className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-start sm:justify-between sm:p-5">
                    <div className="flex flex-col gap-2 text-left sm:flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-500">
                        {item.category && (
                          <span className="rounded-full bg-green-50 px-2.5 py-0.5 font-medium text-green-700">
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
                          <div className="relative aspect-video w-28 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            <img
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              src={item.image}
                              alt={item.title}
                            />
                          </div>
                        ) : (
                          <div className="relative aspect-video w-28 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 text-[11px]">
                              No image
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

                    <div className="mt-2 shrink-0 self-end sm:mt-0 sm:self-center">
                      <span className="text-xs font-semibold text-green-700 transition-colors duration-200 group-hover:text-green-900">
                        Read more →
                      </span>
                    </div>
                  </article>
                </Link>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
