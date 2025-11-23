<script>
import { onMount } from 'svelte';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
let myNameElement;
let circleContainer;
onMount(() => {
AOS.init({duration: 1000, once: true,});
const nameText = myNameElement.textContent;
myNameElement.textContent = '';
const letters = nameText.split('').map(char => {
const span = document.createElement('span');
span.textContent = char === ' ' ? '\u00A0' : char;
myNameElement.appendChild(span);
return span;
});
gsap.from(letters, {
opacity: 0,
y: 50,
stagger: 0.1,
ease: 'power3.out',
delay: 0.5,
});
gsap.to(circleContainer, {
rotation: 360,
duration: 15,
ease: 'none',
repeat: -1,
});
});
</script>

<main>
<nav>
<div>
<ul>
<a href=".hero">About me</a>
<a href="#projects">projects</a>
<a href="#Certificates">certificates</a>
<a href="#footer">Get in Touch</a>
</ul>
</div>
</nav>

<section class="hero">
<div class="hero__content">
<h1 bind:this={myNameElement}>Othman Ahmed</h1>
<p class="hero__content__p">
Junior front-end Developer.
</p>
<button>
<a href="\Screenshot 2025-11-22 123627.png" target="_blank">
Download CV 
</a>
</button>
</div>

<div class="image-container">
<div class="spinning-circle" bind:this={circleContainer}></div>
<img class="hero__image"
src="\photo_2025-10-30_12-53-02.jpg"
alt="Profile Picture"
/>
</div>
</section>

<section id="projects" class="projects">
<h1>My Projects</h1>
<div class="projects__container">
<div class="project__card" data-aos="fade-up" on:click={() => window.open('https://github.com/outhmanahmed0/luckySHRUb1')}>
<img src="\photo_2025-11-22_11-49-53.jpg" alt="Project Image" />
<h2>lucky Shrub</h2>
<p>Tools: HTML, CSS, pootstrab</p>
</div>
<div class="project__card" data-aos="fade-up" data-aos-delay="200" on:click={() => window.open('https://github.com/outhmanahmed0/calc_task_ITS')}>
<img src="\photo_2025-11-22_11-55-22.jpg" alt="Project Image" />
<h2>Calculator</h2>
<p>Tools: HTML, JS,TailwindCSS</p>
</div>
<div class="project__card" data-aos="fade-up" data-aos-delay="400" on:click={() => window.open('https://github.com/iamshaunjp/JavaScript-DOM-Tutorial')}>
<img src="\photo_2025-11-22_11-52-30.jpg" alt="Project Image" />
<h2>Todo List </h2>
<p>Tools: HTML, js, TailwindCSS</p>
</div>
</div>
</section>


<section id="Certificates" class="projects">
<h1>My Certificates</h1>
<section class="sectionforabout1 hover-effect" data-aos="fade-right">
<article>
<h1>Meta front-end Developer</h1>
</article>
<img src="\Coursera 06H0U3NMM6V4-1.png" width="500px" height="350px" class="img4Us" alt="iamge for our ceo">
</section>
<section class="sectionforabout1 hover-effect" data-aos="fade-left">
<img src="\Udemy Full-Stack Developer 1.jpg" width="500px" id="imgHands"  height="350px" alt="image for our hands">
<article>
<h1 class="textMiddle">Udemy full-stack Developer </h1>
</article>
</section>
<section class="sectionforabout1 hover-effect" data-aos="fade-right">
<article>
<h1>Certificate from ITS </h1>
</article>
<img src="\photo_2025-11-22_11-58-37.jpg" width="500px" class="img4Us" height="350px" alt="iamge for our ceo">
</section>
</section>


<footer class="footer" id="footer">
<div class="footer__content">
<p>📧 Email: 
<a href="outhmanahmed0@gmail.com">Email account</a>
</p>
<p>💻 GitHub:
<a href="https://github.com/outhmanahmed0" target="_blank">github account</a>
</p>
<p>🔗 LinkedIn: 
<a href="https://www.linkedin.com/in/othman-alazzawi/" target="_blank">linkedin account</a>
</p>
</div>
</footer>
</main>

<style>

* {
  margin: 0;padding: 0;box-sizing: border-box;font-family: sans-serif, Arial;
}
main{
  background-color: black;color: white;
}
body{
  background-color: black;
}
a{
  color: inherit;
}
.hero__content h1 span {
  display: inline-block;
}
.image-container {
  position: relative;width: 350px;height: 350px;
}
.hero__image {
  width: 350px;height: 350px;border-radius: 50%;object-fit: cover;position: relative;z-index: 2;
}
.spinning-circle {
position: absolute;
top: -30px;
left: -30px;
width: 410px;
height: 410px;
border: 8px dashed #3F8E00;
border-radius: 50%;
z-index: 1;
}
nav {
background-color: #1B1B1B;
padding: 18px;
display: flex;
justify-content: space-evenly;
align-items: center;
color: #9C9C9C;
width: 1110px;
height: 70px;
margin: auto;
border-radius: 0px 0px 10px 10px;
}
ul {
font-size: 1.3rem;
list-style-type: nne;
display: flex;
gap: 150px;
}

