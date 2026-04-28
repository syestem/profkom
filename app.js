// Data
const monthlyData = [
  { type: 'gym', typeLabel: 'Зал', month: 'Ноябрь', year: 2025, issued: 60, quota: 120, fill: 50.0 },
  { type: 'gym', typeLabel: 'Зал', month: 'Декабрь', year: 2025, issued: 52, quota: 120, fill: 43.33 },
  { type: 'gym', typeLabel: 'Зал', month: 'Январь', year: 2026, issued: 36, quota: 120, fill: 30.0 },
  { type: 'gym', typeLabel: 'Зал', month: 'Февраль', year: 2026, issued: 39, quota: 120, fill: 32.5 },
  { type: 'gym', typeLabel: 'Зал', month: 'Март', year: 2026, issued: 57, quota: 120, fill: 47.5 },
  { type: 'gym', typeLabel: 'Зал', month: 'Апрель', year: 2026, issued: 45, quota: 120, fill: 37.5 },
  { type: 'gym', typeLabel: 'Зал', month: 'Май', year: 2026, issued: 41, quota: 118, fill: 34.75 },
  { type: 'pool', typeLabel: 'Бассейн', month: 'Ноябрь', year: 2025, issued: 70, quota: 180, fill: 38.89 },
  { type: 'pool', typeLabel: 'Бассейн', month: 'Декабрь', year: 2025, issued: 58, quota: 180, fill: 32.22 },
  { type: 'pool', typeLabel: 'Бассейн', month: 'Январь', year: 2026, issued: 33, quota: 180, fill: 18.33 },
  { type: 'pool', typeLabel: 'Бассейн', month: 'Февраль', year: 2026, issued: 40, quota: 180, fill: 22.22 },
  { type: 'pool', typeLabel: 'Бассейн', month: 'Март', year: 2026, issued: 51, quota: 180, fill: 28.33 },
  { type: 'pool', typeLabel: 'Бассейн', month: 'Апрель', year: 2026, issued: 56, quota: 180, fill: 31.11 },
  { type: 'pool', typeLabel: 'Бассейн', month: 'Май', year: 2026, issued: 57, quota: 180, fill: 31.67 }
];

const totalData = [
  { type: 'gym', typeLabel: 'Зал', month: 'Итого', year: 2026, issued: 330, quota: 838, fill: 39.38 },
  { type: 'pool', typeLabel: 'Бассейн', month: 'Итого', year: 2026, issued: 365, quota: 1260, fill: 28.97 },
  { type: 'all', typeLabel: 'Все', month: 'Итого', year: 2026, issued: 695, quota: 2098, fill: 33.13 }
];

