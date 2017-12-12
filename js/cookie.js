//cookie 的增删改查 

/*
 * 增加cookie/修改cookie
 * @param name:cookie名;value:cookie值;expires:过期时间;path:路径;domain:域名
*/
function setCookie(name,value,expires,path,domain){
	//document.cookie= name+ "=" + value;
	var myCookie = name + "=" + encodeURIComponent(value);
	if (expires) {//设置过期时间
		var myDate = new Date();
		myDate.setDate(myDate.getDate()+expires);
		myCookie = myCookie+";expires="+myDate;
	}
	if(path){//设置路径
		myCookie = myCookie +";path="+path;
	}
	if(domain){//设置域名
		myCookie = myCookie+";domain"+domain;
	}
	document.cookie = myCookie;
}
/*
 * 删除cookie
 * @param cookie名
*/
function moveCookie(name){
	var myCookie = name+"=;expires=-1";//过期时间设为-1，就等于删除
	document.cookie = myCookie;
}
/*
 * 查询某一个cookie的值
 * @param cookie名
 * @return  
*/
function select(name){
	var myCookie = document.cookie;
	var aCookie = myCookie.split("; ");
	for(var i=0;i<aCookie.length;i++){
		var temp = aCookie[i].split("=");
		if(temp[0]==name){
			return decodeURIComponent(temp[1]);
		}
	}
}
