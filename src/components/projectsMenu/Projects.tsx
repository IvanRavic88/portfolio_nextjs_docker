interface ProjectsProps {
  index: number;
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  description: string;
}

export default function Projects({
  index,
  title,
  setModal,
  description,
}: ProjectsProps) {
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
      <h2 className="duration-400 m-0 transform text-5xl font-light transition-all group-hover:-translate-x-2 sm:text-6xl">
        {title}
      </h2>
      <p className="duration-400 transform font-light opacity-50 transition-all group-hover:translate-x-2">
        {description}
      </p>
    </div>
  );
}