const facultyData = [
  { type: 'pool', faculty: 'Иностранные студенты', month: 'Ноябрь', count: 0 },
  { type: 'pool', faculty: 'Иностранные студенты', month: 'Декабрь', count: 3 },
  { type: 'pool', faculty: 'Иностранные студенты', month: 'Январь', count: 3 },
  { type: 'pool', faculty: 'Иностранные студенты', month: 'Февраль', count: 3 },
  { type: 'pool', faculty: 'Иностранные студенты', month: 'Март', count: 1 },
  { type: 'pool', faculty: 'Иностранные студенты', month: 'Апрель', count: 1 },
  { type: 'pool', faculty: 'Иностранные студенты', month: 'Май', count: 1 },
  { type: 'pool', faculty: 'ИЭФ', month: 'Ноябрь', count: 7 },
  { type: 'pool', faculty: 'ИЭФ', month: 'Декабрь', count: 3 },
  { type: 'pool', faculty: 'ИЭФ', month: 'Январь', count: 3 },
  { type: 'pool', faculty: 'ИЭФ', month: 'Февраль', count: 3 },
  { type: 'pool', faculty: 'ИЭФ', month: 'Март', count: 3 },
  { type: 'pool', faculty: 'ИЭФ', month: 'Апрель', count: 7 },
  { type: 'pool', faculty: 'ИЭФ', month: 'Май', count: 6 },
  { type: 'pool', faculty: 'МТ', month: 'Ноябрь', count: 13 },
  { type: 'pool', faculty: 'МТ', month: 'Декабрь', count: 13 },
  { type: 'pool', faculty: 'МТ', month: 'Январь', count: 13 },
  { type: 'pool', faculty: 'МТ', month: 'Февраль', count: 15 },
  { type: 'pool', faculty: 'МТ', month: 'Март', count: 9 },
  { type: 'pool', faculty: 'МТ', month: 'Апрель', count: 0 },
  { type: 'pool', faculty: 'МТ', month: 'Май', count: 6 },
  { type: 'pool', faculty: 'МЭиП', month: 'Ноябрь', count: 4 },
  { type: 'pool', faculty: 'МЭиП', month: 'Декабрь', count: 4 },
  { type: 'pool', faculty: 'МЭиП', month: 'Январь', count: 2 },
  { type: 'pool', faculty: 'МЭиП', month: 'Февраль', count: 0 },
  { type: 'pool', faculty: 'МЭиП', month: 'Март', count: 4 },
  { type: 'pool', faculty: 'МЭиП', month: 'Апрель', count: 3 },
  { type: 'pool', faculty: 'МЭиП', month: 'Май', count: 3 },
  { type: 'pool', faculty: 'ПГС', month: 'Ноябрь', count: 4 },
  { type: 'pool', faculty: 'ПГС', month: 'Декабрь', count: 3 },
  { type: 'pool', faculty: 'ПГС', month: 'Январь', count: 0 },
  { type: 'pool', faculty: 'ПГС', month: 'Февраль', count: 0 },
  { type: 'pool', faculty: 'ПГС', month: 'Март', count: 1 },
  { type: 'pool', faculty: 'ПГС', month: 'Апрель', count: 3 },
  { type: 'pool', faculty: 'ПГС', month: 'Май', count: 3 },
  { type: 'pool', faculty: 'ПУСК', month: 'Ноябрь', count: 2 },
  { type: 'pool', faculty: 'ПУСК', month: 'Декабрь', count: 6 },
  { type: 'pool', faculty: 'ПУСК', month: 'Январь', count: 2 },
  { type: 'pool', faculty: 'ПУСК', month: 'Февраль', count: 0 },
  { type: 'pool', faculty: 'ПУСК', month: 'Март', count: 4 },
  { type: 'pool', faculty: 'ПУСК', month: 'Апрель', count: 5 },
  { type: 'pool', faculty: 'ПУСК', month: 'Май', count: 5 },
  { type: 'pool', faculty: 'Студсовет', month: 'Ноябрь', count: 0 },
  { type: 'pool', faculty: 'Студсовет', month: 'Декабрь', count: 0 },
  { type: 'pool', faculty: 'Студсовет', month: 'Январь', count: 0 },
  { type: 'pool', faculty: 'Студсовет', month: 'Февраль', count: 0 },
  { type: 'pool', faculty: 'Студсовет', month: 'Март', count: 0 },
  { type: 'pool', faculty: 'Студсовет', month: 'Апрель', count: 0 },
  { type: 'pool', faculty: 'Студсовет', month: 'Май', count: 1 },
  { type: 'pool', faculty: 'УПП', month: 'Ноябрь', count: 9 },
  { type: 'pool', faculty: 'УПП', month: 'Декабрь', count: 6 },
  { type: 'pool', faculty: 'УПП', month: 'Январь', count: 4 },
  { type: 'pool', faculty: 'УПП', month: 'Февраль', count: 2 },
  { type: 'pool', faculty: 'УПП', month: 'Март', count: 4 },
  { type: 'pool', faculty: 'УПП', month: 'Апрель', count: 9 },
  { type: 'pool', faculty: 'УПП', month: 'Май', count: 9 },
  { type: 'pool', faculty: 'УТТК', month: 'Ноябрь', count: 9 },
  { type: 'pool', faculty: 'УТТК', month: 'Декабрь', count: 3 },
  { type: 'pool', faculty: 'УТТК', month: 'Январь', count: 5 },
  { type: 'pool', faculty: 'УТТК', month: 'Февраль', count: 2 },
  { type: 'pool', faculty: 'УТТК', month: 'Март', count: 6 },
  { type: 'pool', faculty: 'УТТК', month: 'Апрель', count: 9 },
  { type: 'pool', faculty: 'УТТК', month: 'Май', count: 4 },
  { type: 'pool', faculty: 'ФБИ', month: 'Ноябрь', count: 15 },
  { type: 'pool', faculty: 'ФБИ', month: 'Декабрь', count: 15 },
  { type: 'pool', faculty: 'ФБИ', month: 'Январь', count: 0 },
  { type: 'pool', faculty: 'ФБИ', month: 'Февраль', count: 15 },
  { type: 'pool', faculty: 'ФБИ', month: 'Март', count: 15 },
  { type: 'pool', faculty: 'ФБИ', month: 'Апрель', count: 14 },
  { type: 'pool', faculty: 'ФБИ', month: 'Май', count: 15 },
  { type: 'pool', faculty: 'ФТС', month: 'Ноябрь', count: 7 },
  { type: 'pool', faculty: 'ФТС', month: 'Декабрь', count: 2 },
  { type: 'pool', faculty: 'ФТС', month: 'Январь', count: 1 },
  { type: 'pool', faculty: 'ФТС', month: 'Февраль', count: 0 },
  { type: 'pool', faculty: 'ФТС', month: 'Март', count: 4 },
  { type: 'pool', faculty: 'ФТС', month: 'Апрель', count: 5 },
  { type: 'pool', faculty: 'ФТС', month: 'Май', count: 4 },
  { type: 'gym', faculty: 'Дополнительный список', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'Иностранные студенты', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'Иностранные студенты', month: 'Декабрь', count: 7 },
  { type: 'gym', faculty: 'Иностранные студенты', month: 'Январь', count: 7 },
  { type: 'gym', faculty: 'Иностранные студенты', month: 'Февраль', count: 5 },
  { type: 'gym', faculty: 'Иностранные студенты', month: 'Март', count: 7 },
  { type: 'gym', faculty: 'Иностранные студенты', month: 'Апрель', count: 5 },
  { type: 'gym', faculty: 'Иностранные студенты', month: 'Май', count: 5 },
  { type: 'gym', faculty: 'ИЭФ', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'ИЭФ', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'ИЭФ', month: 'Январь', count: 5 },
  { type: 'gym', faculty: 'ИЭФ', month: 'Февраль', count: 5 },
  { type: 'gym', faculty: 'ИЭФ', month: 'Март', count: 5 },
  { type: 'gym', faculty: 'ИЭФ', month: 'Апрель', count: 5 },
  { type: 'gym', faculty: 'ИЭФ', month: 'Май', count: 5 },
  { type: 'gym', faculty: 'МТ', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'МТ', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'МТ', month: 'Январь', count: 5 },
  { type: 'gym', faculty: 'МТ', month: 'Февраль', count: 5 },
  { type: 'gym', faculty: 'МТ', month: 'Март', count: 4 },
  { type: 'gym', faculty: 'МТ', month: 'Апрель', count: 0 },
  { type: 'gym', faculty: 'МТ', month: 'Май', count: 4 },
  { type: 'gym', faculty: 'МЭиП', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'МЭиП', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'МЭиП', month: 'Январь', count: 5 },
  { type: 'gym', faculty: 'МЭиП', month: 'Февраль', count: 0 },
  { type: 'gym', faculty: 'МЭиП', month: 'Март', count: 5 },
  { type: 'gym', faculty: 'МЭиП', month: 'Апрель', count: 2 },
  { type: 'gym', faculty: 'МЭиП', month: 'Май', count: 3 },
  { type: 'gym', faculty: 'ПГС', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'ПГС', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'ПГС', month: 'Январь', count: 4 },
  { type: 'gym', faculty: 'ПГС', month: 'Февраль', count: 1 },
  { type: 'gym', faculty: 'ПГС', month: 'Март', count: 5 },
  { type: 'gym', faculty: 'ПГС', month: 'Апрель', count: 5 },
  { type: 'gym', faculty: 'ПГС', month: 'Май', count: 5 },
  { type: 'gym', faculty: 'ПУСК', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'ПУСК', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'ПУСК', month: 'Январь', count: 1 },
  { type: 'gym', faculty: 'ПУСК', month: 'Февраль', count: 3 },
  { type: 'gym', faculty: 'ПУСК', month: 'Март', count: 5 },
  { type: 'gym', faculty: 'ПУСК', month: 'Апрель', count: 2 },
  { type: 'gym', faculty: 'ПУСК', month: 'Май', count: 0 },
  { type: 'gym', faculty: 'Студсовет', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'Студсовет', month: 'Декабрь', count: 0 },
  { type: 'gym', faculty: 'Студсовет', month: 'Январь', count: 0 },
  { type: 'gym', faculty: 'Студсовет', month: 'Февраль', count: 6 },
  { type: 'gym', faculty: 'Студсовет', month: 'Март', count: 7 },
  { type: 'gym', faculty: 'Студсовет', month: 'Апрель', count: 5 },
  { type: 'gym', faculty: 'Студсовет', month: 'Май', count: 2 },
  { type: 'gym', faculty: 'УПП', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'УПП', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'УПП', month: 'Январь', count: 3 },
  { type: 'gym', faculty: 'УПП', month: 'Февраль', count: 5 },
  { type: 'gym', faculty: 'УПП', month: 'Март', count: 4 },
  { type: 'gym', faculty: 'УПП', month: 'Апрель', count: 5 },
  { type: 'gym', faculty: 'УПП', month: 'Май', count: 5 },
  { type: 'gym', faculty: 'УТТК', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'УТТК', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'УТТК', month: 'Январь', count: 1 },
  { type: 'gym', faculty: 'УТТК', month: 'Февраль', count: 4 },
  { type: 'gym', faculty: 'УТТК', month: 'Март', count: 5 },
  { type: 'gym', faculty: 'УТТК', month: 'Апрель', count: 5 },
  { type: 'gym', faculty: 'УТТК', month: 'Май', count: 2 },
  { type: 'gym', faculty: 'ФБИ', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'ФБИ', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'ФБИ', month: 'Январь', count: 0 },
  { type: 'gym', faculty: 'ФБИ', month: 'Февраль', count: 5 },
  { type: 'gym', faculty: 'ФБИ', month: 'Март', count: 5 },
  { type: 'gym', faculty: 'ФБИ', month: 'Апрель', count: 5 },
  { type: 'gym', faculty: 'ФБИ', month: 'Май', count: 5 },
  { type: 'gym', faculty: 'ФТС', month: 'Ноябрь', count: 5 },
  { type: 'gym', faculty: 'ФТС', month: 'Декабрь', count: 5 },
  { type: 'gym', faculty: 'ФТС', month: 'Январь', count: 5 },
  { type: 'gym', faculty: 'ФТС', month: 'Февраль', count: 0 },
  { type: 'gym', faculty: 'ФТС', month: 'Март', count: 5 },
  { type: 'gym', faculty: 'ФТС', month: 'Апрель', count: 6 },
  { type: 'gym', faculty: 'ФТС', month: 'Май', count: 5 }
];

