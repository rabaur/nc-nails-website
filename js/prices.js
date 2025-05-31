const pricesDE = [
  {
    section: 'NEUMODELLAGE (Mit Pulver (Acryl)-System)',
    rows: [
      ['Natur', '30€', '35€'],
      ['Farbe', '35€', '38€'],
      ['French', '35€', '38€'],
      ['Babyboomer', '35€', '38€'],
    ],
    header: ['','Auffüllen','Neu']
  },
  {
    section: 'MANIKÜRE (inkl. Massage)',
    rows: [
      ['Klarlack', '15€'],
      ['Farbe', '18€'],
      ['Mit Shellac', '29€'],
    ],
    header: ['', 'Preis']
  },
  {
    section: 'PEDIKÜRE (inkl. Massage & Peeling & Meersalz)',
    rows: [
      ['Klarlack', '30€'],
      ['Farbe', '32€'],
      ['Mit Shellac', '45€'],
    ],
    header: ['', 'Preis']
  },
  {
    section: 'ZEHENMODELLAGE',
    rows: [
      ['Mit French', '30€'],
      ['Mit Farbe', '30€'],
      ['Kürzen, Feilen & Lackieren', '12€'],
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
      ['Natural', '30€', '35€'],
      ['Color', '35€', '38€'],
      ['French', '35€', '38€'],
      ['Babyboomer', '35€', '38€'],
    ],
    header: ['', 'Refill', 'New']
  },
  {
    section: 'MANICURE (incl. Massage)',
    rows: [
      ['Clear Polish', '15€'],
      ['Color', '18€'],
      ['With Shellac', '29€'],
    ],
    header: ['', 'Price']
  },
  {
    section: 'PEDICURE (incl. Massage & Peeling & Sea Salt)',
    rows: [
      ['Clear Polish', '30€'],
      ['Color', '32€'],
      ['With Shellac', '45€'],
    ],
    header: ['', 'Price']
  },
  {
    section: 'TOE MODELING',
    rows: [
      ['With French', '30€'],
      ['With Color', '30€'],
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