import type { MetroArea, CityData } from '@/data/metros';
import type { ServiceData } from '@/data/services';
import { aggregateRating } from '@/data/content';

const SITE_URL = 'https://queenofmaids.com';
const LOGO_URL = `${SITE_URL}/images/logo.png`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Queen of Maids',
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      'Professional house cleaning and maid services with a 200% happiness guarantee. Serving Arizona, Nevada, Utah, and Colorado.',
    telephone: '+14806483441',
    email: 'contact@queenofmaids.com',
    foundingDate: '2012',
    sameAs: [
      'https://www.facebook.com/queenofmaids.hq/',
      'https://x.com/QueenofMaids',
      'https://www.instagram.com/queen_of_maids',
      'https://www.youtube.com/queenofmaids',
    ],
    areaServed: [
      { '@type': 'State', name: 'Arizona' },
      { '@type': 'State', name: 'Utah' },
      { '@type': 'State', name: 'Nevada' },
      { '@type': 'State', name: 'Colorado' },
    ],
  };
}

export function aggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HousekeepingService',
    name: 'Queen of Maids',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(aggregateRating.score),
      reviewCount: String(aggregateRating.totalReviews),
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function localBusinessSchema(metro: MetroArea, city: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HousekeepingService',
    name: `Queen of Maids - ${city.name}`,
    url: `${SITE_URL}/house-cleaning/${city.slug}`,
    telephone: metro.phone,
    email: metro.email,
    image: LOGO_URL,
    priceRange: '$99 - $500+',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: metro.stateAbbr,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(city.lat),
      longitude: String(city.lng),
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(aggregateRating.score),
      reviewCount: String(aggregateRating.totalReviews),
      bestRating: '5',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Partial Clean Plan',
            description: 'Kitchen and bathrooms standard cleaning on a biweekly schedule.',
          },
          price: '99.00',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Clean Plan',
            description: 'All rooms standard cleaning on a biweekly schedule.',
          },
          price: '149.00',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Premium Plan',
            description:
              'All rooms premium deep cleaning including baseboards, blinds, and detail work.',
          },
          price: '179.00',
          priceCurrency: 'USD',
        },
      ],
    },
  };
}

export function serviceSchema(service: ServiceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} Service`,
    provider: { '@type': 'Organization', name: 'Queen of Maids' },
    description: service.longDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    areaServed: ['Phoenix, AZ', 'Salt Lake City, UT', 'Las Vegas, NV', 'Denver, CO'],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
