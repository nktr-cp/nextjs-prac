import Calculator from '../components/Calculator';
import Link from 'next/link';

export default function CalculatePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Calculator
          </h1>
          <Calculator />
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="text-blue-500 hover:text-blue-600 font-medium transition duration-300 ease-in-out"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}