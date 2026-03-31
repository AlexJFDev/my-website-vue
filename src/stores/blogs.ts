import { defineStore } from "pinia"
import { fetchBlogs } from "../api/blogs"
import type { BlogPost } from "../types"

export const useBlogStore = defineStore('blogs', {
    state: () => ({
        blogs: {} as Record<string, BlogPost>
    }),
    getters: {},
    actions: {
        async fetchBlogs() {
            this.blogs = await fetchBlogs()
        }
    }
})