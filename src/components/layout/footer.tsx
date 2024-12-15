export function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto flex justify-between px-6">
        <p>© 2024 Eduardo Aparicio Cardenes. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-400">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Support
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
