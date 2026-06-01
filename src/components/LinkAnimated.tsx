import { cn } from '@/lib/utils';

type socialLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export default function LinkAnimated({
  href,
  children,
  external = false,
  className,
}: socialLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn('text-link-animation', className)}
    >
      {children}
    </a>
  );
}
