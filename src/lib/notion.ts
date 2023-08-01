import { Client } from "@notionhq/client";

// secret_J0dzOQ8essranrWPAph3xmkH0TYSrrQoKpM0Cc1HR7i
// https://www.notion.so/My-blogs-781fdcc508db4627a27fce050caa3001?pvs=4

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

// export const getUsers = async () => {
//   const listUsersResponse = await notion.users.list({});
//   console.log({ listUsersResponse });
// };

export const getDatabase = async (databaseId: string) => {
  //   if (!databaseId) return;

  const response = await notion.databases.query({
    database_id: databaseId,
    // sorts: [
    //   {
    //     property: "Date",
    //     direction: "descending",
    //   },
    // ],
  });
  return response.results;
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};
