function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "content") {
        x.className += " responsive";
    } else {
        x.className = "content";
    }
}

function emailValidasi (email){
	var regex =/^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/;
	return regex.test(email);
}

function nomorValidasi (telp){
	var regexno =/^[^0]\d+$/;
	return regexno.test(telp);
}

function interima() {
	var a=document.forms['pengaduan']['nama'].value;
	var b=document.forms['pengaduan']['email'].value;
	var c=document.forms['pengaduan']['kode'].value;
	var c2=document.forms['pengaduan']['telp'].value;
	var d=document.forms['pengaduan']['pariwisata'].value;
	var e=document.forms['pengaduan']['alamat'].value;
	var f=document.forms['pengaduan']['pesan'].value;
	var g=document.forms['pengaduan']['gambar'].value;

	if (a=="" || b=="" || c=="Kode Negara" || c2=="" || d=="" || e=="" || f=="" || g=="") {
		alert("Data tidak boleh kosong");
	} else if (!emailValidasi(b)) {
		alert("Email tidak valid");
	} else if (!nomorValidasi(c2)) {
		alert("Nomor tidak valid");
	} else {
		alert("Terima kasih atas pengaduan Anda.");
	}
}

