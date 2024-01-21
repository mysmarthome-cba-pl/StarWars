import {
  currentModel,
  itemsPerPage,
  currentPage,
  createTableAndInsert,
} from "./script.js";

export function updateTableContent() {
  let limitedArray;
  let table = document.getElementById("mainTable");
  // table.innerHTML = "";
  console.log("currentModel.length ", currentModel.length);
  const startIdx = itemsPerPage === "-" ? 0 : (currentPage - 1) * itemsPerPage;
  const endIdx =
    itemsPerPage === "-" ? currentModel.length : currentPage * itemsPerPage;

  console.log("currentModel.length ", currentModel.length);
  console.log("currentPage * itemsPerPage ", currentPage * itemsPerPage);

  //   // for (let i = startIdx; i < endIdx && i < currentModel.length; i++) {
  //   //   const row = table.insertRow();
  //   //   const cell = row.insertCell(0);
  //   //   cell.textContent = currentModel[i].title; // Assuming title is a property in your currentModel
  //   // }
  /*
    const rows = table.getElementsByTagName("tr");
 
    for (let i = 1; i < rows.length; i++) {
      const rowId = parseInt(rows[i].cells[0].textContent);
      rows[i].style.display = rowId === filterValue ? "" : "none";
  */
  const rows = table.getElementsByTagName("tr");
  for (let i = startIdx; i < endIdx && i < rows.length; i++) {
    // console.log("startIdx ", startIdx);
    // console.log("endIdx ", endIdx);
    // table.rows[i].style.display = i < value ? "" : "none";
    // table.rows[i].style.display = i < itemsPerPage ? "" : "none";
    console.log("rows[i] ", rows[i]);
    // const rowId = parseInt(rows[i].cells[0].textContent);
    limitedArray += rows[i];
  }
  createTableAndInsert(limitedArray);
}
