export default {
  title: `First Post!`,
  tags: ["react", "navi", "First Post"],
  spoiler: "My First post on create react blog, starting to feel like Dan A.",
  getContent: () => import("./document.mdx")
};
