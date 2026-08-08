/* ============================= DATA ============================= */
const CATEGORIES = [
  {id:"Hardwood", swatch:"repeating-linear-gradient(100deg,#C4956B 0 22px,#B27F52 22px 24px,#C89A70 24px 46px)"},
  {id:"Laminate", swatch:"repeating-linear-gradient(95deg,#D6BFA0 0 26px,#C7A87F 26px 28px)"},
  {id:"Vinyl Plank", swatch:"repeating-linear-gradient(105deg,#8B8378 0 30px,#77706660 30px 32px)"},
  {id:"Tile", swatch:"repeating-linear-gradient(0deg,#DAD3C4 0 48px,#B9B1A0 48px 50px),repeating-linear-gradient(90deg,#DAD3C4 0 48px,#B9B1A0 48px 50px)"},
  {id:"Carpet", swatch:"radial-gradient(circle at 30% 30%,#A99A80 0 2px,transparent 2px),radial-gradient(circle at 70% 60%,#A99A80 0 2px,transparent 2px),#C9BEA9"},
];

const COLORWAYS = ["#C4956B","#8B6A47","#5B4331","#D8C8AE","#4A3324"];

const PRODUCTS = [
  {id:1, title:"Amber Oak Select", cat:"Hardwood", price:289, rating:4.8, reviews:212, waterproof:false, thickness:"12mm", finish:"Matte", wear:"N/A", install:"Nail-down / Glue-down", warranty:"25 years", coverage:20, boxPrice:5780, desc:"Solid white oak with a warm amber stain, wire-brushed for texture that hides everyday scuffs. A timeless choice for living rooms and hallways."},
  {id:2, title:"Smoked Walnut Plank", cat:"Hardwood", price:349, rating:4.9, reviews:98, waterproof:false, thickness:"14mm", finish:"Matte", wear:"N/A", install:"Nail-down", warranty:"30 years", coverage:18, boxPrice:6282, desc:"Deep, smoky walnut tones with dramatic grain variation. A statement floor for dining rooms and studies."},
  {id:3, title:"Coastal Grey Laminate", cat:"Laminate", price:129, rating:4.5, reviews:340, waterproof:true, thickness:"8mm", finish:"Textured", wear:"AC4", install:"Floating click-lock", warranty:"15 years", coverage:24, boxPrice:3096, desc:"A driftwood-grey laminate that resists fading and scratches — ideal for busy family homes."},
  {id:4, title:"Golden Birch Laminate", cat:"Laminate", price:109, rating:4.3, reviews:156, waterproof:false, thickness:"7mm", finish:"Satin", wear:"AC3", install:"Floating click-lock", warranty:"10 years", coverage:26, boxPrice:2834, desc:"A bright, budget-friendly laminate that brings light into smaller rooms."},
  {id:5, title:"Harbor Stone Vinyl Plank", cat:"Vinyl Plank", price:159, rating:4.7, reviews:410, waterproof:true, thickness:"6mm", finish:"Textured", wear:"20 mil", install:"Floating click-lock", warranty:"Lifetime residential", coverage:22, boxPrice:3498, desc:"100% waterproof luxury vinyl with a realistic stone-grey wood look — safe for kitchens and bathrooms."},
  {id:6, title:"Driftwood Grey Vinyl Plank", cat:"Vinyl Plank", price:149, rating:4.6, reviews:288, waterproof:true, thickness:"5mm", finish:"Matte", wear:"12 mil", install:"Peel-and-stick", warranty:"20 years", coverage:24, boxPrice:3576, desc:"An easy peel-and-stick vinyl plank, perfect for rentals and quick refreshes."},
  {id:7, title:"Carrara Marble-Look Tile", cat:"Tile", price:219, rating:4.6, reviews:174, waterproof:true, thickness:"10mm", finish:"Polished", wear:"N/A", install:"Thin-set mortar", warranty:"Lifetime", coverage:16, boxPrice:3504, desc:"Porcelain tile with authentic Carrara marble veining, at a fraction of the cost and none of the staining."},
  {id:8, title:"Slate Charcoal Tile", cat:"Tile", price:189, rating:4.4, reviews:132, waterproof:true, thickness:"9mm", finish:"Matte", wear:"N/A", install:"Thin-set mortar", warranty:"Lifetime", coverage:18, boxPrice:3402, desc:"A deep charcoal slate-look tile, non-slip rated for entryways, patios and bathrooms."},
  {id:9, title:"Alpine Boucle Carpet", cat:"Carpet", price:99, rating:4.5, reviews:203, waterproof:false, thickness:"10mm pile", finish:"Loop", wear:"N/A", install:"Stretch-in / Padding", warranty:"10 years", coverage:30, boxPrice:2970, desc:"A soft, textured loop carpet that muffles sound beautifully — ideal for bedrooms."},
  {id:10, title:"Everyday Grey Carpet", cat:"Carpet", price:79, rating:4.2, reviews:265, waterproof:false, thickness:"8mm pile", finish:"Cut pile", wear:"N/A", install:"Stretch-in / Padding", warranty:"5 years", coverage:32, boxPrice:2528, desc:"Stain-resistant, budget carpet built for high-traffic family spaces."},
  {id:11, title:"Heritage Hickory", cat:"Hardwood", price:319, rating:4.7, reviews:87, waterproof:false, thickness:"12mm", finish:"Hand-scraped", wear:"N/A", install:"Nail-down / Glue-down", warranty:"25 years", coverage:20, boxPrice:6380, desc:"Rustic hickory with dramatic color variation and a hand-scraped texture for old-world character."},
  {id:12, title:"Sand Dune Vinyl Plank", cat:"Vinyl Plank", price:139, rating:4.4, reviews:190, waterproof:true, thickness:"5mm", finish:"Textured", wear:"12 mil", install:"Floating click-lock", warranty:"15 years", coverage:24, boxPrice:3336, desc:"Light, sandy tones that pair well with coastal and Scandinavian interiors."},
  {id:13, title:"Classic Maple Natural", cat:"Hardwood", price:259, rating:4.6, reviews:143, waterproof:false, thickness:"12mm", finish:"Satin", wear:"N/A", install:"Nail-down / Glue-down", warranty:"25 years", coverage:20, boxPrice:5180, desc:"Pale, even-toned maple with a subtle grain — brightens up small rooms and pairs with almost any palette."},
  {id:14, title:"Ebony Stained Oak", cat:"Hardwood", price:379, rating:4.8, reviews:76, waterproof:false, thickness:"14mm", finish:"Matte", wear:"N/A", install:"Nail-down", warranty:"30 years", coverage:18, boxPrice:6822, desc:"Rich, near-black oak stain for a dramatic, modern look in living and dining spaces."},
  {id:15, title:"Rustic Pine Wide Plank", cat:"Hardwood", price:229, rating:4.3, reviews:112, waterproof:false, thickness:"12mm", finish:"Hand-scraped", wear:"N/A", install:"Nail-down / Glue-down", warranty:"20 years", coverage:20, boxPrice:4580, desc:"Wide, knotty pine planks with a farmhouse character that ages beautifully."},
  {id:16, title:"Weathered Barnwood Laminate", cat:"Laminate", price:119, rating:4.4, reviews:201, waterproof:true, thickness:"8mm", finish:"Textured", wear:"AC4", install:"Floating click-lock", warranty:"15 years", coverage:24, boxPrice:2856, desc:"Reclaimed-barn look with realistic saw marks and knots — tough enough for busy hallways."},
  {id:17, title:"Ivory Ash Laminate", cat:"Laminate", price:99, rating:4.1, reviews:167, waterproof:false, thickness:"7mm", finish:"Satin", wear:"AC3", install:"Floating click-lock", warranty:"10 years", coverage:26, boxPrice:2574, desc:"A light, budget-friendly laminate that keeps rooms feeling airy and open."},
  {id:18, title:"Urban Concrete Vinyl Plank", cat:"Vinyl Plank", price:169, rating:4.5, reviews:154, waterproof:true, thickness:"6mm", finish:"Matte", wear:"20 mil", install:"Floating click-lock", warranty:"Lifetime residential", coverage:22, boxPrice:3718, desc:"An industrial concrete-look plank that suits lofts, basements and home offices."},
  {id:19, title:"Honey Teak Vinyl Plank", cat:"Vinyl Plank", price:145, rating:4.6, reviews:229, waterproof:true, thickness:"5mm", finish:"Textured", wear:"12 mil", install:"Floating click-lock", warranty:"20 years", coverage:24, boxPrice:3480, desc:"Warm honey-teak tones with a realistic wood grain, fully waterproof for kitchens."},
  {id:20, title:"Terracotta Quarry Tile", cat:"Tile", price:179, rating:4.3, reviews:98, waterproof:true, thickness:"10mm", finish:"Matte", wear:"N/A", install:"Thin-set mortar", warranty:"Lifetime", coverage:16, boxPrice:2864, desc:"Earthy terracotta tone quarry tile, ideal for kitchens, patios and sunrooms."},
  {id:21, title:"Arctic White Tile", cat:"Tile", price:249, rating:4.7, reviews:186, waterproof:true, thickness:"10mm", finish:"Polished", wear:"N/A", install:"Thin-set mortar", warranty:"Lifetime", coverage:16, boxPrice:3984, desc:"Bright, high-gloss white porcelain tile that makes bathrooms and kitchens feel larger."},
  {id:22, title:"Plush Ivory Carpet", cat:"Carpet", price:119, rating:4.6, reviews:141, waterproof:false, thickness:"12mm pile", finish:"Cut pile", wear:"N/A", install:"Stretch-in / Padding", warranty:"12 years", coverage:30, boxPrice:3570, desc:"A deep, plush pile carpet built for comfort underfoot in bedrooms and lounges."},
  {id:23, title:"Berber Loop Natural", cat:"Carpet", price:89, rating:4.2, reviews:177, waterproof:false, thickness:"9mm pile", finish:"Loop", wear:"N/A", install:"Stretch-in / Padding", warranty:"8 years", coverage:32, boxPrice:2848, desc:"Durable Berber loop construction that resists crushing — great for stairs and hallways."},
  {id:24, title:"Midnight Slate Vinyl Plank", cat:"Vinyl Plank", price:155, rating:4.5, reviews:133, waterproof:true, thickness:"6mm", finish:"Textured", wear:"20 mil", install:"Floating click-lock", warranty:"Lifetime residential", coverage:22, boxPrice:3410, desc:"Deep charcoal-blue tones for a bold, modern waterproof floor."},
];

