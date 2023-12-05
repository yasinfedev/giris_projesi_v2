// Add your code here

window.onload = function() {

document.getElementById("girisYapalani").style.display = "none";
document.getElementById("kayitOlAlani").style.display = "none";
document.getElementById("karsilamaEkrani").style.display = "block";
document.getElementById("divDeneme").style.display = "none";

  
};


function girisKontrolu() {
      var kullaniciAdi = document.getElementById("kullaniciAdi").value;
      var password = document.getElementById("password").value;

      if (kullaniciAdi == "yasinfedev") {
        if (password == 12345) {
          alert("Giriş başarılı. Yönlendiriliyorsunuz.")
        } else {
          alert("Şifreniz yanlış.")
        }
      } else {
        alert("Kullanıcı adınız hatalı.")
      }
}


function sifreEslesesmi() {

      var passwordGiris = document.getElementById("passwordGiris").value;
      var passwordTekrar = document.getElementById("passwordTekrar").value;

      if (passwordGiris == passwordTekrar) {
        alert("Kayıt yapılıyor...")
      } else {
        alert("Şifreler aynı değil!")
      }

      
}

function girisLayout() {
      document.getElementById("divDeneme").innerHTML = "<b>Giriş panelini deneyin</b> -> <strong>Kullanıcı adı:</strong> yasinfedev <strong>Şifre:</strong> 12345";
     
      document.getElementById("kayitOlAlani").style.display = "none";
      document.getElementById("girisYapalani").style.display = "block";
      document.getElementById("karsilamaEkrani").style.display = "none";
      document.getElementById("divDeneme").style.display = "block";
      


      
}

function kayitLayout() {
      document.getElementById("divDeneme").innerHTML = "Kayıt panelini farklı şifreler girerek deneyin.";
      document.getElementById("girisYapalani").style.display = "none";
      document.getElementById("kayitOlAlani").style.display = "block";
      document.getElementById("karsilamaEkrani").style.display = "none";
      document.getElementById("divDeneme").style.display = "block";
      

      }