li:hover {
  text-decoration: underline;
}

.hero {
display: flex;
align-items: center;
justify-content: center;
gap: 300px;
padding: 20px;
margin-top: 70px;
}
.hero__content h1{
  font-size: 3rem;
}
.hero__content p {
  color: darkgray;margin-left: 30px;
}

button {
padding: 15px 70px;
background-color: #3F8E00;
color: white;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
transition: 0.3s;
margin-left: 25px;
margin-top: 20px;
}
button:hover {
background-color: #1e874b;
border-color: #16653a;
}
button a {
  color: white;text-decoration: none;
}
.section {
  padding: 12px 20px;display: flex;flex-direction: column;gap: 12px;
}
.section__header {
border-radius: 12px;
background-color: #f4f4f4;
padding: 12px 20px;
border-bottom: 2px solid #eee;
display: flex;
align-items: center;
gap: 12px;
}
section h1 {
  padding: 12px 20px;
}
.projects {
margin-top: 100px;
padding: 20px;
text-align: center;
}
.projects h1 {
font-size: 2.5rem;
margin-bottom: 40px;
color: white;
background-color: black;
}
.projects__container {
display: flex;
justify-content: center;
gap: 100px;
flex-wrap: wrap;
}
.project__card {
width: 300px;
background-color: #f4f4f4;
border-radius: 12px;
padding-bottom: 20px;
box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
transition: 0.3s;
}
.project__card:hover {
  transform: translateY(-8px);
}
.project__card img {
width: 100%;
height: 180px;
border-radius: 12px 12px 0 0;
object-fit: cover;
}
.project__card h2 {
margin: 15px 0 8px;
font-size: 1.4rem;
color: #222;
}
.project__card p {
color: #555;
font-size: 1rem;
}
.navbar {
width: 100%; 
background-color: #16423C;
margin-bottom: 20px;
}
.navbar .container-fluid {
  display: flex;justify-content: center;
}
nav ul{
list-style: none;
text-align: center;
font-family: "Lato", sans-serif;
font-weight: 400;
font-style: normal;
}
.form-control{
  margin-top: 10px;margin-right: 50px;
}
.navbar{
  background-color: #16423C;margin-bottom: 50px;
}
.nav-link{
  position: relative;
}
.nav-link::after {
content: "";
bottom: 5px;
position: absolute;
height: 2px;
left: 50%;
width: 0;
background-color: white;
transform-origin: left;
transition: width 0.4 ease, left 0.4s ease;
}
.nav-link:hover::after {
  width: 100%;
  left: 0;
}
.sectionforabout1 {
display: flex;
align-items: center;
position: relative;
margin: 40px 0;
padding-bottom: 40px;
}
.sectionforabout1 img {
width: 350px; 
height: 230px; 
border-radius: 5px;
border: solid green 3px;
object-fit: cover;
}
.img4Us {
  margin-right: 300px;
}
#imgHands {
  margin-left: 300px;
}
.sectionforabout1 article {
  flex: 1;
  margin: 0 40px;
}
.hover-effect:hover::after {
content: '';
position: absolute;
left: 10%;
right: 10%;
bottom: 0;
height: 3px;
background-color: green;
opacity: 1;
transition: opacity 0.3s;
}
.hover-effect::after {
  opacity: 0;}
@media (max-width: 1300px
) {
.hero {flex-direction: column;gap: 50px;}
.hero__content {text-align: center;}
.hero__content p, .hero__content button {margin-left: 0;}
.sectionforabout1 {
flex-direction: column;
text-align: center;
padding-bottom: 60px;
}
.sectionforabout1 img {width: 300px;height: 200px;margin: 0;}
.img4Us, #imgHands {margin: 20px 0;}
.sectionforabout1 article {margin: 20px;}
.hover-effect:hover::after {left: 20%;right: 20%;bottom: 10px;}
}
.footer {
background-color: #1B1B1B;
color: #9C9C9C;
padding: 30px 0;
margin-top: 100px;
width: 1110px;
margin-left: auto;
margin-right: auto;
border-radius: 10px 10px 0 0;
text-align: center;
}
.footer__content p {
  margin: 10px 0;font-size: 1.2rem;
}
.footer__content a {
  color: #4CAF50;
  text-decoration: none;
}
.footer__content a:hover {
  text-decoration: underline;
}
html {
  scroll-behavior: smooth;
}


</style>