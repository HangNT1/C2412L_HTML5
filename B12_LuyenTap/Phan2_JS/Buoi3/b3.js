

var mts = [
    { mamay: "01", tenmay: "may01", gia: 2000, mausac: "do", loaimay: "loai 1", ngayramat: "07/07/2002" },
    { mamay: "02", tenmay: "may02", gia: 2000, mausac: "xanh", loaimay: "loai 1", ngayramat: "08/08/2008" }
];

function load(){
var table = document.getElementById("table");
table.innerHTML ="";
    for(let i = 0; i < mts.length; i++){
        var mt = mts[i];
        table.innerHTML+=`
            <tr>
                    <td>${i+1}</td>
                    <td>${mt.mamay}</td>
                    <td>${mt.tenmay}</td>
                    <td>${mt.gia}</td>
                    <td>${mt.mausac}</td>
                    <td>${mt.loaimay}</td>
                    <td>${mt.ngayramat}</td>
                    <td ><button>Xoa</button>
                    <button>Detail</button></td>
                    
                </tr>
        `;
    }
}
load();