// Constants
const monthOrder = ['Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Итого'];
const labels = monthOrder.slice(0, 7);
const facultyList = Array.from(new Set(facultyData.map((row) => row.faculty))).sort((a, b) => a.localeCompare(b, 'ru'));

// DOM
const typeButtons = Array.from(document.querySelectorAll('[data-type-filter]'));
const monthFilter = document.getElementById('monthFilter');
const tableSearch = document.getElementById('tableSearch');
const resetFilters = document.getElementById('resetFilters');
const tableStatus = document.getElementById('tableStatus');
const tableBody = document.getElementById('reportTableBody');
const sortMetric = document.getElementById('sortMetric');
const sortDirection = document.getElementById('sortDirection');
const themeToggle = document.getElementById('themeToggle');
const sortHeaderButtons = Array.from(document.querySelectorAll('[data-sort-column]'));
const sortIndicators = Array.from(document.querySelectorAll('[data-sort-indicator]'));
const facultySelect = document.getElementById('facultySelect');
const facultyTypeButtons = Array.from(document.querySelectorAll('[data-faculty-type]'));
const facultySummary = document.getElementById('facultySummary');
const facultyTableBody = document.getElementById('facultyTableBody');
const facultyChartSubtitle = document.getElementById('facultyChartSubtitle');
const stickyFilters = Array.from(document.querySelectorAll('.sticky-filters'));
const reportSections = Array.from(document.querySelectorAll('[data-section]'));
const sectionNavLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
const backToTop = document.getElementById('backToTop');
const loadingOverlay = document.getElementById('loadingOverlay');
const loadingSubtitle = document.getElementById('loadingSubtitle');
const loadingStepData = document.getElementById('loadingStepData');
const loadingStepCharts = document.getElementById('loadingStepCharts');
const loadingStepDone = document.getElementById('loadingStepDone');
const readingProgressBar = document.getElementById('readingProgressBar');

