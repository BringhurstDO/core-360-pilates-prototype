import { PrototypeLabel } from "@/components/prototype-label";
import { ExerciseImage } from "@/lib/exercise-types";

type ExerciseImageGalleryProps = {
  images: ExerciseImage[];
};

export function ExerciseImageGallery({ images }: ExerciseImageGalleryProps) {
  return (
    <section className="gallery-stack">
      <div className="label-row">
        <PrototypeLabel>Image placeholders</PrototypeLabel>
      </div>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="placeholder-image" aria-label={image.alt}>
            <span>{image.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
