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

// import UpdateEffectComponent from './4-useUpdateEffect/UpdateEffectComponent';
// import ArrayComponent from './5-useArray/ArrayComponent';
// import PreviousComponent from './6-usePrevious/PreviousComponent';
// import StateWithHistoryComponent from './7-useStateWithHistory/StateWithHistoryComponent';
// import ScriptComponent from './11-useScript/ScriptComponent';
// import DeepCompareEffectComponent from './12-useDeepCompareEffect/DeepCompareEffectComponent';
// import OnScreenComponentComponent from './14-useOnScreen/OnScreenComponent';
// import WindowSizeComponent from './15-useWindowSize/WindowSizeComponent';
// import GeolocationComponent from './17-useGeolocation/GeolocationComponent';
// import StateWithValidationComponent from './18-useStateWithValidation/StateWithValidationComponent';
// import SizeComponent from './19-useSize/SizeComponent';
// import EffectOnceComponent from './20-useEffectOnce/EffectOnceComponent';
// import DarkModeComponent from './22-useDarkMode/DarkModeComponent';
// import CopyToClipboardComponent from './23-useCopyToClipboard/CopyToClipboardComponent';
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

			{/* <UpdateEffectComponent /> */}
			{/* <ArrayComponent /> */}
			{/* <PreviousComponent /> */}
			{/* <StateWithHistoryComponent /> */}
			{/* <ScriptComponent /> */}
			{/* <DeepCompareEffectComponent /> */}
			{/* <OnScreenComponentComponent /> */}
			{/* <WindowSizeComponent /> */}
			{/* <GeolocationComponent /> */}
			{/* <StateWithValidationComponent /> */}
			{/* <SizeComponent /> */}
			{/* <EffectOnceComponent /> */}
			{/* <DarkModeComponent /> */}
			{/* <CopyToClipboardComponent /> */}
			{/* <TranslationComponent /> */}
			{/* <OnlineStatusComponent /> */}
			{/* <RenderCountComponent /> */}
			{/* <DebugInformationComponent /> */}
			{/* <LongPressComponent /> */}
		</>
	);
}

export default App;
