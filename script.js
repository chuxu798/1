const menuData = [
  {
    id: 'liangpi',
    name: '陕西凉皮',
    description: '手工面皮 + 蒜香辣酱 + 黄瓜丝，爽口微辣',
    category: '凉菜/凉皮',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/LIANG_PI.jpg',
    sizes: {
      large: { label: '大份', price: 10000 },
      medium: { label: '中份', price: 8500 },
      small: { label: '小份', price: 6500 },
    },
    tastes: ['清淡 / 不辣', '微辣', '中辣'],
    addons: ['蒜水', '陈醋', '香油', '辣椒油', '黄瓜丝多'],
  },
  {
    id: 'roujiamo',
    name: '招牌肉夹馍',
    description: '腊汁肉配现烤白吉馍，外脆内软',
    category: '面食/主食',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Yummy_Lanzhou_-_Roujiamo.jpg',
    sizes: {
      standard: { label: '统一规格', price: 7800 },
    },
    tastes: ['不辣', '微辣'],
    addons: ['加肉', '加鸡蛋', '加豆腐干'],
  },
  {
    id: 'dumpling',
    name: '手工虾仁水饺',
    description: '鲜虾仁猪肉馅，附赠醋与辣椒油',
    category: '饺子/点心',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Chinese_dumplings.JPG',
    sizes: {
      large: { label: '大份 21只', price: 8500 },
      medium: { label: '中份 12只', price: 6000 },
    },
    tastes: ['蒜醋蘸料', '酱油蘸料', '辣醋蘸料'],
    addons: ['咸菜'],
  },
  {
    id: 'baozi',
    name: '鲜肉大包',
    description: '多汁鲜肉，早晚皆宜',
    category: '饺子/点心',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Baozi.JPG',
    sizes: {
      large: { label: '大份 21只等量', price: 8500 },
      medium: { label: '中份 12只等量', price: 6000 },
    },
    tastes: ['猪肉大葱', '韭菜鸡蛋', '鲜肉虾仁', '豆角猪肉', '荠菜鲜肉', '牛肉大葱', '香菜鲜肉'],
    addons: ['无'],
  },
  {
    id: 'mantou',
    name: '传统馒头',
    description: '松软绵密，搭配豆浆更佳',
    category: '饺子/点心',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Handmade_mantou.jpg',
    sizes: {
      default: { label: '单个', price: 1000 },
    },
    tastes: ['默认'],
    addons: [],
  },
  {
    id: 'twice-cooked',
    name: '回锅肉套餐',
    description: '二刀鲜肉、青椒配米饭，微辣',
    category: '家常热菜',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Twice_cooked_pork_%40_Au_Bourgeon_d%27Or_%40_Paris_13_%2833689938815%29.jpg',
    sizes: {
      large: { label: '大份', price: 15500 },
      medium: { label: '中份', price: 12500 },
      small: { label: '小份', price: 10000 },
    },
    tastes: ['原味', '偏甜', '偏酸'],
    addons: ['米饭'],
  },
  {
    id: 'mapo-tofu',
    name: '麻婆豆腐套餐',
    description: '川味麻辣，含米饭，麻辣可调',
    category: '家常热菜',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Authentic_Mapo_Tofu.jpg',
    sizes: {
      large: { label: '大份', price: 9500 },
      medium: { label: '中份', price: 8000 },
      small: { label: '小份', price: 6000 },
    },
    tastes: ['微辣', '中辣', '重辣'],
    addons: ['米饭'],
  },
  {
    id: 'kungpao',
    name: '宫保鸡丁套餐',
    description: '花生鸡丁，微辣，下饭首选',
    category: '家常热菜',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Kung_Paos_kyckling.jpg',
    sizes: {
      standard: { label: '统一规格', price: 12800 },
    },
    tastes: ['不辣', '少辣', '中辣', '重辣'],
    addons: ['花生多', '葱花', '米饭加量'],
  },
  {
    id: 'sour-cabbage',
    name: '酸菜鱼',
    description: '巴沙鱼片 + 老坛酸菜，含米饭',
    category: '特色锅物',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/%E9%85%B8%E8%8F%9C%E9%AD%9A.jpg',
    sizes: {
      large: { label: '大份', price: 12500 },
      medium: { label: '中份', price: 10000 },
      small: { label: '小份', price: 8000 },
    },
    tastes: ['标准微辣', '中辣', '不辣'],
    addons: ['粉丝加量', '酸菜多', '香菜', '米饭加量'],
  },
  {
    id: 'soy-milk',
    name: '现磨豆浆',
    description: '无糖 / 少糖可选，搭配包子',
    category: '饮品/甜品',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/ACupOfSoyMilk20220112.jpg',
    sizes: {
      large: { label: '大杯', price: 4500 },
      medium: { label: '中杯', price: 3000 },
    },
    tastes: ['无糖', '少糖', '正常糖'],
    addons: [],
  },
  {
    id: 'sweets',
    name: '红豆双皮奶',
    description: '甜品解腻，冷热皆可',
    category: '饮品/甜品',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Double_skin_milk_with_red_beans.jpg',
    sizes: {
      large: { label: '大份', price: 8800 },
      medium: { label: '中份', price: 5200 },
    },
    tastes: ['热食', '冷食'],
    addons: ['红豆加量', '椰果', '炼乳'],
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
const tagAllBtn = document.getElementById('tag-all');
const menuTagsOthers = document.getElementById('menu-tags-others');
const cartListMenu = document.getElementById('cart-list-menu');
const cartListInfo = document.getElementById('cart-list-info');
const subtotalMenu = document.getElementById('subtotal-menu');
const subtotalInfo = document.getElementById('subtotal-info');
const cartPill = document.getElementById('cart-pill');
const toInfoCta = document.getElementById('to-info-cta');
const backToMenuBtn = document.getElementById('back-to-menu');
const startOrderBtn = document.getElementById('start-order');
const backToHomeBtn = document.getElementById('back-to-home');
const backToInfoBtn = document.getElementById('back-to-info');

// Form
const customerForm = document.getElementById('customer-form');
const formError = document.getElementById('form-error');
const timeSelect = document.getElementById('time-select');

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
const sizeSelect = document.getElementById('size-select');
const modalAddMore = document.getElementById('modal-add-more');
const modalAddNext = document.getElementById('modal-add-next');

const addonPrices = {
  米饭: 1000,
  米饭加量: 1000,
  米饭加一份: 1000,
  包子小份: 0,
  默认: 0,
  无: 0,
};

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
toInfoCta.addEventListener('click', () => goToStep(3));
backToMenuBtn.addEventListener('click', () => goToStep(2));
startNewTop.addEventListener('click', resetAll);
startNewBottom.addEventListener('click', resetAll);
backToHomeBtn.addEventListener('click', () => goToStep(1));
backToInfoBtn.addEventListener('click', () => goToStep(3));

// Rendering
function renderTags() {
  const categories = Array.from(new Set(menuData.map((item) => item.category)));
  menuTagsOthers.innerHTML = '';
  categories.forEach((cat) => {
    const button = document.createElement('button');
    button.className = 'tag';
    button.dataset.category = cat;
    button.textContent = cat;
    button.addEventListener('click', () => {
      state.activeCategory = cat;
      updateActiveTags();
      renderMenu();
    });
    menuTagsOthers.appendChild(button);
  });

  tagAllBtn.addEventListener('click', () => {
    state.activeCategory = 'all';
    updateActiveTags();
    renderMenu();
  });
  updateActiveTags();
}

function updateActiveTags() {
  document.querySelectorAll('.tag').forEach((btn) => {
    const isActive =
      (btn.dataset.category === 'all' && state.activeCategory === 'all') ||
      btn.dataset.category === state.activeCategory;
    btn.classList.toggle('active', isActive);
  });
}

function renderMenu() {
  menuGrid.innerHTML = '';
  const filtered = state.activeCategory === 'all' ? menuData : menuData.filter((item) => item.category === state.activeCategory);
  filtered.forEach((item) => {
    const firstSize = Object.values(item.sizes || {})[0];
    const basePrice = firstSize ? firstSize.price : 0;
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
    price.textContent = formatCurrency(basePrice);

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
      info.innerHTML = `<strong>${entry.item.name}（${entry.sizeLabel}）</strong><br/><span class="muted">${entry.taste} · ${entry.addons.length ? entry.addons.join(' / ') : '无小料'}</span>`;

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
      price.innerHTML = `<strong>${formatCurrency(entry.price * entry.qty)}</strong>`;

      line.append(info, counter, price);
      container.appendChild(line);
    });
  }
  const subtotal = Array.from(state.cart.values()).reduce((sum, { price, qty }) => sum + price * qty, 0);
  document.getElementById(subtotalEl).textContent = formatCurrency(subtotal);
  cartPill.textContent = `购物车 ${state.cart.size} · ${formatCurrency(subtotal)}`;
  const hasItems = state.cart.size > 0;
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
  modalCategory.textContent = item.category;
  modalImg.src = item.image;

  // sizes
  sizeSelect.innerHTML = '';
  Object.entries(item.sizes).forEach(([key, val], idx) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = `${val.label}（₩${val.price.toLocaleString('ko-KR')}）`;
    if (idx === 0) opt.selected = true;
    sizeSelect.appendChild(opt);
  });
  sizeSelect.classList.add('selected-choice');

  // tastes
  tasteSelect.innerHTML = '';
  (item.tastes || ['标准']).forEach((taste) => {
    const opt = document.createElement('option');
    opt.value = taste;
    opt.textContent = taste;
    tasteSelect.appendChild(opt);
  });
  tasteSelect.classList.add('selected-choice');

  // addons
  addonChips.innerHTML = '';
  const addonList = item.addons && item.addons.length ? item.addons : [];
  addonChips.innerHTML = '';
  if (addonList.length === 0) {
    const none = document.createElement('p');
    none.className = 'muted small';
    none.textContent = '无可选小料';
    addonChips.appendChild(none);
  } else {
    addonList.forEach((addon) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = addon;
      const price = addonPrices[addon] !== undefined ? addonPrices[addon] : 500;
      const text = document.createElement('span');
      text.textContent = `${addon}（+₩${price.toLocaleString('ko-KR')}）`;
      label.append(input, text);
      addonChips.appendChild(label);
    });
  }
  updateModalPrice();

  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
  state.currentDish = null;
  addonChips.querySelectorAll('input[type="checkbox"]').forEach((c) => (c.checked = false));
  tasteSelect.value = tasteSelect.options[0]?.value || '';
  sizeSelect.value = sizeSelect.options[0]?.value || '';
}

