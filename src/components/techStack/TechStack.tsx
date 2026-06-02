const stack = [
  'Next.js',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'Docker',
  'Terraform',
  'AWS',
  'Nginx',
];

// Factual trust signals: the stack I build with + the AWS certification (links
// to the certificate PDF in /public). Monochrome chips keep the minimal identity.
export default function TechStack() {
  return (
    <section aria-label="Tech stack and certification" className="mt-12">
      <p className="mb-4 text-sm uppercase tracking-widest opacity-50">Stack</p>
      <ul className="flex flex-wrap gap-2 text-base">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border px-4 py-1.5 text-sm opacity-70 transition-colors hover:border-custom-red hover:text-custom-red hover:opacity-100"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href="/AWS Certified Developer - Associate certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm opacity-70 transition-colors hover:text-custom-red hover:opacity-100"
      >
        <span
          className="mr-2 inline-block h-2 w-2 rounded-full bg-custom-red align-middle"
          aria-hidden="true"
        />
        AWS Certified Developer - Associate
        <span aria-hidden="true" className="ml-1">
          ↗
        </span>
      </a>
    </section>
  );
}
