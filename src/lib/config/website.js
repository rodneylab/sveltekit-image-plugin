const facebookPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_PAGE : '';

const website = {
  author: 'Rodney Johnson',
  ogLanguage: 'en_GB',
  siteLanguage: 'en-GB',
  siteTitle: 'SvelteKit Blog Mdx',
  siteShortTitle: 'SvelteKit Blog',
  siteUrl: import.meta.env ? import.meta.env.VITE_SITE_URL : '',
  icon: 'static/icon.png',
  backgroundColor: '#1b4079',
  themeColor: '#d62828',
  contactEmail: import.meta.env ? import.meta.env.VITE_CONTACT_EMAIL : '',
  facebookPage: `https://www.facebook.com/${facebookPageName}`,
  facebookPageName,
  githubPage: import.meta.env ? import.meta.env.VITE_GITHUB_PAGE : '',
  linkedinProfile: import.meta.env ? import.meta.env.VITE_LINKEDIN_PROFILE : '',
  telegramUsername: import.meta.env ? import.meta.env.VITE_TELEGRAM_USERNAME : '',
  tiktokUsername: import.meta.env ? import.meta.env.VITE_TIKTOK_USERNAME : '',
  twitterUsername: import.meta.env ? import.meta.env.VITE_TWITTER_USERNAME : '',
  twitterUserId: import.meta.env ? import.meta.env.VITE_TWITTER_ID : '',
  wireUsername: import.meta.env ? import.meta.env.VITE_WIRE_USERNAME : '',
  imgixDomain: import.meta.env ? import.meta.env.VITE_IMGIX_DOMAIN : '',
  imgixSecureToken: import.meta.env ? import.meta.env.VITE_IMGIX_SECURE_TOKEN : '',
};

export { website as default };
