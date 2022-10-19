
   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');


    const title=document.querySelector('.ho');
    const t1=document.querySelector('.t1');
    const t2=document.querySelector('.t2');
    const t3=document.querySelector('.t3');
    const t4=document.querySelector('.t4');
    const t5=document.querySelector('.t5');


    const a1=document.querySelector('.a1');
    const a2=document.querySelector('.a2');
    const a3=document.querySelector('.a3');
    const a4=document.querySelector('.a4');
    const a5=document.querySelector('.a5');
    const a6=document.querySelector('.a6');
    const a7=document.querySelector('.a7');

    const k1=document.querySelector('.k1');
    const k2=document.querySelector('.k2');
    const k3=document.querySelector('.k3');
    const k4=document.querySelector('.k4');
    const k5=document.querySelector('.k5');
    const k6=document.querySelector('.k6');

      const t16=document.querySelector('.t16');
      const d1=document.querySelector('.d1');

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
    const p14=document.querySelector('.p14');
    const p15=document.querySelector('.p15');
    const p16=document.querySelector('.p16');
    const p17=document.querySelector('.p17');
    const p18=document.querySelector('.p18');
    const p19=document.querySelector('.p19');
    const p20=document.querySelector('.p20');
    const p21=document.querySelector('.p21');
    const p22=document.querySelector('.p22');
    const p23=document.querySelector('.p23');
    const p24=document.querySelector('.p24');
    const p25=document.querySelector('.p25');
    const p26=document.querySelector('.p26');

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
                  t16.textContent =data[attr].t16;

                  d1.textContent =data[attr].d1;

                a1.textContent=data[attr].a1;
                a2.textContent=data[attr].a2;
                a3.textContent=data[attr].a3;
                a4.textContent=data[attr].a4;
                a5.textContent=data[attr].a5;
                a6.textContent=data[attr].a6;
                a7.textContent=data[attr].a7;

                k1.textContent=data[attr].k1;
                k2.textContent=data[attr].k2;
                k3.textContent=data[attr].k3;
                k4.textContent=data[attr].k4;
                k5.textContent=data[attr].k5;
                k6.textContent=data[attr].k6;


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
                p14.textContent =data[attr].p14;
                p15.textContent =data[attr].p15;
                p16.textContent =data[attr].p16;
                p17.textContent =data[attr].p17;
                p18.textContent =data[attr].p18;
                p19.textContent =data[attr].p19;
                p20.textContent =data[attr].p20;
                p21.textContent =data[attr].p21;
                p22.textContent =data[attr].p22;
                p23.textContent =data[attr].p23;
                p24.textContent =data[attr].p24;
                p25.textContent =data[attr].p25;
                p26.textContent =data[attr].p26;










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

                "d1":"We Are Quality Laundry Provider In Your City",

                "a1":"FAQs",
                "a2":"Help",
                "a3":"Support",
                "a4":"Quality Laundry Service",
                "a5":"Express Fast Delivery",
                "a6":"Highly Professional Staff ",
                "a7":"100% Satisfaction Gguarantee",

                "k1":"Belli",
                "k2":"ssma",
                "k3":"images",
                "k4":"video",
                "k5":"We provide the best service at the lowest price and we also offer pick up and delivery service from your home.",
                "k6":"Why our customers choose us:",



                "p1":"About Us",
                "p2":"Home",
                "p3":"About Us",
                "p4":"Below you can see everything about us",
                "p5":" Admin",
                "p6":" services",
                "p7":"Bellissima Laundry Service is located in Addis Ababa at Haile Garment Condominium. You can contact us at +251 91 428 6439, filmonteklay6@gmail.com. And we offer one of the best laundry services out there. Some of the services we provide are: Dry Cleaning , shoe cleaning, curtain laundry, woolen cleaning.",
                "p8":"One of the reasons why you should choose us is that we have more than 3 years of experience and all our customers are happy with our services.",
                "p9":"Work process",
                "p10":"Why our customers choose us: We offer quality laundry service, fast delivery, highly professional staff, you will get 100% satisfaction. There are dozens of benefits, but here are the top five that make you choose us for your laundry service.We'll pick up your laundry and get back to you within 48 hours. That's faster than most local cleaners and we charge a fraction of the cost! If you're still not sure how our laundry service can make your life easier, contact us to speak with one of our laundry experts who can answer any of your specific questions, or if you're ready to get started, click here to visit our registration page and get started today! Put one or both hands in a sock and sample those hard-to-reach areas. Shades, TV backsplashes, baseboards, ceiling fan blades and more go to town",
                "p11":"services",
                "p12":"Dry Cleaning",
                "p13":"shose cleaning",
                "p14":"Curtain Laundry",
                "p15":"Suits Cleaning",
                "p16":"Recent",
                "p17":"we are now trying to extend our branchs",
                "p18":"we will come to where you are",
                "p19":"see you soon",
                "p20":"How We Work",
                "p21":"Order Place",
                "p22":"Pick up from where you are",
                "p23":"Dry Cleaning",
                "p24":"Delivery from your location",
                "p25":"This is our GPS location.",
                "p26":"Details page",
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

               "a1":"የሚጠየቁ ጥያቄዎች",
               "a2":"እገዛ",
               "a3":"ድጋፍ",
               "a4":"ጥራት ያለው የልብስ ማጠብ አገልግሎት",
               "a5":"ፈጣን የማድረስ አገልግሎት እንሰጣለን።",
               "a6":"ከፍተኛ ባለሙያ ሠራተኞች",
               "a7":"100% እርካታ ታገኛላችሁ",

               "k1":"ቤሊ",
               "k2":"ስማ",
               "k3":"ምስሎች",
               "k4":"ቪዲዮ",
               "k5":"በዝቅተኛ ዋጋ ምርጥ አገልግሎት እንሰጣለን እንዲሁም ከቤትዎ ማንሳት እና ማድረስ አገልግሎት እንሰጣለን።",
               "k6":"ደንበኞቻችን የሚመርጡንበት ምክንያት:",

               "d1":"እኛ በከተማዎ ውስጥ ጥራት ያለው የልብስ ማጠብ አገልግሎት አቅራቢ ነን",



               "p1":"ስለ እኛ",
               "p2":"ቤት",
               "p3":"ስለ እኛ",
               "p4":"ከዚህ በታች ስለ እኛ ሁሉንም ነገር ማየት ይችላሉ",
               "p5":" አስተዳዳሪ",
               "p6":" አገልግሎቶች",
               "p7":"ቤሊሲማ የልብስ ማጠቢያ አገልግሎት በአዲስ አበባ ሃይሌ ጋርመንት ኮንዶሚኒየም በሚባል ቦታ ይገኛል።እኛን ለማግኘት አነዚ  መጠቀም ይችላሉ-+251 91 428 6439 ፣ filmonteklay6@gmail.com።እና እዚያ ካሉት ምርጥ የልብስ ማጠቢያ አገልግሎቶች ውስጥ አንዱን እናቀርባለን።ከምንሰጣቸው አገልግሎት የተወሰኑት እነዚህ ናቸው:ደረቅ ጽዳት ፣ የጫማ ማጽዳት ፣ መጋረጃ የልብስ ማጠቢያ ፣ የሱፍ ልብስ ማፅዳት።",
               "p8":"እርስዎ ሊመርጡን ከሚገባቸው ምክንያቶች አንዱ ከ 3 ዓመት በላይ ልምድ ስላለን እና ሁሉም ደንበኞቻችን በምንሰጠው አገልግሎት ደስተኛ ናቸው።እኛ በከተማዎ ውስጥ ጥራት ያለው የልብስ ማጠብ አገልግሎት አቅራቢ ነን በዝቅተኛ ዋጋ ምርጥ አገልግሎት እንሰጣለን እንዲሁም ከቤትዎ ማንሳት እና ማድረስ አገልግሎት እንሰጣለን።",
               "p9":"የስራ ሂደት ",
               "p10":"ደንበኞቻችን የሚመርጡንበት ምክንያት:ጥራት ያለው የልብስ ማጠብ አገልግሎት ፣ ፈጣን የማድረስ አገልግሎት እንሰጣለን ፣ ከፍተኛ ባለሙያ ሠራተኞች ፣ 100% እርካታ ታገኛላችሁ።ባሉበት ቦታ ማዘዝ ፣ ካሉበት ቦታ ማንሳት ፣ ደረቅ ጽዳት ፣ ካሉበት ቦታ ማድረስ።የልብስ ማጠቢያዎን ለሙያዊ የልብስ ማጠቢያ አገልግሎት እንደ የልብስ ማጠቢያ አገልግሎት መላክ በደርዘን የሚቆጠሩ ጥቅሞች አሉት፣ ሆኖም እኛን ለልብስ ማጠቢያ አገልግሎት የመረጡ አምስት ዋና ዋና ጥቅሞች እዚህ አሉ ።የልብስ ማጠቢያዎን አንስተን በ48 ሰአታት ውስጥ እንመልስልዎታለን። ያ ከአብዛኛዎቹ የአካባቢ ጽዳት ሠራተኞች የበለጠ ፈጣን ነው እና ከዋጋው ትንሽ እንከፍላለን!የእኛ የልብስ ማጠቢያ አገልግሎት ህይወትዎን ቀላል እንደሚያደርግ አሁንም እርግጠኛ ካልሆኑ፣ የትኛውንም ልዩ ጥያቄዎችዎን ሊመልስ ከሚችል የልብስ ማጠቢያ ባለሞያዎቻችን ጋር ለመነጋገር ያነጋግሩን ወይም ለመጀመር ዝግጁ ከሆኑ ለመጎብኘት እዚህ ጠቅ ያድርጉ የመመዝገቢያ ገፃችን እና ዛሬውኑ ይጀምሩ!አንድ ወይም ሁለቱንም እጆችን ካልሲ ውስጥ ያስገቡ እና ለመድረስ አስቸጋሪ የሆኑ ቦታዎችን እንደ ዓይነ ስውሮች ፣ የቲቪ ጀርባ ፣ የመሠረት ሰሌዳዎች ፣ የጣሪያ ማራገቢያ ቢላዎች እና ሌሎችም ወደ ከተማ ይሂዱ",
               "p11":"አገልግሎቶች ",
               "p12":"ደረቅ ጽዳት ",
               "p13":"የጫማ ማጽዳት ",
               "p14":"መጋረጃ የልብስ ማጠቢያ",
               "p15":" የሱፍ ልብስ ማፅዳት",
               "p16":"የቅርብ ጊዜ",
               "p17":"አሁን ቅርንጫፎቻችንን ለማራዘም እየሞከርን ነው",
               "p18":"ባሉበት ቦታ እንመጣለን",
               "p19":"በቅርቡ እንገናኝ",
               "p20":"እንዴት እንደምንሰራ",
               "p21":"ባሉበት ቦታ ማዘዝ",
               "p22":"ካሉበት ቦታ ማንሳት",
               "p23":"ደረቅ ጽዳት",
               "p24":"ካሉበት ቦታ ማድረስ",
               "p25":"ይህ የጂፒኤስ ቦታችን ነው።",
               "p26":"ዝርዝር ገጽ",

             }
    }
