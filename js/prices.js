const pricesDE = [
  {
    section: 'NEUMODELLAGE (Mit Pulver (Acryl)-System)',
    rows: [
      ['Natur oder Pulver (Acryl)', '33€', '38€'],
      ['Pink & White System', '37€', '43€'],
      ['Shellac oder Pulver', '37€', '43€'],
      ['Babyboomer', '37€', '43€'],
    ],
    header: ['','Auffüllen','Neu']
  },
  {
    section: 'MANIKÜRE (inkl. Massage)',
    rows: [
      ['Klarlack', '18€'],
      ['Farbe', '20€'],
      ['Mit Shellac', '32€'],
    ],
    header: ['', 'Preis']
  },
  {
    section: 'PEDIKÜRE (inkl. Massage & Peeling & Meersalz)',
    rows: [
      ['Klarlack', '33€'],
      ['Farbe', '35€'],
      ['Mit Shellac', '45€'],
    ],
    header: ['', 'Preis']
  },
  {
    section: 'ZEHENMODELLAGE',
    rows: [
      ['Verlängerung oder French', '45€'],
      ['Mit Shellac oder French', '40€'],
      ['Kurzfeile & Lackieren', '12€'],
    ],
    header: ['', 'Preis']
  },
  {
    section: 'NAIL ART',
    rows: [
      ['Glitzer', '+5€'],
      ['Strassstein', '+0,5€'],
      ['Kürzen, Feile & Lackieren o. French', '10€'],
      ['Ablösen', '10€ oder 15€'],
      ['Hand Design', '3€'],
    ],
    header: ['', 'Preis']
  }
];

const pricesEN = [
  {
    section: 'NEW MODELING (With Powder (Acrylic) System)',
    rows: [
      ['Natural or Powder (Acrylic)', '33€', '38€'],
      ['Pink & White System', '37€', '43€'],
      ['Shellac or Powder', '37€', '43€'],
      ['Babyboomer', '37€', '43€'],
    ],
    header: ['', 'Refill', 'New']
  },
  {
    section: 'MANICURE (incl. Massage)',
    rows: [
      ['Clear Polish', '18€'],
      ['French or Color', '20€'],
      ['With Shellac', '32€'],
    ],
    header: ['', 'Price']
  },
  {
    section: 'PEDICURE (incl. Massage & Peeling & Sea Salt)',
    rows: [
      ['Clear Polish', '33€'],
      ['French or Color', '35€'],
      ['With Shellac', '45€'],
    ],
    header: ['', 'Price']
  },
  {
    section: 'TOE MODELING',
    rows: [
      ['Extension or French', '45€'],
      ['With Shellac or French', '40€'],
      ['Shorten, File & Polish', '12€'],
    ],
    header: ['', 'Price']
  },
  {
    section: 'NAIL ART',
    rows: [
      ['Glitter', '+5€'],
      ['Rhinestone', '+0.5€'],
      ['Shorten, File & Polish or French', '10€'],
      ['Removal', '10€ or 15€'],
      ['Hand Design', '3€'],
    ],
    header: ['', 'Price']
  }
];

function renderPriceTable(prices, el) {
  el.innerHTML = prices.map(section => `
    <h3>${section.section}</h3>
    <table class="price-table">
      <thead><tr>${section.header.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>
        ${section.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
  renderPriceTable(pricesDE, document.getElementById('price-table-de'));
  renderPriceTable(pricesEN, document.getElementById('price-table-en'));
}); 