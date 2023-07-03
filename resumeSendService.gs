function resumeSendService() {
//var timestamp1 = new Date().getTime(); // proqramin calisma muddetini olcuruk
const token = 1;
const id =''; // your google SpreeadSheet key
const selection =SpreadsheetApp.openById(id);
const sheet = selection.getSheetByName('id_00004');
const data =sheet.getDataRange().getValues().slice(-token);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const form = FormApp.openById('');  //your google forms key
const formResponses = form.getResponses();

var urlError ='https://storage.googleapis.com/formfacade-public/1FAIpQLSdobuHRngdUCOI0LT5oSd3g_ETr6NI/bazarstorecareers';
var urlLogo = "https://bazarstore.az/themes/BazarStoreBeta/assets/img/cvlogo.jpg";
var urlExcel =""; //spreadshet download link
var blob = UrlFetchApp.fetch(urlLogo).getBlob();
var b64 = blob.getContentType() + ';base64,'+ Utilities.base64Encode(blob.getBytes());
var htmlLogo = "<img src=\"" + urlLogo + "\"><img src=\"data:" + b64 + "\"";


data.forEach((row,ind)=>{
var birthday = row[4];
var dd = String(row[4].getDate()).padStart(2, '0');
var mm = String(row[4].getMonth() + 1).padStart(2, '0'); 
var yyyy = row[4].getFullYear();
birthday = mm + '/' + dd + '/' + yyyy;

var keyword ="";
if(row[27]==""||row[27]==null){
   keyword =""} else {keyword ="Görüntülə"};

formResponses.length++;
var htmlPdf = `<h3> ${formResponses.length} Bazarstore İşə müraciət anketi </h3>`;
var htmlMail = `<p><strong>Bazarstore İşə müraciət anketi </strong> № ${formResponses.length} </p>`;

//Mail template
      htmlMail += `
      <p><strong>Tarix: </strong> ${today}</p>
      <p><strong>Namized: </strong> ${row[1]} </p>
      <p><strong>Qeyd:</strong> ${row[25]} </p>
      <p><strong>Generate reports</strong>:<a href=${urlExcel} rel="noopener noreferrer" style="background-color:rgb(255,255,255);color:rgb(0,51,102)" target="_blank" data-saferedirecturl=""><strong>Yüklə</strong></a></p>

     <p><strong>Foto:<a href="${row[27]}" target="_blank" data-saferedirecturl="">${keyword}</a></strong></p>

     <p><strong>Cv:<a href="" target="_blank" data-saferedirecturl=""></a></strong></p>

      
      <p><br></p>
      <p>                             </p>
<p><strong></strong><a href="https://bazarstore.az/content/13-cv-yarat" rel="noopener noreferrer" style="background-color:rgb(255,255,255);color:rgb(0,51,102)" target="_blank" data-saferedirecturl=""><strong><I>Bazarstore Karyera</I></strong></a></p>

      <p><a href="https://bazarstore.az/" rel="noopener noreferrer" target="_blank" data-saferedirecturl=${htmlLogo}><img src="" class="CToWUd" data-bit="iit"></a></p>

      <div style="color:#444;margin:20px 0"><br><I>Developed by <a>Yusif Taghiyev</a></I></div>
   </div>
   <div class="yj6qo"></div>
   <div class="yj6qo"></div>
</div>`;

//PDF template
htmlPdf +=` 
<table style="border-radius:2px;margin:2em 0 3em;min-width:400px;border:1px solid #eee;border-collapse:separate;border-spacing:1px" cellspacing="0" cellpadding="10" border="0">
   <tbody>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Ad,Soyad,Ata adı </td>
         <td>${row[1]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Cinsiyyəti</td>
         <td>${row[2]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Ailə vəziyyəti</td>
         <td>${row[3]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Doğum tarixi</td>
         <td>${birthday}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Vətəndaşlığı</td>
         <td>${row[5]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Təhsil</td>
         <td>${row[6]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Təhsil (ətraflı)</td>
         <td>${row[7]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">İş təcrübəsi (ətraflı)</td>
         <td>${row[8]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Dil Bilikləri</td>
         <td>Azərbaycan (${row[9]})<br>İngilis (${row[10]})<br>Rus (${row[11]})</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Sürücülük vəsiqəsi</td>
         <td>${row[12]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Minimum əmək haqqı (AZN)</td>
         <td>${row[13]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Çalışmaq istədiyiniz işin adı</td>
         <td>${row[14]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Çalışmaq istədiyiniz bölgə</td>
         <td>${row[15]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">E-mail</td>
         <td><a href="${row[16]}" target="_blank">${row[16]}</a></td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Telefon nömrəsi</td>
         <td>${row[17]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Ev telefon nömrəsi</td>
         <td>${row[18]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Qeydiyyat ünvanı</td>
         <td>${row[19]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Faktiki yaşayış ünvanı</td>
         <td>${row[20]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Hərbi xidmətdə olmusuzmu?</td>
         <td>${row[21]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Sağlamlıqla əlaqəli hər hansı probleminiz varmı?</td>
         <td>${row[22]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Nə vaxtsa cinayət məsuliyyətinə cəlb olunmusunuzmu?</td>
         <td>${row[23]}</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">İşə başlamağa nə vaxt hazırsınız?</td>
         <td>${row[24]}</td>
      </tr>
      <tr style="background:#f9f9f9">
         <td style="font-weight:bold;width:180px">Yekun qeyd</td>
         <td>${row[25]}.</td>
      </tr>
      <tr style="background:#fbfbfb">
         <td style="font-weight:bold;width:180px">Məlumatlarımın doğruluğunu təsdiqləyirəm</td>
         <td>${row[26]}</td>
      </tr>
   </tbody>
</table>
<p></p>
<p><strong>Bazarstore Karyera</strong></p>
<p><a href="https://bazarstore.az/" rel="noopener noreferrer" target="_blank" data-saferedirecturl=${htmlLogo}><img src="" class="CToWUd" data-bit="iit"></a></p>
<div style="color:#444;margin:20px 0"><br><I>Developed by <a>Yusif Taghiyev</a></I></div>
</div>
<div class="yj6qo"></div>
<div class="yj6qo"></div>
</div>`;

const blob =Utilities.newBlob(htmlPdf,MimeType.HTML);
blob.setName(`${formResponses.length} ${row[1]}.pdf`);
const email = ''; //gonderilecek mail
const email1 ='yusif.taghiyev@gmail.com';   //test mail
const subject = `Yeni Cv anketi daxil oldu: № ${formResponses.length}`;
const display = "Bazarstore Careers";

GmailApp.sendEmail(email, subject, htmlMail, {htmlBody : htmlMail ,name:display,attachments:[blob.getAs(MimeType.PDF)]});

/*var timestamp2 = new Date().getTime();
var difference = ((timestamp2 - timestamp1)/1000);
Logger.log("Succesfull run: " + difference + "seconds.");*/

})
}
