import {
  MusicalNoteIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  CurrencyYenIcon,
} from "@heroicons/vue/24/solid";

type IconType = typeof MusicalNoteIcon;

export interface SidebarLink {
  label: string;
  to?: string;
  icon?: IconType;
  subLinks?: SidebarLink[];
}

export const sidebarLinks = [
  {
    label: "Fanfiction",
    subLinks: [
      {
        label: "Anime & Manga",
        icon: CurrencyYenIcon,
        to: `/categoria/anime-&-manga`,
      },
      {
        label: "Sherlock BBC",
        icon: MagnifyingGlassIcon,
        subLinks: [
          {
            label: "SubLink1",
          },
        ],
      },
      {
        label: "Supernatural",
        icon: SparklesIcon,
        to: "/",
      },
    ],
  },
  {
    label: "Traduzioni",
    subLinks: [
      {
        label: "Glee",
        icon: MusicalNoteIcon,
        to: "/",
      },
      {
        label: "Sherlock BBC",
        icon: MagnifyingGlassIcon,
        subLinks: [
          {
            label: "SubLink1",
          },
        ],
      },
      {
        label: "Supernatural",
        icon: SparklesIcon,
        to: "/",
      },
    ],
  },
  {
    label: "Traduzioni",
    subLinks: [
      {
        label: "Glee",
        icon: MusicalNoteIcon,
        to: "/",
      },
      {
        label: "Sherlock BBC",
        icon: MagnifyingGlassIcon,
        subLinks: [
          {
            label: "SubLink1",
          },
        ],
      },
      {
        label: "Supernatural",
        icon: SparklesIcon,
        to: "/",
      },
    ],
  },
  {
    label: "Traduzioni",
    subLinks: [
      {
        label: "Glee",
        icon: MusicalNoteIcon,
        to: "/",
      },
      {
        label: "Sherlock BBC",
        icon: MagnifyingGlassIcon,
        subLinks: [
          {
            label: "SubLink1",
          },
        ],
      },
      {
        label: "Supernatural",
        icon: SparklesIcon,
        to: "/",
      },
    ],
  },
  {
    label: "Traduzioni",
    subLinks: [
      {
        label: "Glee",
        icon: MusicalNoteIcon,
        to: "/",
      },
      {
        label: "Sherlock BBC",
        icon: MagnifyingGlassIcon,
        subLinks: [
          {
            label: "SubLink1",
          },
        ],
      },
      {
        label: "Supernatural",
        icon: SparklesIcon,
        to: "/",
      },
    ],
  },
  {
    label: "Traduzioni",
    subLinks: [
      {
        label: "Glee",
        icon: MusicalNoteIcon,
        to: "/",
      },
      {
        label: "Sherlock BBC",
        icon: MagnifyingGlassIcon,
        subLinks: [
          {
            label: "SubLink1",
          },
        ],
      },
      {
        label: "Supernatural",
        icon: SparklesIcon,
        to: "/",
      },
    ],
  },
];
