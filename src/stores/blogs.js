import { defineStore } from "pinia"
import { fetchBlogs } from "../api/blogs"

export const useBlogStore = defineStore('blogs', {
    state: () => ({
        blogs: {}
    }),
    getters: {
        allBlogs: (state) => {
            return state.blogs
        }
    },
    actions: {
        async fetchBlogs() {
            this.blogs = await fetchBlogs()
        }
    }
})