declare module 'frontmatter' {
  interface FrontmatterResult<T = Record<string, unknown>> {
    data: T
    content: string
  }
  function frontmatter<T = Record<string, unknown>>(src: string): FrontmatterResult<T>
  export = frontmatter
}
