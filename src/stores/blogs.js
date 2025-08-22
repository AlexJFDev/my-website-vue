import { defineStore } from "pinia"
import { fetchBlogs } from "../api/blogs"

export const useBlogStore = defineStore('blogs', {
    state: () => ({
        blogs: {}
    }),
    getters: {},
    actions: {
        async fetchBlogs() {
            this.blogs = await fetchBlogs()
        }
    }
})