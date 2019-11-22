import dynamic from 'next/dynamic';

export const Nav = dynamic(import('./nav'), { ssr: true });
export const Title = dynamic(import('./title'), { ssr: true });
export const Subtitle = dynamic(import('./subtitle'), { ssr: true });
export const Button = dynamic(import('./button'), { ssr: true });
export const Hero = dynamic(import('./hero'), { ssr: true });
