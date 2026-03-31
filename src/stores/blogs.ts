import { defineStore } from "pinia"
import frontmatter from "frontmatter"
import type { BlogPost } from "../types"

const blogFiles = import.meta.glob('../assets/blogs/*.md', { query: '?raw', import: 'default' })

export const useBlogStore = defineStore('blogs', {
    state: () => ({
        blogs: {} as Record<string, BlogPost>
    }),
    getters: {
        hasBlogs: (state) => Object.keys(state.blogs).length > 0
    },
    actions: {
        async fetchBlogs(forced=false) {
            if (!forced && this.hasBlogs) return

            const entries = await Promise.all(
                Object.entries(blogFiles).map(async ([path, load]) => {
                    const raw = await load() as string
                    const { data, content } = frontmatter(raw)
                    const slug = path.replace('../assets/blogs/', '').replace('.md', '')
                    return [slug, { ...data, content } as BlogPost] as const
                })
            )
            this.blogs = Object.fromEntries(entries)
        }
    }
})