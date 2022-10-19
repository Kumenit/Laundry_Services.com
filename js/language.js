  console.log("enter");

   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		/*const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');

		const t=document.querySelector('.t');
		const d=document.querySelector('.d');
		*/
    const d1=document.querySelector('.d1');
    const d2=document.querySelector('.d2');
		const d3=document.querySelector('.d3');
    const d4=document.querySelector('.d4');
    const d5=document.querySelector('.d5');
    const d6=document.querySelector('.d6');

    const d8=document.querySelector('.d8');
    const d9=document.querySelector('.d9');
    const d10=document.querySelector('.d10');
    const d11=document.querySelector('.d11');
    const d12=document.querySelector('.d12');
    const d13=document.querySelector('.d13');
    const d14=document.querySelector('.d14');




		const title=document.querySelector('.ho');
    const t1=document.querySelector('.t1');
    const t2=document.querySelector('.t2');
    const t3=document.querySelector('.t3');
    const t4=document.querySelector('.t4');
    const t5=document.querySelector('.t5');
    const t6=document.querySelector('.t6');
    const t7=document.querySelector('.t7');
    const t8=document.querySelector('.t8');
    const t9=document.querySelector('.t9');
    const t10=document.querySelector('.t10');
    const t11=document.querySelector('.t11');
    const t12=document.querySelector('.t12');
    const t13=document.querySelector('.t13');
    const t14=document.querySelector('.t14');
    const t15=document.querySelector('.t15');
    const t16=document.querySelector('.t16');
    const t17=document.querySelector('.t17');
    const t18=document.querySelector('.t18');
    const t19=document.querySelector('.t19');
    const t20=document.querySelector('.t20');
    const t21=document.querySelector('.t21');

    const t27=document.querySelector('.t27');

    const a1=document.querySelector('.a1');
    const a2=document.querySelector('.a2');
    const a3=document.querySelector('.a3');
    const a4=document.querySelector('.a4');
    const a5=document.querySelector('.a5');
    const a6=document.querySelector('.a6');
    const a7=document.querySelector('.a7');
    const a8=document.querySelector('.a8');
    const a9=document.querySelector('.a9');
    const a10=document.querySelector('.a10');
    const a11=document.querySelector('.a11');
    const a12=document.querySelector('.a12');
    const a13=document.querySelector('.a13');
    const a14=document.querySelector('.a14');
    const a15=document.querySelector('.a15');

    const k1=document.querySelector('.k1');
    const k2=document.querySelector('.k2');
    const k3=document.querySelector('.k3');
    const k4=document.querySelector('.k4');
    const k5=document.querySelector('.k5');
    const k6=document.querySelector('.k6');
    const k7=document.querySelector('.k7');

    const m=document.querySelector('.m');
    const m1=document.querySelector('.m1');
    const m2=document.querySelector('.m2');
    const m3=document.querySelector('.m3');
    const m4=document.querySelector('.m4');
    const m5=document.querySelector('.m5');
    const m6=document.querySelector('.m6');

    const s=document.querySelector('.s');


		link.forEach(el => {
			el.addEventListener('click', () => {
				//langEl.querySelector('.active').classList.remove('active');
				//el.classList.add('active');

				const attr = el.getAttribute('language');
                title.textContent =data[attr].title;


        d1.textContent =data[attr].d1;
        d2.textContent =data[attr].d2;
				d3.textContent =data[attr].d3;
        d4.textContent =data[attr].d4;
        d5.textContent =data[attr].d5;
        d6.textContent =data[attr].d6;

        d8.textContent =data[attr].d8;
        d9.textContent =data[attr].d9;
        d10.textContent =data[attr].d10;
        d11.textContent =data[attr].d11;
        d12.textContent =data[attr].d12;
        d13.textContent =data[attr].d13;
        d14.textContent =data[attr].d14;

        t1.textContent =data[attr].t1;
        t2.textContent =data[attr].t2;
        t4.textContent =data[attr].t4;
        t5.textContent =data[attr].t5;
        t6.textContent =data[attr].t6;
        t7.textContent =data[attr].t7;
        t8.textContent =data[attr].t8;
        t9.textContent =data[attr].t9;
        t10.textContent =data[attr].t10;
        t11.textContent =data[attr].t11;
        t12.textContent =data[attr].t12;
        t13.textContent =data[attr].t13;
        t14.textContent =data[attr].t14;
        t15.textContent =data[attr].t15;
        t16.textContent =data[attr].t16;
        t17.textContent =data[attr].t17;
        t18.textContent =data[attr].t18;
        t19.textContent =data[attr].t19;
        t20.textContent =data[attr].t20;
        t21.textContent =data[attr].t21;

        t27.textContent =data[attr].t27;


        a1.textContent=data[attr].a1;
        a2.textContent=data[attr].a2;
        a3.textContent=data[attr].a3;
        a4.textContent=data[attr].a4;
        a5.textContent=data[attr].a5;
        a6.textContent=data[attr].a6;
        a7.textContent=data[attr].a7;
        a8.textContent=data[attr].a8;
        a9.textContent=data[attr].a9;
        a10.textContent=data[attr].a10;
        a11.textContent=data[attr].a11;
        a12.textContent=data[attr].a12;


        k1.textContent=data[attr].k1;
        k2.textContent=data[attr].k2;
        k3.textContent=data[attr].k3;
        k4.textContent=data[attr].k4;
        k5.textContent=data[attr].k5;
        k6.textContent=data[attr].k6;
        k7.textContent=data[attr].k7;

        m.textContent=data[attr].m;
        m1.textContent=data[attr].m1;
        m2.textContent=data[attr].m2;
        m3.textContent=data[attr].m3;
        m4.textContent=data[attr].m4;
        m5.textContent=data[attr].m5;
        m6.textContent=data[attr].m6;

        s.textContent=data[attr].s;



			});
		});

		var data = {
			  "english":
			  {
			    "title": "Home",
				  "t1":"About us",
          "t2":"Services",
          "t3":"Pricing",
          "t4":"Pages",
          "t5":"Contact",
          "t6":"LAUNDRY & DRY CLEANING",
          "t7":"Best For Laundry Services",
          "t8":"Learn More",
          "t9":"LAUNDRY & DRY CLEANING",
          "t10":"Highly Professional Staff",
          "t11":"Learn More",
          "t12":"Our Location",
          "t13":"Garment AA condominium,Adiss Abeba",
          "t14":"Email Us",
          "t15":"Call Us",
          "t16":"LEARN ABOUT US",
          "t17":"What We Offer",
          "t18":"Our Features",
          "t19":"Why Choose Us",
          "t20":"Working Process",
          "t21":"How We Work",
          "t22":"OUR PRICING PLAN",
          "t23":"The Best Price",
          "t24":"OUR BLOG",
          "t25":"Latest From Blog",
          "t26":"TESTIMONIAL",
          "t27":"Our Clients Say",

          "a1":"FAQs",
          "a2":"Help",
          "a3":"Support",
          "a4":"Quality Laundry Service",
          "a5":"Express Fast Delivery",
          "a6":"Highly Professional Staff ",
          "a7":"100% Satisfaction Gguarantee",
          "a8":"Our Services",
          "a9":"Abel Abere",
          "a10":"Adey Girma",
          "a11":"Mekonnen Zenbu",
          "a12":"ementa bamelak",
          "a13":"",
          "a14":"",

          "d1":"We Are Quality Laundry Provider In Your City",
          "d2":"Dry Cleaning",
          "d3":"shose cleaning",
          "d4":"Curtain Laundry",
          "d5":"Suits Cleaning",
          "d6":"Years Expereince",
          "d7":"Expert Worker",
          "d8":"Happy Clients",
          "d9":"Dry Cleaning",
          "d10":"Years Expereince",
          "d11":"Order Place",
          "d12":"Pick up from where you are",
          "d13":"Dry Cleaning",
          "d14":"Delivery from your location",
          "d15":"Dry Cleaning",
          "d16":"Wash & Laundry",
          "d17":"Curtain Laundry",
          "d18":"Compatible With All Browsers",
          "d19":"Curtain Laundry",
          "d20":"",
          "d21":"",
          "d22":"",
          "d23":"Suits Cleaning",
          "d24":"",
          "d25":"",
          "d26":"",

          "k1":"Belli",
          "k2":"ssma",
          "k3":"images",
          "k4":"video",
          "k5":"We provide the best service at the lowest price and we also offer pick up and delivery service from your home.",
          "k6":"Why our customers choose us:",
          "k7":"one of the reason that you should choose us is that we have more than 3 years experience and all of our customers happy about the service  we provide",

          "m":"student",
          "s":"i had been the customer of Bellissma for years and they always provide me with the best quality services",
          "m1":"accountant",
          "m2":"teacher",
          "m3":"Business owner",
          "m4":"i like their customer service and their quickness",
          "m5":" Bellissma laundry service location is near me and they are open all week so check them out.",
          "m6":"Bellissma laundry service provide a service of pick up and delivery.",



			  },
			  "amharic":
			  {
				  "title":"ቤት",
          "t1":"ስለ እኛ",
          "t2":"አገልግሎቶች",
          "t3":"  የዋጋ አሰጣጥ",
          "t4":"ገፆች",
          "t5":"መገናኘት",
          "t6":"የልብስ ማጠቢያ እና ደረቅ ጽዳት",
          "t7":"ምርጥ ልብስ ማጠብ አገልግሎት",
          "t8":"የበለጠ እወቅ",
          "t9":"የልብስ ማጠቢያ እና ደረቅ ጽዳት",
          "t10":"ከፍተኛ ሙያዊ ሰራተኞች",
          "t11":"የበለጠ እወቅ",
          "t12":"የእኛ ቦታ",
          "t13":"ጋርመንት AA ኮንዶሚኒየም፣አዲስ አበባ",
          "t14":"በኢሜል ይላኩልን",
          "t15":"ይደውሉልን",
          "t16":"ስለእኛ ተማር",
          "t17":"አገልግሎቶች",
          "t18":"የእኛ ባህሪያት",
          "t19":"ለምን ይምረጡን",
          "t20":"የስራ ሂደት",
          "t21":"እንዴት እንደምንሰራ",
          "t22":"የእኛ የዋጋ አሰጣጥ",
          "t23":"ምርጥ ዋጋ",
          "t24":"የእኛ ብሎግ",
          "t25":"የቅርብ ጊዜ ከብሎግ",
          "t26":"ምስክርነት",
          "t27":"ደንበኞቻችን ምንይላሉ",

          "a1":"የሚጠየቁ ጥያቄዎች",
          "a2":"እገዛ",
          "a3":"ድጋፍ",
          "a4":"ጥራት ያለው የልብስ ማጠብ አገልግሎት",
          "a5":"ፈጣን የማድረስ አገልግሎት እንሰጣለን።",
          "a6":"ከፍተኛ ባለሙያ ሠራተኞች",
          "a7":"100% እርካታ ታገኛላችሁ",
          "a8":"እኛ የምናቀርበው",
          "a9":"አቤል አበረ",
          "a10":"አደይ ግርማ",
          "a11":"መኮንን ዘነብ",
          "a12":"እምነት ባምላክ",
          "a13":"",
          "a14":"",


          "d1":"እኛ በከተማዎ ውስጥ ጥራት ያለው የልብስ ማጠብ አገልግሎት አቅራቢ ነን",
          "d2":"ደረቅ ጽዳት",
          "d3":"የጫማ ማጽዳት",
          "d4":"መጋረጃ የልብስ ማጠቢያ",
          "d5":"የሱፍ ልብስ ማፅዳት",
          "d6":"የዓመታት ልምድ",
          "d7":"ባለሙያ ሰራተኛ",
          "d8":"ደስተኛ ደንበኞች",
          "d9":"ደረቅ ጽዳት",
          "d10":"የዓመታት ልምድ",
          "d11":"ባሉበት ቦታ ማዘዝ",
          "d12":"ካሉበት ቦታ ማንሳት",
          "d13":"ደረቅ ጽዳት",
          "d14":"ካሉበት ቦታ ማድረስ",
          "d15":"ደረቅ ጽዳት",
          "d16":"ማጠብ እና ማጠብ",
          "d17":"ምላሽ ሰጪ አቀማመጥ",
          "d18":"ከሁሉም አሳሾች ጋር ተኳሃኝ",
          "d19":"መጋረጃ የልብስ ማጠቢያ",
          "d20":"",
          "d21":"",
          "d22":"",
          "d23":"የሱፍ ልብስ ማፅዳት",
          "d24":"",
          "d25":"",
          "d26":"",

          "k1":"ቤሊ",
          "k2":"ስማ",
          "k3":"ምስሎች",
          "k4":"ቪዲዮ",
          "k5":"በዝቅተኛ ዋጋ ምርጥ አገልግሎት እንሰጣለን እንዲሁም ከቤትዎ ማንሳት እና ማድረስ አገልግሎት እንሰጣለን።",
          "k6":"ደንበኞቻችን የሚመርጡንበት ምክንያት:",
          "k7":"እርስዎ ሊመርጡን ከሚገባቸው ምክንያቶች አንዱ ከ 3 ዓመት በላይ ልምድ ስላለን እና ሁሉም ደንበኞቻችን በምንሰጠው አገልግሎት ደስተኛ ናቸው።",

          "m":"ተማሪ",
          "s":"የቤሊሳማ ደንበኛ ለዓመታት ነበርኩ እና ሁልጊዜ ጥሩ ጥራት ያለው አገልግሎት ይሰጡኛል።",
          "m1":"አካውንታንት",
          "m2":"መምህር",
          "m3":"የንግድ ሥራ ባለቤት",
          "m4":"የደንበኛ አገልግሎታቸውን እና ፈጣንነታቸውን እወዳለሁ።",
          "m5":"የቤሊሲማ የልብስ ማጠቢያ አገልግሎት ቦታ አጠገቤ ነው እና ሳምንቱን ሙሉ ክፍት ስለሆኑ ይመልከቱዋቸው።",
          "m6":"የቤሊሲማ የልብስ ማጠቢያ አገልግሎት የማንሳት እና የማድረስ አገልግሎት ይሰጣል።",
			  }


			}
