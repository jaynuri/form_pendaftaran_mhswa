// primits
// jainury
console.info("primits");

let root = document.getElementById("data_mahasiwa_list");
let create = document.getElementById("create");
let i = document.getElementById("input_mahasiswa");
let f = document.getElementById("floating");
let table_data = [];

//

let edit_data = document.getElementById("form_edit_mahasiswa");
let edit_table = [];
//
let f_m = document.getElementById("floating");
let m_p = document.getElementById("form_edit_mahasiswa");
//
let close = document.getElementById("close");
i.addEventListener("submit", (event) => {
  event.preventDefault();
  let nim = event.target.nim.value;
  let nama = event.target.nama.value;
  let alamat = event.target.alamat.value;
  let gender = event.target.jenis_kelamin.value;

  table_data.push({
    nim_m: nim,
    nama_m: nama,
    alamat_m: alamat,
    gender_m: gender,
  });
  event.target.nim.value = "";
  event.target.nama.value = "";
  event.target.alamat.value = "";
  event.target.jenis_kelamin.value = "laki - laki";

  render();
});

function render() {
  root.innerHTML = ` <thead>
  <tr>
    <th>NIM</th>
    <th>NAMA</th>
    <th>ALAMAT</th>
    <th>JENIS KELAMIN</th>
    <th style="width: 150px;"></th>
  </tr>
</thead>
<tbody>`;

  table_data.forEach((e, i) => {
    root.innerHTML += `
   
    <tr style="text-align: center;">
      <td>${e.nim_m}</td>
      <td>${e.nama_m}</td>
      <td>${e.alamat_m}</td>
      <td>${e.gender_m}</td>
      <td class="table_button"><a style="background-color: #44b444;" onclick="edit()">edit</a><a style="background-color: #c22828;" href="">hapus</a></td>
    </tr>
  </tbody>
    
    `;
  });
}
function edit() {
  floating_menu();
}

edit_data.addEventListener("submit", (event) => {
  event.preventDefault();
  let nim_e = event.target.nim_edit.value;
  let nama_e = event.target.nama_edit.value;
  let alamat_e = event.target.alamat_edit.value;
  let jenis_kelamin_e = event.target.jenis_kelamin_edit.value;

  edit_table.push({
    nim_edit_data: nim_e,
    nama_edit_data: nama_e,
    alamat_edit_data: alamat_e,
    gender_edit_data: jenis_kelamin_e,
  });
  event.target.nim_edit.value = "";
  event.target.nama_edit.value = "";
  event.target.alamat_edit.value = "";
  event.target.jenis_kelamin_edit.value = "laki - laki";
  edit_render();
});
function edit_render() {
  root.innerHTML = `<thead>
  <tr>
    <th>NIM</th>
    <th>NAMA</th>
    <th>ALAMAT</th>
    <th>JENIS KELAMIN</th>
    <th style="width: 150px;"></th>
  </tr>
</thead>
<tbody>`;
  edit_table.forEach((e, i) => {
    root.innerHTML += ` <tr style="text-align: center;">
    <td>${e.nim_edit_data}</td>
    <td>${e.nama_edit_data}</td>
    <td>${e.alamat_edit_data}</td>
    <td>${e.gender_edit_data}</td>
    <td class="table_button"><a style="background-color: #44b444; cursor: pointer;" href="#" onclick="edit()">edit</a><a style="background-color: #c22828;" href="">hapus</a></td>
  </tr>
</tbody>`;
  });
}
function clear() {
  root.innerHTML = `
  <thead>
  <tr>
    <th>NIM</th>
    <th>NAMA</th>
    <th>ALAMAT</th>
    <th>JENIS KELAMIN</th>
    <th style="width: 150px;"></th>
  </tr>
</thead>
<tbody>
  <tr style="text-align: center;">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  
  <td class="table_button"><a style="background-color: #44b444; cursor: pointer;" onclick="edit()">edit</a><a style="background-color: #c22828; cursor: pointer;" href="">hapus</a></td>
  </tr>
</tbody>`;
}
function floating_menu() {
  if (f_m.style.display === "none") {
    f_m.style.display = "flex";
    f_m.style.justifyContent = "center";
    f_m.style.alignItems = "center";

    clear();
  } else {
    f_m.style.display = "none";
  }
}

function cl() {
  f_m.style.display = "none";
}
