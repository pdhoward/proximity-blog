export default {
  title: `Content is code`,
  tags: ['content', 'software'],
  spoiler: "A digital experience",
  getContent: () => import('./document.mdx'),
}