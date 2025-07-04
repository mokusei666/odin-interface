const handleImageCarousel = () => {
  const imageOne = document.querySelector('.slide__img-1');
  const imageTwo = document.querySelector('.slide__img-2');
  const imageThree = document.querySelector('.slide__img-3');
  const navDotOne = document.querySelector('.nav-dot-1');
  const navDotTwo = document.querySelector('.nav-dot-2');
  const navDotThree = document.querySelector('.nav-dot-3');
  let intervalId;
  const nextImage = () => {
    if (imageOne.classList.contains('slide__img--active')) {
      imageOne.classList.remove('slide__img--active');
      imageTwo.classList.add('slide__img--active');
      navDotOne.classList.remove('nav-dot--active');
      navDotTwo.classList.add('nav-dot--active');
    } else if (imageTwo.classList.contains('slide__img--active')) {
      imageTwo.classList.remove('slide__img--active');
      imageThree.classList.add('slide__img--active');
      navDotTwo.classList.remove('nav-dot--active');
      navDotThree.classList.add('nav-dot--active');
    } else if (imageThree.classList.contains('slide__img--active')) {
      imageThree.classList.remove('slide__img--active');
      imageOne.classList.add('slide__img--active');
      navDotThree.classList.remove('nav-dot--active');
      navDotOne.classList.add('nav-dot--active');
    }
  };
  const imageCarouselRotation = () => {
    intervalId = setInterval(() => {
      nextImage();
    }, 5000);
  };

  const imageCarouselEvents = () => {
    const navDot = document.querySelectorAll('.nav-dot');
    const carouselImages = document.querySelectorAll('.slide__img');
    const nextBtn = document.querySelector('.slide__btn-right');
    const prevBtn = document.querySelector('.slide__btn-left');
    navDot.forEach((dot) => {
      dot.addEventListener('click', () => {
        carouselImages.forEach((image) => {
          image.classList.remove('slide__img--active');
        });
        navDot.forEach((navD) => {
          navD.classList.remove('nav-dot--active');
        });
        if (dot.classList.contains('nav-dot-1')) {
          imageOne.classList.add('slide__img--active');
          navDotOne.classList.add('nav-dot--active');
        } else if (dot.classList.contains('nav-dot-2')) {
          imageTwo.classList.add('slide__img--active');
          navDotTwo.classList.add('nav-dot--active');
        } else if (dot.classList.contains('nav-dot-3')) {
          imageThree.classList.add('slide__img--active');
          navDotThree.classList.add('nav-dot--active');
        }
        clearInterval(intervalId);
        imageCarouselRotation();
      });
    });
    nextBtn.addEventListener('click', () => {
      clearInterval(intervalId);
      nextImage();
      imageCarouselRotation();
    });
    prevBtn.addEventListener('click', () => {
      clearInterval(intervalId);
      if (imageOne.classList.contains('slide__img--active')) {
        imageOne.classList.remove('slide__img--active');
        imageThree.classList.add('slide__img--active');
        navDotOne.classList.remove('nav-dot--active');
        navDotThree.classList.add('nav-dot--active');
      } else if (imageThree.classList.contains('slide__img--active')) {
        imageThree.classList.remove('slide__img--active');
        imageTwo.classList.add('slide__img--active');
        navDotThree.classList.remove('nav-dot--active');
        navDotTwo.classList.add('nav-dot--active');
      } else if (imageTwo.classList.contains('slide__img--active')) {
        imageTwo.classList.remove('slide__img--active');
        imageOne.classList.add('slide__img--active');
        navDotTwo.classList.remove('nav-dot--active');
        navDotOne.classList.add('nav-dot--active');
      }
      imageCarouselRotation();
    });
  };
  return { imageCarouselRotation, imageCarouselEvents };
};

export default handleImageCarousel;