const REVIEWS_POOL = [
  {who:"Priya S.", rating:5, text:"Installed this ourselves over a weekend — instructions were clear and it looks incredible in our living room."},
  {who:"Rahul M.", rating:4, text:"Great quality for the price. One box had a couple of damaged planks but customer support sorted it quickly."},
  {who:"Ananya K.", rating:5, text:"Ordered a sample first, glad I did — the color in person is even better than the photos."},
];

/* ============================= STATE ============================= */
let state = {
  category: null,
  query: '',
  cart: {},           // productId -> {qty, price, color}
  wishlist: new Set(),
  currentProduct: null,
  currentColorIdx: 0,
};
let USERS = { "demo@hearthstone.com": {password:"demo1234", name:"Alex Rivera"} };
let ORDERS = {}; // email -> [orders]
let currentUser = null;

/* ============================= VIEW SWITCHING ============================= */
function switchView(view){
  ["home","shop","product","checkout","account"].forEach(v=>{
    document.getElementById('view-'+v).classList.toggle('hidden', v!==view);
  });
  document.getElementById('nav-shop').setAttribute('aria-current', view==='shop' ? 'page':'false');
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant':'auto'});
  if(view==='shop') renderShop();
  if(view==='account') renderAccount();
}
function scrollToCalcInfo(){
  switchView('shop');
}

