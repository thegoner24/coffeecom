export default function Footer() {
  return (
    <footer className="bg-[#4e3620] text-[#e6e3df] py-8 px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 bg-[#a67c52] rounded-full"></span>
          <span className="font-bold text-lg tracking-tight">CoffeeCom</span>
        </div>
        <div className="flex gap-6">
          <a href="/about" className="hover:underline">About</a>
          <a href="/marketplace" className="hover:underline">Marketplace</a>
          <a href="/community" className="hover:underline">Community</a>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="#e2f6e9" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4.5" stroke="#e2f6e9" strokeWidth="2" fill="none"/>
              <circle cx="17.3" cy="6.7" r="1.1" fill="#e2f6e9"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 5.924c-.793.352-1.646.59-2.542.698a4.13 4.13 0 0 0 1.813-2.276c-.8.475-1.687.82-2.63 1.006A4.116 4.116 0 0 0 12.07 9.03c0 .322.037.637.106.937C8.728 9.823 5.807 8.221 3.878 5.899a4.07 4.07 0 0 0-.557 2.07c0 1.43.728 2.692 1.837 3.432-.676-.021-1.312-.207-1.87-.516v.052a4.13 4.13 0 0 0 3.303 4.045c-.318.086-.654.132-.999.132-.244 0-.48-.023-.712-.067.481 1.5 1.876 2.592 3.53 2.62A8.253 8.253 0 0 1 2 19.07a11.62 11.62 0 0 0 6.29 1.844c7.547 0 11.677-6.155 11.677-11.49 0-.175-.004-.35-.012-.523A8.18 8.18 0 0 0 22 5.924z" fill="#e2f6e9"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="#e2f6e9" strokeWidth="2" fill="none"/>
              <path d="M15.5 8.5h-2a1 1 0 0 0-1 1v2h3l-.5 2h-2.5v6h-2v-6H8v-2h2V9.5A2.5 2.5 0 0 1 12.5 7h3v1.5z" fill="#e2f6e9"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center text-xs mt-4">© {new Date().getFullYear()} CoffeeCom. All rights reserved.</div>
    </footer>
  );
}
