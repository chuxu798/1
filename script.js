const menuData = [
  {
    id: 'liangpi',
    name: '陕西凉皮',
    description: '手工面皮 + 蒜香辣酱 + 黄瓜丝，爽口微辣',
    price: 8500,
    category: '凉皮/凉菜',
  },
  {
    id: 'roujiamo',
    name: '招牌肉夹馍',
    description: '腊汁肉配现烤白吉馍，外脆内软',
    price: 7800,
    category: '面食/主食',
  },
  {
    id: 'dumpling',
    name: '手工虾仁水饺（12只）',
    description: '鲜虾仁猪肉馅，附赠醋与辣椒油',
    price: 9800,
    category: '饺子/包子',
  },
  {
    id: 'baozi',
    name: '鲜肉大包（2只）',
    description: '多汁鲜肉，早晚皆宜',
    price: 5200,
    category: '饺子/包子',
  },
  {
    id: 'mantou',
    name: '传统馒头（3只）',
    description: '无需佐料，松软绵密',
    price: 3800,
    category: '饺子/包子',
  },
  {
    id: 'twice-cooked',
    name: '回锅肉套餐',
    description: '二刀鲜肉、青椒配米饭，微辣',
    price: 12500,
    category: '家常热菜',
  },
  {
    id: 'mapo-tofu',
    name: '麻婆豆腐套餐',
    description: '川味麻辣，含米饭，麻辣可调',
    price: 11800,
    category: '家常热菜',
  },
  {
    id: 'kungpao',
    name: '宫保鸡丁套餐',
    description: '花生鸡丁，微辣，下饭首选',
    price: 12800,
    category: '家常热菜',
  },
  {
    id: 'sour-cabbage',
    name: '酸菜鱼（单人锅）',
    description: '巴沙鱼片 + 老坛酸菜，含米饭',
    price: 14500,
    category: '特色锅物',
  },
  {
    id: 'spicy-hotpot',
    name: '麻辣香锅（单人）',
    description: '牛肉丸、土豆、莲藕、时蔬，辣度可选',
    price: 13900,
    category: '特色锅物',
  },
  {
    id: 'sweets',
    name: '红豆双皮奶',
    description: '甜品解腻，冷热皆可',
    price: 5200,
    category: '饮品/甜品',
  },
  {
    id: 'soy-milk',
    name: '现磨豆浆',
    description: '无糖 / 少糖可选，搭配包子更佳',
    price: 3200,
    category: '饮品/甜品',
  },
];

const state = {
  cart: new Map(),
  activeCategory: 'all',
  orderNumber: null,
};

const menuGrid = document.getElementById('menu-grid');
const menuTags = document.getElementById('menu-tags');
const cartItems = document.getElementById('cart-items');
const totalAmount = document.getElementById('total-amount');
const checkoutForm = document.getElementById('checkout-form');
const errorMessage = document.getElementById('error-message');
const orderSection = document.getElementById('order-section');
const orderNumberEl = document.getElementById('order-number');
const customerInfo = document.getElementById('customer-info');
const orderDetails = document.getElementById('order-details');
const orderTotal = document.getElementById('order-total');
const copyOrderBtn = document.getElementById('copy-order');
const startNewBtn = document.getElementById('start-new');

function formatCurrency(value) {
  return `₩${value.toLocaleString('ko-KR')}`;
}

function generateOrderNumber() {
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `KR-${datePart}-${randomPart}`;
}