/* ============================= CATEGORY TILES / FEATURED ============================= */
function initHome(){
  const tilesEl = document.getElementById('cat-tiles');
  tilesEl.innerHTML = CATEGORIES.map(c => {
    const count = PRODUCTS.filter(p=>p.cat===c.id).length;
    return `<button class="cat-tile" onclick="filterByCategory('${c.id}')">
      <div class="cat-swatch" style="background:${c.swatch}"></div>
      <div class="name">${c.id}</div>
      <div class="count">${count} products</div>
    </button>`;
  }).join('');

  const featured = [...PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,4);
  document.getElementById('featured-grid').innerHTML = featured.map(p=>productCardHtml(p)).join('');
}
function filterByCategory(cat){
  state.category = cat;
  switchView('shop');
}

/* ============================= SHOP GRID ============================= */
function initFilters(){
  const box = document.getElementById('cat-checkboxes');
  box.innerHTML = CATEGORIES.map(c=>`
    <div class="check-row">
      <input type="checkbox" id="cat-${c.id.replace(/\s/g,'')}" value="${c.id}" onchange="renderShop()" ${state.category===c.id?'checked':''}>
      <label for="cat-${c.id.replace(/\s/g,'')}">${c.id}</label>
    </div>`).join('');
}
function getCheckedCategories(){
  return [...document.querySelectorAll('#cat-checkboxes input:checked')].map(i=>i.value);
}
function handleSearch(val){ state.query = val.trim().toLowerCase(); if(!document.getElementById('view-shop').classList.contains('hidden')) renderShop(); else switchView('shop'); }

