export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });

  return (
    <footer className="w-full bg-black p-4 sm:p-12 flex justify-left items-center">
      <p className="text-sm text-gray-300">
        Designed and made by Ivan Ravić @ {currentMonth} {currentYear}
      </p>
    </footer>
  );
}