function renderTags() {
  const categories = Array.from(new Set(menuData.map((item) => item.category)));
  categories.forEach((cat) => {
    const button = document.createElement('button');
    button.className = 'tag';
    button.dataset.category = cat;
    button.textContent = cat;
    button.addEventListener('click', () => {
      state.activeCategory = cat;
      document.querySelectorAll('.tag').forEach((btn) => btn.classList.toggle('active', btn.dataset.category === cat || (btn.dataset.category === 'all' && cat === 'all')));
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

    const info = document.createElement('div');
    info.className = 'item-info';
    const title = document.createElement('h3');
    title.textContent = item.name;
    const desc = document.createElement('p');
    desc.textContent = item.description;
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = formatCurrency(item.price);
    info.appendChild(title);
    info.appendChild(desc);
    info.appendChild(price);

    const actions = document.createElement('div');
    const inCart = state.cart.get(item.id);
    if (inCart) {
      const counter = document.createElement('div');
      counter.className = 'counter';
      const minus = document.createElement('button');
      minus.textContent = '−';
      minus.addEventListener('click', () => changeQuantity(item.id, -1));
      const count = document.createElement('span');
      count.textContent = inCart.qty;
      const plus = document.createElement('button');
      plus.textContent = '+';
      plus.addEventListener('click', () => changeQuantity(item.id, 1));
      counter.append(minus, count, plus);
      actions.appendChild(counter);
    } else {
      const add = document.createElement('button');
      add.className = 'add-btn';
      add.textContent = '加入 +';
      add.addEventListener('click', () => addToCart(item.id));
      actions.appendChild(add);
    }

    card.append(info, actions);
    menuGrid.appendChild(card);
  });
}

function addToCart(id) {
  const item = menuData.find((m) => m.id === id);
  if (!item) return;
  const current = state.cart.get(id);
  state.cart.set(id, { item, qty: current ? current.qty + 1 : 1 });
  updateCart();
  renderMenu();
}

function changeQuantity(id, delta) {
  const current = state.cart.get(id);
  if (!current) return;
  const nextQty = current.qty + delta;
  if (nextQty <= 0) {
    state.cart.delete(id);
  } else {
    state.cart.set(id, { ...current, qty: nextQty });
  }
  updateCart();
  renderMenu();
}

function updateCart() {
  cartItems.innerHTML = '';
  if (state.cart.size === 0) {
    cartItems.innerHTML = '<p class="muted">还没有添加商品</p>';
  } else {
    state.cart.forEach(({ item, qty }) => {
      const line = document.createElement('div');
      line.className = 'cart-line';
      const info = document.createElement('div');
      info.innerHTML = `<strong>${item.name}</strong><br/><span class="muted">${formatCurrency(item.price)} × ${qty}</span>`;
      const counter = document.createElement('div');
      counter.className = 'counter';
      const minus = document.createElement('button');
      minus.textContent = '−';
      minus.addEventListener('click', () => changeQuantity(item.id, -1));
      const count = document.createElement('span');
      count.textContent = qty;
      const plus = document.createElement('button');
      plus.textContent = '+';
      plus.addEventListener('click', () => changeQuantity(item.id, 1));
      counter.append(minus, count, plus);
      line.append(info, counter);
      cartItems.appendChild(line);
    });
  }

  const total = Array.from(state.cart.values()).reduce((sum, { item, qty }) => sum + item.price * qty, 0);
  totalAmount.textContent = formatCurrency(total);
}

function buildOrderSummary(formData) {
  customerInfo.innerHTML = '';
  const infoEntries = [
    ['姓名', formData.get('name')],
    ['手机号', formData.get('phone')],
    ['配送地址', formData.get('address')],
    ['配送时间', formData.get('time') || '尽快送达'],
    ['备注', formData.get('notes') || '无'],
  ];
  infoEntries.forEach(([label, value]) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="muted">${label}</span><span>${value}</span>`;
    customerInfo.appendChild(li);
  });

  orderDetails.innerHTML = '';
  let total = 0;
  state.cart.forEach(({ item, qty }) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.name} × ${qty}</span><span>${formatCurrency(item.price * qty)}</span>`;
    orderDetails.appendChild(li);
    total += item.price * qty;
  });
  orderTotal.textContent = formatCurrency(total);
}

function copyOrderDetails() {
  if (!state.orderNumber) return;
  const details = [
    `订单编号: ${state.orderNumber}`,
    '--- 顾客信息 ---',
    ...Array.from(customerInfo.children).map((li) => li.innerText),
    '--- 点单明细 ---',
    ...Array.from(orderDetails.children).map((li) => li.innerText),
    `总计: ${orderTotal.textContent}`,
    '请将转账截图发送到 KakaoTalk: cnfood / WeChat: cn-food',
  ].join('\n');

  navigator.clipboard
    .writeText(details)
    .then(() => {
      copyOrderBtn.textContent = '已复制';
      setTimeout(() => (copyOrderBtn.textContent = '复制订单详情'), 1500);
    })
    .catch(() => {
      copyOrderBtn.textContent = '复制失败，请手动选择';
    });
}

function resetAll() {
  state.cart.clear();
  checkoutForm.reset();
  state.orderNumber = null;
  orderSection.hidden = true;
  updateCart();
  renderMenu();
  errorMessage.textContent = '';
}

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  errorMessage.textContent = '';
  if (state.cart.size === 0) {
    errorMessage.textContent = '请先选择商品再提交订单。';
    return;
  }

  const formData = new FormData(checkoutForm);
  state.orderNumber = generateOrderNumber();
  orderNumberEl.textContent = state.orderNumber;

  buildOrderSummary(formData);
  orderSection.hidden = false;
  window.scrollTo({ top: orderSection.offsetTop - 20, behavior: 'smooth' });
});

copyOrderBtn.addEventListener('click', copyOrderDetails);
startNewBtn.addEventListener('click', resetAll);

renderTags();
renderMenu();
updateCart();
