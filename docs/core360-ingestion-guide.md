# Core 360 Manual Ingestion Guide

This guide defines the import rules for Stacey's Core 360 Mat Manual. The goal is to preserve the manual as the source of truth while applying app-specific taxonomy consistently enough for filtering, routing, anatomy display, and future programming tools.

Use this guide before importing any new exercise record into `content/exercises/manual/`.

## Two Data Layers

Every imported exercise has two layers:

1. Source-of-truth fields copied from the manual.
2. Derived app fields assigned for app behavior.

Do not mix the two. If a value is copied from the manual, keep the manual wording. If a value is interpreted for the app, treat it as derived taxonomy.

## Source-Of-Truth Fields

These fields should come directly from Stacey's manual and should not be rewritten unless the record is explicitly marked as adapted.

- `display.name`: manual exercise name.
- `source.originalName`: exact manual exercise name.
- `source.page`: manual page number.
- `source.section`: manual section or body-position section, such as `Supine` or `Quadruped / Kneeling`.
- `classification.movementCategory`: exact manual movement category.
- `classification.bodyPosition`: exact manual body position.
- `classification.level`: exact manual level.
- `classification.equipment`: exact manual equipment, usually `Mat`.
- `anatomy.primaryMusclesText`: exact manual primary muscles text.
- `anatomy.stabilizersText`: exact manual stabilizers text.
- `teaching.setup`: exact manual setup text.
- `teaching.execution`: exact manual execution text.
- `teaching.breathPattern`: exact manual breath pattern text.
- `teaching.cues`: exact manual teaching cues.
- `teaching.commonMistakes`: exact manual common mistakes.
- `teaching.modifications`: exact manual modifications.
- `teaching.progressions`: exact manual progressions.

If the manual says `Varies`, keep `Varies`. If the manual uses generic text, keep the generic text. Do not make it more specific unless the field is moved into a derived/sample field and clearly marked.

## Derived App Fields

These fields can be normalized or interpreted for app behavior. They should support filtering, anatomy display, class sequencing, search, and future client views.

- `display.slug`: app route identifier.
- `display.summary`: app-facing short summary.
- `display.audienceMode`: app display mode.
- `anatomy.primaryMuscleIds`: normalized IDs for anatomy filters/overlay.
- `anatomy.secondaryMuscleIds`: normalized IDs when useful.
- `anatomy.stabilizerMuscleIds`: normalized IDs for stabilizer emphasis.
- `anatomy.regions`: Core 360 anatomy regions.
- `anatomy.bodyScanFocus`: alignment/body scan focus.
- `anatomy.overlay`: optional display mapping, derived from normalized IDs.
- `classification.movementCompass`: Core 360 Movement Compass tags.
- `classification.programmingWheelSlot`: Core 360 Programming Wheel slot.
- `classification.laterality`: side or bilateral pattern.
- `classification.supportType`: load/support pattern.
- `programming.sequenceNotes`: app sequencing note.
- `media`: optional placeholders or uploaded media.
- `clientContent`: optional client-facing copy.

Derived fields should be conservative. If the assignment is uncertain, leave the field empty or use the closest high-confidence category.

## Per-Exercise Import Checklist

Use this checklist for each exercise:

- Verify the exercise page in the manual.
- Copy exact manual text for all source-of-truth fields.
- Assign a unique app slug.
- Assign `source.page`, `source.section`, and `source.originalName`.
- Set `source.sourceStatus` to `manual-source` for direct imports.
- Assign derived taxonomy: muscle IDs, anatomy regions, body scan focus, movement compass, programming wheel slot, laterality, and support type.
- Verify library filters still make sense for the record.
- Leave unavailable fields empty or omit optional fields instead of inventing content.
- Do not add media unless real media or an intentional placeholder is needed.
- Do not add client content unless it is intentionally derived and marked as app-facing copy.
- Run `npm run build` after adding or changing content files.

## Mapping Guidance

### Movement Compass

Use the manual's movement intention plus the exercise's role in the method.

