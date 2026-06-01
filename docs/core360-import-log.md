# Core 360 Import Log

## 2026-06-01: Breathing / Pelvic Tilts

Category imported: `Breathing / Pelvic Tilts`.

Pages covered: 10-12, 24-25.

Exercises imported or verified:

- `Lateral Breathing`, page 10: already present from the pilot batch and verified against the manual.
- `Pelvic Tilt`, page 11: added.
- `Neutral Pelvis Hold`, page 12: added.
- `Toe Taps`, page 24: added.
- `Tabletop Hold`, page 25: added.

Fields that required judgment:

- The manual lists `Primary Muscles` as `Varies` for Pelvic Tilt, Neutral Pelvis Hold, Toe Taps, and Tabletop Hold. The records preserve `Varies` in `anatomy.primaryMusclesText`, leave `primaryMuscleIds` empty, and map only the manual's `Deep core stabilizers` stabilizer text to the closest available normalized stabilizer ID, `abdominals`.
- `movementCompass` was assigned as `Breath Mechanics`, `Rib-Pelvis Alignment`, and `Core Stability` because the category and manual cues emphasize breath preparation, rib-pelvis organization, and trunk support.
- `programmingWheelSlot` was assigned as `Supine` because all five records are in the manual's `Supine` body position section.
- `supportType` was assigned as `Open Chain` because these are supine mat records without loaded apparatus or primary weight-bearing through the limbs.
- `laterality` was assigned as `Bilateral` for Pelvic Tilt, Neutral Pelvis Hold, and Tabletop Hold. `Toe Taps` was assigned `Alternating` based on the exercise name; the manual page does not explicitly state alternating leg action.

Unresolved questions for Stacey:

- Should records where the manual says `Primary Muscles: Varies` receive Stacey-approved primary muscle emphasis later, or should they remain intentionally generic?
- Should `Toe Taps` be treated as `Alternating`, `Unilateral`, or no laterality for class planning?
- Should the generic setup/execution language on pages 11, 12, 24, and 25 be expanded in a Stacey-reviewed teaching pass, or preserved exactly as the current source-of-truth wording?
