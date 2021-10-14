function hitungBarang(barang, qty) {
  let harga = 0;
  let potongan = 0;
  let totalBayar = 0;
  if (barang === "A") {
    harga = 4550 * qty;
    if (qty > 13) {
      potongan = harga / qty;
      totalBayar = harga - potongan;
      console.log(harga, potongan);
      console.log(totalBayar);
    }
  }
}
