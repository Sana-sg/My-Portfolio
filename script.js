$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY>20){
				$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
	});
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
	var typed=new Typed(".printing",{
		strings: ["Web Developer","Programmer","Frontend Developer","Backend Developer"],
		typeSpeed:100,
		backSpeed: 60,
		loop: true

	});
});
const tabs= document.querySelectorAll('[data-target]'),
	tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
	tab.addEventListener('click',()=>{
		const target=document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('edu-active')
		});
		target.classList.add('edu-active')

		tab.forEach(tab=>{
			tab.classList.remove('edu-active')
		});
		tab.classList.add('edu-active')
	});
});

const skillsContent =document.getElementByClassName('skills-content'),
	skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
	let itemClass = this.parentNode.className

	for(i= 0;i<skillsContent.length;i++){
		skillsContent[i].className = 'skills-content skill-inactive'
	}
	if(itemClass === 'skills-content skill-inactive'){
		this.parentNode.className = 'skills-content skill-active'
	}
}
skillsHeader.forEach((el)=>{
	el.addEventListener('click',toggleSkills)
});

// let swiper = new Swiper(".project-container", {
//         cssMode: true,
//         loop: true,

//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         pagination: {
//           el: ".swiper-pagination",
//           clickable:true,
//         },
//       });