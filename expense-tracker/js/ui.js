let pieChart = null;

function renderStats(allPeriod) {
  const total   = totalAmount(allPeriod);
  const count   = allPeriod.length;
  const days    = uniqueDays(allPeriod) || 1;
  const avg     = count ? total / days : 0;
  const grouped = groupByCategory(allPeriod);
  const top     = topCategory(grouped);

  const grid = document.getElementById('stats-grid');
  grid.innerHTML = `
    <div class="stat-card highlight">
      <p class="label">Итого</p>
      <p class="value">${fmtMoney(total)} ₸</p>
      <p class="sub">${count} ${pluralForm(count, 'трата', 'траты', 'трат')}</p>
    </div>
    <div class="stat-card">
      <p class="label">Среднее в день</p>
      <p class="value">${fmtMoney(avg)} ₸</p>
      <p class="sub">${days} ${pluralForm(days, 'день', 'дня', 'дней')}</p>
    </div>
    <div class="stat-card">
      <p class="label">Лидер</p>
      <p class="value" style="font-size: 1.1rem; color: ${top ? CAT_COLOR[top[0]] : 'var(--muted)'}">
        ${top ? CAT_LABEL[top[0]] : '—'}
      </p>
      <p class="sub">${top ? fmtMoney(top[1]) + ' ₸' : 'нет данных'}</p>
    </div>
  `;
}

function renderChart(allPeriod) {
  const canvas   = document.getElementById('pie-canvas');
  const emptyMsg = document.getElementById('chart-empty');
  const legend   = document.getElementById('chart-legend');
  const grouped  = groupByCategory(allPeriod);
  const cats     = Object.keys(grouped);

  if (pieChart) {
    pieChart.destroy();
    pieChart = null;
  }

  if (!cats.length) {
    canvas.style.display = 'none';
    emptyMsg.style.display = 'block';
    legend.innerHTML = '';
    return;
  }

  canvas.style.display = 'block';
  emptyMsg.style.display = 'none';

  const vals   = cats.map(c => grouped[c]);
  const colors = cats.map(c => CAT_COLOR[c] || '#888');
  const total  = vals.reduce((s, v) => s + v, 0);

  pieChart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: cats.map(c => CAT_LABEL[c] || c),
      datasets: [{
        data: vals,
        backgroundColor: colors,
        borderColor: '#f2f4f1',
        borderWidth: 3,
        hoverBorderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${fmtMoney(ctx.parsed)} ₸  ${Math.round(ctx.parsed / total * 100)}%`
          },
          backgroundColor:  '#1a1f18',
          borderColor:      '#dde2db',
          borderWidth:       1,
          titleColor:       '#f2f4f1',
          bodyColor:        '#7ab87c',
          padding:           10,
          cornerRadius:      4
        }
      }
    }
  });

  legend.innerHTML = cats.map((c, i) => `
    <div class="legend-row">
      <span class="legend-dot" style="background:${colors[i]}"></span>
      <span>${CAT_LABEL[c] || c}</span>
      <b>${Math.round(vals[i] / total * 100)}%</b>
    </div>
  `).join('');
}

function renderList(filtered) {
  const container = document.getElementById('expense-list');

  if (!filtered.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            <path d="M8 12h8M12 8v8"/>
          </svg>
        </div>
        <h3>Трат пока нет</h3>
        <p>Добавьте первую трату с помощью формы</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(e => `
    <div class="expense-item">
      <span class="cat-dot" style="background:${CAT_COLOR[e.cat] || '#888'}"></span>
      <div>
        <div class="expense-desc">${escapeHtml(e.desc)}</div>
        <div class="expense-meta">
          <span>${CAT_LABEL[e.cat] || e.cat}</span>
          <span class="dot-sep"></span>
          <span>${fmtDate(e.date)}</span>
        </div>
      </div>
      <div class="expense-amount">${fmtMoney(e.amount)} ₸</div>
      <button class="btn-remove" data-id="${e.id}" aria-label="Удалить трату">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8">
          <line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/>
        </svg>
      </button>
    </div>
  `).join('');
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('visible');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('visible'), 2400);
}
