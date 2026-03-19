 
    let date = new Date().getFullYear();

    // List of avocado's quotes. 
    const fruit_quotes = [
  'An apple a day keeps the doctor away.',
  'Fruits are nature’s candy, packed with vitamins and vitality.',
  'Eating fruits daily is a gift you give to your body.',
  'Fruit is proof that nature loves our health.',
  'Let food be thy medicine, and fruits be thy prescription.',
  'A smoothie full of fruits is a cup of happiness.',
  'Fruits nourish your body and delight your senses.',
  'Healthy bodies are built on colorful fruits.',
  'Nature’s sweetness comes in the form of fruits.',
  'Fruit today, energy tomorrow.',
  'Your skin glows when your plate is full of fruits.',
  'Every fruit is a vitamin-packed treasure.',
  'Fruits are the simplest form of self-care.',
  'The rainbow on your plate is a symphony of fruits.',
  'Eat fruits, feel light, and let your body thank you.',
  'Juicy fruits are a daily dose of joy.',
  'Fruit is not just food; it’s fuel for life.',
  'A life with fruits is a life with energy.',
  'In every fruit, there is a story of health.',
  'Fruits: the natural way to cleanse and energize your body.',
  'Snack on fruits, not processed sugar.',
  'Fruit is delicious medicine with no side effects.',
  'Eating fruits is investing in your long-term wellness.',
  'A diet rich in fruits is a diet rich in life.',
  'Let fruits be the highlight of every meal.',
  'Fruits teach us that sweetness can be natural.',
  'Fruit nourishes the body, mind, and soul.',
  'Nature packages nutrients beautifully in fruits.',
  'Your heart loves fruits, and so does your body.',
  'Fresh fruits are simple, powerful, and perfect.',
  'Fruits: small in size, big in benefits.',
  'Eating fruits daily is a celebration of health.',
  'Fruit is nature’s multivitamin.',
  'A colorful fruit salad is a feast for your health.',
  'Every fruit carries the sunshine of nature.',
  'Fruits make healthy living delicious.',
  'Start your day with fruits, and your body will thank you.',
  'Fruit is life in its most natural form.',
  'Nature’s candy is healthier than any artificial sweet.',
  'Fruits bring vitality, energy, and balance to life.',
  'A bite of fruit is a bite of wellness.',
  'Fruits are the cornerstone of a healthy diet.',
  'Sweet, juicy, and nutritious: that’s fruit for you.',
  'Fruit nourishes, refreshes, and energizes naturally.',
  'Daily fruit intake is the secret to a long, healthy life.',
  'Fruits keep the body active and the mind sharp.',
  'Eating fruit is a simple way to honor your body.',
  'Nature’s goodness is served fresh in fruits.',
  'Fruits are delicious ambassadors of health.',
  'A healthy day begins with a fruit-filled plate.'
];

        const fruits_images = {
            Banana : "https://th.bing.com/th/id/OIP.DzzBtp9wRuY1VocmOurZ7gHaJE?w=152&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Apple : "https://th.bing.com/th/id/OIP.XprgHSCfPgHBpfQBBfAWqwHaFb?w=262&h=192&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Orange : "https://th.bing.com/th/id/OIP.k1bcs4IVQF6QM2TSpfpw9QHaFi?w=250&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Mango : "https://th.bing.com/th/id/OIP.qNwRfXgaZn0IFZnDQVjTXwHaDj?w=326&h=168&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Grape : "https://th.bing.com/th/id/OIP.AzP3m-pF7lOgZcFGyw_k9gHaEo?w=280&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Watermelon : "https://th.bing.com/th/id/OIP.cx-n_ANc4mMP7mmz6AN1_gHaE7?w=242&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Pineapple: "https://th.bing.com/th/id/OIP.YgJ35_c86TUwj10CbwIAXQHaEL?w=283&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Papaya : "https://th.bing.com/th/id/OIP.qzKvCvK6VrjE0K3U1p_iogHaFX?w=241&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Strawbery: "https://m.media-amazon.com/images/I/71HZjvrnUcL._AC_SY300_SX300_QL70_FMwebp_.jpg",
            Lemon : "https://th.bing.com/th/id/OIP.zkUqUyC5bDtTPUpBAzsPyAHaE5?w=284&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Lime : "https://th.bing.com/th/id/OIP.O2USwwdIpEbA5gv31ZqxSQHaEV?w=317&h=186&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Pear : "https://th.bing.com/th/id/OIP.H6jz9BWMtvOpznbge6Ys_gHaE8?w=290&h=193&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Peach : "https://th.bing.com/th/id/OIP.GjILLa5IQponwjalsDe36wHaEo?w=287&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Cherry : "https://tse2.mm.bing.net/th/id/OIP.iGqgNZZKkfumi0svy4M7vgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
            Plum : "https://th.bing.com/th/id/OIP.pYjCn3Zm4bTxY3-Fx8DhbQHaE6?w=238&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Kiwi : "https://th.bing.com/th/id/OIP._Gs8aLMrPB-7shk2EeY2_gHaEK?w=248&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Blueberry : "https://th.bing.com/th/id/OIP.bkWhwJ-Zhedil9s4UBGh1QHaFK?w=249&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Raspberry : "https://th.bing.com/th/id/OIP.Fue1-3svXSbY-Hfhef7FlQHaE5?w=271&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Blackberry : "https://th.bing.com/th/id/OIP.Z0dP6UuG2P3rvU3a3iQHlQHaFD?w=265&h=181&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Coconut : "https://th.bing.com/th/id/OIP.6iHie1tkQYGLAFL5IsC6GAHaFv?w=223&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Pomegranate : "https://th.bing.com/th/id/OIP.j4bywQ-VSxVQplIpy3OBPwHaE8?w=230&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Guave : "https://th.bing.com/th/id/OIP.ZpjlJc6Qy-Eba6Y1HK4cmwHaFs?w=244&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Fig : "https://th.bing.com/th/id/OIP.1gAOFd7GO2iGLQuPNNhkqwHaEo?w=281&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3", 
            Date : "https://th.bing.com/th/id/OIP.zjzFRpT7Kwr3rMzoOLtwiwHaFj?w=249&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Avocado : "https://th.bing.com/th/id/OIP.DkBTTbs14YVScQ6GiqaXbwHaEJ?w=289&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Cantaloupe : "https://th.bing.com/th/id/OIP.keRlXXxjNvzdBjIp_HNF6AHaFO?w=209&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Honeydrew : "https://th.bing.com/th/id/OIP.mZDhcV6LTVfAJ2aKcL_KRQHaFS?w=222&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Grapefruit : "https://th.bing.com/th/id/OIP.pITzY9neU8xyuYE62rLvVAHaEv?w=273&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Tangerine : "https://m.media-amazon.com/images/I/616F+0ZpblL._SL1200_.jpg",
            Clemantine : "https://thumbs.dreamstime.com/z/fresh-clementine-cut-half-wooden-base-clementines-products-organic-farming-photographed-antique-table-82690093.jpg",
            Persimmon : "https://tse1.mm.bing.net/th/id/OIP.1o7tJxjbX_il2l6MsfQaXgHaFS?rs=1&pid=ImgDetMain&o=7&rm=3",
            Lychee : "https://tse2.mm.bing.net/th/id/OIP.zvD2LhRncuROEDjc4YeMJAHaF7?rs=1&pid=ImgDetMain&o=7&rm=3",
            Longan : "https://facts.net/wp-content/uploads/2023/07/17-facts-about-longan-1689354883.jpg",
            Rambutan : "https://tse1.mm.bing.net/th/id/OIP.jvKrtRWifiSdjD3v9KOUdwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
            Durian : "https://cdn.theculturetrip.com/wp-content/uploads/2019/08/c19k56.jpg",
            Jackfruit : "https://healthyfamilyproject.com/wp-content/uploads/2020/05/Jackfruit-background.jpg",
            Mulberry : "https://c8.alamy.com/comp/M4EC86/fresh-mulberry-fruit-M4EC86.jpg",
            Gooseberry : "https://tse3.mm.bing.net/th/id/OIP.wTtCRL8Q42IRZ4yRqs-wOwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            Cranberry : "https://tse1.mm.bing.net/th/id/OIP.xEf7GBjmEzndlOKNlVHzeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            Elderberry : "https://c8.alamy.com/comp/C8GGDJ/fresh-picked-elder-or-elderberry-berries-fruit-with-leaves-sambucus-C8GGDJ.jpg",
            Boysenberry : "https://healthiersteps.com/wp-content/uploads/2022/09/boysenberry-fruit.jpg",
            Cloudberry : "https://fruitorvegetable.science/assets/images/cloudberries.jpg",
            Huckleberry : "https://agriexotic.com/wp-content/uploads/2022/05/huckleberries.jpg",
            Atemoya : "https://th.bing.com/th/id/OIP.517WkMPTpB1F3Z6Mf1OSKAHaJ4?w=149&h=199&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Cherimoya : "https://th.bing.com/th/id/OIP.gF0R50lkQXqxnlv6m44XxwHaE7?w=272&h=181&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Jabuticaba : "https://th.bing.com/th/id/OIP.-WC94yWoBndWiL2DDGJPUwHaD4?w=254&h=189&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Mangosteen : "https://th.bing.com/th/id/OIP.-m0T7RFssAx8h28yc14MmgHaDt?w=341&h=175&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Langsat : "https://th.bing.com/th/id/OIP.zH5TBx-kurQUGQC1RGS08gHaE-?w=282&h=190&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Pomelo : "https://th.bing.com/th/id/OIP.eaUrEFPBGXPqlyKPojrydAHaHa?w=238&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Kumquat : "https://th.bing.com/th/id/OIP.Kac2Cu90CcQ29xXc0krVjQHaE8?w=247&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Plantain : "https://th.bing.com/th/id/OIP.u9O_KEAUm5dGKDYG0_9eIAHaEK?w=253&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Olive : "https://th.bing.com/th/id/OIP.liO8pa7KXlIOD97GTkhzBgHaE7?w=267&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Quince : "https://th.bing.com/th/id/OIP.PhnKo_rrhtpcap8JaIAMKwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Yuzu : "https://th.bing.com/th/id/OIP.kvr_3B3cWIAHgL-QG0mzpwHaE8?w=258&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Breadfruit : "https://th.bing.com/th/id/OIP.1T68UO9AvBMPoLJTN2Z_OwHaGE?w=192&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Tamarillo : "https://th.bing.com/th/id/OIP.TffrbanHr2G3Xf76z4MxbwHaE7?w=306&h=204&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Mangosteen : "https://th.bing.com/th/id/OIP.5PUHNt3Vuv1RbX6p6c7qDAHaFj?w=240&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Langsat : "https://th.bing.com/th/id/OIP.zVom5EtqA6MsK5AXhUVg3wHaFj?w=249&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Santol: "https://th.bing.com/th/id/OIP.-UWVFEoewSjcAa1dqqtBbQHaFG?w=260&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Mamoncillo : "https://th.bing.com/th/id/OIP.ShSHprmpU7wctzlkaKq95wHaFW?w=293&h=212&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
            Genip : "https://th.bing.com/th/id/OIP.DR2Fraqons5us8W3V2YeAwHaE8?w=268&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
            }
    
       

        // function to get a random quote from the list of quotes.
    function getQuote(){
        const randomQuote = fruit_quotes[Math.floor(Math.random() * fruit_quotes.length)];
        document.getElementById("quotes").innerHTML = randomQuote;
    
    }

    // Display every 5 seconds a new quote from the list of quotes. 
     
     setInterval(getQuote, 5000)


    // function to get an image from the list of images.
    setInterval(getImage, 5000)
    function getImage(){
        const key = Object.keys(fruits_images)
        const image_collections = document.getElementsByClassName("fruit-img");
        const name_collections = document.getElementsByClassName("fruit-name");
        for(let i=0; i <= 44; i++){
            const randomImage = key[Math.floor(Math.random() * key.length )];
            image_collections[i].src = fruits_images[randomImage];
            name_collections[i].innerHTML = randomImage;
            
        }  

    }

    document.querySelectorAll(".clickable-img").forEach(img => {
    img.addEventListener("click", () => {
    window.location.href = "/create-post";
    });
    });

     document.querySelectorAll(".non-clickable-img").forEach(img => {
    img.addEventListener("click", () => {
    alert("Please Register or Login in order to make a post.");
    });
    });


    // Retrieve the upvoted fruit.  
    function upvoteFruit(){ 
       const fruit =  document.getElementById("upvoted_fruit") 
       // show most upvoted fruit.
        fruit.style.display="block"
        // Hide after 3 seconds
        setTimeout(() => {
        fruit.style.display = "none";
        }, 3000);
    }


    // Retrieve the total number of post made.
    function totalPost(){
        const total_post = document.getElementById("total-post")
        // show total post
        total_post.style.display = "block"
        // hide after 3 seconds
        setTimeout(() => {
            total_post.style.display = "none"
        }, 3000)
    }


getImage()

   

  
   
  
    
  
  
   
   
    
    

    
   

   