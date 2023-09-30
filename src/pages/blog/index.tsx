// import { getDatabase } from "@/lib/notion";
// import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
// import React from "react";
// export const databaseId = process.env.NOTION_DATABASE_ID;

// interface PostType {
//   id: string;
//   title: string;
//   imgUrl: string;
//   tags: string[];
//   created_time: string;
// }

// const Blog = ({ posts }: { posts: PostType[] }) => {
//   return (
//     <div>
//       {posts.map((post: PostType) => {
//         return (
//           <div className="border w-1/2 m-auto my-4" key={post.id}>
//             <a href={`/blog/${post.id}`}>
//               <h1>{post.title}</h1>
//               {post.tags.map((tag) => (
//                 <span key={tag}>{tag} </span>
//               ))}
//               <p>{post.created_time}</p>
//             </a>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export const getStaticProps = async () => {
//   if (!databaseId) return;

//   const database = (await getDatabase(databaseId)) as DatabaseObjectResponse[];

//   let posts = database.map((page) => {
//     let propObj = JSON.parse(JSON.stringify(page?.properties));
//     let titleObj = JSON.parse(JSON.stringify(propObj.Title));

//     let tagsObj = JSON.parse(JSON.stringify(propObj.Tags));
//     let coverObj = JSON.parse(JSON.stringify(propObj.Cover));

//     return {
//       id: page.id,
//       title: titleObj.title[0].plain_text,
//       tags: tagsObj.multi_select.map(
//         (tag: { id: string; name: string; color: string }) => tag.name
//       ),
//       coverUrl: coverObj.files[0]?.file?.url ?? null,
//       created_time: page.created_time,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//     // revalidate: 1,
//   };
// };

// export default Blog;
