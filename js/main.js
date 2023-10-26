$(document).ready(function () {
    console.log("jQuery is working!");
  });
  let isFileUploaded = false;
  let sidebarOpened = false;
  $(".navbar-burger").click(function () {
    // toggle sidebar
    if (sidebarOpened) {
      $(".sidebar").animate({ left: "-100%" }, 500);
      sidebarOpened = false;
      return;
    } else {
      $(".sidebar").animate({ left: "0%" }, 500);
      sidebarOpened = true;
    }
    // sidebar animate from left
    $(".sidebar").animate({ left: "0" }, 500);
  });

  // Code to handle file processing
  $('input[type="file"]').change(function (e) {
    let fileName = e.target.files[0].name;
    isFileUploaded = true;
    console.log(e.target.files[0]);

    // Parse local CSV file

    Papa.parse(e.target.files[0], {
      complete: function (results) {
        // append to table
        let tableBody = $("#titanic-table");
        for (let i = 1; i < 100; i++) {
          let row = $("<tr>");
          for (let j = 0; j < 4; j++) {
            let cell = $("<td>").text(results.data[i][j]);
            row.append(cell);
          }
          tableBody.append(row);
        }
      },
    });
  });