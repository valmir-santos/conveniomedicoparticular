import React from 'react';
import { BROKER_INFO } from '../data/siteData';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
  serviceType?: string;
}

interface FaqSchemaProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  url,
  serviceType = 'Consultoria e Cotação de Planos de Saúde'
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'serviceType': serviceType,
    'description': description,
    'url': `https://conveniomedicoparticular.com.br${url}`,
    'provider': {
      '@type': 'InsuranceAgency',
      'name': BROKER_INFO.name,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rua São Roberto, 298 — Vila Marieta',
        'addressLocality': 'São Paulo',
        'addressRegion': 'SP',
        'postalCode': BROKER_INFO.cep,
        'addressCountry': 'BR'
      },
      'telephone': BROKER_INFO.telefoneRaw
    },
    'areaServed': {
      '@type': 'City',
      'name': 'São Paulo'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FaqSchema: React.FC<FaqSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
