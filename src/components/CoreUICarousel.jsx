import { CCarousel, CCarouselItem } from "@coreui/react";

function CoreUICarousel({ item1, item2, item3 }) {
  return (
    <CCarousel transition="crossfade" indicators className="h-[50dvh] w-full">
      <CCarouselItem>{item1}</CCarouselItem>
      <CCarouselItem>{item2}</CCarouselItem>
      <CCarouselItem>{item3}</CCarouselItem>
    </CCarousel>
  );
}

export default CoreUICarousel;
