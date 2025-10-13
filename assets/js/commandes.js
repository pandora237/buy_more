let orders = getOrderUser()
console.log(' orders : ', orders)


const contairnerOrders = document.querySelector('#contairner-orders')

function updateOrdersHtml() {

    contairnerOrders.innerHTML = '';
    orders.forEach(elt => {
        const id_prod = JSON.parse(elt.id_prod);
        const products = db.products.filter(item => id_prod.includes(item.id));

        console.log('orders.id_prod : ', products);

        const productsHtml = products.map(p => `<p>• ${p.nom}</p>`).join('');

        const item = `
    <div class="commande-card">
      <div class="commande-header">
        <div>
          <h3>Commande #${elt?.id ?? 0}</h3>
          <p class="commande-date">${elt?.date}</p>
        </div>
        <span class="badge ${elt?.status === 'paid'
                ? 'success'
                : elt?.status === 'pending'
                    ? 'warning'
                    : elt?.status === 'cancel'
                        ? 'danger'
                        : 'default'
            }">
          ${elt?.status}
        </span>
      </div>

      <div class="commande-items">
        ${productsHtml}
      </div>

      <div class="commande-footer">
        <p class="prix-total">Total : ${elt?.total} ${elt?.devise}</p>
        <div class="commande-actions">
          <button class="btn btn-secondary">Voir détails</button>
        </div>
      </div>
    </div>
  `;

        contairnerOrders.innerHTML += item;
    });


}


updateOrdersHtml()