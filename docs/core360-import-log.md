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

## 2026-06-10: Stacey Review Update

Reviewed category: `Breathing / Pelvic Tilts`.

Stacey-approved primary muscle emphasis:

- `Neutral Pelvis Hold`: Transversus abdominis, multifidus.
- `Pelvic Tilt`: Transversus abdominis, internal and external obliques, multifidus.
- `Tabletop Hold`: Transversus abdominis, hip flexors, multifidus.
- `Toe Taps`: Transversus abdominis, hip flexors, multifidus.

Resolved questions:

- `Toe Taps` laterality is confirmed as `Alternating`.
- The `Primary Muscles: Varies` question is resolved for Pelvic Tilt, Neutral Pelvis Hold, Toe Taps, and Tabletop Hold using Stacey's reviewed muscle emphasis.

Still unresolved:

- Stacey was unsure whether the generic setup/execution language should remain exact manual text or be expanded later. The app preserves the exact manual wording for now and keeps this as the remaining review question on the affected detail pages.

## 2026-06-10: Full Manual Library Import

Category scope: all manual exercise-library records from pages 10-87.

Import result:

- Total Core 360 manual records in `content/exercises/manual/`: 78.
- Existing pilot/manual records updated in place where needed: 9.
- New manual records added from the larger library: 69.
- Prototype/sample records were kept alongside exact manual records. Manual records use `manual-*` slugs so Stacey can filter `Core 360 Manual` without losing the older structure-testing examples.

How Stacey's feedback was applied:

- The reviewed primary muscle emphasis for Pelvic Tilt, Neutral Pelvis Hold, Toe Taps, and Tabletop Hold was preserved.
- `Toe Taps` remains `Alternating`.
- New records preserve exact manual source text in the source-of-truth fields.
- Records whose manual page says `Primary Muscles: Varies` keep `primaryMusclesText: "Varies"` and receive a review question asking Stacey to confirm or replace the derived anatomy emphasis.
- Records using the generic setup/execution template receive the unresolved setup/execution review question because Stacey was unsure whether to preserve that wording or expand it later.

Status counts:

- `manual-source`: 6 records with no current review questions.
- `needs-stacey-review`: 72 records requiring Stacey review for generic primary-muscle text, generic setup/execution language, or both.

Derived taxonomy note:

- For `Varies` records, normalized anatomy IDs are app-derived from movement category, body position, exercise name, and stabilizer text. These IDs are intentionally reviewable taxonomy and do not replace the manual's source wording.
