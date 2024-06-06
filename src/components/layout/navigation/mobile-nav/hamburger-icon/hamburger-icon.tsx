export const HamburgerIcon = ({ isOpen, handleToggle }: { isOpen?: boolean; handleToggle: () => void }) => (
  <svg
    onClick={handleToggle}
    className="h-8 w-8 text-teal-500 transition-opacity duration-300 ease-in-out"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g className={`transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </g>
    <g className={`transition-opacity duration-300 ease-in-out ${isOpen ? '' : 'opacity-0'}`}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </g>
  </svg>
);
