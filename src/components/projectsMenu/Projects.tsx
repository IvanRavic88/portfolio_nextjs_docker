import Image from 'next/image';

interface ProjectsProps {
  index: number;
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  description: string;
  src: string;
}

export default function Projects({
  index,
  title,
  setModal,
  description,
  src,
}: ProjectsProps) {
  // Titles are formatted "NN  Name"; split so the leading number can carry the red accent.
  const [projectNumber, ...rest] = title.trim().split(/\s{2,}/);
  const projectName = rest.join(' ') || projectNumber;
  const hasNumber = rest.length > 0;
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex w-full cursor-pointer flex-col justify-between gap-4 border-t border-gray-300 py-12 text-base transition-all duration-200 last:border-b hover:opacity-50 sm:flex-row sm:items-center"
    >
      <h2 className="duration-400 m-0 flex transform items-baseline gap-3 text-3xl font-light transition-all group-hover:-translate-x-2 sm:text-5xl md:text-6xl">
        {hasNumber ? (
          <>
            <span className="shrink-0 text-custom-red">{projectNumber}</span>
            <span>{projectName}</span>
          </>
        ) : (
          title
        )}
      </h2>
      <p className="duration-400 transform font-light opacity-50 transition-all group-hover:translate-x-2">
        {description}
      </p>
      {/* Inline preview for touch devices (the cursor-follow modal is hover-only). */}
      <div className="w-full overflow-hidden rounded-lg [@media(hover:hover)]:hidden">
        <Image
          src={src}
          alt={description}
          width={800}
          height={500}
          className="h-48 w-full object-cover"
        />
      </div>
    </div>
  );
}