// State
let activeType = 'all';
let sortDir = 'desc';
let issuedChart;
let fillChart;
let shareChart;
let facultyChart;
let activeFacultyType = 'all';

// Helpers
const formatPercent = (value) => `${value.toFixed(2)}%`;
const getTypeClass = (type) => ({ gym: 'type-gym', pool: 'type-pool', all: 'type-all' }[type]);
const getFillClass = (type) => ({ gym: '', pool: ' pool', all: ' all' }[type]);
const getMonthIndex = (month) => monthOrder.indexOf(month);
const isDarkTheme = () => document.body.dataset.theme === 'dark';

const applyThemeOnly = (theme) => {
  document.body.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? 'Светлая тема' : 'Темная тема';
  localStorage.setItem('komitet-report-theme', theme);
};

const setLoadingState = (step) => {
  const states = {
    data: 'Подготавливаем локальные данные отчета...',
    charts: 'Строим диаграммы и подготавливаем интерфейс...',
    done: 'Отчет готов.'
  };

  loadingSubtitle.textContent = states[step] || 'Подготавливаем статистику и визуализации...';
  loadingStepData.classList.toggle('is-active', step === 'data');
  loadingStepData.classList.toggle('is-done', step === 'charts' || step === 'done');
  loadingStepCharts.classList.toggle('is-active', step === 'charts');
  loadingStepCharts.classList.toggle('is-done', step === 'done');
  loadingStepDone.classList.toggle('is-active', step === 'done');
};

