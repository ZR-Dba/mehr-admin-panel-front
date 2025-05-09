import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import Loader from "../Layout/Loader";
import CustomizerContext from "../_helper/Customizer";

const Callback = () => {
	const { layoutURL } = useContext(CustomizerContext);

	const { user } = useAuth0();
	useEffect(() => {
		if (user) {
			localStorage.setItem("auth0_profile", JSON.stringify(user));
			localStorage.setItem("authenticated", true);
			window.location.href = `${process.env.REACT_APP_BASE_PATH}/Dashboard/${layoutURL}`;
		}
	});

	return (
		<div>
			<Loader />
		</div>
	);
};

export default Callback;
