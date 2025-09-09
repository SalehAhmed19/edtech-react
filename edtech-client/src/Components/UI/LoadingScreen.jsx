import LoadingSpinner from "./LoadingSpinner";

export default function LoadingScreen() {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
