export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  type: string;
  overview: string;
  doi?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    id: "dmfmda",
    title: "Decoupled Multimodal Fusion for miRNA-Disease Association Identification",
    authors: ["Zixiao Jin", "Dong Yang", "Zhe Liu", "Xiao Zheng", "Jiahe Jiang", "Chang Tang"],
    venue: "Biomedical Signal Processing and Control",
    year: "2026",
    type: "Journal article",
    overview:
      "Proposes DMFMDA, a decoupled multimodal learning framework that separates consensus and modality-specific biological representations, then refines the shared signal with discriminative attention for miRNA-disease association prediction.",
    doi: "10.1016/j.bspc.2026.111167"
  },
  {
    id: "afdm-ep-learning",
    title:
      "Model-Driven Aided Expectation Propagation Learning for AFDM Signal Detection in High-Mobility Communications",
    authors: ["Jiahe Jiang", "Chen Ding", "Wen Zheng", "Xiaohu Zhai"],
    venue: "IEEE WCNC Workshops",
    year: "2026",
    type: "Workshop paper",
    overview:
      "Introduces DeepEP-AFDM, a model-driven detector that unfolds expectation propagation into trainable PriorNet and DampNet modules for high-mobility AFDM signal detection.",
    doi: "10.1109/WCNCW67598.2026.11555619"
  },
  {
    id: "multispectral-calibration",
    title:
      "Efficient Layer-Wise Cross-View Calibration and Aggregation for Multispectral Object Detection",
    authors: [
      "Xiao He",
      "Tong Yang",
      "Tingzhou Yan",
      "Hongtao Li",
      "Yang Ge",
      "Zhijun Ren",
      "Zhe Liu",
      "Jiahe Jiang",
      "Chang Tang"
    ],
    venue: "Electronics",
    year: "2026",
    type: "Journal article",
    overview:
      "Presents LCMA, a one-stage RGB-IR oriented detector that uses inter-modality spatial-reduction attention and Gated Coupled Filter modules for efficient cross-modality calibration.",
    doi: "10.3390/electronics15030498"
  },
  {
    id: "zc-ofdm-leo",
    title:
      "ZC-OFDM Aided Waveform Design for LEO Satellite Integrated Communication and Navigation",
    authors: ["Can Duan", "Lixia Xiao", "Jiahe Jiang", "Jiaxi Zhou", "Pei Xiao", "Tao Jiang"],
    venue: "IEEE Wireless Communications Letters",
    year: "2025",
    type: "Journal article",
    overview:
      "Designs a DGZC-OFDM waveform and adaptive genetic-algorithm pilot assignment strategy for LEO satellite integrated communication and navigation.",
    doi: "10.1109/LWC.2025.3620133"
  },
  {
    id: "multi-view-tensor",
    title:
      "Multi-View Clustering via High-Order Bipartite Graph Learning and Tensor Low-Rank Representation",
    authors: [
      "Chuan Tang",
      "Miaomiao Li",
      "Jun Wang",
      "Chang Tang",
      "Jiahe Jiang",
      "Tianyi Wang",
      "En Zhu",
      "Xinwang Liu"
    ],
    venue: "IEEE Transactions on Knowledge and Data Engineering",
    year: "2025",
    type: "Journal article",
    overview:
      "Develops HBGTLRR, a multi-view clustering method that learns high-order bipartite graphs, applies tensor nuclear norm minimization, and builds a consensus graph for partition learning.",
    doi: "10.1109/TKDE.2025.3603594"
  }
];
