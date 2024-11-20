export type Theme = {
  invertLightText?: boolean;
  invertBorder?: boolean;
  // -> Light
  nav: string;
  header: string;
  bg: string;
  footer: string;
};

export const Themes = new Map<string, Theme>([
  [
    "default",
    {
      invertLightText: false,
      invertBorder: false,
      nav: "bg-display-gray-medium dark:bg-dark-primary",
      header: "bg-display-gray  dark:bg-dark-secondary",
      bg: "bg-light-primary dark:bg-dark-secondary",
      footer: "bg-display-gray dark:bg-dark-secondary",
    },
  ],
  [
    "invert",
    {
      invertLightText: true,
      invertBorder: true,
      nav: "bg-black dark:bg-dark-primary",
      header: "bg-dark-secondary  dark:bg-dark-secondary",
      bg: "bg-light-primary dark:bg-dark-secondary",
      footer: "bg-dark-secondary dark:bg-dark-secondary",
    },
  ],
  [
    "red",
    {
      invertLightText: true,
      invertBorder: true,
      nav: "bg-black dark:bg-dark-primary",
      header: "bg-display-black  dark:bg-dark-secondary",
      bg: "bg-light-primary dark:bg-dark-secondary",
      footer: "bg-dark-secondary dark:bg-dark-secondary",
    },
  ],
]);
