import { useRef, useContext, useEffect } from 'react';
import { useOnScreen } from "../CustomHook/Customscreen";
import { NavContext } from "../Context/Context"

export const useNav = navLinkId => {
	const ref = useRef(null);

	const { setActiveNavLinkId } = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};