import {origin} from '@/lib/content';
export default function robots(){return{rules:{userAgent:'*',allow:'/',disallow:'/api/'},sitemap:origin+'/sitemap.xml'}}
