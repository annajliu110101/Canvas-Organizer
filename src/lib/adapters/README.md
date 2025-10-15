# Purpose

Convert raw API data (Canvas/Gradescope JSON) into internal Item and CourseBrief models.

# Contents

canvas.toItem.ts: maps Canvas events/assignments → Item.

gradescope.toItem.ts: maps Gradescope rows → Item.

canvas.toCourse.ts: normalizes Canvas courses → CourseBrief.

# Features

- Pure, side-effect-free mappers.

- Normalizes field names and timestamps.

- Tags each object with source and host for cross-domain merging.