- `Breath Mechanics`: breathing drills, breath-led pelvic awareness, exercises where breath is the main organizer.
- `Rib-Pelvis Alignment`: exercises emphasizing rib control, pelvic organization, or trunk-pelvis relationship.
- `Core Stability`: neutral support, trunk control, center organization, or deep stabilizer emphasis.
- `Forward Flexion`: abdominal curls, roll-ups, flexion-based mat work.
- `Extension`: bridging, prone extension, posterior-chain reach, or hip extension emphasis.
- `Rotation`: twisting, criss cross, seated rotation, or standing rotation.
- `Lateral Flexion`: mermaid, side bend, side plank variations, side-body loading.
- `Integration`: standing work, balance, side-facing patterns, full-body coordination, or transition work.

Multiple tags are allowed. Prefer 2-4 high-signal tags rather than tagging everything.

### Programming Wheel Slot

Map from the manual's body-position flow, not only from the exercise name.

- `Supine`: breathing, pelvic tilts, abdominal work, bridging, roll-up family when introduced from supine.
- `Side-Lying / Side-Facing`: side-lying hip work, Mermaid, Side Bend Prep, Side Bend, first-side lateral work.
- `Quadruped / Kneeling`: quadruped neutral, Cat Cow, Bird Dog, kneeling arm/rotation/side bend work.
- `Prone`: prone breathing, Dart, Swimming, Swan, Single Leg Kick, Double Leg Kick.
- `Plank`: forearm plank, full plank, knee plank, shoulder taps, mountain climber.
- `Side-Lying (Second Side)`: repeated second-side side-facing work when the record specifically represents the second side.
- `Seated`: Spine Stretch Forward, Spine Twist, Saw, Seal, seated side bend.
- `Standing`: standing roll down, squat, lunge, rotation, side bend, balance reach.

If the manual body position and programming slot differ, preserve the manual body position and use `programmingWheelSlot` for sequencing.

### Laterality

Use this to support side balancing and class planning.

- `Bilateral`: both sides work together or no side distinction.
- `Unilateral`: one limb or one side is trained at a time.
- `Alternating`: opposite arm/leg or side-to-side alternating pattern.
- `Side 1`: side-facing or lateral work intended as the first side.
- `Side 2`: explicit second-side repeat records.
- `None`: breathing, neutral holds, or exercises where laterality is not relevant.

Do not force side labels if the manual does not make side sequencing meaningful.

### Support Type

Use this to represent load, closed-chain demand, and instructor safety context.

- `Open Chain`: limbs move freely without bearing weight through hands/feet as the main support.
- `Closed Chain`: hands or feet press into the floor/equipment and the body moves around that contact.
- `Weight Bearing`: meaningful load through hands, knees, feet, forearms, or shoulders.
- `Shoulder Support`: shoulder girdle or scapular support is a key demand.
- `Balance`: balance or unstable control is central.
- `Loaded Apparatus`: reformer/chair/cadillac/barrel/barre loading changes the exercise demand.
- `Assisted`: prop, support, or setup substantially assists the movement.

Use multiple support tags when helpful. Leave empty if unsure.

### Anatomy Regions

Map from the manual's muscle text and the Core 360 anatomy framework.

- `Deep Core`: transverse abdominis, multifidus, pelvic floor, deep trunk stabilizers, deep core stabilizers.
- `Anterior Core`: rectus abdominis, obliques, abdominal flexion emphasis.
- `Posterior Chain`: erector spinae, gluteals, hamstrings, posterior shoulder, back-line support.
- `Shoulder Stabilizers`: serratus anterior, lower trapezius, scapular stabilizers, shoulder support.
- `Lateral System`: obliques, quadratus lumborum, glute medius, adductors when used for side support, lateral line.

Do not over-classify generic `Varies` entries. Use only regions supported by the manual field or exercise category.

### Body Scan Focus

Use this for instructor-facing alignment filters and teaching reminders.

- `Feet and ankles`: standing, bridging, closed-chain foot contact, balance, squats/lunges.
- `Knees`: bridging, side-lying leg work, standing lower-body work, kneeling alignment.
- `Pelvis`: pelvic tilts, bridging, side-facing hip work, quadruped control, abdominal work.
- `Rib cage`: breathing, abdominal work, extension, plank, standing integration.
- `Head and neck`: breathing, chest lift, abdominal curl work, prone extension, any cervical-support issue.
- `Shoulder girdle`: quadruped, plank, side support, prone arm work, scapular support.
- `Wrist/hand support`: quadruped, plank, side support, loaded hand contact.

