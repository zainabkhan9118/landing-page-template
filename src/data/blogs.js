export const blogCategories = [
  'Umrah Guide',
  'Islamic Knowledge',
  'Travel Tips',
  'Spiritual Journey',
  'Preparation',
  'Historical Places'
]

export const blogs = [
  {
    id: 1,
    title: "Complete Guide to Ihram: What You Need to Know",
    slug: "complete-guide-to-ihram",
    excerpt: "Learn the essential rules and preparation for entering the state of Ihram before your Umrah journey.",
    content: "Full article content here...",
    category: "Umrah Guide",
    author: "Islamic Scholar Team",
    publishDate: "2024-08-01",
    readTime: "5 min read",
    image: "ihram-guide.png",
    tags: ["ihram", "preparation", "rules"],
    featured: true
  },
  {
    id: 2,
    title: "The Spiritual Significance of Tawaf",
    slug: "spiritual-significance-of-tawaf",
    excerpt: "Understanding the deeper meaning behind circling the Kaaba during your Umrah pilgrimage.",
    content: "Full article content here...",
    category: "Spiritual Journey",
    author: "Dr. Ahmed Hassan",
    publishDate: "2024-07-28",
    readTime: "7 min read",
    image: "tawaf-kaaba.png",
    tags: ["tawaf", "kaaba", "spirituality"],
    featured: false
  },
  {
    id: 3,
    title: "The Spiritual Benefits of Umrah",
    slug: "spiritual-benefits-of-umrah",
    excerpt: "Discover the spiritual rewards and benefits of performing Umrah.",
    content: "Full article content here...",
    category: "Spiritual Journey",
    author: "Dr. Fatima Al-Zahra",
    publishDate: "2024-07-25",
    readTime: "6 min read",
    image: "spiritual-benefits-umrah.png",
    tags: ["spirituality", "benefits", "umrah"],
    featured: false
  },
  {
    id: 4,
    title: "Common Mistakes to Avoid During Umrah",
    slug: "common-mistakes-to-avoid-during-umrah",
    excerpt: "Learn about common pitfalls and how to avoid them during your pilgrimage.",
    content: "Full article content here...",
    category: "Umrah Guide",
    author: "Islamic Scholar Team",
    publishDate: "2024-07-20",
    readTime: "5 min read",
    image: "common-mistakes-umrah.png",
    tags: ["mistakes", "advice", "umrah"],
    featured: false
  },
];

export const getFeaturedBlogs = () => blogs.filter(blog => blog.featured)
export const getBlogsByCategory = (category) => blogs.filter(blog => blog.category === category)
export const getBlogBySlug = (slug) => blogs.find(blog => blog.slug === slug)
