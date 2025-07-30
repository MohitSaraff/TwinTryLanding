import { useState, useRef } from "react";
import { SlidersHorizontal } from "lucide-react";

interface PhotoFilterProps {
  photo1: string; // e.g. Red dress
  photo2: string; // e.g. Blue dress
  width?: number | string; // Container width
  height?: number | string; // Container height
  objectFit1?: "cover" | "contain" | "fill" | "scale-down" | "none";
  objectFit2?: "cover" | "contain" | "fill" | "scale-down" | "none";
  objectPosition1?: string;
  objectPosition2?: string;
}

const PhotoFilter: React.FC<PhotoFilterProps> = ({
  photo1,
  photo2,
  width = "100%",
  height = "100%",
  objectFit1 = "cover",
  objectFit2 = "cover",
  objectPosition1 = "center",
  objectPosition2 = "center",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clipValue, setClipValue] = useState(50); // Percentage of the top image shown
  const [isDragging, setIsDragging] = useState(false);

  const updateClipValue = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let newVal = (x / rect.width) * 100;
    newVal = Math.max(0, Math.min(100, newVal));
    setClipValue(newVal);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default selection behavior
    setIsDragging(true);
    updateClipValue(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      e.preventDefault(); // Prevent default selection behavior
      updateClipValue(e.clientX);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerLeave = () => {
    if (isDragging) setIsDragging(false);
  };

  // Add this to disable the default drag behavior
  const disableDrag = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    return false;
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden cursor-col-resize"
      style={{
        width,
        height,
        touchAction: "none",
        backgroundColor: "#000", // Black background to avoid white borders
        userSelect: "none", // Prevent text selection
        WebkitUserSelect: "none", // For Safari
        MozUserSelect: "none", // For Firefox
        msUserSelect: "none" // For IE/Edge
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
    >
      {/* Bottom Image (Photo2) fully visible */}
      <img
        src={photo2}
        alt="Photo 2"
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: objectFit2,
          objectPosition: objectPosition2,
          pointerEvents: "none" // Prevent image from receiving pointer events
        }}
        draggable="false"
        onDragStart={disableDrag}
      />

      {/* Top Image (Photo1) clipped with clip-path */}
      <img
        src={photo1}
        alt="Photo 1"
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: objectFit1,
          objectPosition: objectPosition1,
          clipPath: `polygon(0 0, ${clipValue}% 0, ${clipValue}% 100%, 0 100%)`,
          pointerEvents: "none" // Prevent image from receiving pointer events
        }}
        draggable="false"
        onDragStart={disableDrag}
      />

      {/* Draggable Divider with Slider Icon */}
      <div
        className="absolute inset-y-0 w-[3px] bg-white flex items-center justify-center z-10"
        style={{ left: `${clipValue}%`, transform: "translateX(-50%)" }}
      >
        <SlidersHorizontal className="w-6 h-6 bg-white p-1 rounded-full shadow-md" />
      </div>
    </div>
  );
};

export default PhotoFilter;