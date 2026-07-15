import { PrototypeLabel } from "@/components/prototype-label";
import { ExerciseImage } from "@/lib/exercise-types";

type ExerciseImageGalleryProps = {
  images?: ExerciseImage[];
};

export function ExerciseImageGallery({ images }: ExerciseImageGalleryProps) {
  const galleryImages = images ?? [];

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section className="gallery-stack">
      <div className="label-row">
        <PrototypeLabel>Exercise images</PrototypeLabel>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="placeholder-image" aria-label={image.alt}>
            <span>{image.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
