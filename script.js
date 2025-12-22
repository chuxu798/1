const menuData = [
  {
    id: 'liangpi',
    name: '陕西凉皮',
    description: '手工面皮 + 蒜香辣酱 + 黄瓜丝，爽口微辣',
    price: 8500,
    category: '凉菜/凉皮',
    image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'roujiamo',
    name: '招牌肉夹馍',
    description: '腊汁肉配现烤白吉馍，外脆内软',
    price: 7800,
    category: '面食/主食',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'dumpling',
    name: '手工虾仁水饺（12只）',
    description: '鲜虾仁猪肉馅，附赠醋与辣椒油',
    price: 9800,
    category: '饺子/点心',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'baozi',
    name: '鲜肉大包（2只）',
    description: '多汁鲜肉，早晚皆宜',
    price: 5200,
    category: '饺子/点心',
    image: 'https://images.unsplash.com/photo-1604908177235-14f4d1c1a42d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'mantou',
    name: '传统馒头（3只）',
    description: '松软绵密，搭配豆浆更佳',
    price: 3800,
    category: '饺子/点心',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'twice-cooked',
    name: '回锅肉套餐',
    description: '二刀鲜肉、青椒配米饭，微辣',
    price: 12500,
    category: '家常热菜',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'mapo-tofu',
    name: '麻婆豆腐套餐',
    description: '川味麻辣，含米饭，麻辣可调',
    price: 11800,
    category: '家常热菜',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'kungpao',
    name: '宫保鸡丁套餐',
    description: '花生鸡丁，微辣，下饭首选',
    price: 12800,
    category: '家常热菜',
    image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sour-cabbage',
    name: '酸菜鱼（单人锅）',
    description: '巴沙鱼片 + 老坛酸菜，含米饭',
    price: 14500,
    category: '特色锅物',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'spicy-hotpot',
    name: '麻辣香锅（单人）',
    description: '牛肉丸、土豆、莲藕、时蔬，辣度可选',
    price: 13900,
    category: '特色锅物',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'soy-milk',
    name: '现磨豆浆',
    description: '无糖 / 少糖可选，搭配包子',
    price: 3200,
    category: '饮品/甜品',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sweets',
    name: '红豆双皮奶',
    description: '甜品解腻，冷热皆可',
    price: 5200,
    category: '饮品/甜品',
    image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=600&q=80',
  },
];

const state = {
  activeCategory: 'all',
  cart: new Map(), // key: id|taste|addons, value: {item, qty, taste, addons}
  currentDish: null,
  orderNumber: null,
  orderTime: null,
};

const steps = {
  1: document.getElementById('page-home'),
  2: document.getElementById('page-menu'),
  3: document.getElementById('page-info'),
  4: document.getElementById('page-review'),
};

// Elements
const menuGrid = document.getElementById('menu-grid');
const menuTags = document.getElementById('menu-tags');
const cartListMenu = document.getElementById('cart-list-menu');
const cartListInfo = document.getElementById('cart-list-info');
const subtotalMenu = document.getElementById('subtotal-menu');
const subtotalInfo = document.getElementById('subtotal-info');
const cartPill = document.getElementById('cart-pill');
const toInfoBtn = document.getElementById('to-info');
const toInfoCta = document.getElementById('to-info-cta');
const backToMenuBtn = document.getElementById('back-to-menu');
const startOrderBtn = document.getElementById('start-order');

// Form
const customerForm = document.getElementById('customer-form');
const formError = document.getElementById('form-error');

// Review elements
const orderNumberEl = document.getElementById('order-number');
const orderTimeEl = document.getElementById('order-time');
const customerInfo = document.getElementById('customer-info');
const orderDetails = document.getElementById('order-details');
const orderTotal = document.getElementById('order-total');
const copyOrderBtn = document.getElementById('copy-order');
const startNewTop = document.getElementById('start-new');
const startNewBottom = document.getElementById('start-new-bottom');

