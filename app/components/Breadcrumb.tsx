import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-6" aria-label="パンくずリスト">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <i className="ri-arrow-right-s-line text-gray-400 mx-1"></i>
            )}
            {item.href ? (
              <Link 
                href={item.href}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500 text-sm font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}