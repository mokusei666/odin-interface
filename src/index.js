import './styles.css';
import handleDropdownMenu from './dropdown-menu';
import handleImageCarousel from './image-carousel';

handleDropdownMenu();
const carousel = handleImageCarousel();
carousel.imageCarouselRotation();
carousel.imageCarouselEvents();
