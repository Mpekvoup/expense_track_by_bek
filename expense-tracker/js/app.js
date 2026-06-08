let expenses     = [];
let periodFilter = 'all';
let catFilter    = 'all';

function getFiltered() {
  return filterByCat(filterByPeriod(expenses, periodFilter), catFilter);
}

function render() {
  const periodFiltered = filterByPeriod(expenses, periodFilter);
  renderStats(periodFiltered);
  renderChart(periodFiltered);
  renderList(getFiltered());
}

function handleAdd() {
  const cat    = document.getElementById('f-cat').value;
  const amount = document.getElementById('f-amount').value;
  const date   = document.getElementById('f-date').value || todayStr();
  const desc   = document.getElementById('f-desc').value.trim();

  if (!amount || parseFloat(amount) <= 0) {
    showToast('Введите корректную сумму');
    document.getElementById('f-amount').focus();
    return;
  }

  expenses.unshift(createExpense(cat, amount, date, desc));
  storageSave(expenses);

  document.getElementById('f-amount').value = '';
  document.getElementById('f-desc').value   = '';

  render();
  showToast('Трата добавлена');
}

function handleDelete(id) {
  const numId = parseFloat(id);
  expenses = expenses.filter(e => e.id !== numId);
  storageSave(expenses);
  render();
}

function handleClearAll() {
  if (!expenses.length) return;
  if (!confirm('Удалить все траты?')) return;
  expenses = [];
  storageSave(expenses);
  render();
  showToast('Список очищен');
}

function setPeriod(period, btn) {
  periodFilter = period;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function setCat(cat, btn) {
  catFilter = cat;
  document.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function handleExportCSV() {
  const list = filterByPeriod(expenses, periodFilter);
  if (!list.length) {
    showToast('Нет данных для экспорта');
    return;
  }

  const header = ['Дата', 'Категория', 'Сумма (тенге)', 'Описание'];
  const rows   = list.map(e => [e.date, CAT_LABEL[e.cat] || e.cat, e.amount, e.desc]);
  const csv    = '\uFEFF' + [header, ...rows]
    .map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(','))
    .join('\n');

  const a = document.createElement('a');
  a.href     = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
  a.download = `shygyn_${todayStr()}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('CSV скачан');
}

function bindEvents() {
  document.getElementById('btn-add').addEventListener('click', handleAdd);
  document.getElementById('btn-csv').addEventListener('click', handleExportCSV);
  document.getElementById('btn-clear').addEventListener('click', handleClearAll);

  document.getElementById('f-amount').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleAdd();
  });

  document.getElementById('f-desc').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleAdd();
  });

  document.getElementById('expense-list').addEventListener('click', e => {
    const btn = e.target.closest('.btn-remove');
    if (btn) handleDelete(btn.dataset.id);
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setPeriod(btn.dataset.period, btn));
  });

  document.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => setCat(btn.dataset.cat, btn));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  expenses = storageLoad();
  document.getElementById('f-date').value = todayStr();
  bindEvents();
  render();
});
