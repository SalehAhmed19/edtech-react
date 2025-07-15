import { useCallback, useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children, title, className = "" }) => {
  // Ref to the modal content for focus management
  const modalRef = useRef(null);

  // Callback to handle Escape key press
  const handleEscapeKey = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Effect for handling global keydown events and initial focus
  useEffect(() => {
    if (isOpen) {
      // Add event listener for Escape key
      document.addEventListener("keydown", handleEscapeKey);
      // Focus the modal content when it opens for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
      // Prevent scrolling the body when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Remove event listener when modal is closed
      document.removeEventListener("keydown", handleEscapeKey);
      // Restore body scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup function: remove event listener and restore body overflow when component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscapeKey]); // Re-run effect when isOpen or handleEscapeKey changes

  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    // Modal Overlay (fixed, covers entire viewport, semi-transparent background)
    <div
      className="fixed inset-0 bg-[#00000046] bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
      onClick={onClose} // Close modal when clicking on the overlay
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex="-1" // Make the overlay focusable for accessibility
    >
      {/* Modal Content Container (centered, styled, prevents click propagation) */}
      <div
        ref={modalRef}
        className={`bg-white rounded-lg shadow-xl p-6 relative
                    transform transition-all duration-300 ease-out
                    scale-100 opacity-100
                    w-11/12 md:max-w-md lg:max-w-lg ${className}`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
        tabIndex="0" // Make modal content focusable
      >
        {/* Modal Header (optional title and close button) */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-4">
          {title && (
            <h3
              id="modal-title"
              className="text-2xl font-semibold text-gray-800"
            >
              {title}
            </h3>
          )}
          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-1"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Modal Body (where children content is rendered) */}
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