// Filtering and sorting
const rowMatchesMonth = (row) => {
  const selectedMonth = monthFilter.value;
  if (selectedMonth === 'all') return true;
  return row.month === selectedMonth;
};

const rowMatchesType = (row) => {
  if (activeType === 'all') return true;
  if (activeType === 'total') return row.month === 'Итого';
  return row.type === activeType;
};

const rowMatchesSearch = (row) => {
  const query = tableSearch.value.trim().toLowerCase();
  if (!query) return true;
  return `${row.typeLabel} ${row.month}`.toLowerCase().includes(query);
};

const sortRows = (rows) => {
  const metric = sortMetric.value;
  return [...rows].sort((a, b) => {
    if (metric === 'default') return getMonthIndex(a.month) - getMonthIndex(b.month);
    if (metric === 'type') {
      const direction = sortDir === 'asc' ? 1 : -1;
      const diff = a.typeLabel.localeCompare(b.typeLabel, 'ru') * direction;
      return diff !== 0 ? diff : getMonthIndex(a.month) - getMonthIndex(b.month);
    }
    if (metric === 'month') {
      const direction = sortDir === 'asc' ? 1 : -1;
      return (getMonthIndex(a.month) - getMonthIndex(b.month)) * direction;
    }
    const direction = sortDir === 'asc' ? 1 : -1;
    const diff = (a[metric] - b[metric]) * direction;
    return diff !== 0 ? diff : getMonthIndex(a.month) - getMonthIndex(b.month);
  });
};

const updateSortIndicators = () => {
  sortIndicators.forEach((indicator) => {
    const key = indicator.dataset.sortIndicator;
    indicator.textContent = sortMetric.value === key ? (sortDir === 'asc' ? '↑' : '↓') : '';
  });
};

const rowTemplate = (row, isTotal = false) => `
  <tr class="${isTotal ? 'total-row' : 'data-row'}">
    <td><span class="type-pill ${getTypeClass(row.type)}">${row.typeLabel}</span></td>
    <td>${row.month}${row.month !== 'Итого' ? ` ${row.year}` : ''}</td>
    <td class="num">${row.issued}</td>
    <td class="num">${row.quota}</td>
    <td class="fill-cell">
      <div class="fill-meta"><span>${row.issued} из ${row.quota}</span><strong class="num">${formatPercent(row.fill)}</strong></div>
      <div class="fill-bar${getFillClass(row.type)}"><span style="width: ${row.fill}%;"></span></div>
    </td>
  </tr>`;

const sectionTemplate = (title, rows, isTotalSection = false) => {
  if (!rows.length) return '';
  return `
    <tr class="group-row"><td colspan="5">${title}</td></tr>
    ${rows.map((row) => rowTemplate(row, isTotalSection || row.month === 'Итого')).join('')}`;
};

const updateStatus = (visibleCount) => {
  const typeMap = { all: 'все типы', gym: 'зал', pool: 'бассейн', total: 'только итоги' };
  const monthMap = { all: 'все месяцы', Ноябрь: 'ноябрь 2025', Декабрь: 'декабрь 2025', Январь: 'январь 2026', Февраль: 'февраль 2026', Март: 'март 2026', Апрель: 'апрель 2026', Май: 'май 2026', Итого: 'итоги' };
  const sortMap = { default: 'по учебному году', type: 'по типу', month: 'по месяцу', issued: 'по выдано', quota: 'по квоте', fill: 'по заполнению' };
  const parts = [
    `Показано строк: ${visibleCount}`,
    `тип: ${typeMap[activeType]}`,
    `месяц: ${monthMap[monthFilter.value]}`,
    `сортировка: ${sortMap[sortMetric.value]} (${sortDir === 'asc' ? 'по возрастанию' : 'по убыванию'})`
  ];
  const query = tableSearch.value.trim();
  if (query) parts.push(`поиск: «${query}»`);
  tableStatus.textContent = parts.join(' | ');
};

