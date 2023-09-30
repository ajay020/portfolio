// import React from "react";
// import { databaseId } from "../blog";
// import { getBlocks, getDatabase, getPage } from "@/lib/notion";
// import {
//   BlockObjectResponse,
//   GetPageResponse,
//   PageObjectResponse,
//   PartialPageObjectResponse,
// } from "@notionhq/client/build/src/api-endpoints";
// import { GetStaticPaths, GetStaticProps } from "next";
// import { ParsedUrlQuery } from "querystring";
// import { RenderBlocks } from "@/components/ContentBlock";

// interface IParams extends ParsedUrlQuery {
//   pageId: string;
// }

// interface PropType {
//   page: PageObjectResponse;
//   blocks: BlockObjectResponse[];
// }

// export default function Post({ page, blocks }: PropType) {
//   if (!page || !blocks) return;

//   const tags = page?.properties?.Tags?.multi_select ?? [];
//   const title = page?.properties?.Title?.title[0]?.plain_text;

//   return (
//     <div>
//       <h1>{title}</h1>
//       {tags.map((tag) => {
//         return <p key={tag.id}>{tag.name}</p>;
//       })}
//       <div>
//         <RenderBlocks blocks={blocks} />
//       </div>
//     </div>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const database = await getDatabase(databaseId as string);

//   return {
//     paths: database.map((page) => ({ params: { pageId: page.id } })),
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { pageId } = context.params as IParams;

//   const page = await getPage(pageId);
//   const blocks = (await getBlocks(pageId)) as BlockObjectResponse[];

//   const childBlocks = await Promise.all(
//     blocks
//       .filter((block) => block.has_children)
//       .map(async (block) => {
//         return {
//           id: block.id,
//           children: await getBlocks(block.id),
//         };
//       })
//   );

//   const blocskWithChildrent = blocks.map((block: BlockObjectResponse) => {
//     if (block.has_children && !block[block.type].children) {
//       block[block.type]["children"] = childBlocks.find(
//         (childBlock) => childBlock.id === block.id
//       )?.children;
//     }

//     // console.log(JSON.parse(JSON.stringify({ block })));

//     return block;
//   });

//   //   console.log({ blocskWithChildrent });

//   return {
//     props: {
//       page,
//       blocks: blocskWithChildrent,
//     },
//   };
// };
