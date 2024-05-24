import React, { ReactNode } from "react";

const SiteLayout = ({ children }: { children: ReactNode | ReactNode[] }) => {
	return <div className='max-w-4xl mx-auto bg-white'>{children}</div>;
};

export default SiteLayout;
