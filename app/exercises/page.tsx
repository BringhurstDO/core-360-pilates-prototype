import { ExerciseLibraryView } from "@/components/exercise-library-view";
import { exercises } from "@/content/exercises";

export default function ExerciseLibraryPage() {
  return <ExerciseLibraryView exercises={exercises} />;
}