function resetFilters(){
  state.category = null; state.query='';
  document.getElementById('search-input').value='';
  document.getElementById('price-range').value=450;
  document.getElementById('price-label').textContent=450;
  document.getElementById('waterproof-only').checked=false;
  initFilters();
  renderShop();
}

function renderShop(){
  initFilters();
  const maxPrice = Number(document.getElementById('price-range').value);
  const waterproofOnly = document.getElementById('waterproof-only').checked;
  const sort = document.getElementById('sort').value;
  const checkedCats = getCheckedCategories();

  let list = PRODUCTS.filter(p =>
    (checkedCats.length===0 || checkedCats.includes(p.cat)) &&
    p.price <= maxPrice &&
    (!waterproofOnly || p.waterproof) &&
    (state.query==='' || p.title.toLowerCase().includes(state.query) || p.cat.toLowerCase().includes(state.query))
  );
  if(sort==='price-asc') list.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc') list.sort((a,b)=>b.price-a.price);
  else if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);

  document.getElementById('results-count').textContent = list.length===0 ? 'No products match your filters' : `Showing ${list.length} of ${PRODUCTS.length} products`;
  const grid = document.getElementById('product-grid');
  grid.innerHTML = list.length===0
    ? `<div class="no-results"><h3 class="display" style="font-size:24px;">Nothing matches yet</h3><p>Try a wider price range or a different category.</p></div>`
    : list.map(p=>productCardHtml(p)).join('');
}

function productCardHtml(p){
  return `
    <article class="card" role="listitem">
      <div class="card-media">
        <button class="card-media-btn" aria-label="View ${escapeHtml(p.title)} details" onclick="openProduct(${p.id})">
          <div class="swatch-fill" style="background:${CATEGORIES.find(c=>c.id===p.cat).swatch}"></div>
        </button>
        ${p.waterproof ? '<span class="card-tag">Waterproof</span>' : ''}
      </div>
      <div class="card-body">
        <p class="card-cat">${p.cat}</p>
        <p class="card-title"><button onclick="openProduct(${p.id})">${escapeHtml(p.title)}</button></p>
        <p class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))} <span class="mono" style="color:var(--ink-dim);">(${p.reviews})</span></p>
        <div class="card-foot">
          <span class="price">₹${p.price} <span class="unit">/sq ft</span></span>
          <button class="add-btn" onclick="quickAdd(${p.id})">Add</button>
        </div>
      </div>
    </article>`;
}

