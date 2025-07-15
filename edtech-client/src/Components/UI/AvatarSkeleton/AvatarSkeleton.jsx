export const AvatarSkeleton = ({ size = "w-12 h-12", className = "" }) => {
  return (
    <div
      className={`rounded-full bg-gray-300 animate-pulse ${size} ${className}`}
      role="status" // ARIA role for accessibility
      aria-label="Loading avatar"
    >
      <span className="sr-only">Loading avatar...</span>{" "}
      {/* Visually hidden text for screen readers */}
    </div>
  );
};

export default AvatarSkeleton;