Use 2-4 body scan tags. If the manual clearly names a compensation, include the related body scan focus.

## Pilot Examples

### Lateral Breathing

- Source page: 10.
- Source section: `Supine`.
- Source movement category: `Breathing / Pelvic Tilts`.
- Source body position: `Supine`.
- Derived movement compass: `Breath Mechanics`, `Rib-Pelvis Alignment`, `Core Stability`.
- Derived programming wheel slot: `Supine`.
- Derived laterality: `Bilateral`.
- Derived support type: `Open Chain`.
- Derived anatomy regions: `Deep Core`, `Anterior Core`, `Shoulder Stabilizers`.
- Derived body scan focus: `Pelvis`, `Rib cage`, `Head and neck`.

### Chest Lift

- Source page: 13.
- Source section: `Supine`.
- Source movement category: `Abdominals / Forward Flexion`.
- Source body position: `Supine`.
- Derived movement compass: `Forward Flexion`, `Rib-Pelvis Alignment`, `Core Stability`.
- Derived programming wheel slot: `Supine`.
- Derived laterality: `Bilateral`.
- Derived support type: `Open Chain`.
- Derived anatomy regions: `Anterior Core`, `Deep Core`, `Shoulder Stabilizers`.
- Derived body scan focus: `Head and neck`, `Rib cage`, `Pelvis`.

### Pelvic Curl

- Source page: 26.
- Source section: `Supine`.
- Source movement category: `Bridging`.
- Source body position: `Supine`.
- Derived movement compass: `Extension`, `Rib-Pelvis Alignment`, `Core Stability`.
- Derived programming wheel slot: `Supine`.
- Derived laterality: `Bilateral`.
- Derived support type: `Closed Chain`.
- Derived anatomy regions: `Posterior Chain`, `Deep Core`, `Anterior Core`.
- Derived body scan focus: `Feet and ankles`, `Knees`, `Pelvis`, `Rib cage`.

### Rainbow

- Source page: 42.
- Source section: `Side-Facing`.
- Source movement category: `Side-Lying Hip / Leg Work`.
- Source body position: `Side-Facing`.
- Derived movement compass: `Core Stability`, `Rib-Pelvis Alignment`, `Integration`.
- Derived programming wheel slot: `Side-Lying / Side-Facing`.
- Derived laterality: `Side 1`.
- Derived support type: `Open Chain`, `Shoulder Support`.
- Derived anatomy regions: `Lateral System`, `Deep Core`, `Anterior Core`.
- Derived body scan focus: `Pelvis`, `Rib cage`, `Shoulder girdle`.

### Bird Dog

- Source page: 51.
- Source section: `Quadruped / Kneeling`.
- Source movement category: `Quadruped / Kneeling`.
- Source body position: `Quadruped / Kneeling`.
- Derived movement compass: `Extension`, `Core Stability`, `Rib-Pelvis Alignment`.
- Derived programming wheel slot: `Quadruped / Kneeling`.
- Derived laterality: `Alternating`.
- Derived support type: `Closed Chain`, `Weight Bearing`, `Shoulder Support`.
- Derived anatomy regions: `Posterior Chain`, `Deep Core`, `Shoulder Stabilizers`.
- Derived body scan focus: `Pelvis`, `Rib cage`, `Shoulder girdle`, `Wrist/hand support`.

## Do Not Do

- Do not rewrite Stacey's manual text without marking the record or field as derived/adapted.
- Do not invent client content during source ingestion.
- Do not require media for manual-source records.
- Do not force every exercise into every derived category if uncertain.
- Do not replace exact manual labels with app-friendly labels in source fields.
- Do not turn generic manual text into specific teaching detail unless Stacey provides or approves that detail.

## Recommended Import Workflow

1. Extract or open the manual page.
2. Copy source-of-truth fields exactly.
3. Assign conservative derived taxonomy.
4. Add the record under `content/exercises/manual/`.
5. Register it in `content/exercises/index.ts`.
6. Check for slug collisions.
7. Run `npm run build`.
8. Review the library filters and detail page for that exercise.
