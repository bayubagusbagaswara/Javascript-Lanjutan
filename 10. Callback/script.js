/**
 * todo Synchronous Callback
 */
function tampilkanPesan(haloCallback) {
  const nama = prompt("Masukkan nama: ");
  haloCallback(nama);
}

tampilkanPesan((nama) => alert(`Halo, nama saya ${nama}`));

/**
 * todo Asynchronous Callback
 */
function getDataMahasiswa(url, succes, error) {}
