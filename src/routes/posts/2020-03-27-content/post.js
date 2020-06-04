export default {
  title: `Content as code`,
  tags: ['content', 'software'],
  spoiler: "Does your content requires a devops process?",
  getContent: () => import('./document.mdx'),
}