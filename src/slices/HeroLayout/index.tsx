import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicImage, PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroLayout`.
 */
export type HeroLayoutProps = SliceComponentProps<Content.HeroLayoutSlice>;

/**
 * Component for "HeroLayout" Slices.
 */
const HeroLayout = ({ slice }: HeroLayoutProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='h-48 grid grid-cols-1 sm:grid-cols-2 text-slate-50'
		>
			<PrismicImage field={slice.primary.image} className='object-cover w-full h-full' />
			<div className='flex flex-col justify-center items-center p-8 bg-slate-800'>
				<p className='text-xs text-red-300 pb-6 text-left self-start'>
					{slice.primary.accent_headline}{" "}
				</p>
				<div className='text-2xl font-medium pb-4 w-full text-center'>
					<PrismicRichText field={slice.primary.title} />
				</div>
				<div className='text-sm w-full'>
					<PrismicRichText field={slice.primary.description} />
				</div>
				{slice.primary.call_to_action_field_label && (
					<Button asChild className="rounded-none mt-4">
						<PrismicNextLink field={slice.primary.call_to_action_link}>
							<p>{slice.primary.call_to_action_field_label}</p>
						</PrismicNextLink>
					</Button>
				)}
			</div>
		</section>
	);
};

export default HeroLayout;
