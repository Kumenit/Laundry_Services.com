  console.log("enter");   

   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		/*const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');
		
		const t=document.querySelector('.t');
		const d=document.querySelector('.d');
		*/
		
		const title=document.querySelector('.ho');
		
	

		link.forEach(el => {
			el.addEventListener('click', () => {
				//langEl.querySelector('.active').classList.remove('active');
				//el.classList.add('active');

				const attr = el.getAttribute('language');
                title.textContent =data[attr].title;
				//titleEl.textContent = data[attr].title;
				//descrEl.textContent = data[attr].description;
				
				
				
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "Home",
				
			  },
			  "amharic":
			  {
				  "title":"ዜነን",
				  
				

			  }
			  
			 
			}