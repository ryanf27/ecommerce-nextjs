import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="py-4 bg-white shadow">
      <div className="container mx-auto px-4">
        <nav
          aria-label="Breadcrumb"
          className="hidden lg:flex text-sm text-gray-500"
        >
          <ol className="flex list-none">
            <li className="breadcrumb-item">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="breadcrumb-item">
              <span aria-current="page" className="text-gray-500">
                Clothing
              </span>
            </li>
          </ol>
        </nav>
        <nav aria-label="Breadcrumb" className="lg:hidden">
          <ol className="flex list-none">
            <li className="breadcrumb-item">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Back
              </Link>
            </li>
          </ol>
        </nav>
        <h1 className="mt-2 text-2xl text-gray-800 font-bold">Clothing</h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
