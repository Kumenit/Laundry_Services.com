
   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');


    const title=document.querySelector('.ho');
    const t1=document.querySelector('.t1');
    const t2=document.querySelector('.t2');
    const t3=document.querySelector('.t3');
    const t4=document.querySelector('.t4');
    const t5=document.querySelector('.t5');
    const t17=document.querySelector('.t17');
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

    const k1=document.querySelector('.k1');
    const k2=document.querySelector('.k2');
    const k3=document.querySelector('.k3');
    const k4=document.querySelector('.k4');
    const k5=document.querySelector('.k5');
    const k6=document.querySelector('.k6');

      const t16=document.querySelector('.t16');
      const d1=document.querySelector('.d1');
      const d2=document.querySelector('.d2');
      const d3=document.querySelector('.d3');
      const d4=document.querySelector('.d4');
      const d5=document.querySelector('.d5');



    const p1=document.querySelector('.p1');
    const p2=document.querySelector('.p2');
    const p3=document.querySelector('.p3');
    const p4=document.querySelector('.p4');
    const p5=document.querySelector('.p5');
    const p6=document.querySelector('.p6');
    const p7=document.querySelector('.p7');
    const p8=document.querySelector('.p8');
    const p9=document.querySelector('.p9');
    const p10=document.querySelector('.p10');
    const p11=document.querySelector('.p11');
    const p12=document.querySelector('.p12');
    const p13=document.querySelector('.p13');

    const m=document.querySelector('.m');
    const m1=document.querySelector('.m1');
    const m2=document.querySelector('.m2');
    const m3=document.querySelector('.m3');
    const m4=document.querySelector('.m4');
    const m5=document.querySelector('.m5');
    const m6=document.querySelector('.m6');

    const s=document.querySelector(".s");


    link.forEach(el => {
      el.addEventListener('click', () => {
        //langEl.querySelector('.active').classList.remove('active');
        //el.classList.add('active');

        const attr = el.getAttribute('language');
                title.textContent =data[attr].title;


                t1.textContent =data[attr].t1;
                t2.textContent =data[attr].t2;
                t4.textContent =data[attr].t4;
                t5.textContent =data[attr].t5;
                t17.textContent =data[attr].t17;
                t27.textContent =data[attr].t27;


                a1.textContent=data[attr].a1;
                a2.textContent=data[attr].a2;
                a3.textContent=data[attr].a3;
                a9.textContent=data[attr].a9;
                a10.textContent=data[attr].a10;
                a11.textContent=data[attr].a11;
                a12.textContent=data[attr].a12;


                k1.textContent=data[attr].k1;
                k2.textContent=data[attr].k2;
                k3.textContent=data[attr].k3;
                k4.textContent=data[attr].k4;



                p1.textContent =data[attr].p1;
                p2.textContent =data[attr].p2;
                p3.textContent =data[attr].p3;
                p4.textContent =data[attr].p4;
                p5.textContent =data[attr].p5;
                p6.textContent =data[attr].p6;
                p7.textContent =data[attr].p7;
                p8.textContent =data[attr].p8;
                p9.textContent =data[attr].p9;
                p10.textContent =data[attr].p10;
                p11.textContent =data[attr].p11;
                p12.textContent =data[attr].p12;
                p13.textContent =data[attr].p13;

                d2.textContent =data[attr].d2;
        				d3.textContent =data[attr].d3;
                d4.textContent =data[attr].d4;
                d5.textContent =data[attr].d5;
                  a8.textContent=data[attr].a8;

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
                "t16":"LEARN ABOUT US",
                "t17":"What We Offer",
                "t27":"Our Clients Say",

                "d1":"We Are Quality Laundry Provider In Your City",
                "d2":"Dry Cleaning",
                "d3":"shose cleaning",
                "d4":"Curtain Laundry",
                "d5":"Suits Cleaning",

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

                "k1":"Belli",
                "k2":"ssma",
                "k3":"images",
                "k4":"video",
                "k5":"We provide the best service at the lowest price and we also offer pick up and delivery service from your home.",
                "k6":"Why our customers choose us:",



                "p1":"Our Service",
                "p2":"Home",
                "p3":"Service",
                "p4":"We provide our services in an affordable, convenient, fast and cost-effective manner.",
                "p5":"Admin",
                "p6":"services",
                "p7":"We provide laundry service. You don't have to waste your valuable time to clean the clothes. We'll pick them up at your door. Worried that your clothes might get lost during dry cleaning? don't worry. We mark the clothes with codes. A code is assigned to each customer. There is absolutely no risk of your clothes getting lost.",
                "p8":"Benefits of Laundry Service",
                "p9":"Our specialty is your laundry, so we've developed techniques and a washing process to ensure your clothes are gently cleaned, stains are removed, and your clothes are returned to you in pristine condition.",
                "p10":"Bellissma",
                "p11":"Laundry Care prepares a weekly schedule for you and simply picks up your laundry on the scheduled day and time. This completely eliminates the time and trouble of doing your own laundry.",
                "p12":"Dry Cleaning",
                "p13":"Wash & Laundry",

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
               "t16":"ስለእኛ ተማር",
               "t17":"አገልግሎቶች",
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

               "k1":"ቤሊ",
               "k2":"ስማ",
               "k3":"ምስሎች",
               "k4":"ቪዲዮ",
               "k5":"በዝቅተኛ ዋጋ ምርጥ አገልግሎት እንሰጣለን እንዲሁም ከቤትዎ ማንሳት እና ማድረስ አገልግሎት እንሰጣለን።",
               "k6":"ደንበኞቻችን የሚመርጡንበት ምክንያት:",

               "d1":"እኛ በከተማዎ ውስጥ ጥራት ያለው የልብስ ማጠብ አገልግሎት አቅራቢ ነን",
               "d2":"ደረቅ ጽዳት",
               "d3":"የጫማ ማጽዳት",
               "d4":"መጋረጃ የልብስ ማጠቢያ",
               "d5":"የሱፍ ልብስ ማፅዳት",



               "p1":"የእኛ አገልግሎቶች",
               "p2":"ቤት",
               "p3":"አገልግሎቶች",
               "p4":"አገልግሎቶቻችንን በተመጣጣኝ፣በምቹነት፣ በፍጥነት እና ወጪ በቀነሰ መልኩ እናቀርባለን።",
               "p5":"አስተዳዳሪ",
               "p6":"አገልግሎቶች",
               "p7":"የልብስ ማጠቢያ አገልግሎት እንሰጣለን. ልብሶቹን ለማጽዳት ጠቃሚ ጊዜዎን ማባከን የለብዎትም. ከበርህ ላይ እናነሳቸዋለን። በደረቅ ጽዳት ወቅት ልብሶችዎ ሊጠፉ ይችላሉ ብለው ይጨነቃሉ? አታስብ. ልብሶቹን በኮዶች ምልክት እናደርጋለን. ኮድ ለእያንዳንዱ ደንበኛ ተሰጥቷል። ልብስዎ የመጥፋት አደጋ በፍጹም የለም።",
               "p8":"የልብስ ማጠቢያ አገልግሎት ጥቅሞች",
               "p9":"የእኛ ልዩ ባለሙያተኛ ከእርስዎ የልብስ ማጠቢያ ጋር የተያያዘ ነው, ስለዚህ ልብሶችዎ በእርጋታ እንዲጸዱ, እድፍ መወገዱን እና ልብሶችዎ በንፁህ ሁኔታ ወደ እርስዎ እንዲመለሱ ለማድረግ ቴክኒኮችን እና የማጠብ ሂደት አዘጋጅተናል። ",
               "p10":"ቤሊስማ",
               "p11":"የልብስ ማጠቢያ እንክብካቤ ሳምንታዊ መርሃ ግብር ያዘጋጅልዎታል እና በቀላሉ በተያዘለት ቀን እና ሰዓት የልብስ ማጠቢያዎን ያነሳል. ይህ የእራስዎን የልብስ ማጠቢያ ጊዜ እና ችግር ሙሉ በሙሉ ያስወግዳል።",
               "p12":"ደረቅ ጽዳት ",
               "p13":"ማጠብ እና ላውንድሪ",

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
