import { Hourglass } from "ldrs/react";
import "ldrs/react/Hourglass.css";

export default function LoadingSpinner() {
  return <Hourglass size="40" bgOpacity="0.1" speed="1.75" color="#CE2823" />;
}
