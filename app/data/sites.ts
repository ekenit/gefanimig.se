import type { Site } from '~/types'

/**
 * Complete list of Swedish personal data databases
 * Each entry contains information about how to remove personal data
 */
export const sites: Site[] = [
  {
    name: 'Ratsit.se',
    method: 'Via Mobilt BankID - Enklaste metoden',
    link: 'https://www.ratsit.se/tabort',
    linkText: 'Gå till borttagningsformulär'
  },
  {
    name: 'Merinfo.se',  
    method: 'Via e-post - Skicka GDPR-mall nedan',
    link: 'https://www.merinfo.se/om',
    linkText: 'Besök webbplats',
    email: 'info@merinfo.se'
  },
  {
    name: 'Hitta.se',
    method: 'Via Mobilt BankID - Direktborttagning',
    link: 'https://www.hitta.se/kontakta-oss/ta-bort-kontaktsida',
    linkText: 'Gå till borttagningsformulär'
  },
  {
    name: 'Eniro.se',
    method: 'Via Mobilt BankID - Automatisk process',
    link: 'https://uppdatera.eniro.se/person',
    linkText: 'Gå till borttagningsformulär'
  },
  {
    name: 'Mrkoll.se',
    method: 'Via webbformulär - Använd GDPR-mallen nedan',
    link: 'https://mrkoll.se/om/kundservice-kundkontakt/',
    linkText: 'Gå till kontaktsida',
    email: 'info@mrkoll.se'
  },
  {
    name: 'Upplysning.se',
    method: 'Via webbformulär - Kontakta kundservice',
    link: 'https://www.upplysning.se/kontakta-oss',
    linkText: 'Gå till kontaktsida',
    email: 'info@upplysning.se'
  },
  {
    name: 'Birthday.se',
    method: 'Via Mobilt BankID (rekommenderas) eller e-post',
    link: 'https://app.minauppgifter.se/birthday/bankidlogin',
    linkText: 'Gå till BankID-inloggning',
    email: 'info@birthday.se'
  },

]

/**
 * Get sites that require email templates (have email addresses)
 */
export const getEmailSites = (): Site[] => {
  return sites.filter(site => site.email)
}

/**
 * Get sites that use BankID for removal
 */
export const getBankIDSites = (): Site[] => {
  return sites.filter(site => site.method.toLowerCase().includes('bankid'))
}

/**
 * Get total number of sites
 */
export const getSiteCount = (): number => {
  return sites.length
}