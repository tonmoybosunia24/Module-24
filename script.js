// What Is Dom


// console.log("Hello From Js");
// console.log(document.body);


// Traversing Dom


const student = {
       name: "Abul",
       id: 11,
       study: function(time){
              console.log(time, "Study Kortece")
       }
}
// const licollection = document.getElementsByTagName("li"); /* (document.getElementsByTagName) ট্যাগের মাধ্যমে কোন এলিমেন্ট কে জাভাস্ক্রিপ্ট এ ধরা। */
// console.log(licollection);
// for(const li of licollection){
       // console.log(li)
// }
const allheadings = document.getElementsByTagName("h1");
for(const h1 of allheadings){
       // console.log(h1.innerText) /* (.innerText) এটি ব্যাবহার করা হয় ট্যাগ এর টেক্সট কে দেখার জন্য। */
}



// Traversing Dom(Get Element By Id/Class)



const place = document.getElementById("Places-Title"); /* (document.getElementById) এটি ব্যাবহার করা হয় নিদিষ্ট কোন এলিমেন্ট কে আইডির সাহায্যে জাভাস্কিপ্ট এর সাহায্যে ধরার জন্য। */
place.innerText = "Places I Want To Visit";
// console.log(place);
const area = document.getElementsByClassName("Sundarban"); /* (document.getElementByClassName) এটি ব্যাবহার করা হয় নিদিষ্ট কোন এলিমেন্ট কে ক্লাস এর সাহায্যে জাভাস্কিপ্ট এর সাহায্যে ধরার জন্য। */
for(const importantPlace of area){
       // console.log(importantPlace)
}



// Traversing Dom(Get Element By Query Selector)



const someli = document.querySelectorAll(".quary li"); /* (document.querySelectorAll) এটি ব্যাবহার করা হয় নিদিষ্ট কোন এলিমেন্ট এর সকল চাইল্ড কে ধরার জন্য। */
// console.log(someli);
// for(li of someli){
       // console.log(li.innerText)
// }
// const someli = document.querySelector(".quary li"); /* (document.querySelector) এটি ব্যাবহার করা হয় নিদিষ্ট কোন এলিমেন্ট এর প্রথম চাইল্ড কে ধরার জন্য। */
// console.log(someli);



// Dynamic Styles



// const color = document.getElementById("fruits-title").style.color= "red"
// const color = document.getElementById("fruits-title").style.backgroundColor= "green"; /* (document.getElementById("fruits-title").style.backgroundColor= "green) এটি ব্যাবহার করা হয় জাভাস্কিপ্ট দিয়ে কোন এলিমেন্ট এর স্টাইল পরিবর্তন করার জন্য। */

const title = document.getElementById("fruits-title")
title.getAttribute("id"); /* (title.getAttribute("id");) এটি ব্যাবহার করা হয় কোন এলিমেন্ট এর আইডি বা ক্লাস জানার জন্য। */

title.classList; /* (title.classList;) এটি ব্যাবহার করা হয় কোন এলিমেন্ট ক্লাস লিস্ট জানার জন্য। */
title.classList.add("listadded"); /* (title.classList.add("listadded");) এটি ব্যাবহার করা হয় কোন এলিমেন্ট এ ক্লাস এড করার জন্য। */
title.classList.remove("text-xl"); /* (title.classList.remove("text-xl");) এটি ব্যাবহার করা হয়য় কোন এলিমেন্ট এ ক্লাস রিমুভ করার জন্য। */

title.setAttribute("title" , "tooltip set by javascript") /* (title.setAttribute("title" , "tooltip set by javascript")) কোন এট্রিবিউট কে সেট করার জন্য। */

document.getElementsByClassName("fruits-container")[0].innerHTML /* (document.getElementsByClassName("fruits-container")[0].innerHTML) কোন এলিমেন্ট এর ফুল এইচটিএমএল কোডকে পাওয়ার জন্য। */
// document.getElementsByClassName("fruits-container")[0].innerHTML = "<h2>Wow Dom Is Changing</h2>"; /* (document.getElementsByClassName("fruits-container")[0].innerHTML = "<h2>Wow Dom Is Changing</h2>";) এটি ব্যাবহার করা হয় কোন এলিমেন্ট এ নতুন কোন এইচটিএমএল সেট করার জুন্য। */
document.getElementsByClassName("fruits-container")[0].innerText; /* (document.getElementsByClassName("fruits-container")[0].innerText;) কোন এলিমেন্ট এর ট্যাগ বাদে শুধু ভেতরের ভেল্যু কে পাওয়ার জন্য। */



// Styling Dom Properties



const sections = document.querySelectorAll("section");
// console.log(sections)
for(const section of sections){
       section.style.border = "2px solid green"; /* কোন এলিমেন্ট এর স্টাইল জাভাস্ক্রিপ্ট দিয়ে দেওয়ার জন্য। */
       section.style.marginBottom = "20px";
}
const placess = document.getElementById("Places-Container");
placess.style.backgroundColor = "orange";



// Node List, Html Collection, Parent Node



const places = document.getElementById("Places-Container");
places.childNodes[3].childNodes /* (places.childNodes[3].childNodes) কোন এলিমেন্ট এর চাইল্ডনোট পাওয়ার জন্য। */
// document.createaliment = ("section"); /* (document.createaliment = ("section) নতুন কোন একটা এলিমেন্ট বানানোর জন্য। */

// const placeul = document.querySelector("#Places-Container ul") /* ((103-106)) এই লাইন গুলো ব্যাবহার করা হয় ডাইনামিকালি কোন কিচু এড করার জন্য। */
// const li = document.createElement("li");
// li.innerText = "new Place";
// placeul.append(li);



// create Html Elements Using Javascript And Append Child



// const nav = document.getElementById("Navber");
// const li = document.createElement("li");
// li.innerText = "Sing Up";
// nav.appendChild(li); /* ((114-117)) এই লাইন গুলো ব্যাবহার করা হয় ডাইনামিকালি কোন কিচু এড করার জন্য। */


/* (122-141) পুরো একটা সেকাশন কে এড করার নিয়ম */

const maincontainer = document.getElementById("main-content");
// const section = document.createElement("section");
// const h1 = document.createElement("h1");
// h1.innerText = "My Food List";
// section.appendChild(h1)
// const ul = document.createElement("ul");
// const li1 = document.createElement("li1");
// li1.innerText = "Biriyani";
// ul.appendChild(li1)

// const li2 = document.createElement("li2");
// li2.innerText = "borfi";
// ul.appendChild(li2)

// const li3 = document.createElement("li3");
// li3.innerText = "icecream";
// ul.appendChild(li3)

// section.appendChild(ul)
// maincontainer.appendChild(section);

/* (145-149) এটি ব্যাবহার করা হয় কোন সেকশন কে ইনার এইচটিএমএল এর এর সাহায্যে এড করার জন্য। */

// const sectionDress = document.createElement("section");
// sectionDress.innerHTML = `
//        <h1> My Dress</h1>
//        <ul>
//               <li>lungi</li>
//               <li>pant</li>
//               <li>genji</li>
//        </ul>
// `;
// maincontainer.appendChild(sectionDress)