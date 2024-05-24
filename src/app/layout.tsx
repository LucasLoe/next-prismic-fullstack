import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Navigation } from "@/components/Navigation";
import SiteLayout from "@/components/SiteLayout";

const GlobalSiteLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className='w-full bg-slate-900 min-h-screen p-0 m-0'>{children}</div>;
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body >
				<GlobalSiteLayout>
					<Navigation />
					<SiteLayout>{children}</SiteLayout>
				</GlobalSiteLayout>
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