function escapeHtml(str){ return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ============================= PRODUCT DETAIL ============================= */
function openProduct(id){
  const p = PRODUCTS.find(x=>x.id===id);
  state.currentProduct = p;
  state.currentColorIdx = 0;
  switchView('product');

  document.getElementById('pd-breadcrumb-cat').textContent = p.cat;
  document.getElementById('pd-cat').textContent = p.cat + (p.waterproof ? ' · Waterproof' : '');
  document.getElementById('pd-title').textContent = p.title;
  document.getElementById('pd-rating').innerHTML = `${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))} ${p.rating} · ${p.reviews} reviews`;
  document.getElementById('pd-price').textContent = `₹${p.price}`;
  document.getElementById('pd-desc').textContent = p.desc;

  renderPdGallery(p);
  renderColorSwatches(p);

  document.getElementById('pd-specs-table').innerHTML = `
    <tr><td>Category</td><td>${p.cat}</td></tr>
    <tr><td>Thickness</td><td>${p.thickness}</td></tr>
    <tr><td>Finish</td><td>${p.finish}</td></tr>
    <tr><td>Wear layer</td><td>${p.wear}</td></tr>
    <tr><td>Installation</td><td>${p.install}</td></tr>
    <tr><td>Water resistance</td><td>${p.waterproof ? 'Fully waterproof' : 'Not water-resistant'}</td></tr>
    <tr><td>Warranty</td><td>${p.warranty}</td></tr>
    <tr><td>Coverage per box</td><td>${p.coverage} sq ft (₹${p.boxPrice.toLocaleString('en-IN')}/box)</td></tr>
  `;
  document.getElementById('pd-reviews').innerHTML = REVIEWS_POOL.map(r=>`
    <div class="review">
      <p class="who">${r.who}</p>
      <p class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</p>
      <p>${r.text}</p>
    </div>`).join('');

  switchPdTab('specs', document.querySelector('.pd-tab'));
  document.getElementById('calc-sqft').value = 200;
  updateCalc();

  const related = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
  document.getElementById('related-grid').innerHTML = related.map(r=>productCardHtml(r)).join('');
}

function renderPdGallery(p){
  const swatch = CATEGORIES.find(c=>c.id===p.cat).swatch;
  document.getElementById('pd-gallery-main').style.background = swatch;
  const thumbs = document.getElementById('pd-thumbs');
  thumbs.innerHTML = [0,1,2].map(i=>`
    <button class="pd-thumb ${i===0?'active':''}" style="background:${swatch}" aria-label="View angle ${i+1}"></button>
  `).join('');
}
function renderColorSwatches(p){
  const el = document.getElementById('pd-color-swatches');
  el.innerHTML = COLORWAYS.map((c,i)=>`
    <button class="color-swatch ${i===0?'active':''}" style="background:${c}" aria-pressed="${i===0}" aria-label="Color option ${i+1}" onclick="selectColor(${i}, this)"></button>
  `).join('');
}
function selectColor(i, btn){
  state.currentColorIdx = i;
  [...btn.parentElement.children].forEach(c=>{c.classList.remove('active'); c.setAttribute('aria-pressed','false');});
  btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
}

function switchPdTab(tab, btn){
  document.querySelectorAll('.pd-tab').forEach(t=>t.setAttribute('aria-selected','false'));
  btn.setAttribute('aria-selected','true');
  document.getElementById('pd-tab-specs').classList.toggle('hidden', tab!=='specs');
  document.getElementById('pd-tab-reviews').classList.toggle('hidden', tab!=='reviews');
}

function updateCalc(){
  const p = state.currentProduct;
  const sqft = Math.max(1, Number(document.getElementById('calc-sqft').value) || 0);
  const withWaste = sqft * 1.1;
  const boxes = Math.ceil(withWaste / p.coverage);
  const total = boxes * p.boxPrice;
  document.getElementById('calc-result').innerHTML = `
    <div>Room size + 10% waste: <strong>${withWaste.toFixed(0)} sq ft</strong></div>
    <div>Boxes needed (${p.coverage} sq ft/box): <strong>${boxes}</strong></div>
    <div class="total">Estimated total: ₹${total.toLocaleString('en-IN')}</div>
  `;
  window._calcBoxes = boxes;
  window._calcTotal = total;
}

function addCurrentToCart(){
  const p = state.currentProduct;
  const boxes = window._calcBoxes || 1;
  addToCart(p.id, boxes, p.boxPrice);
  showToast(`Added ${boxes} box${boxes>1?'es':''} of "${p.title}" to your cart`);
}
function quickAdd(id){
  const p = PRODUCTS.find(x=>x.id===id);
  addToCart(id, 1, p.boxPrice);
  showToast(`Added "${p.title}" to your cart`);
}

/* ============================= WISHLIST ============================= */
function alertWishlist(){
  showToast(state.wishlist.size ? `Wishlist has ${state.wishlist.size} item(s)` : 'Your wishlist is empty — tap a heart icon to save items (coming soon on cards).');
}

/* ============================= CART ============================= */
function addToCart(id, qty, unitPrice){
  if(!state.cart[id]) state.cart[id] = {qty:0, price:unitPrice};
  state.cart[id].qty += qty;
  updateCartUI();
}
function changeQty(id, delta){
  if(!state.cart[id]) return;
  state.cart[id].qty += delta;
  if(state.cart[id].qty<=0) delete state.cart[id];
  updateCartUI();
}
function removeFromCart(id){ delete state.cart[id]; updateCartUI(); }
function cartCount(){ return Object.values(state.cart).reduce((a,b)=>a+b.qty,0); }
function cartTotal(){ return Object.values(state.cart).reduce((sum,item)=>sum+item.price*item.qty,0); }

function updateCartUI(){
  const count = cartCount();
  const badge = document.getElementById('cart-count');
  badge.hidden = count===0; badge.textContent = count;
  document.getElementById('cart-btn').setAttribute('aria-label', `Open cart, ${count} item${count===1?'':'s'}`);

  const body = document.getElementById('drawer-body');
  const foot = document.getElementById('drawer-foot');
  const entries = Object.entries(state.cart);

  if(entries.length===0){
    body.innerHTML = `<div class="drawer-empty"><p class="display" style="font-size:20px;">Your cart is empty</p><p>Boxes you add will show up here.</p></div>`;
    foot.hidden = true; return;
  }
  body.innerHTML = entries.map(([id,item])=>{
    const p = PRODUCTS.find(x=>x.id==id);
    return `<div class="cart-item">
      <div class="cart-thumb" style="background:${CATEGORIES.find(c=>c.id===p.cat).swatch}"></div>
      <div class="cart-item-info">
        <h4>${escapeHtml(p.title)}</h4>
        <p>₹${item.price.toLocaleString('en-IN')} / box</p>
        <div class="qty-row">
          <button class="qty-btn" aria-label="Decrease quantity of ${escapeHtml(p.title)}" onclick="changeQty(${p.id},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" aria-label="Increase quantity of ${escapeHtml(p.title)}" onclick="changeQty(${p.id},1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${p.id})">Remove</button>
        </div>
      </div>
    </div>`;
  }).join('');
  foot.hidden = false;
  document.getElementById('subtotal-amt').textContent = `₹${cartTotal().toLocaleString('en-IN')}`;
}

function toggleDrawer(open){
  document.getElementById('drawer').classList.toggle('open', open);
  document.getElementById('overlay').classList.toggle('open', open);
  document.getElementById('drawer').setAttribute('aria-hidden', String(!open));
}
document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ toggleDrawer(false); closeAuthModal(); }});

