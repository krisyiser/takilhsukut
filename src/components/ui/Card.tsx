import type { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'cultural' | 'featured';
}

export default function Card({
  title,
  description,
  image,
  href,
  children,
  className = '',
  variant = 'default'
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-totonaca-tierra-200 hover:shadow-lg',
    cultural: 'bg-gradient-to-br from-totonaca-jade-50 to-totonaca-tierra-50 border border-totonaca-jade-200 hover:shadow-xl',
    featured: 'bg-gradient-to-br from-totonaca-oro-50 to-totonaca-copal-50 border border-totonaca-oro-200 hover:shadow-xl'
  };

  const CardContent = () => (
    <div className={`rounded-lg transition-all duration-300 ${variantClasses[variant]} ${className}`}>
      {image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-totonaca-obsidiana-800 mb-3">
          {title}
        </h3>

        {description && (
          <p className="text-totonaca-obsidiana-600 leading-relaxed mb-4">
            {description}
          </p>
        )}

        {children}

        {href && (
          <div className="mt-4 flex items-center text-totonaca-tierra-600 hover:text-totonaca-tierra-700 transition-colors">
            <span className="text-sm font-medium">Leer más</span>
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
