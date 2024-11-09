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
import EffectOnceComponent from './useEffectOnce/EffectOnceComponent';
import LongPressComponent from './useLongPress.js/LongPressComponent';
import StateWithValidationComponent from './useStateWithValidation/StateWithValidationComponent';
import FormComponent from './useForm/FormComponent';
import InputComponent from './useInput/InputComponent';

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
			<EffectOnceComponent />
			<LongPressComponent />
			<StateWithValidationComponent />
			<FormComponent />
			<InputComponent />
		</>
	);
}

export default App;
