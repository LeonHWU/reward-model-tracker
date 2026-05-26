window.trackerData = {
  topics: [
    {
      title: "Preference learning basics",
      why: "Understand how human preference pairs become a ranking objective.",
      goal: "Bradley-Terry loss, pairwise ranking, label noise, reward margin.",
      progress: 35,
      status: "active",
    },
    {
      title: "PyTorch reward model training",
      why: "Be able to train and debug an RM without depending on high-level wrappers.",
      goal: "Custom dataset, chosen/rejected batching, scalar reward head, eval loop.",
      progress: 10,
      status: "active",
    },
    {
      title: "Transformers fine-tuning stack",
      why: "Real RM training uses HF models, tokenizers, LoRA, bf16, and checkpoints.",
      goal: "transformers, datasets, PEFT/LoRA, accelerate, checkpoint resume.",
      progress: 0,
      status: "todo",
    },
    {
      title: "Reward model evaluation",
      why: "RM quality is mostly proven through eval, not just training loss.",
      goal: "Pair accuracy, reward margin, length bias, OOD tests, failure cases.",
      progress: 0,
      status: "todo",
    },
    {
      title: "RLHF context",
      why: "Know how the RM is used after training and why reward hacking happens.",
      goal: "SFT, RM, PPO, KL penalty, DPO, best-of-N, reward overoptimization.",
      progress: 0,
      status: "todo",
    },
    {
      title: "Production training habits",
      why: "Company training work needs reproducibility and clean experiment tracking.",
      goal: "Data splits, seeds, logs, configs, runs, artifacts, deployment checks.",
      progress: 0,
      status: "todo",
    },
    {
      title: "Interview explanation",
      why: "Labs interviews require clear explanations of the system and tradeoffs.",
      goal: "Explain RM loss, data pipeline, eval limits, RM vs DPO, production risks.",
      progress: 0,
      status: "todo",
    },
  ],
};
