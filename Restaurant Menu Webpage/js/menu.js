/* ============================================================
   EASY MENU EDITOR
   Change the items below only. Add/remove objects as needed.
   image = any image URL. You can also use a local file path such as
   "assets/my-biryani.jpg" if you add the image to the assets folder.
   ============================================================ */
const menuItems = [
  {category:'Biryani',name:'Kolkata Chicken Biryani',bengali:'কলকাতা চিকেন বিরিয়ানি',price:260,description:'Fragrant basmati rice, tender chicken, potato and a gentle Kolkata-style spice blend.',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bengali%20style%20chicken%20biryani%2C%20Kolkata%20-%20West%20Bengal%20-%20DSC%200020.jpg',tag:'Kolkata Classic'},
  {category:'Mains',name:'Bengali Fish Curry',bengali:'বাঙালি মাছের ঝোল',price:240,description:'A homestyle fish curry with warm spices, tomato and the comforting flavour of Bengal.',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bengali%20Fish%20Curry.JPG',tag:'Bengali Favourite'},
  {category:'Breakfast',name:'Luchi & Alur Dom',bengali:'লুচি ও আলুর দম',price:150,description:'Fluffy golden luchi with slow-cooked potato curry—the perfect Bengali breakfast plate.',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Luchi%20Thali.jpg',tag:'Sunday Special'},
  {category:'Mains',name:'Bengali Mutton Curry',bengali:'কষা মাংস',price:320,description:'Slow-cooked mutton in a rich, dark onion-spice gravy, inspired by Kolkata Sunday lunches.',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bengali%20mutton%20curry%20-%20Kolkata%20-%20West%20Bengal.jpg',tag:'Chef Special'},
  {category:'Sweets',name:'Bengali Sandesh',bengali:'সন্দেশ',price:90,description:'Soft, delicate chhana sweet with a gentle milky richness and festive Bengali character.',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bengali%20Sandesh%20-%201.jpg',tag:'Mishti'},
  {category:'Sweets',name:'Payesh',bengali:'পায়েস',price:110,description:'Creamy Bengali rice pudding simmered with milk, sugar and aromatic cardamom.',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Payesh.jpg',tag:'Homestyle'}
];

const grid=document.getElementById('menuGrid');
const filters=document.getElementById('filters');
const categories=['All',...new Set(menuItems.map(item=>item.category))];
let active='All';
function renderFilters(){filters.innerHTML=categories.map(c=>`<button class="filter-btn ${c===active?'active':''}" onclick="setFilter('${c}')">${c}</button>`).join('')}
function renderMenu(){const list=active==='All'?menuItems:menuItems.filter(x=>x.category===active);grid.innerHTML=list.map(item=>`<div class="col-md-6 col-xl-4"><article class="food-card"><img class="food-img" src="${item.image}" alt="${item.name}" loading="lazy"><div class="food-body"><div class="d-flex justify-content-between align-items-start gap-2"><div><div class="food-title">${item.name}</div><div class="bengali-name">${item.bengali}</div></div><div class="price">₹${item.price}</div></div><p class="food-desc mt-3 mb-3">${item.description}</p><span class="tag">${item.tag}</span></div></article></div>`).join('')}
function setFilter(category){active=category;renderFilters();renderMenu()}
renderFilters();renderMenu();
