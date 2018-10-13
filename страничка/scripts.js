var list = [
	'Яблоко',
	'Груша',
	'Апельсин'
];


document.getElementById('Subscribe').onclick=function(){
	var elementList = document.getElementById('list');
	var fname = document.getElementById('inputFirstname');
	var lname = document.getElementById('inputLastname');
	var email = document.getElementById('SubscribeEmail');
	
	lname.classList.remove('is-invalid');
	fname.classList.remove('is-invalid');
	email.classList.remove('is-invalid');
				
	var string ='';
	
	if((fname.value!='')&&lname.value!=''){
		if(email.value.indexOf('@')>=0 && email.value.indexOf('.')>=0){
				elementList.innerHTML = 
				'<li>'+ fname.value + '</li>' + 
				'<li>'+ lname.value + '</li>' +
				'<li>'+ email.value + '</li>';
				fname.value='';
				lname.value='';
				email.value='';
				
				
		}
				else{
					email.classList.add('is-invalid');
				}
	}
	else{
		fname.classList.add('is-invalid');
		lname.classList.add('is-invalid');
	}
};



var elementList = document.getElementById('list');
	elementList.innerHTML ='<li>' + list.join('</li><li>')+ '</li>';