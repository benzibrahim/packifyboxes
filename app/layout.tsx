import type { Metadata } from 'next';
import './globals.css';
import {Header,Footer} from '@/components/site-shell';
import {origin} from '@/lib/content';
export const metadata: Metadata = { metadataBase: new URL(origin), alternates:{canonical:origin}, openGraph:{title:'PackifyBoxes | Custom packaging, thoughtfully made',description:'Custom packaging for your next great unboxing. Explore boxes, materials and practical guides.',url:origin,images:[origin+'/og.png'],type:'website',siteName:'PackifyBoxes'},twitter:{card:'summary',title:'PackifyBoxes | Custom packaging',description:'Custom boxes, thoughtful materials and practical packaging guides.',images:[origin+'/og.png']},icons:{icon:'/og.png'}, title: 'PackifyBoxes | Custom packaging, thoughtfully made', description: 'Discover custom rigid boxes, mailers and retail packaging. Explore materials, finishes and practical guides, then build your packaging brief.' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
