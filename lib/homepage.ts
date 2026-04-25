/**
 * Homepage content — Products, Games, and Tools as distinct categories.
 * Products and games use substantial cards; tools use lighter nested cards.
 */

export type HomeProduct = {
  name: string;
  shortDescription: string;
  ctaLabel: string;
  /** Omit or null when there is no outbound link yet */
  href?: string | null;
};

export type HomeGame = {
  name: string;
  shortDescription: string;
  ctaLabel: string;
  href: string;
};

export type HomeTool = {
  name: string;
  shortDescription: string;
  ctaLabel: string;
  href: string;
};

export const HOME_PRODUCTS: HomeProduct[] = [
  {
    name: "WorkCompass AI",
    shortDescription:
      "A practical AI starting-point tool for office workers, helping you discover where AI can actually help in your work.",
    ctaLabel: "Visit product",
    href: "https://workcompass-ai.rvdobuilds.com/",
  },
  {
    name: "Spend Meter",
    shortDescription:
      "iPhone app for knowing what you can safely spend before payday.",
    ctaLabel: "Visit product",
    href: "https://spendmeter.app",
  },
  {
    name: "DayWell",
    shortDescription:
      "A minimal daily health timeline for weight, fasting, coffee, meals, creatine, and cold showers.",
    ctaLabel: "Visit product",
    href: "https://daywell.rvdobuilds.com/",
  },
  {
    name: "TodoMode",
    shortDescription:
      "A calm, focused planning app for turning projects into clear weekly and daily execution.",
    ctaLabel: "Visit product",
    href: "https://todo-mode.rvdobuilds.com/",
  },
  {
    name: "HomeReps",
    shortDescription:
      "Minimal home workout logging for GTG sets and simple sessions.",
    ctaLabel: "Coming soon",
    href: null,
  },
];

export const HOME_GAMES: HomeGame[] = [
  {
    name: "GoldenAI",
    shortDescription:
      "A mobile-first browser shooter slice that captures the feel of classic N64-era espionage shooters.",
    ctaLabel: "Open game",
    href: "https://goldenai.rvdobuilds.com/",
  },
  {
    name: "Voidrunner",
    shortDescription:
      "A focused arcade runner built for clarity and flow.",
    ctaLabel: "Open game",
    href: "https://voidrunner.rvdobuilds.com/",
  },
];

export const HOME_TOOLS: HomeTool[] = [
  {
    name: "Launchframe",
    shortDescription:
      "A guided workbench for setting up a new app the same way every time.",
    ctaLabel: "Open tool",
    href: "https://launchframe.rvdobuilds.com/",
  },
  {
    name: "Mobile Dev Workflow",
    shortDescription: "Control your development workflow from your phone.",
    ctaLabel: "Open tool",
    href: "https://mobiledevworkflow.rvdobuilds.com/",
  },
  {
    name: "Claude Code Kit",
    shortDescription:
      "A copy-first reference app for getting more out of Claude Code.",
    ctaLabel: "Open tool",
    href: "https://claudecodekit.rvdobuilds.com/",
  },
];
