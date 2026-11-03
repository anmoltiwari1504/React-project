
const blogs = [
  {
    category: "Design",
    categoryColor: "bg-indigo-100 text-indigo-600",
    title: "How to Build a Beautiful UI with Tailwind CSS",
    description:
      "Learn how to use Tailwind CSS utility classes to create stunning, responsive user interfaces without writing custom CSS.",
    date: "March 25, 2026",
    readTime: "5 min read",
    avatar: "AK",
    author: "Arjun Kumar",
    avatarBg: "bg-indigo-200 text-indigo-700",
  },
  {
    category: "React",
    categoryColor: "bg-blue-100 text-blue-600",
    title: "Top 10 React Hooks You Should Know in 2026",
    description:
      "A deep dive into the most useful React hooks — from useState to custom hooks — that every developer should have in their toolkit.",
    date: "March 18, 2026",
    readTime: "7 min read",
    avatar: "PS",
    author: "Priya Sharma",
    avatarBg: "bg-blue-200 text-blue-700",
  },
  {
    category: "Performance",
    categoryColor: "bg-green-100 text-green-600",
    title: "Speed Up Your Website: A Practical Guide",
    description:
      "From lazy loading images to code splitting, discover proven techniques to dramatically improve your website's performance.",
    date: "March 10, 2026",
    readTime: "6 min read",
    avatar: "RV",
    author: "Rahul Verma",
    avatarBg: "bg-green-200 text-green-700",
  },
];
 
function BlogCard({ category, categoryColor, title, description, date, readTime, avatar, author, avatarBg }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Thumbnail Placeholder */}
      <div className="w-full h-44 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
 
      <div className="p-6 flex flex-col flex-1">
        {/* Category Badge */}
        <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3 ${categoryColor}`}>
          {category}
        </span>
 
        {/* Title */}
        <h3 className="text-gray-900 font-semibold text-lg leading-snug mb-2">{title}</h3>
 
        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
 
        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${avatarBg}`}>
              {avatar}
            </div>
            <span className="text-sm text-gray-700 font-medium">{author}</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">{date}</p>
            <p className="text-xs text-gray-400">{readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default function Blog() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
 
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">
            Our Blog
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            Stay updated with tips, tutorials, and insights from our team of experts.
          </p>
        </div>
 
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
 
        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-xl border border-indigo-300 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors">
            View All Posts
          </button>
        </div>
 
      </div>
    </section>
  );
}
 