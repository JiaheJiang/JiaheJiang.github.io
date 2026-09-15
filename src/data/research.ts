export type ResearchItem = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  method: string;
  summary: string;
  role: string;
  affiliation: string;
  dates: string;
  stage: string;
  topics: string[];
  contribution: string[];
  approach: string;
  evidence: string[];
  limitations: string[];
  publicationIds: string[];
  resources: { label: string; href: string }[];
  visual: {
    label: string;
    caption: string;
    kind:
      | "signal"
      | "spectrum"
      | "workflow"
      | "graph"
      | "grid"
      | "orbit"
      | "biofusion"
      | "deconvolution"
      | "iodine";
  };
  featured?: boolean;
};

export const research: ResearchItem[] = [
  {
    slug: "afdm-detection",
    title:
      "Model-Driven Aided Expectation Propagation Learning for AFDM Signal Detection in High-Mobility Communications",
    shortTitle: "AFDM detection",
    description:
      "DeepEP-AFDM work for high-mobility wireless communication, where expectation propagation is unfolded into a trainable detector while preserving the communication model structure.",
    method:
      "Complex-domain DeepEP-AFDM detector with PriorNet for adaptive symbol priors and DampNet for iteration-dependent damping, evaluated against MMSE, classical EP, OAMP-Net, and AMP-GNN baselines.",
    summary:
      "This work addresses dense, highly coupled AFDM effective channels in high-Doppler settings by turning EP updates into learnable, model-driven inference rather than a fixed hand-tuned receiver.",
    role: "Research contributor",
    affiliation: "Xiao Lab, HUST",
    dates: "September 2024-Present",
    stage: "Publication-backed research from the Xiao Lab appointment.",
    topics: ["AFDM", "Deep unfolding", "Signal detection"],
    contribution: [
      "Developed DeepEP-AFDM by unfolding expectation propagation into trainable PriorNet and DampNet modules.",
      "Preserved the EP factor-graph structure and O(LN^2) per-iteration complexity while improving detector stability.",
      "Compared the learned EP detector with MMSE, classical EP, OAMP-Net, and a purely data-driven AMP-GNN detector."
    ],
    approach:
      "The detector keeps AFDM's dense effective channel and EP message-passing structure explicit, then learns the parts that are brittle in practice: the adaptive prior model and damping behavior across iterations.",
    evidence: [
      "The CV reports roughly a 10x symbol-error-rate reduction versus classical EP at 20 dB for 16-QAM.",
      "The paper reports lower SER than MMSE, classical EP, and AMP-GNN in doubly dispersive channels while retaining O(LN^2) EP-style complexity.",
      "The public repository documents AFDM detector experiments for inspection."
    ],
    limitations: [
      "The repository configuration should be matched to each figure before adding detailed plots.",
      "Live demos are not included because GitHub Pages cannot host the required computation."
    ],
    publicationIds: ["afdm-ep-learning"],
    resources: [
      { label: "Publication", href: "/publications/#afdm-ep-learning" },
      { label: "Code", href: "https://github.com/JiaheJiang/GNN_AFDM_detector" }
    ],
    visual: {
      label: "Model-assisted signal detection pipeline",
      caption: "AFDM observations pass through model-structured EP updates with learned PriorNet and DampNet components.",
      kind: "signal"
    },
    featured: true
  },
  {
    slug: "multispectral-detection",
    title:
      "Efficient Layer-Wise Cross-View Calibration and Aggregation for Multispectral Object Detection",
    shortTitle: "Multispectral detection",
    description:
      "LCMA work on efficient RGB-infrared oriented object detection, focused on calibrating weakly misaligned visible and infrared feature streams before one-stage detection.",
    method:
      "Layer-wise Cross-Modality calibration and Aggregation with inter-modality spatial-reduction attention and Gated Coupled Filter modules.",
    summary:
      "The project studies how visible and infrared evidence can be aligned and filtered layer by layer so a one-stage detector can avoid proposal-stage fusion overhead.",
    role: "Research contributor",
    affiliation: "Xiao Lab, HUST",
    dates: "September 2024-Present",
    stage: "Journal publication in Electronics, 2026.",
    topics: ["RGB-IR detection", "Cross-modal calibration", "Aerial detection"],
    contribution: [
      "Led the research direction as corresponding author around cross-modal misalignment and redundant feature fusion.",
      "Helped guide LCMA's layer-wise calibration strategy for RGB-IR feature alignment.",
      "Positioned ISRA and GCF as efficiency-oriented alternatives to two-stage proposal-level alignment."
    ],
    approach:
      "LCMA treats RGB and infrared streams as complementary but imperfectly aligned evidence. Inter-modality spatial-reduction attention performs neighborhood-aware calibration, while the Gated Coupled Filter suppresses redundant features before the detection head.",
    evidence: [
      "The paper reports that LCMA is a one-stage oriented detector for RGB-infrared object detection.",
      "The paper reports experiments across RGB-IR object-detection benchmarks with accuracy and speed gains over comparison methods.",
      "The CV describes state-of-the-art performance across three benchmarks."
    ],
    limitations: [
      "No public implementation link is shown until an authorized code or artifact URL is available.",
      "Benchmark details should be added only after checking the final article."
    ],
    publicationIds: ["multispectral-calibration"],
    resources: [{ label: "Publication", href: "/publications/#multispectral-calibration" }],
    visual: {
      label: "Visible and infrared representation alignment",
      caption: "Layer-wise RGB and infrared streams are calibrated, gated, and aggregated before oriented detection.",
      kind: "spectrum"
    },
    featured: true
  },
  {
    slug: "zc-ofdm-leo-ican",
    title: "ZC-OFDM Aided Waveform Design for LEO Satellite Integrated Communication and Navigation",
    shortTitle: "ZC-OFDM LEO ICAN",
    description:
      "Waveform-design work for low-Earth-orbit satellite integrated communication and navigation, addressing Doppler-sensitive ranging and communication trade-offs.",
    method:
      "Differential generalized Zadoff-Chu sequence design integrated into ZC-OFDM, with adaptive genetic-algorithm pilot assignment for communication-ranging optimization.",
    summary:
      "The project designs a DGZC-OFDM waveform so LEO satellite systems can support communication and navigation with improved Doppler robustness.",
    role: "Research contributor",
    affiliation: "Xiao Lab, HUST",
    dates: "September 2024-Present",
    stage: "Publication-backed research.",
    topics: ["LEO satellites", "ICAN", "Waveform design"],
    contribution: [
      "Contributed to a ZC-OFDM waveform design for integrated communication and navigation in LEO satellite channels.",
      "Helped frame DGZC processing as a way to mitigate Doppler-induced ranging error while preserving useful autocorrelation behavior.",
      "Supported the communication-ranging optimization narrative around adaptive GA-based pilot assignment."
    ],
    approach:
      "The work starts from Zadoff-Chu sequence structure and adapts it for high-mobility LEO conditions. DGZC processing improves ranging robustness, while adaptive pilot assignment balances bit-error-rate and ranging objectives.",
    evidence: [
      "The paper reports at least 6.3 dB BER gain and at least 33.9 meters lower ranging error at 0 dB SNR compared with conventional approaches.",
      "The article is published in IEEE Wireless Communications Letters with DOI 10.1109/LWC.2025.3620133."
    ],
    limitations: [
      "The website summarizes waveform design and simulation findings rather than providing a deployable satellite navigation system.",
      "Detailed mathematical derivations remain in the paper instead of being reproduced in full on the portfolio."
    ],
    publicationIds: ["zc-ofdm-leo"],
    resources: [{ label: "Publication", href: "https://doi.org/10.1109/LWC.2025.3620133" }],
    visual: {
      label: "LEO satellite communication and navigation waveform",
      caption: "DGZC-OFDM links waveform structure, pilot assignment, BER, and ranging accuracy in an ICAN setting.",
      kind: "orbit"
    }
  },
  {
    slug: "dia-deconvolution",
    title: "DIA Deconvolution for Single-Cell Metabolomics",
    shortTitle: "DIA deconvolution",
    description:
      "Computational method work for resolving co-fragmented signals in data-independent acquisition (DIA) metabolomics, aimed at recovering clean per-compound spectra for single-cell-scale samples.",
    method:
      "Spectral deconvolution of multiplexed DIA fragment data with blank correction, feature filtering, and spectral-library matching to reconstruct individual compound spectra from co-eluting precursors.",
    summary:
      "This project focuses on untangling overlapping DIA fragmentation so that low-abundance single-cell metabolomics features can be assigned to individual compounds.",
    role: "Research assistant",
    affiliation: "Huan Lab, UBC Chemistry",
    dates: "January 2026-Present",
    stage: "Current research appointment.",
    topics: ["DIA deconvolution", "Single-cell metabolomics", "Spectral matching"],
    contribution: [
      "Developed a DIA deconvolution workflow that resolves co-eluting precursors into per-compound fragment spectra.",
      "Applied blank correction, feature filtering, and spectral-library matching to strengthen confidence in low-abundance assignments.",
      "Reversed the spectral-matching direction when the experimental dataset was smaller than the reference library, reducing processing time from 38 to 20 minutes on the same hardware."
    ],
    approach:
      "The work treats DIA spectra as mixtures of co-fragmented precursors and reconstructs individual component spectra before library matching, so single-cell-scale features are not lost in overlapping signals.",
    evidence: [
      "The CV documents the 38-to-20 minute processing-time improvement from changing the spectral-matching direction.",
      "The public repository documents the DIA deconvolution workflow for inspection."
    ],
    limitations: [
      "No private lab data, unpublished results, or restricted screenshots are included.",
      "The page focuses on the deconvolution method rather than final biological conclusions."
    ],
    publicationIds: [],
    resources: [
      { label: "Code", href: "https://github.com/HuanLab/YangLab-DIA-Deconvolution" }
    ],
    visual: {
      label: "DIA co-elution deconvolution",
      caption: "Co-eluting DIA precursors are separated into resolved per-compound component spectra.",
      kind: "deconvolution"
    },
    featured: true
  },
  {
    slug: "iodofinder",
    title: "IodoFinder for Iodinated Compound Discovery",
    shortTitle: "IodoFinder",
    description:
      "LC-MS/MS analysis work for detecting and annotating iodine-containing compounds, using iodine's characteristic mass behavior to flag candidate iodinated features for follow-up.",
    method:
      "IodoFinder-style screening of LC-MS/MS data for iodine mass signatures and neutral-loss patterns, with matching against an iodine-focused reference database for candidate annotation.",
    summary:
      "This project targets iodinated organic compounds specifically, using the distinctive mass behavior of iodine to separate likely iodine-containing features from the broader LC-MS/MS background.",
    role: "Research assistant",
    affiliation: "Huan Lab, UBC Chemistry",
    dates: "January 2026-Present",
    stage: "Current research appointment.",
    topics: ["Iodinated compounds", "LC-MS/MS", "Compound annotation"],
    contribution: [
      "Developed IodoFinder analysis for flagging iodine-containing features in LC-MS/MS data.",
      "Used iodine-specific mass signatures to prioritize candidate iodinated compounds for annotation.",
      "Matched flagged features against an iodine-focused reference database to support identification."
    ],
    approach:
      "IodoFinder exploits the characteristic mass behavior of iodine so that iodinated compounds can be picked out of complex LC-MS/MS data and cross-referenced against a dedicated iodine database, rather than screened with a generic untargeted pipeline.",
    evidence: [
      "The public repository documents the iodine reference database used for matching.",
      "The site describes the identification approach without publishing restricted datasets."
    ],
    limitations: [
      "Annotations are candidate-level and depend on database coverage of iodinated compounds.",
      "The page describes the screening method rather than confirmed structural identifications."
    ],
    publicationIds: [],
    resources: [
      { label: "Code", href: "https://github.com/HuanLab/Iodine-Global-Database" }
    ],
    visual: {
      label: "Iodine signature screening",
      caption: "LC-MS/MS features carrying iodine mass signatures are flagged and matched to an iodine database.",
      kind: "iodine"
    }
  },
  {
    slug: "lc-ms-automation",
    title: "Automated LC-MS Processing Workflow",
    shortTitle: "LC-MS automation",
    description:
      "Scientific workflow automation for LC-MS data, covering automated file monitoring, format conversion, batch processing, and quality control so routine analysis runs without manual per-file handling.",
    method:
      "Workflow-orchestration layer that watches for new instrument files, converts vendor formats, triggers processing and QC steps, and tracks job status across a batch.",
    summary:
      "This project automates the operational side of LC-MS analysis, orchestrating file monitoring, conversion, processing, and QC so researchers spend less time shepherding individual runs.",
    role: "Research assistant",
    affiliation: "Huan Lab, UBC Chemistry",
    dates: "January 2026-Present",
    stage: "Current research appointment.",
    topics: ["Workflow automation", "LC-MS", "Pipeline orchestration"],
    contribution: [
      "Built an automated pipeline that monitors for new LC-MS files and triggers downstream steps without manual intervention.",
      "Automated vendor-format conversion, batch processing, and quality-control checks across runs.",
      "Added job tracking and orchestration so batch status and failures stay visible during long acquisition sequences."
    ],
    approach:
      "The work treats LC-MS operations as an orchestration problem: instead of manually converting and processing each file, a monitoring layer detects new data and moves it through conversion, processing, and QC automatically.",
    evidence: [
      "The site describes the automation architecture without publishing private datasets or lab-specific artifacts.",
      "The workflow focuses on operational reliability rather than a specific scientific result."
    ],
    limitations: [
      "No private lab data or restricted instrument outputs are included.",
      "The page describes orchestration and automation rather than downstream scientific conclusions."
    ],
    publicationIds: [],
    resources: [],
    visual: {
      label: "Automated LC-MS pipeline",
      caption: "New instrument files are detected and moved through conversion, processing, and QC automatically.",
      kind: "workflow"
    }
  },
  {
    slug: "multi-view-clustering",
    title: "Multi-View Clustering with Graph and Tensor Models",
    shortTitle: "Multi-view clustering",
    description:
      "HBGTLRR work on preserving high-order structure across multiple related data views through graph learning and tensor low-rank representation.",
    method:
      "High-order bipartite graph learning, tensor nuclear norm minimization, adaptive consensus-graph fusion, and Laplacian low-rank constrained partition learning.",
    summary:
      "A graph and tensor low-rank representation project for multi-view clustering.",
    role: "Research contributor",
    affiliation: "Xiao Lab, HUST",
    dates: "September 2024-Present",
    stage: "Publication-backed research.",
    topics: ["Multi-view learning", "Graph methods", "Tensor models"],
    contribution: [
      "Refined a high-order bipartite graph-learning model for multi-view clustering.",
      "Built training and evaluation pipelines across eight multi-view clustering benchmarks.",
      "Connected tensor low-rank denoising, consensus graph fusion, and partition learning into a clear contribution narrative."
    ],
    approach:
      "HBGTLRR constructs high-order bipartite graphs for each view, concatenates them into a tensor, applies tensor nuclear norm minimization to reduce noise, and adaptively fuses the graphs into a consensus structure for clustering.",
    evidence: [
      "The CV reports leading results on most of eight benchmarks and a 6.9-point ACC gain over the strongest baseline on YouTubeFace50.",
      "The DOI-linked TKDE publication is the primary citation record."
    ],
    limitations: [
      "Benchmark tables should be added only after checking publisher-permitted values.",
      "The site avoids a timeless state-of-the-art claim."
    ],
    publicationIds: ["multi-view-tensor"],
    resources: [{ label: "Publication", href: "https://doi.org/10.1109/TKDE.2025.3603594" }],
    visual: {
      label: "High-order cross-view graph structure",
      caption: "High-order bipartite graphs are stacked into a tensor, denoised, and fused into a consensus graph.",
      kind: "graph"
    }
  },
  {
    slug: "decoupled-mirna-disease",
    title: "Decoupled Multimodal Fusion for miRNA-Disease Association Identification",
    shortTitle: "Decoupled miRNA-disease fusion",
    description:
      "Biomedical machine-learning work on predicting miRNA-disease associations by separating shared cross-modal evidence from modality-specific biological signals.",
    method:
      "Decoupled Multimodal Fusion mechanism with Consensus Subspace, Specific Subspace, and Discriminative Attention refinement over graph-attention-derived features.",
    summary:
      "DMFMDA addresses modality dominance and over-alignment in miRNA-disease association prediction by explicitly decoupling heterogeneous biological representations before fusion.",
    role: "Research contributor",
    affiliation: "Xiao Lab, HUST",
    dates: "September 2024-Present",
    stage: "Publication-backed research.",
    topics: ["Computational biology", "Multimodal fusion", "Graph attention"],
    contribution: [
      "Contributed to a decoupled multimodal learning framework for miRNA-disease association identification.",
      "Helped frame the method around consensus and modality-specific representation spaces rather than direct feature concatenation.",
      "Kept the page's performance claims tied to the reported dataset-level accuracy gains."
    ],
    approach:
      "The method first disentangles heterogeneous inputs into a Consensus Subspace for modality-invariant knowledge and a Specific Subspace for discriminative modality-specific cues. A Discriminative Attention block then refines the consensus representation to suppress noisy or redundant signals.",
    evidence: [
      "The paper reports accuracy gains of 2.05% and 1.71% over the second-best model on two datasets.",
      "The publication provides case-study validation across three diseases and a public code/data repository."
    ],
    limitations: [
      "The portfolio summarizes the learning architecture and reported results without reproducing biomedical case-study details.",
      "Clinical interpretation should rely on the paper and domain validation rather than this project overview alone."
    ],
    publicationIds: ["dmfmda"],
    resources: [
      { label: "Publication", href: "/publications/#dmfmda" },
      { label: "Code", href: "https://github.com/zixiaojin66/DMFMDA" }
    ],
    visual: {
      label: "Decoupled multimodal biological representation fusion",
      caption: "Biological modalities split into consensus and specific subspaces before discriminative attention.",
      kind: "biofusion"
    }
  },
  {
    slug: "power-grid-robustness",
    title: "Power-Grid Robustness Interfaces",
    shortTitle: "Power-grid robustness",
    description:
      "Research interface and workflow development for power-grid vulnerability analysis, graph visualization, topology editing, attack comparison, and experiment tracking.",
    method:
      "Interactive Streamlit research interface for graph visualization, topology editing, structural attack comparison, and topology-aware robustness evaluation.",
    summary:
      "Interface and workflow development at UBC ECE for power-grid vulnerability analysis.",
    role: "Research assistant",
    affiliation: "Lele's Lab, UBC ECE",
    dates: "January 2026-Present",
    stage: "Current research appointment.",
    topics: ["Research interfaces", "Network robustness", "Scientific workflows"],
    contribution: [
      "Led the design and development of a Streamlit interface for power-grid vulnerability analysis.",
      "Translated researcher requirements into workflows for graph visualization, topology editing, attack comparison, and experiment tracking.",
      "Analyzed unsuccessful graph-neural-network experiments, identified structural-camouflage failure modes, and helped redirect the project toward topology-aware robustness evaluation."
    ],
    approach:
      "The page frames the work as a research interface problem: analyses are only useful when researchers can inspect assumptions, compare structural patterns, and understand why a network appears vulnerable under a given scenario.",
    evidence: [
      "The site can later add approved interface screenshots or synthetic examples.",
      "Current wording avoids operational claims about real grid reliability while preserving the CV-backed research direction."
    ],
    limitations: [
      "No sensitive infrastructure data is included.",
      "Results are described as research-supporting analysis, not production risk assessment."
    ],
    publicationIds: [],
    resources: [
      { label: "Code", href: "https://github.com/jossiej00/RogersProject" }
    ],
    visual: {
      label: "Network robustness review surface",
      caption: "Illustrative grid-style network for explaining inspection and comparison workflows.",
      kind: "grid"
    }
  }
];
