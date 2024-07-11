type socialLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function SocialLink({ href, children }: socialLinkProps) {
  return (
    <li className="mb-2 text-center sm:text-left">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link-animation"
      >
        {children}
      </a>
    </li>
  );
}
