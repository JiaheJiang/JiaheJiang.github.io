import { publications } from "../src/data/publications";
import { projects } from "../src/data/projects";
import { research } from "../src/data/research";

function assertUnique(label: string, values: string[]) {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`${label} contains duplicate value: ${value}`);
    }
    seen.add(value);
  }
}

function assertKnownReferences(label: string, values: string[], allowed: Set<string>) {
  for (const value of values) {
    if (!allowed.has(value)) {
      throw new Error(`${label} references unknown id: ${value}`);
    }
  }
}

assertUnique("research slugs", research.map((item) => item.slug));
assertUnique("project slugs", projects.map((item) => item.slug));
assertUnique("publication ids", publications.map((item) => item.id));

const publicationIds = new Set(publications.map((item) => item.id));
for (const item of research) {
  assertKnownReferences(`${item.slug} publications`, item.publicationIds, publicationIds);
}

for (const item of projects) {
  if (!item.summary || !item.maturity) {
    throw new Error(`${item.slug} needs a summary and maturity statement`);
  }
}

console.log(
  `Validated ${research.length} research items, ${projects.length} projects, and ${publications.length} publications.`,
);
