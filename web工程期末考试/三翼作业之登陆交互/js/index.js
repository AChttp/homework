window.onload=function(){
	var Gdate=document.getElementById("input_button");
	var getdate = document.getElementById("getdate");
	var passwordwrong = document.getElementById("signup_from_password_wrong");
	var usernamewrong = document.getElementById("signup_from_usename_wrong");
	var codewrong = document.getElementById("signup_from_code_wrong");
	Gdate.onclick = function(){
		var usename = document.getElementById("signup_from_usename_input").value;
		var password = document.getElementById("signup_from_password_input").value;
		var code = document.getElementById("signup_from_code_input").value;
		var xhr=null;
		if (window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		} else {
			xhr=ActiveXObject("Microsoft.XMLHTTP");
			
		}
		xhr.withCredentials=true;
		xhr.open('POST',"https://test.acver.xyz/login.php","true");
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send("username="+usename+"&password="+password+"&code="+code);
		xhr.onreadystatechange = function()
		{
			if (xhr.readyState == 4 && xhr.status == 200)
			{
				jsonText = JSON.parse(xhr.responseText);
				showResponse(jsonText);
			}
		}
		
	}
	
	function showResponse(jsonText){
		switch(jsonText.data.sex){
			case "0":
			
				jsonText.data.sex = "男";
				break;
			case "1":
				jsonText.data.sex = "女";
				break;
		}
		switch(jsonText.code)
		{
			case 0:
				console.log(0);
				getdate.innerHTML=" 姓名："+jsonText.data.name+"<br>"+" 性别："+jsonText.data.sex+"<br>"+" 年龄："+jsonText.data.age+"<br>"+" 手机号码："+jsonText.data.other.phone+"<br>"+" 地址："+jsonText.data.other.address;
				passwordwrong.innerHTML="";
				codewrong.innerHTML="";
				break;
			case 1:
				codewrong.innerHTML="请输入所有选项";
				break;
			case 2:
				passwordwrong.innerHTML="账号密码格式错误";
				break;
			case 3:
				passwordwrong.innerHTML="账号密码错误";
				break;
			case 4:
				codewrong.innerHTML="验证码错误";
				break;
		}
		
		console.log(jsonText.code);	
	}
	var img_img = document.getElementById("signup_from_code_input_img_img");
	img_img.onclick = function(){
		img_img.setAttribute("src","http://tech.sky31.top/code.php");
	}
	
	
}
