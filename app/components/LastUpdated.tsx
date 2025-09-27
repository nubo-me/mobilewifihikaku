type LastUpdatedProps = {
  date: string | Date;
  label?: string;
  className?: string;
};

const defaultFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function formatDate(value: string | Date) {
  const date = typeof value === 'string' ? new Date(value) : value;

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return defaultFormatter.format(date);
}

export function LastUpdated({ date, label = '最終更新日', className }: LastUpdatedProps) {
  const formatted = formatDate(date);

  if (!formatted) {
    return null;
  }

  const classes = ['inline-flex items-center gap-2 text-sm text-slate-500'];

  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')}>
      <i className="ri-refresh-line text-base text-slate-400" aria-hidden="true" />
      <span>
        {label}: {formatted}
      </span>
    </div>
  );
}
