const PaymentLoader = () => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Load Lexend Deca font from Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
        rel="stylesheet"
      />

      {/* Internal CSS for custom keyframe animations */}
      <style>
        {`
        /* Keyframes for the card animation */
        /* Adjusted translateY values to be relative to the initial -50% translation */
        @keyframes slide-top {
          0% {
            /* Starts at its initial centered position */
            transform: translate(-50%, -50%) rotate(0deg);
          }
          50% {
            /* Moves up by 70px from its centered position, then rotates */
            transform: translate(-50%, calc(-50% - 70px)) rotate(90deg);
          }
          60% {
            /* Stays at the same elevated position and rotation */
            transform: translate(-50%, calc(-50% - 70px)) rotate(90deg);
          }
          100% {
            /* Moves back down by 8px from its centered position, stays rotated */
            transform: translate(-50%, calc(-50% - 8px)) rotate(90deg);
          }
        }

        /* Keyframes for the post/receipt animation */
        @keyframes slide-post {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-70px);
          }
        }

        /* Keyframes for the dollar sign fade */
        @keyframes fade-in-fwd {
          0% {
            opacity: 0;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments from original styled-components */
        @media only screen and (max-width: 480px) {
          .payment-container {
            transform: scale(0.7);
          }
        }
        `}
      </style>

      <div className="payment-container bg-white flex w-[270px] h-[120px] relative rounded-md transition-all duration-300 ease-in-out">
        <div className="w-[130px] h-[120px] rounded-sm relative flex justify-center items-center flex-shrink-0 overflow-hidden transition-all duration-300 mx-auto">
          {/* Card element */}
          <div
            className="w-[70px] h-[46px] bg-[#921914] rounded-md absolute flex flex-col items-center
                       shadow-[9px_9px_9px_-2px_#b1201b]"
            style={{
              // Initial positioning to center the card within its parent
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // This centers it based on its own dimensions
              zIndex: 10,
              // Apply animation directly
              animation:
                "slide-top 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) both",
            }}
          >
            <div className="w-[65px] h-[13px] bg-[#e63a34] rounded-[2px] mt-[7px]" />
            <div
              className="w-2 h-2 bg-[#CE2823] rounded-full mt-[5px] -ml-[30px]
                         shadow-[0_-10px_0_0_#26850e,0_10px_0_0_#56be3e] transform rotate-90"
            />
          </div>

          {/* Post/Receipt element */}
          <div
            className="w-[63px] h-[75px] bg-[#dddde0] absolute bottom-[10px] rounded-md overflow-hidden"
            style={{
              top: "120px", // Starts off-screen below left-side
              zIndex: 11,
              // Apply original animation directly
              animation:
                "slide-post 1s cubic-bezier(0.165, 0.84, 0.44, 1) both",
            }}
          >
            <div className="w-[47px] h-[9px] bg-[#545354] absolute rounded-b-[3px] right-2 top-2">
              {/* This div simulates the :before pseudo-element for post-line */}
              <div className="absolute w-[47px] h-[9px] bg-[#757375] top-[-8px]" />
            </div>
            <div className="w-[47px] h-[23px] bg-white absolute top-[22px] right-2 rounded-[3px]">
              <div
                className="absolute w-full left-0 top-0 text-center text-[#CE2823]"
                style={{
                  fontFamily: '"Lexend Deca", sans-serif',
                  fontSize: "16px",
                  // Apply original animation directly with delay and fill-mode
                  animation: "fade-in-fwd 0.3s 1s backwards",
                }}
              >
                $
              </div>
            </div>
            <div
              className="w-3 h-3 bg-[#838183] rounded-[2px] absolute transform rotate-90 left-[25px] top-[52px]
                         shadow-[0_-18px_0_0_#838183,0_18px_0_0_#838183]"
            />
            <div
              className="w-3 h-3 bg-[#aaa9ab] rounded-[2px] absolute transform rotate-90 left-[25px] top-[68px]
                         shadow-[0_-18px_0_0_#aaa9ab,0_18px_0_0_#aaa9ab]"
            />
          </div>
        </div>

        {/* This div represents the original right-side, without the 'Checkout' text */}
      </div>
    </div>
  );
};

export default PaymentLoader;
