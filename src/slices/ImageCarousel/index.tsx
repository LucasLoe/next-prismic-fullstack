import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageCarousel`.
 */
export type ImageCarouselProps = SliceComponentProps<Content.ImageCarouselSlice>;

/**
 * Component for "ImageCarousel" Slices.
 */
const ImageCarousel = ({ slice }: ImageCarouselProps): JSX.Element => {
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<Carousel className='w-full max-w-xl mx-auto'>
				<CarouselContent>
					{slice.items.map((item, idx) => {
						return (
							<CarouselItem key={idx}>
								<PrismicImage field={item.image} />
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselNext />
				<CarouselPrevious />
			</Carousel>
		</section>
	);
};

export default ImageCarousel;
