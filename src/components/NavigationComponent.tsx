"use client";

import { PrismicNextLink } from "@prismicio/next";
import { PrismicImage, PrismicRichText, PrismicText } from "@prismicio/react";
import {
	NavigationDocument,
	NavigationItemSlice,
	NavigationItemSliceDefaultItem,
	Simplify,
} from "../../prismicio-types";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

type NavigationComponentProps = {
	navigation: NavigationDocument;
};

const NavigationComponent = ({ navigation }: NavigationComponentProps) => {
	return (
		<div className='w-full'>
			<PrismicImage className='w-full h-48 object-cover' field={navigation.data.hero_image} />
			<div className='w-full flex justify-center items-center bg-slate-800 shadow-xl'>
				<NavigationMenu className='text-slate-700'>
					<NavigationMenuList>
						{navigation.data.slices.map((slice) => {
							return (
								<NavigationMenuItem key={slice.id}>
									{slice.items.length > 0 ? (
										<ExpandableNavItem slice={slice} />
									) : (
										<NonExpandableNavItem slice={slice} />
									)}
								</NavigationMenuItem>
							);
						})}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
};

export default NavigationComponent;

const ExpandableNavItem = ({ slice }: { slice: NavigationItemSlice }) => {
	const ListItem = ({ item }: { item: Simplify<NavigationItemSliceDefaultItem> }) => {
		return (
			<NavigationMenuLink
				key={JSON.stringify(item)}
				asChild
				className='px-4 py-2 flex items-center'
			>
				<PrismicNextLink field={item.child_link} className='hover:bg-slate-700 m-2 rounded '>
					<div className=' flex flex-col gap-x-2 text-sm mb-auto'>
						<p className='text-sm'>
							<PrismicText field={item.child_name} />
						</p>
						<p className=' text-gray-400'>
							<PrismicText field={item.child_description} />
						</p>
					</div>
				</PrismicNextLink>
			</NavigationMenuLink>
		);
	};

	return (
		<>
			<NavigationMenuTrigger className='bg-transparent text-white rounded-none py-8 text-lg'>
				<PrismicNextLink field={slice.primary.link}>
					<PrismicText field={slice.primary.name} />
				</PrismicNextLink>
			</NavigationMenuTrigger>
			<NavigationMenuContent>
				<div className='w-[600px] bg-slate-800 text-white top-0 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-2items-center'>
					{slice.items.map((item, ii) => {
						return <ListItem key={ii} item={item} />;
					})}
				</div>
			</NavigationMenuContent>
		</>
	);
};

const NonExpandableNavItem = ({ slice }: { slice: NavigationItemSlice }) => {
	return (
		<NavigationMenuLink
			className={cn(
				navigationMenuTriggerStyle(),
				"bg-transparent text-white rounded-none py-8 text-lg"
			)}
			key={JSON.stringify(slice)}
			asChild
		>
			<PrismicNextLink field={slice.primary.link}>
				<PrismicText field={slice.primary.name} />
			</PrismicNextLink>
		</NavigationMenuLink>
	);
};
