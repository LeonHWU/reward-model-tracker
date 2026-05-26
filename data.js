window.trackerData = {
  roadmap: [
    {
      title: "Preference learning",
      status: "active",
      progress: 35,
      summary:
        "Bradley-Terry loss, pairwise ranking, label noise, reward margin, calibration, and preference data quality.",
    },
    {
      title: "RM training loop",
      status: "todo",
      progress: 10,
      summary:
        "PyTorch implementation of scalar reward head training with chosen/rejected batches and clean validation metrics.",
    },
    {
      title: "TRL + LoRA pipeline",
      status: "todo",
      progress: 0,
      summary:
        "Use RewardTrainer, PEFT, bf16, gradient accumulation, checkpoint resume, and experiment logging.",
    },
    {
      title: "Evaluation",
      status: "todo",
      progress: 0,
      summary:
        "Held-out pair accuracy, reward margin distribution, length bias, best-of-N reranking, and failure analysis.",
    },
    {
      title: "RLHF context",
      status: "todo",
      progress: 0,
      summary:
        "Understand SFT, RM, PPO, KL penalty, DPO, rejection sampling, reward hacking, and overoptimization.",
    },
    {
      title: "Interview readiness",
      status: "todo",
      progress: 0,
      summary:
        "Prepare concise explanations of RM loss, data pipeline, eval limitations, and production training risks.",
    },
  ],
  milestones: [
    {
      week: "Week 1",
      title: "Toy reward model from scratch",
      summary:
        "Train a small pairwise reward model on 1k preference examples and verify the loss, metrics, and data format.",
    },
    {
      week: "Week 2",
      title: "LoRA RM training with TRL",
      summary:
        "Train a lightweight transformer RM using RewardTrainer, save checkpoints, and log eval accuracy and reward margin.",
    },
    {
      week: "Week 3",
      title: "Bias and robustness diagnostics",
      summary:
        "Measure length correlation, split by prompt type, inspect failure cases, and run best-of-N reranking.",
    },
    {
      week: "Week 4",
      title: "Portfolio write-up",
      summary:
        "Write a README with loss derivation, training setup, evaluation table, failures, and interview talking points.",
    },
  ],
  interviewTopics: [
    {
      title: "Why pairwise loss?",
      summary:
        "Explain why preference data is naturally comparative and how sigmoid(r_chosen - r_rejected) models a human preference probability.",
    },
    {
      title: "What makes RM eval hard?",
      summary:
        "Discuss proxy objectives, held-out leakage, OOD behavior, length bias, reward hacking, and human eval mismatch.",
    },
    {
      title: "RM vs DPO",
      summary:
        "DPO optimizes preferences without an explicit reward model; RM + PPO is more flexible but harder to stabilize.",
    },
    {
      title: "Production risks",
      summary:
        "Know data quality, annotator disagreement, calibration drift, checkpoint selection, reproducibility, and monitoring.",
    },
  ],
  logs: [
    {
      date: "2026-05-26",
      title: "Started reward model foundation plan",
      summary:
        "Already know Transformer basics. Next focus: preference learning, RM loss, training loop, and eval diagnostics.",
    },
  ],
};
