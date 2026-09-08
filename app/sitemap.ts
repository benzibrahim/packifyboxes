import {origin,products,guides} from '@/lib/content';
export default function sitemap(){return['','/products','/materials','/about','/contact','/quote','/guides','/privacy','/terms','/shipping-returns',...products.map(p=>'/products/'+p.slug),...guides.map(g=>'/guides/'+g.slug)].map(path=>({url:origin+path}))}
