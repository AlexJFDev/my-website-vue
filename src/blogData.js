import { reactive } from "vue";

export const blogData = reactive({
    'blog1': {
        title: 'blog 1',
        subtitle: 'blah blah',
        content: '# blog 1',
        path: 'blog1',
        date: '01/01/0001'
    },
    'blog2': {
        title: 'blog 2',
        subtitle: 'blah blah',
        content: '# blog 2',
        path: 'blog2',
        date: '12/31/9999'
    }
})