function sendToWhatsApp() {
    let nama = document.getElementById("nama").value;
    let tanggal_lahir = document.getElementById("tanggal_lahir").value;
    let alamat = document.getElementById("alamat").value;
    let domisili = document.getElementById("domisili").value;
    let pekerjaan = document.getElementById("pekerjaan").value;
    let status = document.getElementById("status").value;
    let kontak = document.getElementById("kontak").value;
    
    let message = `Pendaftaran:%0A` +
        `Nama: ${nama}%0A` +
        `Tanggal Lahir: ${tanggal_lahir}%0A` +
        `Alamat: ${alamat}%0A` +
        `Domisili: ${domisili}%0A` +
        `Pekerjaan: ${pekerjaan}%0A` +
        `Status Pernikahan: ${status}%0A` +
        `Kontak: ${kontak}`;
    
    let whatsappURL = `https://wa.link/4ys8v4?text=${message}`;
    window.open(whatsappURL, "_blank");
}