const STORAGE_KEY = 'shygyn_v1';

const CAT_COLOR = {
  food:          '#1a1f18',
  transport:     '#3d8c40',
  entertainment: '#2e6e31',
  subscriptions: '#7ab87c',
  other:         '#b5d1b6'
};

const CAT_LABEL = {
  food:          'Еда',
  transport:     'Транспорт',
  entertainment: 'Развлечения',
  subscriptions: 'Подписки',
  other:         'Прочее'
};

function storageLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

function storageSave(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (_) {
    return false;
  }
}

function createExpense(cat, amount, date, desc) {
  return {
    id:     Date.now() + Math.random(),
    cat,
    amount: parseFloat(amount),
    date,
    desc:   desc || CAT_LABEL[cat] || cat
  };
}

function filterByPeriod(list, period) {
  if (period === 'all') return list;
  const now = new Date();
  return list.filter(e => {
    const d = new Date(e.date + 'T00:00:00');
    if (period === 'week') {
      const from = new Date(now);
      from.setDate(now.getDate() - 7);
      return d >= from;
    }
    if (period === 'month') {
      return d.getMonth() === now.getMonth()
          && d.getFullYear() === now.getFullYear();
    }
    return true;
  });
}

function filterByCat(list, cat) {
  return cat === 'all' ? list : list.filter(e => e.cat === cat);
}

function groupByCategory(list) {
  return list.reduce((acc, e) => {
    acc[e.cat] = (acc[e.cat] || 0) + e.amount;
    return acc;
  }, {});
}

function totalAmount(list) {
  return list.reduce((s, e) => s + e.amount, 0);
}

function uniqueDays(list) {
  return new Set(list.map(e => e.date)).size;
}

function topCategory(grouped) {
  const entries = Object.entries(grouped);
  if (!entries.length) return null;
  return entries.sort((a, b) => b[1] - a[1])[0];
}

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function fmtMoney(n) {
  return new Intl.NumberFormat('ru-KZ', { maximumFractionDigits: 0 }).format(n);
}

function fmtDate(str) {
  const d = new Date(str + 'T00:00:00');
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pluralForm(n, one, few, many) {
  const mod10  = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}