// Main report rendering
const renderTable = () => {
  const filteredMonthly = monthlyData.filter((row) => rowMatchesType(row) && rowMatchesMonth(row) && rowMatchesSearch(row));
  const filteredTotals = totalData.filter((row) => rowMatchesType(row) && rowMatchesMonth(row) && rowMatchesSearch(row));
  let html = '';
  if (activeType === 'all') {
    html += sectionTemplate('Тренажерный зал', sortRows(filteredMonthly.filter((row) => row.type === 'gym')));
    html += sectionTemplate('Бассейн', sortRows(filteredMonthly.filter((row) => row.type === 'pool')));
    html += sectionTemplate('Общий итог', filteredTotals, true);
  } else if (activeType === 'gym' || activeType === 'pool') {
    const title = activeType === 'gym' ? 'Тренажерный зал' : 'Бассейн';
    html += sectionTemplate(title, sortRows(filteredMonthly.filter((row) => row.type === activeType)));
    html += sectionTemplate('Итог по выбранному типу', filteredTotals.filter((row) => row.type === activeType), true);
  } else {
    html += sectionTemplate('Итоги', sortRows(filteredTotals), true);
  }
  tableBody.innerHTML = html;
  updateStatus(filteredMonthly.length + filteredTotals.length);
  updateSortIndicators();
};

const setInsight = (titleId, textId, title, text) => {
  document.getElementById(titleId).textContent = title;
  document.getElementById(textId).textContent = text;
};

const renderInsights = () => {
  const maxIssued = [...monthlyData].sort((a, b) => b.issued - a.issued)[0];
  const minIssued = [...monthlyData].sort((a, b) => a.issued - b.issued)[0];
  const bestFill = [...monthlyData].sort((a, b) => b.fill - a.fill)[0];
  const totalGym = totalData.find((row) => row.type === 'gym');
  const totalPool = totalData.find((row) => row.type === 'pool');
  const leader = totalGym.issued > totalPool.issued ? totalGym : totalPool;
  const leaderGap = Math.abs(totalGym.issued - totalPool.issued);
  setInsight('insightMaxTitle', 'insightMaxText', `${maxIssued.typeLabel}, ${maxIssued.month} ${maxIssued.year}`, `${maxIssued.issued} абонементов при квоте ${maxIssued.quota}.`);
  setInsight('insightMinTitle', 'insightMinText', `${minIssued.typeLabel}, ${minIssued.month} ${minIssued.year}`, `${minIssued.issued} абонементов при квоте ${minIssued.quota}.`);
  setInsight('insightBestTitle', 'insightBestText', `${bestFill.typeLabel}, ${bestFill.month} ${bestFill.year}`, `Лучшее заполнение: ${formatPercent(bestFill.fill)}.`);
  setInsight('insightLeadTitle', 'insightLeadText', `${leader.typeLabel}`, `Лидирует по количеству выданных абонементов: ${leader.issued}. Отрыв от второго направления: ${leaderGap}.`);
};

// Faculty section
const getFacultyMonthCount = (faculty, month, type) => {
  const row = facultyData.find((item) => item.faculty === faculty && item.month === month && item.type === type);
  return row ? row.count : 0;
};

const createFacultySummaryCard = (label, value, note) => `
  <article class="card faculty-mini-card">
    <div class="card-title">${label}</div>
    <p class="card-value faculty-card-value">${value}</p>
    <div class="card-meta faculty-card-note"><span>${note}</span></div>
  </article>`;

const getChartTheme = () => {
  const dark = isDarkTheme();
  return {
    grid: dark ? 'rgba(148, 163, 184, 0.16)' : 'rgba(148, 163, 184, 0.20)',
    tick: dark ? '#cbd5e1' : '#475569',
    gymLine: dark ? '#60a5fa' : '#1e40af',
    gymFill: dark ? 'rgba(96, 165, 250, 0.18)' : 'rgba(59, 130, 246, 0.12)',
    poolLine: '#0891b2',
    poolFill: dark ? 'rgba(34, 211, 238, 0.18)' : 'rgba(8, 145, 178, 0.12)',
    gymBar: '#3b82f6',
    poolBar: '#0891b2',
    pie: ['#3b82f6', '#0891b2']
  };
};

