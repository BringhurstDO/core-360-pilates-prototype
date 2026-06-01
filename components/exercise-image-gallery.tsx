import { PrototypeLabel } from "@/components/prototype-label";
import { ExerciseImage } from "@/lib/exercise-types";

type ExerciseImageGalleryProps = {
  images?: ExerciseImage[];
};

export function ExerciseImageGallery({ images }: ExerciseImageGalleryProps) {
  const galleryImages = images ?? [];

  return (
    <section className="gallery-stack">
      <div className="label-row">
        <PrototypeLabel>Image placeholders</PrototypeLabel>
      </div>
      <div className="gallery-grid">
        {galleryImages.length > 0 ? (
          galleryImages.map((image) => (
            <div key={image.id} className="placeholder-image" aria-label={image.alt}>
              <span>{image.label}</span>
            </div>
          ))
        ) : (
          <div className="placeholder-image" aria-label="Image not available yet">
            <span>Image pending</span>
          </div>
        )}
      </div>
    </section>
  );
}
