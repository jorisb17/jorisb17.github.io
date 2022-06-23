// https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
const slides = document.querySelectorAll(".slide");
const slidesImg = document.querySelectorAll(".slide-image");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
const nextImage = document.getElementById("next-img");
const prevImage = document.getElementById("prev-img");

let currentSlide = 0;
let maxSlide = slides.length - 1;

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

if (maxSlide < 3)
{
  document.getElementsByClassName("prev-slide")[0].style.display = "none";
  document.getElementsByClassName("next-slide")[0].style.display = "none";
  nextSlide.addEventListener("click", Next);
  prevSlide.addEventListener("click", Previous);
}
else
{
  nextSlide.addEventListener("click", FullNext);
  prevSlide.addEventListener("click", FullPrevious);
}

function UpdatePrev(current)
{
  if (maxSlide < 3) return;

  let index = 0;

  if (current === maxSlide)
  {
    index = maxSlide - 1;
  }
  else
  {
    if (current === 0)
    {
      index = maxSlide;
    }
    else
    {
      index = current - 1;
    }
  }

  prevImage.src = slidesImg[index].currentSrc;
}

function UpdateNext(current)
{
  if (maxSlide < 3) return;

  let index = 0;

  if (current === maxSlide)
  {
    index = 0;
  }
  else
  {
    if (current === 0)
    {
      index = 1;
    }
    else
    {
      index = current + 1;
    }
  }

  // console.log(index);
  nextImage.src = slidesImg[index].currentSrc;
}

function FullNext()
{
  if (currentSlide === maxSlide)
    UpdatePrev(0);
  else
    UpdatePrev(currentSlide + 1);

  Next();

  UpdateNext(currentSlide);
}

function FullPrevious()
{
  // check if current slide is the first and reset current slide to last
  if (currentSlide === 0)
  {
    UpdatePrev(maxSlide);
  }
  else
  {
    UpdatePrev(currentSlide - 1);
  }

  Previous();

  UpdateNext(currentSlide);
}

function Previous()
{
  // check if current slide is the first and reset current slide to last
  if (currentSlide === 0)
  {
    currentSlide = maxSlide;
  }
  else
  {
    currentSlide--;
  }

  Move();
}

function Next()
{
  // check if current slide is the last and reset current slide
  if (currentSlide === maxSlide)
  {
    currentSlide = 0;
  }
  else
  {
    currentSlide++;
  }

  Move();
}

function Move() {
  // move slide by 100%
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}