const renderFacultySection = () => {
  const faculty = facultySelect.value || facultyList[0];
  const rows = monthOrder.slice(0, 7).map((month) => {
    const gym = getFacultyMonthCount(faculty, month, 'gym');
    const pool = getFacultyMonthCount(faculty, month, 'pool');
    return { month, gym, pool, total: gym + pool };
  });
  const totalGym = rows.reduce((sum, row) => sum + row.gym, 0);
  const totalPool = rows.reduce((sum, row) => sum + row.pool, 0);
  const peakMonth = [...rows].sort((a, b) => b.total - a.total)[0];
  facultySummary.innerHTML = [
    createFacultySummaryCard('Факультет', faculty, 'Текущий выбор'),
    createFacultySummaryCard('Зал', totalGym, 'Всего за учебный год'),
    createFacultySummaryCard('Бассейн', totalPool, 'Всего за учебный год'),
    createFacultySummaryCard('Пиковый месяц', peakMonth.month, `${peakMonth.total} абонементов суммарно`)
  ].join('');
  facultyTableBody.innerHTML = rows.map((row) => `
    <tr class="data-row">
      <td>${row.month}</td>
      <td class="num">${row.gym}</td>
      <td class="num">${row.pool}</td>
      <td class="num">${row.total}</td>
    </tr>`).join('');
  facultyChartSubtitle.textContent = `Выбран факультет: ${faculty}. Можно сравнить зал и бассейн по месяцам либо оставить только один тип.`;
  const theme = getChartTheme();
  facultyChart?.destroy();
  const datasets = [];
  if (activeFacultyType === 'all' || activeFacultyType === 'gym') datasets.push({ label: 'Зал', data: rows.map((row) => row.gym), backgroundColor: theme.gymBar, borderRadius: 8, maxBarThickness: 34 });
  if (activeFacultyType === 'all' || activeFacultyType === 'pool') datasets.push({ label: 'Бассейн', data: rows.map((row) => row.pool), backgroundColor: theme.poolBar, borderRadius: 8, maxBarThickness: 34 });
  facultyChart = new Chart(document.getElementById('facultyChart'), {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { position: 'top', labels: { usePointStyle: true, pointStyle: 'rectRounded', padding: 18 } }, tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ${context.parsed.y}` } } },
      scales: { x: { grid: { display: false } }, y: { beginAtZero: true, grid: { color: theme.grid }, ticks: { precision: 0 } } }
    }
  });
};

// Charts
const createCharts = () => {
  const theme = getChartTheme();
  Chart.defaults.font.family = 'Fira Sans, Arial, sans-serif';
  Chart.defaults.color = theme.tick;
  issuedChart?.destroy();
  fillChart?.destroy();
  shareChart?.destroy();
  issuedChart = new Chart(document.getElementById('issuedChart'), {
    type: 'bar',
    data: { labels, datasets: [
      { label: 'Зал', data: [60, 52, 36, 39, 57, 45, 41], backgroundColor: theme.gymBar, borderRadius: 8, maxBarThickness: 34 },
      { label: 'Бассейн', data: [70, 58, 33, 40, 51, 56, 57], backgroundColor: theme.poolBar, borderRadius: 8, maxBarThickness: 34 }
    ] },
    options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { position: 'top', labels: { usePointStyle: true, pointStyle: 'rectRounded', padding: 18 } } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true, grid: { color: theme.grid }, ticks: { precision: 0 } } } }
  });
  fillChart = new Chart(document.getElementById('fillChart'), {
    type: 'line',
    data: { labels, datasets: [
      { label: 'Зал', data: [50.0, 43.33, 30.0, 32.5, 47.5, 37.5, 34.75], borderColor: theme.gymLine, backgroundColor: theme.gymFill, pointBackgroundColor: theme.gymLine, pointRadius: 4, pointHoverRadius: 5, tension: 0.28, fill: true },
      { label: 'Бассейн', data: [38.89, 32.22, 18.33, 22.22, 28.33, 31.11, 31.67], borderColor: theme.poolLine, backgroundColor: theme.poolFill, pointBackgroundColor: theme.poolLine, pointRadius: 4, pointHoverRadius: 5, tension: 0.28, fill: true }
    ] },
    options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { position: 'top', labels: { usePointStyle: true, pointStyle: 'circle', padding: 18 } }, tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ${context.parsed.y.toFixed(2)}%` } } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true, grid: { color: theme.grid }, ticks: { callback: (value) => `${value}%` }, title: { display: true, text: 'Процент заполнения' } } } }
  });
  shareChart = new Chart(document.getElementById('shareChart'), {
    type: 'doughnut',
    data: { labels: ['Зал', 'Бассейн'], datasets: [{ data: [330, 365], backgroundColor: theme.pie, borderWidth: 0, hoverOffset: 8 }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'top', labels: { usePointStyle: true, pointStyle: 'circle', padding: 18 } }, tooltip: { callbacks: { label: (context) => { const total = context.dataset.data.reduce((sum, value) => sum + value, 0); const share = ((context.parsed / total) * 100).toFixed(2); return `${context.label}: ${context.parsed} (${share}%)`; } } } } }
  });
  renderFacultySection();
};

