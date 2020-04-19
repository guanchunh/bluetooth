var check = document.querySelector('.submit');
var display = document.querySelector('.display');
check.addEventListener('click', checkey);
 function checkey(e) {
 	var key = document.getElementById('keyId').value;
 	
 	if(key!='1234')
 	{
 		str='';
 		str+="代碼錯誤!請重新輸入!";
 		display.innerHTML=str;
 		//alert("代碼錯誤!!");
 		
 	}
 	else
 	{
 		str='';
 		str+="ok! 寶箱已開啟";
 		display.innerHTML=str;
 		//alert("代碼正確 寶箱已開啟!");
 	}
 	
 }