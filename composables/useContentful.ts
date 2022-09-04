import * as contentful from "contentful";
import { useRuntimeConfig } from "#imports";

export function useContentful(SPACE?: string, TOKEN?: string) {
  const config = useRuntimeConfig();
  const client = contentful.createClient({
    space: SPACE || config.public.contentfulSpace,
    accessToken: TOKEN || config.public.contentfulPublicAccessToken,
  });

  function parsePostsArray(items: any[]) {
    return items.map((item) => parseSinglePost(item));
  }

  function parseSinglePost(item: any) {
    console.log(item);
    const { category, fandom, cover } = parseFandom(item.fields.fandom);
    return {
      id: item.sys.id,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
      genre: item.fields.genre,
      characters: item.fields.characters,
      title: item.fields.title,
      body: parseMarkdown(item.fields.body),
      summary: item.fields.summary,
      notes: parseMarkdown(item.fields.notes),
      category,
      fandom,
      cover,
    };
  }
  function parseMarkdown(text: string) {
    if (!text) return;
    return text
      .replace(/\*([^*]*)\*/gim, "<i>$1</i>")
      .replace(/__([^_]*)__/gim, "<strong class='text-slyth-400'>$1</strong>");
  }

  function parseFandomArray(items: any[]) {
    return items.map((item) => parseFandom(item));
  }

  function parseFandom(item: any) {
    return {
      id: item.sys.id,
      category: item.fields.category,
      fandom: item.fields.fandom,
      cover: {
        title: item.fields.cover.fields.title,
        description: item.fields.cover.fields.description,
        url: item.fields.cover.fields.file.url,
      },
    };
  }
  const blogPost = {
    getAll: async (filters: any) => {
      const { items } = await client.getEntries({
        content_type: "blogPost",
        ...filters,
      });
      return parsePostsArray(items);
    },
    getOneById: async (id: string) => {
      const response = await client.getEntry(id);
      return parseSinglePost(response);
    },
  };

  const fandoms = {
    getAll: async (filters: any) => {
      const { items } = await client.getEntries({
        content_type: "fandoms",
        ...filters,
      });
      return parseFandomArray(items);
    },
  };

  return {
    blogPost,
    fandoms,
  };
}