/* ============================= AUTH ============================= */
function renderAccountArea(){
  const el = document.getElementById('account-area');
  if(currentUser){
    const initials = currentUser.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    el.innerHTML = `
      <button class="account-btn" onclick="switchView('account')">
        <span class="avatar">${initials}</span>
        ${currentUser.name.split(' ')[0]}
      </button>
      <button class="icon-btn" aria-label="Log out" onclick="logout()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
      </button>`;
  } else {
    el.innerHTML = `<button class="btn btn-dark btn-sm" onclick="openAuthModal('login')">Log in</button>`;
  }
}

function openAuthModal(tab){
  const wrap = document.createElement('div');
  wrap.className = 'modal-overlay';
  wrap.id = 'auth-modal-overlay';
  wrap.onclick = (e)=>{ if(e.target===wrap) closeAuthModal(); };
  wrap.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <button class="modal-close" aria-label="Close" onclick="closeAuthModal()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <h2 id="auth-title" style="font-size:24px;margin-bottom:20px;">Welcome back</h2>
      <div class="auth-tabs">
        <button class="auth-tab" id="tab-login" aria-selected="true" onclick="switchAuthTab('login')">Log in</button>
        <button class="auth-tab" id="tab-signup" aria-selected="false" onclick="switchAuthTab('signup')">Sign up</button>
      </div>
      <form id="login-form" onsubmit="doLogin(event)">
        <div class="form-field"><label for="login-email">Email</label><input id="login-email" type="email" required></div>
        <div class="form-field"><label for="login-password">Password</label><input id="login-password" type="password" required></div>
        <p class="form-error hidden" id="login-error"></p>
        <button class="btn btn-primary btn-block" type="submit">Log in</button>
        <p class="demo-hint">Demo account — email: demo@hearthstone.com · password: demo1234</p>
      </form>
      <form id="signup-form" class="hidden" onsubmit="doSignup(event)">
        <div class="form-field"><label for="signup-name">Full name</label><input id="signup-name" required></div>
        <div class="form-field"><label for="signup-email">Email</label><input id="signup-email" type="email" required></div>
        <div class="form-field"><label for="signup-password">Password</label><input id="signup-password" type="password" minlength="6" required></div>
        <p class="form-error hidden" id="signup-error"></p>
        <button class="btn btn-primary btn-block" type="submit">Create account</button>
      </form>
    </div>`;
  document.body.appendChild(wrap);
  document.getElementById(tab==='signup' ? 'signup-name':'login-email').focus();
  if(tab==='signup') switchAuthTab('signup');
}
function closeAuthModal(){
  const el = document.getElementById('auth-modal-overlay');
  if(el) el.remove();
}
function switchAuthTab(tab){
  document.getElementById('tab-login').setAttribute('aria-selected', tab==='login');
  document.getElementById('tab-signup').setAttribute('aria-selected', tab==='signup');
  document.getElementById('login-form').classList.toggle('hidden', tab!=='login');
  document.getElementById('signup-form').classList.toggle('hidden', tab!=='signup');
}
function doLogin(e){
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  const user = USERS[email];
  if(!user || user.password !== pass){
    errEl.textContent = 'Incorrect email or password. Try the demo account below.';
    errEl.classList.remove('hidden');
    return;
  }
  currentUser = {email, name:user.name};
  closeAuthModal();
  renderAccountArea();
  showToast(`Welcome back, ${user.name.split(' ')[0]}`);
}
function doSignup(e){
  e.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const pass = document.getElementById('signup-password').value;
  const errEl = document.getElementById('signup-error');
  if(USERS[email]){
    errEl.textContent = 'An account with this email already exists.';
    errEl.classList.remove('hidden');
    return;
  }
  USERS[email] = {password:pass, name};
  currentUser = {email, name};
  ORDERS[email] = [];
  closeAuthModal();
  renderAccountArea();
  showToast(`Account created — welcome, ${name.split(' ')[0]}`);
}
function logout(){
  currentUser = null;
  renderAccountArea();
  showToast('Logged out');
  switchView('home');
}

/* ============================= CHECKOUT ============================= */
function goToCheckout(){
  if(cartCount()===0){ showToast('Your cart is empty'); return; }
  if(!currentUser){
    toggleDrawer(false);
    openAuthModal('login');
    showToast('Log in to continue to checkout');
    return;
  }
  toggleDrawer(false);
  switchView('checkout');
  document.getElementById('checkout-form-wrap').classList.remove('hidden');
  document.getElementById('order-confirmation').classList.add('hidden');
  document.getElementById('checkout-summary').innerHTML = Object.entries(state.cart).map(([id,item])=>{
    const p = PRODUCTS.find(x=>x.id==id);
    return `<div class="items"><strong>${item.qty}×</strong> ${escapeHtml(p.title)} — ₹${(item.price*item.qty).toLocaleString('en-IN')}</div>`;
  }).join('') + `<div class="total" style="margin-top:8px;">Total: ₹${cartTotal().toLocaleString('en-IN')}</div>`;
  document.getElementById('ship-name').value = currentUser.name;
}
function placeOrder(e){
  e.preventDefault();
  const orderId = 'HS-' + Math.random().toString(36).slice(2,8).toUpperCase();
  const order = {
    id: orderId,
    date: new Date().toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric'}),
    items: Object.entries(state.cart).map(([id,item])=>({title:PRODUCTS.find(x=>x.id==id).title, qty:item.qty, price:item.price})),
    total: cartTotal(),
  };
  if(!ORDERS[currentUser.email]) ORDERS[currentUser.email] = [];
  ORDERS[currentUser.email].unshift(order);

  state.cart = {};
  updateCartUI();
  document.getElementById('checkout-form-wrap').classList.add('hidden');
  document.getElementById('order-confirmation').classList.remove('hidden');
  document.getElementById('order-conf-id').textContent = `Order ${orderId} · ₹${order.total.toLocaleString('en-IN')}`;
  showToast('Order placed successfully');
}

/* ============================= ACCOUNT / ORDERS ============================= */
function renderAccount(){
  if(!currentUser){ switchView('home'); openAuthModal('login'); return; }
  document.getElementById('account-greeting').textContent = `Hi, ${currentUser.name.split(' ')[0]}`;
  const orders = ORDERS[currentUser.email] || [];
  const el = document.getElementById('orders-list');
  el.innerHTML = orders.length===0
    ? `<div class="order-card"><p>No orders yet this session. Once you check out, your orders will show up here.</p></div>`
    : orders.map(o=>`
      <div class="order-card">
        <p class="id">${o.id} · ${o.date}</p>
        ${o.items.map(it=>`<p class="items">${it.qty}× ${escapeHtml(it.title)}</p>`).join('')}
        <p class="total">Total: ₹${o.total.toLocaleString('en-IN')}</p>
      </div>`).join('');
}

/* ============================= TOAST ============================= */
function showToast(msg){
  const region = document.getElementById('toast-region');
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  region.appendChild(t);
  setTimeout(()=>t.remove(), 2600);
  document.getElementById('live-region').textContent = msg;
}

/* ============================= INIT ============================= */
initHome();
initFilters();
renderAccountArea();
updateCartUI();
