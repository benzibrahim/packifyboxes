import {Catalog} from '@/components/catalog';
import {CTA} from '@/components/site-shell';
import {origin} from '@/lib/content';
export const metadata={title:'Custom packaging collection | PackifyBoxes',description:'Explore rigid gift boxes, mailers, cosmetic cartons, retail boxes, kraft packaging and food packaging.',alternates:{canonical:origin+'/products'}};
export default function Products(){return <main id="main"><section className="wrap page-intro"><div className="eyebrow">THE PACKIFYBOXES COLLECTION</div><h1>A perfect fit.<br/><em>For whatever you create.</em></h1><p>Find a starting point for your next great unboxing. Every style can be explored around your product, your brand and your brief.</p></section><section className="wrap section catalog-section"><Catalog/></section><CTA/></main>}
