import dynamic from "next/dynamic";

export const Nav = dynamic(import("./nav"), { ssr: true });
export const Title = dynamic(import("./title"), { ssr: true });
export const Subtitle = dynamic(import("./subtitle"), { ssr: true });
