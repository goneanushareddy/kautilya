import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

const CarouselSlider = ({ slider, pagesMpp }) => {
    console.log("car", slider);
    let slides = slider;

    let pageType;
    const pages = {
        mpp: {
            mobile: "https://guprojects.gitam.edu/kautilya-admin/public/mpp/tabs/",
            desktop: "https://guprojects.gitam.edu/kautilya-admin/public/mpp/tabs/",
        },
        placements: {
            mobile: "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/",
            desktop: "https://guprojects.gitam.edu/kautilya-admin/public/mmp_sliders/",
        },
      
    };

    switch (pagesMpp) {
        case "master-program":
            pageType = pages.mpp;
            break;
        case "placements":
            pageType = pages.placements;
            slides = [...slides].reverse(); // Reverse the slides array
            // console.log("switch rev", slides);
            break;
        default:
            pageType = pages.mpp;
    }

    // console.log("reverse slide", slides);

    return (
        <Carousel variant="dark">
            {slides.map((sliderItem) => (
                <CarouselItem key={sliderItem.id}>
                    <div key={sliderItem.id}>
                        <picture>
                            <source media="(max-width:620px)" srcSet={`${pageType.mobile}${sliderItem.mobile_banner}`} />
                            <source media="(min-width:621px)" srcSet={`${pageType.desktop}${sliderItem.desktop_banner}`} />
                            <img
                                className="d-block_carousel"
                                src={`${pageType.desktop}${sliderItem.desktop_banner}`}
                                alt={`Slide ${sliderItem.category}`}
                            />
                        </picture>
                    </div>
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default CarouselSlider;
