# Ge Fan i Mig - Remove your data from Swedish databases

A free website that helps you remove your personal data from Swedish databases according to GDPR. No hidden costs, no tracking, just help when you need it.
**Website:** [https://gefanimig.se](https://gefanimig.se)

## What does the site do?

**Ge Fan i Mig** helps you exercise your rights under GDPR. Instead of paying 50-200 kr per month to companies that promise the same thing, you get all the information here for free.

### What you get:

- 📋 **Ready-made email templates** for GDPR requests
- 📞 **Contact information** for Swedish databases
- 📅 **Reminders** so you don't forget to follow up
- 📚 **Step-by-step guides** for each site
- 🛡️ **Help with IMY complaints** if companies refuse

## Why does this site exist?

Because:

- **I thought it was fun to build it**
- **You have the right** to have your data removed by law
- **Scam companies** charge for information that's free
- **Telemarketers and spam** find you through public databases
- **People who really need to reach you** already have your number

## Technical information

The site is built with modern tools to be fast and secure:

- **Nuxt 4** - Latest version of the Vue.js framework
- **Tailwind CSS** - Modern styling with dark mode support
- **TypeScript** - Type-safe code
- **Heroicons** - Beautiful icons
- **Umami Analytics** - Privacy-focused analytics (GDPR compliant)

## Analytics & Privacy

### 📊 **Privacy-Focused Analytics**

We use **Umami** for anonymous analytics that respect your privacy:

- **Page views** - Which pages are most popular
- **Visitor counts** - Anonymous visitor statistics
- **Referrer tracking** - Where visitors come from
- **Device information** - Browser and device types (anonymous)

### 🔒 **What We DON'T Track**

- Personal information (names, emails, addresses)
- User identification or tracking
- IP addresses or location data
- Session data or user behavior patterns
- Any data that could identify individuals

### 🛡️ **GDPR Compliant**

Umami is designed to be GDPR-compliant:

- **No cookies** - Uses localStorage only
- **Anonymous data** - No personal information collected
- **Open source** - Transparent and verifiable
- **Self-hosted** - We control our own data

## Getting started

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

### Environment Variables

Copy `env.example` to `.env` and configure:

```bash
cp env.example .env
```

Required environment variables:

- `UMAMI_WEBSITE_ID` - Your Umami website ID (get from Umami dashboard)

### Development

```bash
# Start development server
npm run dev
# Site is available at http://localhost:3001
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Philosophy and values

### 🆓 **Completely free**

No hidden costs or subscriptions. Same information that other companies charge for.

### 🔒 **Privacy-focused**

We don't collect any personal data. The site uses system fonts instead of Google Fonts.

### 🏠 **Personal project**

Made by an individual, not a company. No profit, just help.

### 📖 **Open source**

All code is visible on GitHub. Transparent and verifiable.

## Contributing

Welcome to contribute! Especially appreciated:

- Adding new Swedish databases
- Improving email templates
- Fixing bugs
- Improving the design

## Contact

Questions, suggestions, or bug reports:
📧 ekenitt@pm.me

## License

MIT License - Feel free to use this tool to help others exercise their rights.

---

**Remember:** This site is not legal advice. Use the information at your own risk. Results may vary depending on how companies handle requests.
