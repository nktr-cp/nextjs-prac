import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to My Apps!
        </h1>
        <ul className="space-y-4">
          <li>
            <Link 
              href="/calculator" 
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Calculator
            </Link>
          </li>
					<li>
						<Link 
							href="/todo" 
							className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
						>
							Todo List
						</Link>
					</li>
        </ul>
      </div>
    </div>
  );
}