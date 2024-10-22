const goodProducts = [];
const badProducts = [];
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];
for (const product of products) {
  if (product.sellCount > 20) {
    goodProducts.push(product.name);
  }
  if (product.sellCount < 20) {
    badProducts.push(product.name);
  }
}
console.log(`Good products:`, goodProducts, `Bad products:`, badProducts);
