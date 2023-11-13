import { reactive } from "vue";

export const blogData = reactive([
    {
        title: 'blog 1',
        subtitle: 'blah blah',
        text: 'blog 1',
        path: 'blog1',
        date: '01/01/0001'
    },
    {
        title: 'blog 2',
        subtitle: 'blah blah',
        text: 'blog 2',
        path: 'blog2',
        date: '12/31/9999'
    }
])