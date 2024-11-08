import AsyncComponent from './useAsync/AsyncComponent';
import FetchComponent from './useFetch/FetchComponent';
import TimeoutComponent from './useTimeout/TimeoutComponent';
import DebounceComponent from './useDebounce/DebounceComponent';
import ToggleComponent from './useToggle/ToggleComponent';
import StorageComponent from './useStorage/StorageComponent';
import CookieComponent from './useCookie/CookieComponent';
import EventListenerComponent from './useEventListener/EventListenerComponent';
import HoverComponent from './useHover/HoverComponent';
import ClickOutsideComponent from './useClickOutside/ClickOutsideComponent';
import MediaQueryComponent from './useMediaQuery/MediaQueryComponent';
import WindowSizeComponent from './useWindowSize/WindowSizeComponent';
import GeolocationComponent from './useGeolocation/GeolocationComponent';
import OnScreenComponentComponent from './useOnScreen/OnScreenComponent';
import SizeComponent from './useSize/SizeComponent';
import CopyToClipboardComponent from './useCopyToClipboard/CopyToClipboardComponent';

// import UpdateEffectComponent from './4-useUpdateEffect/UpdateEffectComponent';
// import ArrayComponent from './5-useArray/ArrayComponent';
// import PreviousComponent from './6-usePrevious/PreviousComponent';
// import StateWithHistoryComponent from './7-useStateWithHistory/StateWithHistoryComponent';
// import ScriptComponent from './11-useScript/ScriptComponent';
// import DeepCompareEffectComponent from './12-useDeepCompareEffect/DeepCompareEffectComponent';
// import StateWithValidationComponent from './18-useStateWithValidation/StateWithValidationComponent';
// import EffectOnceComponent from './20-useEffectOnce/EffectOnceComponent';
// import DarkModeComponent from './22-useDarkMode/DarkModeComponent';
// import TranslationComponent from './25-useTranslation/TranslationComponent';
// import OnlineStatusComponent from './26-useOnlineStatus/OnlineStatusComponent';
// import RenderCountComponent from './27-useRenderCount/RenderCountComponent';
// import DebugInformationComponent from './28-useDebugInformation/DebugInformationComponent';
// import LongPressComponent from './30-useLongPress.js/LongPressComponent';

function App() {
	return (
		<>
			<AsyncComponent />
			<TimeoutComponent />
			<DebounceComponent />
			<ToggleComponent />
			<FetchComponent />
			<StorageComponent />
			<CookieComponent />
			<EventListenerComponent />
			<HoverComponent />
			<ClickOutsideComponent />
			<MediaQueryComponent />
			<WindowSizeComponent />
			<GeolocationComponent />
			<OnScreenComponentComponent />
			<SizeComponent />
			<CopyToClipboardComponent />

			{/* <UpdateEffectComponent /> */}
			{/* <ArrayComponent /> */}
			{/* <PreviousComponent /> */}
			{/* <StateWithHistoryComponent /> */}
			{/* <ScriptComponent /> */}
			{/* <DeepCompareEffectComponent /> */}
			{/* <StateWithValidationComponent /> */}
			{/* <EffectOnceComponent /> */}
			{/* <DarkModeComponent /> */}
			{/* <TranslationComponent /> */}
			{/* <OnlineStatusComponent /> */}
			{/* <RenderCountComponent /> */}
			{/* <DebugInformationComponent /> */}
			{/* <LongPressComponent /> */}
		</>
	);
}

export default App;
