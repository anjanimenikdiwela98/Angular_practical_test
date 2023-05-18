export type IconsId =
  | "apps"
  | "bell"
  | "search";

export type IconsKey =
  | "Apps"
  | "Bell"
  | "Search";

export enum Icons {
  Apps = "apps",
  Bell = "bell",
  Search = "search",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Apps]: "61697",
  [Icons.Bell]: "61698",
  [Icons.Search]: "61699",
};
