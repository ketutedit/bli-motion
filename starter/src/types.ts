export interface SceneProps {
  title: string;
  subtitle?: string;
  durationInFrames: number;
}

export interface ExplainerTheme {
  bg: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  textMuted: string;
  accent: string;
}

export const defaultTheme: ExplainerTheme = {
  bg: "#0B0F19",
  surface: "#1E293B",
  primary: "#38BDF8",   // Sky blue
  secondary: "#818CF8", // Indigo
  text: "#F8FAFC",
  textMuted: "#94A3B8",
  accent: "#F43F5E",    // Coral / Rose
};