// Modal elements
const modal = document.getElementById('dish-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const modalCategory = document.getElementById('modal-category');
const modalImg = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');
const tasteSelect = document.getElementById('taste-select');
const addonChips = document.getElementById('addon-chips');
const modalAddMore = document.getElementById('modal-add-more');
const modalAddNext = document.getElementById('modal-add-next');

// Navigation
function goToStep(step) {
  Object.entries(steps).forEach(([key, el]) => {
    el.hidden = Number(key) !== step;
  });
  document.querySelectorAll('.step').forEach((node) => {
    node.classList.toggle('active', Number(node.dataset.step) === step);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

startOrderBtn.addEventListener('click', () => goToStep(2));
toInfoBtn.addEventListener('click', () => goToStep(3));
toInfoCta.addEventListener('click', () => goToStep(3));
backToMenuBtn.addEventListener('click', () => goToStep(2));
startNewTop.addEventListener('click', resetAll);
startNewBottom.addEventListener('click', resetAll);

// Rendering
function renderTags() {
  const categories = Array.from(new Set(menuData.map((item) => item.category)));
  categories.forEach((cat) => {
    const button = document.createElement('button');
    button.className = 'tag';
    button.dataset.category = cat;
    button.textContent = cat;
    button.addEventListener('click', () => {
      state.activeCategory = cat;
      document.querySelectorAll('.tag').forEach((btn) => btn.classList.toggle('active', btn.dataset.category === cat));
      renderMenu();
    });
    menuTags.appendChild(button);
  });

  menuTags.querySelector('[data-category="all"]').addEventListener('click', () => {
    state.activeCategory = 'all';
    document.querySelectorAll('.tag').forEach((btn) => btn.classList.toggle('active', btn.dataset.category === 'all'));
    renderMenu();
  });
}

function renderMenu() {
  menuGrid.innerHTML = '';
  const filtered = state.activeCategory === 'all' ? menuData : menuData.filter((item) => item.category === state.activeCategory);
  filtered.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.addEventListener('click', () => openModal(item));

    const img = document.createElement('img');
    img.className = 'item-image';
    img.src = item.image;
    img.alt = item.name;

    const body = document.createElement('div');
    body.className = 'item-body';
    const name = document.createElement('h3');
    name.textContent = item.name;
    const desc = document.createElement('p');
    desc.className = 'muted';
    desc.textContent = item.description;
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = formatCurrency(item.price);

    body.append(name, desc, price);
    card.append(img, body);
    menuGrid.appendChild(card);
  });
}

function renderCart(target, subtotalEl) {
  const container = document.getElementById(target);
  container.innerHTML = '';
  if (state.cart.size === 0) {
    container.innerHTML = '<p class="muted">购物车为空，去菜单选择菜品</p>';
  } else {
    state.cart.forEach((entry, key) => {
      const line = document.createElement('div');
      line.className = 'cart-line';
      const info = document.createElement('div');
      info.innerHTML = `<strong>${entry.item.name}</strong><br/><span class="muted">${entry.taste} · ${entry.addons.length ? entry.addons.join(' / ') : '无小料'}</span>`;

      const counter = document.createElement('div');
      counter.className = 'counter';
      const minus = document.createElement('button');
      minus.textContent = '−';
      minus.addEventListener('click', () => changeQty(key, -1));
      const count = document.createElement('span');
      count.textContent = entry.qty;
      const plus = document.createElement('button');
      plus.textContent = '+';
      plus.addEventListener('click', () => changeQty(key, 1));
      counter.append(minus, count, plus);

      const price = document.createElement('div');
      price.innerHTML = `<strong>${formatCurrency(entry.item.price * entry.qty)}</strong>`;

      line.append(info, counter, price);
      container.appendChild(line);
    });
  }
  const subtotal = Array.from(state.cart.values()).reduce((sum, { item, qty }) => sum + item.price * qty, 0);
  document.getElementById(subtotalEl).textContent = formatCurrency(subtotal);
  cartPill.textContent = `购物车 ${state.cart.size} · ${formatCurrency(subtotal)}`;
  const hasItems = state.cart.size > 0;
  toInfoBtn.disabled = !hasItems;
  toInfoCta.disabled = !hasItems;
}

function changeQty(key, delta) {
  const entry = state.cart.get(key);
  if (!entry) return;
  const next = entry.qty + delta;
  if (next <= 0) {
    state.cart.delete(key);
  } else {
    state.cart.set(key, { ...entry, qty: next });
  }
  renderCart('cart-list-menu', 'subtotal-menu');
  renderCart('cart-list-info', 'subtotal-info');
}

// Modal logic
function openModal(item) {
  state.currentDish = item;
  modalTitle.textContent = item.name;
  modalDesc.textContent = item.description;
  modalPrice.textContent = formatCurrency(item.price);
  modalCategory.textContent = item.category;
  modalImg.src = item.image;
  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
  state.currentDish = null;
  addonChips.querySelectorAll('input[type="checkbox"]').forEach((c) => (c.checked = false));
  tasteSelect.value = '清淡';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function buildCartKey(id, taste, addons) {
  const addonKey = addons.slice().sort().join('+') || 'none';
  return `${id}|${taste}|${addonKey}`;
}

function addCurrentDish(goNext = false) {
  if (!state.currentDish) return;
  const taste = tasteSelect.value;
  const addons = Array.from(addonChips.querySelectorAll('input:checked')).map((c) => c.value);
  const key = buildCartKey(state.currentDish.id, taste, addons);
  const current = state.cart.get(key);
  state.cart.set(key, {
    item: state.currentDish,
    taste,
    addons,
    qty: current ? current.qty + 1 : 1,
  });
  renderCart('cart-list-menu', 'subtotal-menu');
  renderCart('cart-list-info', 'subtotal-info');
  closeModal();
  if (goNext) {
    goToStep(3);
  }
}

modalAddMore.addEventListener('click', () => addCurrentDish(false));
modalAddNext.addEventListener('click', () => addCurrentDish(true));

// Form submit
customerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formError.textContent = '';
  if (state.cart.size === 0) {
    formError.textContent = '请先在菜单添加至少一件商品。';
    return;
  }
  const formData = new FormData(customerForm);
  state.orderNumber = generateOrderNumber();
  state.orderTime = new Date();
  orderNumberEl.textContent = state.orderNumber;
  orderTimeEl.textContent = formatTime(state.orderTime);
  buildOrderSummary(formData);
  goToStep(4);
});

function buildOrderSummary(formData) {
  customerInfo.innerHTML = '';
  const infoEntries = [
    ['姓名', formData.get('name')],
    ['手机号', formData.get('phone')],
    ['配送地址', formData.get('address')],
    ['送达时间', formData.get('time') || '尽快送达'],
    ['备注', formData.get('notes') || '无'],
  ];
  infoEntries.forEach(([label, value]) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="muted">${label}</span><span>${value}</span>`;
    customerInfo.appendChild(li);
  });

  orderDetails.innerHTML = '';
  let total = 0;
  state.cart.forEach(({ item, qty, taste, addons }) => {
    const li = document.createElement('li');
    const sub = item.price * qty;
    li.innerHTML = `<span>${item.name} × ${qty}<br/><small class="muted">${taste} · ${addons.length ? addons.join(' / ') : '无小料'}</small></span><span>${formatCurrency(sub)}</span>`;
    orderDetails.appendChild(li);
    total += sub;
  });
  orderTotal.textContent = formatCurrency(total);
}

// Copy order details
copyOrderBtn.addEventListener('click', copyOrderDetails);

function copyOrderDetails() {
  if (!state.orderNumber) return;
  const details = [
    `订单编号: ${state.orderNumber}`,
    `下单时间: ${formatTime(state.orderTime)}`,
    '--- 顾客信息 ---',
    ...Array.from(customerInfo.children).map((li) => li.innerText),
    '--- 点单明细 ---',
    ...Array.from(orderDetails.children).map((li) => li.innerText),
    `总计: ${orderTotal.textContent}`,
    '请将转账截图发送到微信: chuxu-waimai',
  ].join('\n');

  navigator.clipboard
    .writeText(details)
    .then(() => {
      copyOrderBtn.textContent = '已复制';
      setTimeout(() => (copyOrderBtn.textContent = '复制订单信息'), 1500);
    })
    .catch(() => {
      copyOrderBtn.textContent = '复制失败，请手动选择';
    });
}

function resetAll() {
  state.cart.clear();
  state.activeCategory = 'all';
  state.orderNumber = null;
  state.orderTime = null;
  customerForm.reset();
  renderMenu();
  renderCart('cart-list-menu', 'subtotal-menu');
  renderCart('cart-list-info', 'subtotal-info');
  goToStep(1);
}

// Utils
function formatCurrency(value) {
  return `₩${value.toLocaleString('ko-KR')}`;
}

function generateOrderNumber() {
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `JJB-${datePart}-${randomPart}`;
}

function formatTime(date) {
  if (!date) return '';
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mi = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
}

// Init
renderTags();
renderMenu();
renderCart('cart-list-menu', 'subtotal-menu');
renderCart('cart-list-info', 'subtotal-info');
goToStep(1);
