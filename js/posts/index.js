import { POSTS as POSTS_1 } from "./posts-1.js";
import { POSTS as POSTS_2 } from "./posts-2.js";
import { POSTS as POSTS_3 } from "./posts-3.js";
import { POSTS as POSTS_4 } from "./posts-4.js";
import { POSTS as POSTS_5 } from "./posts-5.js";

const COLLECTIONS = [
  POSTS_1,
  POSTS_2,
  POSTS_3,
  POSTS_4,
  POSTS_5
];

const MAX_POSTS_PER_COLLECTION = 50;

COLLECTIONS.forEach((collection, index) => {
  if (!Array.isArray(collection)) {
    throw new Error(`Collection ${index + 1} must export a POSTS array.`);
  }

  if (collection.length > MAX_POSTS_PER_COLLECTION) {
    throw new Error(`Collection ${index + 1} exceeds 50 articles.`);
  }
});

const ALL_POSTS = COLLECTIONS.flat();
const seenSlugs = new Set();

ALL_POSTS.forEach((post) => {
  if (!post.slug) {
    throw new Error("An article is missing its slug.");
  }

  if (seenSlugs.has(post.slug)) {
    throw new Error(`Duplicate article slug: ${post.slug}`);
  }

  seenSlugs.add(post.slug);
});

export const POSTS = ALL_POSTS
  .filter((post) => post.published !== false)
  .sort((a, b) => new Date(b.date) - new Date(a.date));
