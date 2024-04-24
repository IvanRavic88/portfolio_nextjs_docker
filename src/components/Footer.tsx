export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  return (
    <footer className="flex justify-left m-auto p-12 bg-black">
      <p className="text-sm text-gray-300">
        Designed and made by Ivan Ravić @{" "}
      </p>
      <p className="text-sm text-gray-300">
        {currentMonth} {currentYear}
      </p>
    </footer>
  );
}
