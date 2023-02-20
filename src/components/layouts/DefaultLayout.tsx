import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({children} :React.PropsWithChildren<{}>) => {
	return (
		<div className="h-screen overflow-auto">
			<Header></Header>
			{children}
			{/* <Footer></Footer> */}
		</div>
	);
}

export default DefaultLayout;