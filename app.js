const data = window.trackerData;

const statusLabel = {
  done: "Done",
  active: "In progress",
  todo: "Not started",
};

function renderTopics() {
  const list = document.querySelector("#topic-list");
  list.innerHTML = data.topics
    .map(
      (topic) => `
        <article class="topic-row">
          <div>
            <h2 class="topic-title">${topic.title}</h2>
            <p class="topic-goal">${topic.goal}</p>
          </div>
          <p class="topic-why">${topic.why}</p>
          <div class="progress-cell">
            <div class="progress-label">${topic.progress}%</div>
            <div class="progress-track" aria-label="${topic.title} progress">
              <span style="width: ${topic.progress}%"></span>
            </div>
          </div>
          <div>
            <span class="status ${topic.status}">${statusLabel[topic.status]}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderOverallProgress() {
  const values = data.topics.map((topic) => topic.progress);
  const average = Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  document.querySelector("#overall-progress").textContent = `${average}%`;
  document.querySelector("#overall-progress-bar").style.width = `${average}%`;
}

renderTopics();
renderOverallProgress();
