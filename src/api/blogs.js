import matter from 'gray-matter'

const modules = import.meta.glob('../assets/blogs/*.md', { as: 'raw', eager: true })

const blogs = {}
for (const path in modules) {
    const slug = path.replace('../assets/blogs/', '').replace('.md', '')
    const { data, content } = matter(modules[path])
    blogs[slug] = {
        title: data.title,
        subtitle: data.subtitle,
        date: data.date,
        tags: data.tags,
        content,
    }
}

export const fetchBlogs = async () => {
    return blogs
}
