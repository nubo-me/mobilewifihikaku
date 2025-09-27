import Link from 'next/link';

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

export type ConversionCTAProps = {
  title: string;
  description: string;
  primary: {
    label: string;
    href: string;
    target?: string;
    rel?: string;
  };
  secondary?: {
    label: string;
    href: string;
    target?: string;
    rel?: string;
  };
  badges?: Array<{
    label: string;
    icon?: string;
  }>;
  note?: string;
  variant?: 'orange' | 'blue' | 'slate';
  className?: string;
};

const variantMap: Record<NonNullable<ConversionCTAProps['variant']>, string> = {
  orange: 'from-orange-500 via-orange-500 to-red-500 text-white',
  blue: 'from-blue-600 via-blue-500 to-sky-500 text-white',
  slate: 'from-slate-800 via-slate-700 to-slate-800 text-white',
};

export function ConversionCTA({
  title,
  description,
  primary,
  secondary,
  badges,
  note,
  variant = 'orange',
  className,
}: ConversionCTAProps) {
  return (
    <section
      className={cn(
        'rounded-2xl p-8 shadow-xl bg-gradient-to-r overflow-hidden relative',
        variantMap[variant],
        className,
      )}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {badges.map((badge, index) => (
              <span
                key={`${badge.label}-${index}`}
                className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
              >
                {badge.icon ? <span className="text-base">{badge.icon}</span> : null}
                <span>{badge.label}</span>
              </span>
            ))}
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">{title}</h2>
        <p className="text-base md:text-lg mb-6 opacity-95 leading-relaxed">{description}</p>
  <div className={cn('flex flex-col sm:flex-row gap-4', secondary ? 'items-stretch sm:items-center' : 'items-start')}>
          <Link
            href={primary.href}
            target={primary.target}
            rel={primary.rel}
            className="inline-flex items-center justify-center gap-2 bg-white/90 text-slate-900 hover:bg-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg transition-all"
          >
            {primary.label}
            <i className="ri-arrow-right-up-line text-lg" />
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              target={secondary.target}
              rel={secondary.rel}
              className="inline-flex items-center justify-center gap-2 border border-white/60 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-base transition-all"
            >
              {secondary.label}
              <i className="ri-chat-1-line text-lg" />
            </Link>
          ) : null}
        </div>
        {note ? <p className="text-xs md:text-sm opacity-80 mt-4">{note}</p> : null}
      </div>
    </section>
  );
}
