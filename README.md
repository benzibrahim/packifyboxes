# PackifyBoxes

A custom packaging marketing site based on the existing PackifyBoxes branding and the supplied website audit.

Includes a filterable packaging catalog with the original burger-box product, product detail pages, three buying guides, materials and finishes, company/contact pages, FAQs, privacy/terms/shipping pages, and a quote request form.

## Operations

- Quote submissions are stored in the Sites D1 `quotes` table. Reference files are private objects in the `FILES` R2 binding, linked by `file_key`.
- The form validates required fields, consent, quantity, upload extension, MIME and file signature. It limits uploads to 5 MB and requests to five per IP/hour, and rejects foreign origins and honeypot entries.
- Email notifications are not configured. The contact link opens the visitor’s email application; submission itself saves to D1. Connect a transactional email provider before relying on email alerts.
- No public endpoint exposes submitted quotes or reference files. There is no customer account area or checkout.
- Policy text is a draft for business review. Confirm commercial shipping, cancellation and refund terms before public launch. No unverified company address, ratings, testimonials, production capacity or certifications are asserted.
- The original orange theme, Epilogue and Urbanist fonts, homepage structure, logo, hero, burger-box product photo and social preview are reused from the owner’s original website. Collection imagery is labeled illustrative. Replace it with verified, style-specific portfolio photographs when available.
- The canonical origin is centralized in `lib/content.ts`. Update it and the allowed form origin when connecting the final production domain. The current deployment is private for owner review.

## Development

`npm run dev` starts the preview. `npm run build` prepares the Cloudflare-compatible Sites artifact. `npx tsc --noEmit` checks types. `npx drizzle-kit generate` generates migrations after schema edits.

Verification: HTTP routes and metadata, required-field and consent rejection, honeypot, foreign origin, malformed/oversized uploads, a successful inquiry, a successful private PNG upload, and durable rate limiting are checked against the local service. Browser visual/interaction QA was unavailable in the session.