const applyTheme = (theme) => {
  applyThemeOnly(theme);
  if (typeof Chart !== 'undefined') createCharts();
};

// Scroll and navigation UI
const setupStickyPanels = () => {
  let ticking = false;

  const compactToggle = () => {
    const scrolled = window.scrollY > 80;
    stickyFilters.forEach((panel) => panel.classList.toggle('is-compact', scrolled));
    backToTop.classList.toggle('is-visible', window.scrollY > 420);
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    readingProgressBar.style.width = `${progress}%`;
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(compactToggle);
  };

  compactToggle();
  window.addEventListener('scroll', onScroll, { passive: true });
};

const setupSectionHighlight = () => {
  if (!('IntersectionObserver' in window) || !reportSections.length) return;
  const observer = new IntersectionObserver((entries) => {
    const visibleEntries = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (!visibleEntries.length) return;
    const activeSection = visibleEntries[0].target;
    reportSections.forEach((section) => section.classList.toggle('section-active', section === activeSection));
    const sectionKey = activeSection.dataset.section;
    sectionNavLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.navLink === sectionKey));
  }, { rootMargin: '-24% 0px -52% 0px', threshold: [0.3] });
  reportSections.forEach((section) => observer.observe(section));
};

// Setup
const populateFacultySelect = () => {
  facultySelect.innerHTML = '';
  facultyList.forEach((faculty) => {
    const option = document.createElement('option');
    option.value = faculty;
    option.textContent = faculty;
    facultySelect.appendChild(option);
  });
  facultySelect.value = 'МТ';
};

const bindEvents = () => {
  typeButtons.forEach((button) => button.addEventListener('click', () => {
    activeType = button.dataset.typeFilter;
    typeButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderTable();
  }));
  monthFilter.addEventListener('change', renderTable);
  tableSearch.addEventListener('input', renderTable);
  sortMetric.addEventListener('change', renderTable);
  sortHeaderButtons.forEach((button) => button.addEventListener('click', () => {
    const clickedMetric = button.dataset.sortColumn;
    if (sortMetric.value === clickedMetric) sortDir = sortDir === 'desc' ? 'asc' : 'desc';
    else {
      sortMetric.value = clickedMetric;
      sortDir = clickedMetric === 'month' || clickedMetric === 'type' ? 'asc' : 'desc';
    }
    sortDirection.textContent = sortDir === 'desc' ? 'По убыванию' : 'По возрастанию';
    renderTable();
  }));
  sortDirection.addEventListener('click', () => {
    sortDir = sortDir === 'desc' ? 'asc' : 'desc';
    sortDirection.textContent = sortDir === 'desc' ? 'По убыванию' : 'По возрастанию';
    renderTable();
  });
  resetFilters.addEventListener('click', () => {
    activeType = 'all';
    monthFilter.value = 'all';
    tableSearch.value = '';
    sortMetric.value = 'default';
    sortDir = 'desc';
    sortDirection.textContent = 'По убыванию';
    typeButtons.forEach((item) => item.classList.toggle('active', item.dataset.typeFilter === 'all'));
    renderTable();
  });
  themeToggle.addEventListener('click', () => applyTheme(isDarkTheme() ? 'light' : 'dark'));
  facultySelect.addEventListener('change', renderFacultySection);
  facultyTypeButtons.forEach((button) => button.addEventListener('click', () => {
    activeFacultyType = button.dataset.facultyType;
    facultyTypeButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderFacultySection();
  }));
  sectionNavLinks.forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.getElementById(link.dataset.navLink);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
};

const init = () => {
  const savedTheme = localStorage.getItem('komitet-report-theme');
  const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyThemeOnly(preferredTheme);
  setLoadingState('data');
  populateFacultySelect();
  bindEvents();
  setupStickyPanels();
  setupSectionHighlight();
  renderInsights();
  renderTable();
  setLoadingState('charts');
  if (typeof Chart !== 'undefined') {
    applyTheme(preferredTheme);
    setLoadingState('done');
  } else {
    loadingSubtitle.textContent = 'Не удалось загрузить локальную библиотеку диаграмм.';
    tableStatus.textContent = 'Диаграммы недоступны: файл chart.umd.js не загружен.';
  }
  loadingOverlay.classList.add('is-hidden');
};

init();
