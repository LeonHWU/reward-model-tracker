const data = window.trackerData;

const statusLabel = {
  done: "完成",
  active: "进行中",
  todo: "未开始",
};

function renderPriorities() {
  const list = document.querySelector("#priority-list");
  list.innerHTML = data.priorities
    .map(
      (item) => `
        <div class="priority-row">
          <strong>${item.stage}</strong>
          <span>${item.content}</span>
          <em>${item.priority}</em>
        </div>
      `,
    )
    .join("");
}

function renderTasks() {
  const list = document.querySelector("#task-list");
  list.innerHTML = data.tasks
    .map(
      (task) => `
        <article class="task-row">
          <div class="stage">${task.stage}</div>
          <div>
            <h3>${task.title}</h3>
            <p>${task.detail}</p>
          </div>
          <div class="priority">${task.priority}</div>
          <div class="progress-cell">
            <div class="progress-label">${task.progress}%</div>
            <div class="progress-track" aria-label="${task.title} 进度">
              <span style="width: ${task.progress}%"></span>
            </div>
          </div>
          <div>
            <span class="status ${task.status}">${statusLabel[task.status]}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderOverallProgress() {
  const values = data.tasks.map((task) => task.progress);
  const average = Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  document.querySelector("#overall-progress").textContent = `${average}%`;
  document.querySelector("#overall-progress-bar").style.width = `${average}%`;
}

renderPriorities();
renderTasks();
renderOverallProgress();
