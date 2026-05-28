# Reward Model / PRM Learning Plan

Source: https://github.com/users/LeonHWU/projects/2/views/1
Exported: 2026-05-28

## Overview

- [Step 1: Transformer and Language Model Basics](https://github.com/LeonHWU/reward-model-tracker/issues/10) — In Progress, 80%
- [Step 2: Preference Learning Core](https://github.com/LeonHWU/reward-model-tracker/issues/9) — In Progress, 25%
- [Step 3: Run a Classic RM / ORM](https://github.com/LeonHWU/reward-model-tracker/issues/8) — Todo, 0%
- [Step 4: Process Reward Model Main Track](https://github.com/LeonHWU/reward-model-tracker/issues/11) — Todo, 0%
- [Step 5: Read Core Papers](https://github.com/LeonHWU/reward-model-tracker/issues/12) — Todo, 0%
- [Engineering: PyTorch + Transformers + TRL](https://github.com/LeonHWU/reward-model-tracker/issues/14) — Todo, 0%
- [Advanced: RLHF / DPO / VLM-based RM](https://github.com/LeonHWU/reward-model-tracker/issues/13) — Todo, 0%

## Step 1: Transformer and Language Model Basics

- Issue: [#10](https://github.com/LeonHWU/reward-model-tracker/issues/10)
- Status: In Progress
- Learning Stage: Step 1
- Priority Level: Foundation
- Progress: 80%

Goal: Confirm the language model foundations needed before RM/PRM work.

## Transformer Architecture
- [x] Explain token embeddings and why discrete tokens become vectors.
- [x] Explain positional information: absolute position embeddings and RoPE at a high level.
- [x] Explain self-attention in one sentence.
- [x] Explain what Q, K, and V represent.
- [x] Explain why attention uses dot products and softmax.
- [x] Explain multi-head attention and why multiple heads are useful.
- [x] Explain residual connections.
- [x] Explain layer normalization.
- [x] Explain the FFN/MLP block inside a Transformer layer.
- [x] Explain why decoder-only Transformers are used for autoregressive language modeling.

## Language Modeling Objective
- [ ] Explain next-token prediction as vocabulary classification.
- [ ] Write the cross-entropy loss for next-token prediction.
- [ ] Explain teacher forcing during LM training.
- [ ] Explain why the LM head outputs vocabulary logits.
- [ ] Explain how logits become probabilities through softmax.

## Pretraining, SFT, and RM
- [ ] Explain what pretraining learns.
- [ ] Explain what supervised fine-tuning learns.
- [ ] Explain why SFT is usually done before reward modeling.
- [ ] Explain why a reward model can reuse a pretrained/SFT language model backbone.
- [ ] Explain the difference between an LM head and a reward head.

## Reward Model Connection
- [ ] Explain what hidden states are.
- [ ] Explain why reward models often use the final valid token hidden state.
- [ ] Explain why padding makes "last token" ambiguous.
- [ ] Explain what an attention mask does.
- [ ] Explain how a scalar reward head maps hidden state to one score.

Completion standard: explain why a reward model can be built from a language model and how the LM head is replaced by a scalar reward head.

Initial progress: 80%.


## Notes

Write free-form notes here while studying.

## Key Concepts

- 

## Open Questions

- 

## Resources

- 

## Completion Summary

- What I learned:
- What I can explain:
- What still feels weak:

## Step 2: Preference Learning Core

- Issue: [#9](https://github.com/LeonHWU/reward-model-tracker/issues/9)
- Status: In Progress
- Learning Stage: Step 2
- Priority Level: Highest
- Progress: 25%

Goal: Understand the math and data assumptions that turn preference pairs into a reward model.

## Preference Data
- [ ] Define a prompt, chosen response, and rejected response.
- [ ] Explain how human annotators create chosen/rejected pairs.
- [ ] Explain how model-generated candidates can become preference pairs.
- [ ] Explain why preference data is relative rather than absolute.
- [ ] Explain how label noise appears in preference data.
- [ ] Explain annotator disagreement and why it matters.
- [ ] Explain why prompt leakage across train/eval splits is dangerous.

## Bradley-Terry Model
- [ ] State the Bradley-Terry preference probability.
- [ ] Explain why P(chosen preferred) depends on r_chosen - r_rejected.
- [ ] Derive the loss: -log sigmoid(r_chosen - r_rejected).
- [ ] Explain what happens when r_chosen is much larger than r_rejected.
- [ ] Explain what happens when r_chosen equals r_rejected.
- [ ] Explain the reward margin.
- [ ] Explain why this is a ranking loss, not ordinary binary classification.

## Reward Model Architecture
- [ ] Explain how a Causal LM backbone becomes a reward model.
- [ ] Explain why num_labels=1 creates a scalar reward output.
- [ ] Explain the difference between sequence-level and token-level reward outputs.
- [ ] Explain final-token pooling.
- [ ] Explain last non-pad token pooling.
- [ ] Explain why truncation can corrupt reward labels.

## Failure Modes
- [ ] Explain length bias.
- [ ] Explain verbosity bias.
- [ ] Explain style bias.
- [ ] Explain reward hacking.
- [ ] Explain why held-out pair accuracy is not enough.

Completion standard: write the Bradley-Terry loss by hand and explain the data, architecture, and failure modes behind it.

Initial progress: 25%.


## Notes

Write free-form notes here while studying.

## Key Concepts

- 

## Open Questions

- 

## Resources

- 

## Completion Summary

- What I learned:
- What I can explain:
- What still feels weak:

## Step 3: Run a Classic RM / ORM

- Issue: [#8](https://github.com/LeonHWU/reward-model-tracker/issues/8)
- Status: Todo
- Learning Stage: Step 3
- Priority Level: Highest
- Progress: 0%

Goal: Build training intuition by running a simple outcome reward model end to end.

## Environment
- [ ] Set up Python environment.
- [ ] Install PyTorch.
- [ ] Install transformers.
- [ ] Install datasets.
- [ ] Install TRL.
- [ ] Install accelerate.
- [ ] Confirm GPU or CPU fallback works.

## Dataset
- [ ] Pick a small preference dataset.
- [ ] Inspect raw examples.
- [ ] Convert each example into prompt/chosen/rejected format.
- [ ] Create train/eval split.
- [ ] Verify no duplicated prompts leak across splits.
- [ ] Tokenize chosen and rejected responses consistently.
- [ ] Decide max sequence length.
- [ ] Check truncation examples manually.

## Model
- [ ] Load AutoModelForSequenceClassification with num_labels=1.
- [ ] Load the matching tokenizer.
- [ ] Set pad token if the tokenizer does not define one.
- [ ] Confirm the model outputs one scalar per sequence.
- [ ] Confirm which hidden state is used for the reward.

## Training With TRL
- [ ] Configure RewardTrainer.
- [ ] Configure batch size.
- [ ] Configure gradient accumulation.
- [ ] Configure learning rate.
- [ ] Configure evaluation frequency.
- [ ] Run a smoke test on a tiny subset.
- [ ] Run one full small training job.
- [ ] Save checkpoints.
- [ ] Save training logs.

## Evaluation
- [ ] Compute pairwise accuracy.
- [ ] Compute average reward margin.
- [ ] Plot or inspect chosen reward distribution.
- [ ] Plot or inspect rejected reward distribution.
- [ ] Check whether longer responses receive higher rewards.
- [ ] Inspect at least 20 failure cases manually.

Completion standard: produce one runnable ORM training experiment with metrics, logs, and failure examples.

Initial progress: 0%.


## Notes

Write free-form notes here while studying.

## Key Concepts

- 

## Open Questions

- 

## Resources

- 

## Completion Summary

- What I learned:
- What I can explain:
- What still feels weak:

## Step 4: Process Reward Model Main Track

- Issue: [#11](https://github.com/LeonHWU/reward-model-tracker/issues/11)
- Status: Todo
- Learning Stage: Step 4
- Priority Level: Main Track
- Progress: 0%

Goal: Understand how process reward models differ from outcome reward models and how step-level supervision works.

## ORM vs PRM
- [ ] Define outcome reward model.
- [ ] Define process reward model.
- [ ] Explain why PRM scores intermediate reasoning steps.
- [ ] Explain why PRM can help search and verification.
- [ ] Explain when ORM is easier than PRM.
- [ ] Explain when PRM is more useful than ORM.

## Step Segmentation
- [ ] Define what counts as a reasoning step.
- [ ] Compare sentence-level, paragraph-level, and explicit step-level segmentation.
- [ ] Explain why inconsistent step boundaries create noisy labels.
- [ ] Design a step delimiter format.
- [ ] Create examples of good and bad step segmentation.

## Step Labeling
- [ ] Understand PRM800K human step labeling.
- [ ] Understand correct/incorrect/neutral labels.
- [ ] Understand Monte Carlo rollout labeling.
- [ ] Explain how future rollouts can estimate current step quality.
- [ ] Compare classification labels vs regression targets.
- [ ] Decide which label type to start with.

## PRM Loss
- [ ] Define per-step classification loss.
- [ ] Define per-step regression loss.
- [ ] Explain how step masks avoid training on padding steps.
- [ ] Explain how loss aggregation across steps works.
- [ ] Explain how PRM loss differs from Bradley-Terry pairwise loss.

## Score Aggregation
- [ ] Understand min aggregation.
- [ ] Understand product aggregation.
- [ ] Understand last-step aggregation.
- [ ] Understand mean aggregation.
- [ ] Explain how aggregation affects search.
- [ ] Explain why one bad step can dominate a trajectory score.

Completion standard: explain how step scores are labeled, trained, masked, and aggregated into a trajectory score.

Initial progress: 0%.


## Notes

Write free-form notes here while studying.

## Key Concepts

- 

## Open Questions

- 

## Resources

- 

## Completion Summary

- What I learned:
- What I can explain:
- What still feels weak:

## Step 5: Read Core Papers

- Issue: [#12](https://github.com/LeonHWU/reward-model-tracker/issues/12)
- Status: Todo
- Learning Stage: Step 5
- Priority Level: Main Track
- Progress: 0%

Goal: Read Web-Shepherd, Math-Shepherd, and WebRewardBench deeply enough to restate the methods.

## Web-Shepherd
- [ ] Identify the problem Web-Shepherd is solving.
- [ ] Summarize its PRM training data construction.
- [ ] Summarize its labeling method.
- [ ] Summarize its model training objective.
- [ ] Summarize how it uses WebRewardBench.
- [ ] Extract implementation details relevant to this repo.
- [ ] Write a one-page paper summary.

## WebRewardBench
- [ ] Understand benchmark task types.
- [ ] Understand what inputs the benchmark provides.
- [ ] Understand what outputs are evaluated.
- [ ] Understand the evaluation metric.
- [ ] Identify how to adapt a local PRM to the benchmark format.
- [ ] List limitations of the benchmark.

## Math-Shepherd
- [ ] Identify the problem Math-Shepherd is solving.
- [ ] Understand its process supervision setup.
- [ ] Understand its Monte Carlo rollout labeling.
- [ ] Compare its labeling with Web-Shepherd.
- [ ] Compare its training target with Web-Shepherd.
- [ ] Write a one-page paper summary.

## Synthesis
- [ ] Create a comparison table: Web-Shepherd vs Math-Shepherd.
- [ ] List which method to implement first.
- [ ] List open questions before implementation.
- [ ] Connect the paper methods to prompt-engineering iteration.

Completion standard: write method summaries and implementation checklists for the core papers and benchmark.

Initial progress: 0%.


## Notes

Write free-form notes here while studying.

## Key Concepts

- 

## Open Questions

- 

## Resources

- 

## Completion Summary

- What I learned:
- What I can explain:
- What still feels weak:

## Engineering: PyTorch + Transformers + TRL

- Issue: [#14](https://github.com/LeonHWU/reward-model-tracker/issues/14)
- Status: Todo
- Learning Stage: Engineering
- Priority Level: Throughout
- Progress: 0%

Goal: Build the engineering skills needed for real RM/PRM training.

## Training Infrastructure
- [ ] Create a reproducible training entrypoint.
- [ ] Add config files for model, data, and training arguments.
- [ ] Log all hyperparameters.
- [ ] Save checkpoints.
- [ ] Resume from checkpoints.
- [ ] Set random seeds.
- [ ] Track package versions.

## PyTorch / Transformers
- [ ] Write a custom Dataset for preference pairs.
- [ ] Write a custom Dataset for step-level PRM examples.
- [ ] Write or inspect a data collator.
- [ ] Handle padding correctly.
- [ ] Handle attention masks correctly.
- [ ] Handle truncation correctly.
- [ ] Validate tensor shapes in a batch.

## TRL RewardTrainer
- [ ] Run RewardTrainer on a tiny dataset.
- [ ] Run RewardTrainer on a real small dataset.
- [ ] Inspect chosen/rejected tensors.
- [ ] Inspect model outputs.
- [ ] Confirm loss decreases on a tiny overfit test.
- [ ] Save eval metrics.

## PRM Pipeline
- [ ] Define step-level input format.
- [ ] Define step-level labels.
- [ ] Define step masks.
- [ ] Implement step-level loss.
- [ ] Implement trajectory aggregation.
- [ ] Write unit tests for aggregation.
- [ ] Run a tiny PRM overfit test.

## Evaluation and Reporting
- [ ] Compute pairwise accuracy for ORM.
- [ ] Compute step accuracy for PRM.
- [ ] Compute trajectory-level metrics.
- [ ] Measure length bias.
- [ ] Inspect failure cases.
- [ ] Produce a short experiment report.
- [ ] Connect outputs to WebRewardBench format.

Completion standard: produce reproducible experiment code, configs, logs, metrics, and a short report.

Initial progress: 0%.


## Notes

Write free-form notes here while studying.

## Key Concepts

- 

## Open Questions

- 

## Resources

- 

## Completion Summary

- What I learned:
- What I can explain:
- What still feels weak:

## Advanced: RLHF / DPO / VLM-based RM

- Issue: [#13](https://github.com/LeonHWU/reward-model-tracker/issues/13)
- Status: Todo
- Learning Stage: Advanced
- Priority Level: Can Wait
- Progress: 0%

Goal: Add broader alignment-training context after the PRM flow works.

## RLHF / PPO
- [ ] Explain the full RLHF pipeline: pretraining, SFT, RM, PPO.
- [ ] Explain how the reward model provides the reward signal.
- [ ] Explain the role of the reference model.
- [ ] Explain KL penalty at a high level.
- [ ] Explain why PPO can overoptimize the reward model.
- [ ] Explain reward hacking in the PPO setting.

## DPO
- [ ] Explain what DPO optimizes.
- [ ] Explain why DPO can avoid training an explicit reward model.
- [ ] Explain how DPO still relies on preference data.
- [ ] Compare DPO with RM + PPO.
- [ ] Explain why DPO does not replace PRM for step-level verification.

## VLM-based Reward Models
- [ ] Explain what changes when inputs include images or web screenshots.
- [ ] Explain why visual grounding matters for web reward models.
- [ ] Identify examples where text-only RM is insufficient.
- [ ] List extra evaluation risks for VLM-based RM.

Completion standard: explain how RLHF, DPO, and VLM-based reward models relate to the PRM main track.

Initial progress: 0%.


## Notes

Write free-form notes here while studying.

## Key Concepts

- 

## Open Questions

- 

## Resources

- 

## Completion Summary

- What I learned:
- What I can explain:
- What still feels weak:
