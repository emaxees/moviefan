import dynamic from 'next/dynamic';

export const Nav = dynamic(import('./nav'), { ssr: true });
export const Title = dynamic(import('./title'), { ssr: true });
