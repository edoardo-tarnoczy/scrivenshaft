import * as contentful from "contentful";
import { useRuntimeConfig } from "#imports";

export function useContentful() {
  const config = useRuntimeConfig();
  const client = contentful.createClient({
    space: config.public.contentfulSpace,
    accessToken: config.public.contentfulPublicAccessToken,
  });

  function parseDataArray(items: any[]) {
    return items.map((item) => parseSingleData(item));
  }

  function parseSingleData(item: any) {
    return {
      id: item.sys.id,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
      fandom: item.fields.fandom,
      genre: item.fields.genre,
      characters: item.fields.characters,
      title: item.fields.title,
      body: parseMarkdown(item.fields.body),
      summary: item.fields.summary,
      notes: parseMarkdown(item.fields.notes),
      cover: {
        title: item.fields.cover.fields.title,
        description: item.fields.cover.fields.description,
        url: item.fields.cover.fields.file.url,
      },
    };
  }
  function parseMarkdown(text: string) {
    if (!text) return;
    return text
      .replace(/\*([^*]*)\*/gim, "<i>$1</i>")
      .replace(/__([^_]*)__/gim, "<strong class='text-slyth-400'>$1</strong>");
  }
  const blogPost = {
    getAll: async (filters: any) => {
      const { items } = await client.getEntries({
        content_type: "blogPost",
        ...filters,
      });
      return parseDataArray(items);
    },
    getOneById: async (id: string) => {
      const response = await client.getEntry(id);
      return parseSingleData(response);
    },
  };

  return {
    blogPost,
  };
}
