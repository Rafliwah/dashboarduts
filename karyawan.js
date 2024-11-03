function searchTable() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const table = document.getElementById("dataKaryawan");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        let found = false;
        for (let j = 0; j < td.length; j++) {
            if (td[j] && td[j].textContent.toLowerCase().includes(searchInput)) {
                found = true;
                break;
            }
        }
        tr[i].style.display = found ? "" : "none";
    }
}

function tambahKaryawan() {
    alert("Tambah karyawan baru!");
    // Logika untuk menambah data karyawan
}

function editKaryawan() {
    alert("Edit data karyawan!");
    // Logika untuk mengedit data karyawan
}

function deleteKaryawan() {
    if (confirm("Yakin ingin menghapus data karyawan ini?")) {
        alert("Data karyawan dihapus!");
        // Logika untuk menghapus data karyawan
    }
}
