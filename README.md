# Reward Model Learning Tracker

A small Docker-deployable static website for tracking reward model learning,
experiments, and interview readiness.

## Run Locally

Open `index.html` directly, or run it with Docker:

```bash
docker build -t reward-model-tracker .
docker run --rm -p 8080:80 reward-model-tracker
```

Then visit:

```text
http://localhost:8080
```

## Update Progress

Edit `data.js`:

- `roadmap`: learning blocks and progress percentages
- `milestones`: portfolio project milestones
- `interviewTopics`: topics to prepare for labs interviews
- `logs`: weekly learning notes

## Suggested Repo Description

Dockerized learning tracker for reward model training, RLHF foundations, eval
diagnostics, and interview preparation.
