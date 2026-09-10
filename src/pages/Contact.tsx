import { ContactForm } from '../components/contact/ContactForm'
import { PageHero } from '../components/ui/PageHero'
import { SITE_EMAIL, SITE_LOCATION, SITE_NAME, SITE_PHONE } from '../config'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'
import { formatPhoneHref } from '../lib/cn'
import { WatermarkedSection } from '../components/layout/WatermarkedSection'

export function Contact() {
  usePageMeta(
    'Contact | Prymas Contracting Inc.',
    'Start a project with Prymas Contracting Inc. in Maspeth, Queens. Demo contact form for commercial and industrial construction inquiries.',
  )

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something."
        subtitle="Share a few details about the project. This form is a visual demonstration and does not send a live inquiry."
        image={images.contact}
        imageAlt="Commercial interior used as the contact page visual"
      />
      <WatermarkedSection className="bg-concrete-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <aside className="bg-charcoal-950 p-8 text-white lg:col-span-4 lg:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-copper-300">
              Prymas Contracting Inc.
            </p>
            <h2 className="mt-6 font-display text-4xl uppercase tracking-wide">{SITE_NAME}</h2>
            <p className="mt-6 text-white/70">{SITE_LOCATION}</p>
            <p className="mt-8 text-sm text-white/55">
              The phone number and email below are fictional demo details created for this
              website presentation.
            </p>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="uppercase tracking-[0.22em] text-white/40">Phone</dt>
                <dd className="mt-2">
                  <a className="text-lg text-white hover:text-copper-300" href={formatPhoneHref(SITE_PHONE)}>
                    {SITE_PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.22em] text-white/40">Email</dt>
                <dd className="mt-2">
                  <a className="text-lg text-white hover:text-copper-300" href={`mailto:${SITE_EMAIL}`}>
                    {SITE_EMAIL}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </WatermarkedSection>
    </>
  )
}
