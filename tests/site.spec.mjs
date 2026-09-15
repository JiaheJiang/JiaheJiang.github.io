import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const dist = path.join(root, "dist");

async function readBuiltPage(route) {
  const file =
    route === "/404"
      ? path.join(dist, "404.html")
      : path.join(dist, route.replace(/^\//, ""), "index.html");
  return readFile(file, "utf8");
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listHtmlFiles(dir = dist) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listHtmlFiles(fullPath);
      return entry.name.endsWith(".html") ? [fullPath] : [];
    }),
  );
  return files.flat();
}

test("build emits the expected visitor routes", async () => {
  const routes = [
    "index.html",
    "research/index.html",
    "research/afdm-detection/index.html",
    "research/multispectral-detection/index.html",
    "research/zc-ofdm-leo-ican/index.html",
    "research/multi-view-clustering/index.html",
    "research/decoupled-mirna-disease/index.html",
    "research/dia-deconvolution/index.html",
    "research/iodofinder/index.html",
    "research/lc-ms-automation/index.html",
    "research/power-grid-robustness/index.html",
    "publications/index.html",
    "projects/index.html",
    "projects/quant-trader/index.html",
    "projects/w-network/index.html",
    "projects/cosmetic-warehouse/index.html",
    "about/index.html",
    "experience/index.html",
    "404.html"
  ];

  for (const route of routes) {
    assert.equal(await pathExists(path.join(dist, route)), true, `${route} missing`);
  }
  assert.equal(await pathExists(path.join(dist, "contact/index.html")), false, "contact route should not be built");
});

test("homepage presents the planned positioning and primary journeys", async () => {
  const html = await readBuiltPage("/");
  assert.match(html, /Jiahe Jiang/);
  assert.match(html, /Machine learning, signal processing, and scientific software/);
  assert.match(html, /Explore research/);
  assert.match(html, /View CV/);
  assert.match(html, /AFDM detection/);
  assert.match(html, /DIA deconvolution/);
});

