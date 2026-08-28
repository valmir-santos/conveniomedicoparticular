import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const allItems = [{ label: 'Início', url: '/' }, ...items];

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': allItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      ...(item.url ? { 'item': `https://conveniomedicoparticular.com.br${item.url}` } : {})
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="bg-[#F3F4F6] border-b border-gray-200 py-2.5 px-4 sm:px-8 text-xs text-gray-600">
        <div className="max-w-6xl mx-auto flex items-center flex-wrap gap-1.5">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;

            return (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
                {isLast ? (
                  <span className="font-semibold text-[#123A5F] truncate max-w-[280px] sm:max-w-none" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.url || '/'}
                    className="flex items-center gap-1 hover:text-[#123A5F] hover:underline transition-colors"
                  >
                    {idx === 0 && <Home className="w-3.5 h-3.5 text-gray-500" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
};
