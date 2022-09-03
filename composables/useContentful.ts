import * as contentful from "contentful";
import { useRuntimeConfig } from "#imports";

export function UseContentful() {
  const config = useRuntimeConfig();
  const client = contentful.createClient({
    space: config.public.contentfulSpace,
    accessToken: config.public.contentfulPublicAccessToken,
  });

  function parseDataArray(items: any[]) {
    return items.map((item) => ({
      id: item.sys.id,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
      title: item.fields.title,
      body: parseMarkdown(item.fields.body),
      notes: parseMarkdown(item.fields.notes),
    }));
  }

  function parseSingleData(item: any) {
    return {
      id: item.sys.id,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
      title: item.fields.title,
      body: parseMarkdown(item.fields.body),
      notes: parseMarkdown(item.fields.notes),
    };
  }
  function parseMarkdown(text: string) {
    if (!text) return;
    return text
      .replace(/\*([^*]*)\*/gim, "<i>$1</i>")
      .replace(/__([^_]*)__/gim, "<strong class='text-slyth-400'>$1</strong>");
  }
  const blogPost = {
    getAll: async () => {
      const { items } = await client.getEntries({
        content_type: "blogPost",
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
