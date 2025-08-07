import type { EmailTemplate } from '~/app/types'

/**
 * GDPR email template for Swedish personal data removal requests
 * Complies with Article 17 (Right to Erasure) of GDPR
 */
export const gdprTemplate: EmailTemplate = {
  subject: 'Begäran om radering av personuppgifter enligt GDPR',
  body: `Hej!

Jag vill härmed utöva min rätt till radering enligt artikel 17 i dataskyddsförordningen (GDPR).

Jag begär att alla personuppgifter om mig (Förnamn Efternamn, personnummer: Personnummer) raderas från er databas omedelbart.

Detta inkluderar men är inte begränsat till:
- Namn och personnummer
- Adressinformation
- Telefonnummer
- E-postadresser
- Alla andra personuppgifter som kan identifiera mig

Enligt GDPR artikel 17 har jag rätt att få mina personuppgifter raderade när:
- Uppgifterna inte längre behövs för det ursprungliga syftet
- Jag återkallar mitt samtycke
- Uppgifterna behandlas olagligt
- Det finns inget berättigat intresse som väger tyngre än min rätt till integritet

Jag förväntar mig bekräftelse på att mina uppgifter har raderats inom 30 dagar.

Med vänliga hälsningar,
Förnamn Efternamn
Personnummer`
}

/**
 * Template for Google search result removal requests
 * Uses English as required by Google's international forms
 */
export const googleRemovalTemplate = `This page is about me because it includes specific personal details, such as my name and address. The content directly identifies me, and these details are private and sensitive.

The continued presence of this information violates my rights under the General Data Protection Regulation (GDPR). Specifically, it infringes on my right to privacy and data protection as outlined in Article 17 (Right to Erasure) of the GDPR. The information is no longer necessary for the purposes for which it was originally collected or processed, and its continued publication is not justified by any overriding legitimate interest, thus requiring its removal to comply with EU data protection laws.`

/**
 * Get the default GDPR template
 */
export const getGDPRTemplate = (): EmailTemplate => gdprTemplate

/**
 * Get the Google removal template text
 */
export const getGoogleTemplate = (): string => googleRemovalTemplate

/**
 * Create a customized email template for a specific site
 */
export const createCustomTemplate = (siteName: string, customMessage?: string): EmailTemplate => {
  return {
    subject: `Begäran om radering av personuppgifter från ${siteName} enligt GDPR`,
    body: customMessage || gdprTemplate.body
  }
} 