test("homepage keeps contact and profile links as accessible icons only", async () => {
  const html = await readBuiltPage("/");
  assert.match(html, /aria-label="Email"/);
  assert.match(html, /aria-label="GitHub"/);
  assert.match(html, /aria-label="ORCID"/);
  assert.match(html, /aria-label="LinkedIn"/);
  assert.match(html, /mailto:jiahe72@student\.ubc\.ca/);
  assert.match(html, /https:\/\/github\.com\/JiaheJiang/);
  assert.match(html, /https:\/\/orcid\.org\/0009-0000-6879-9320/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/jiahecrystaljiang\//);
  assert.match(html, /class="scholar-links icon-links"/);
  assert.doesNotMatch(html, />Email<\/a>/);
  assert.doesNotMatch(html, />GitHub<\/a>/);
  assert.doesNotMatch(html, />ORCID<\/a>/);
  assert.doesNotMatch(html, /href="\/contact\//);
  assert.doesNotMatch(html, /Contact Jiahe/);
});

test("contact page and navigation are removed", async () => {
  const htmlFiles = await listHtmlFiles();
  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    assert.doesNotMatch(html, /href="\/contact\//, `${file} still links to contact page`);
    assert.doesNotMatch(html, />\s*Contact\s*</, `${file} still renders Contact navigation`);
  }
});

test("homepage follows the compact academic section structure", async () => {
  const html = await readBuiltPage("/");
  assert.doesNotMatch(html, /site-footer|Footer navigation/);
  assert.doesNotMatch(html, />News</);
  assert.doesNotMatch(html, />Honors</);
  assert.match(html, /<h2>Publications<\/h2>/);
  assert.match(html, /<h2>Projects<\/h2>/);

  const publicationsIndex = html.indexOf("<h2>Publications</h2>");
  const projectsIndex = html.indexOf("<h2>Projects</h2>");
  assert.ok(publicationsIndex > -1, "homepage is missing Publications section");
  assert.ok(projectsIndex > -1, "homepage is missing Projects section");
  assert.ok(
    publicationsIndex < projectsIndex,
    "Projects should appear directly after Publications in the homepage hierarchy",
  );
});

test("publication page presents source-backed citation metadata", async () => {
  const html = await readBuiltPage("/publications");
  assert.doesNotMatch(html, /Scholarly records/);
  assert.doesNotMatch(html, /Metadata note/);
  assert.match(html, /Biomedical Signal Processing and Control, 2026/);
  assert.match(html, /IEEE WCNC Workshops, 2026/);
  assert.match(html, /Electronics, 2026/);
  assert.match(html, /10\.1109\/LWC\.2025\.3620133/);
  assert.match(html, /10\.1109\/TKDE\.2025\.3603594/);
  assert.doesNotMatch(html, /et al\.\s*,\s*et al\./i);
});

test("about page presents awards and leadership with launch-ready wording", async () => {
  const html = await readBuiltPage("/about");
  assert.match(html, /Awards and leadership/);
  assert.match(html, /Work Learn International Undergraduate Research Awards, UBC, Summer 2026/);
  assert.match(html, /Summer Session Dean(?:'|&#39;)s List, UBC, 2025-2026 Winter Session/);
  assert.match(html, /Summer Session Dean(?:'|&#39;)s List, UBC, 2022-2024 Winter Session/);
  assert.match(html, /Go Global International Learning Programs Award, UBC, Summer 2024/);
  assert.match(html, /three AI-literacy workshops/);
  assert.match(html, /60\+ participants/);
  assert.doesNotMatch(html, /entries from the CV/);
  assert.doesNotMatch(html, /listed in the CV/);
  assert.doesNotMatch(html, /exact session wording/);
});

test("research pages include document-grounded technical details and polished visuals", async () => {
  const researchHtml = await readBuiltPage("/research");
  assert.match(researchHtml, /Decoupled Multimodal Fusion/);
  assert.match(researchHtml, /ZC-OFDM/);
  assert.doesNotMatch(researchHtml, /placeholder/i);

  const afdmHtml = await readBuiltPage("/research/afdm-detection");
  assert.match(afdmHtml, /PriorNet/);
  assert.match(afdmHtml, /DampNet/);
  assert.match(afdmHtml, /10x/);

  const multispectralHtml = await readBuiltPage("/research/multispectral-detection");
  assert.match(multispectralHtml, /inter-modality spatial-reduction attention/);
  assert.match(multispectralHtml, /Gated Coupled Filter/);

  const clusteringHtml = await readBuiltPage("/research/multi-view-clustering");
  assert.match(clusteringHtml, /tensor nuclear norm/);
  assert.match(clusteringHtml, /YouTubeFace50/);

  const mirnaHtml = await readBuiltPage("/research/decoupled-mirna-disease");
  assert.match(mirnaHtml, /Consensus Subspace/);
  assert.match(mirnaHtml, /Specific Subspace/);
});

test("publication presentation uses concise overviews without case-study framing", async () => {
  const htmlFiles = await listHtmlFiles();
  const publicationsHtml = await readBuiltPage("/publications");

  assert.match(publicationsHtml, /Proposes DMFMDA/);
  assert.match(publicationsHtml, /Introduces DeepEP-AFDM/);
  assert.match(publicationsHtml, /Presents LCMA/);
  assert.doesNotMatch(publicationsHtml, /Research case/i);

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    assert.doesNotMatch(html, /case stud/i, `${file} still contains case-study wording`);
  }
});

test("built pages include metadata and valid internal links", async () => {
  const htmlFiles = await listHtmlFiles();
  assert.ok(htmlFiles.length > 0, "no built HTML files found");

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    assert.match(html, /<title>.+<\/title>/, `${file} missing title`);
    assert.match(html, /<meta name="description"/, `${file} missing description`);

    const internalLinks = [...html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)].map(
      (match) => match[1],
    );
    for (const href of internalLinks) {
      if (href.startsWith("/files/")) continue;
      const target = path.extname(href)
        ? path.join(dist, href.replace(/^\//, ""))
        : href === "/"
          ? path.join(dist, "index.html")
          : path.join(dist, href.replace(/^\//, ""), "index.html");
      assert.equal(await pathExists(target), true, `${file} links to missing ${href}`);
    }
  }
});