function updateModalPrice() {
  if (!state.currentDish) return;
  const sizeKey = sizeSelect.value || Object.keys(state.currentDish.sizes)[0];
  const sizeData = state.currentDish.sizes[sizeKey] || Object.values(state.currentDish.sizes)[0];
  const addonCost = Array.from(addonChips.querySelectorAll('input:checked')).reduce(
    (sum, input) => sum + (addonPrices[input.value] || 500),
    0,
  );
  modalPrice.textContent = formatCurrency(sizeData.price + addonCost);
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
sizeSelect.addEventListener('change', updateModalPrice);
addonChips.addEventListener('change', updateModalPrice);
tasteSelect.addEventListener('change', () => {
  tasteSelect.classList.add('selected-choice');
});
sizeSelect.addEventListener('change', () => {
  sizeSelect.classList.add('selected-choice');
});

function buildCartKey(id, taste, addons) {
  const addonKey = addons.slice().sort().join('+') || 'none';
  return `${id}|${taste}|${addonKey}`;
}

function addCurrentDish(goNext = false) {
  if (!state.currentDish) return;
  const sizeKey = sizeSelect.value;
  const sizeData = state.currentDish.sizes[sizeKey] || Object.values(state.currentDish.sizes)[0];
  const taste = tasteSelect.value;
  const addons = Array.from(addonChips.querySelectorAll('input:checked')).map((c) => c.value);
  const key = buildCartKey(`${state.currentDish.id}-${sizeKey}`, taste, addons);
  const addonCost = addons.reduce((sum, a) => sum + (addonPrices[a] || 500), 0);
  const price = sizeData.price + addonCost;
  const current = state.cart.get(key);
  state.cart.set(key, {
    item: state.currentDish,
    taste,
    addons,
    sizeLabel: sizeData.label,
    price,
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
  state.cart.forEach(({ item, qty, taste, addons, sizeLabel, price }) => {
    const li = document.createElement('li');
    const sub = price * qty;
    li.innerHTML = `<span>${item.name}（${sizeLabel}） × ${qty}<br/><small class="muted">${taste} · ${addons.length ? addons.join(' / ') : '无小料'}</small></span><span>${formatCurrency(sub)}</span>`;
    orderDetails.appendChild(li);
    total += sub;
  });
  orderTotal.textContent = formatCurrency(total);
}

// Copy order details
copyOrderBtn.addEventListener('click', copyOrderDetails);

function copyOrderDetails() {
  if (!state.orderNumber) return;
  const lines = [];
  lines.push('-------------订单信息-------------');
  lines.push(`[订单编号] ${state.orderNumber}`);
  lines.push(`[下单时间] ${formatTime(state.orderTime)}`);
  lines.push('');
  lines.push('----------预订者个人信息---------');
  Array.from(customerInfo.children).forEach((li) => {
    const [labelNode, valueNode] = li.querySelectorAll('span');
    lines.push(`[${labelNode?.innerText || '信息'}] ${valueNode?.innerText || ''}`);
  });
  lines.push('');
  lines.push('-------------订单明细-------------');
  state.cart.forEach(({ item, qty, taste, addons, sizeLabel, price }) => {
    lines.push(`[菜品] ${item.name}（${sizeLabel}） × ${qty}`);
    lines.push(`${taste} · ${addons.length ? addons.join(' / ') : '无小料'}`);
    lines.push(formatCurrency(price * qty));
    lines.push('');
  });
  lines.push(`[总计] ${orderTotal.textContent}`);
  lines.push('');
  lines.push('---------------说明----------------');
  lines.push('[转账说明] 请于10分钟内将转账截图发送到微信: chuxu-waimai');
  lines.push('[转账账户]110-5164-5562155 新韩银行');
  lines.push('[订单确认] 在付款成功并截图发送后我们将回复您转账核对成功，并按照您指定的时间进行派送，请稍等~感谢您的选择~~');
  const details = lines.join('\n');

  const fallbackCopy = () => {
    const textarea = document.createElement('textarea');
    textarea.value = details;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const onSuccess = () => {
    copyOrderBtn.textContent = '已复制';
    setTimeout(() => (copyOrderBtn.textContent = '复制订单信息'), 1500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(details).then(onSuccess).catch(() => {
      try {
        fallbackCopy();
        onSuccess();
      } catch (err) {
        copyOrderBtn.textContent = '复制失败，请长按选择文本';
      }
    });
  } else {
    try {
      fallbackCopy();
      onSuccess();
    } catch (err) {
      copyOrderBtn.textContent = '复制失败，请长按选择文本';
    }
  }
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

function populateTimeOptions() {
  if (!timeSelect) return;
  const startHour = 7;
  const endHour = 22;
  for (let h = startHour; h <= endHour; h++) {
    ['00', '30'].forEach((m) => {
      const time = `${String(h).padStart(2, '0')}:${m}`;
      const option = document.createElement('option');
      option.value = time;
      option.textContent = time;
      timeSelect.appendChild(option);
    });
  }
}

populateTimeOptions();
