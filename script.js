console.log("Javascript is connected!");
const quoteBtn = document.getElementById("quoteBtn");
 const quoteContainer = document.getElementById("quoteContainer");

 const quotes = [
  "Believe you can and you're halfway there.",
  "You are stronger than you think.",
  "Small steps everyday lead to the big chage.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen."
 ];

 quoteBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const newQuote = document.createElement("p");
  newQuote.textContent = randomQuote;

  quoteContainer.textContent = randomQuote;
 });
 const button1 = document.getElementById("readBtn1");
 const button2 = document.getElementById("readBtn2");
 const button3 = document.getElementById("readBtn3");
 const postMore = document.getElementById("PostMore");
 const postAgain = document.getElementById("PostAgain");
 const postLastTime = document.getElementById("PostLastTime");
 const testimonialBtn = document.getElementById("testimonialBtn");
 const testimonialText = document.getElementById("testimonialText");
 const commentBtn = document.getElementById("commentBtn");
 const commentInput = document.getElementById("commentInput");
 const commentList = document.getElementById("commentList");
 

 readBtn1.addEventListener("click", function () {
  readBtn1.textContent = "Read More";
 });
  readBtn1.addEventListener("click", function () {
   postMore.style.display = "block";
  });

 readBtn2.addEventListener("click", function () {
  readBtn2.textContent = "Read More";
 });
  readBtn2.addEventListener("click", function () {
   postAgain.style.display = "block";
  });

 readBtn3.addEventListener("click", function () {
  readBtn3.textContent = "Read More";
 });
 readBtn3.addEventListener("click", function () {
  postLastTime.style.display = "block";
 });

 testimonialBtn.addEventListener("click", function() {
  testimonialText.style.display = "block";
 });

 commentBtn.addEventListener("click",function () {
  const newComment = document.createElement("p");
  newComment.textContent = commentInput.value;
  commentList.appendChild(newComment);
  commentInput.value = "";
 });



 



