import { getCookie, setCookie } from './CookieHelpers';
import IStateManager, { FullScreenMode } from './IStateManager';
import { Store } from 'redux';

const ACCEPT_LICENSE_KEY = 'ACCEPT_LICENSE';

export default class TauriStateManager implements IStateManager {
	constructor(private isLegacy: boolean) { }

	async initAsync(store: Store): Promise<void> {
		console.log('Loaded from Tauri');
	}

	onReady() {
	}

	isLicenseAccepted(): boolean {
		return getCookie(ACCEPT_LICENSE_KEY) !== '';
	}

	acceptLicense() {
		setCookie(ACCEPT_LICENSE_KEY, '1', 365);
	}

	loadNavigationState(): any {
		return window.history.state;
	}

	saveNavigationState(state: any, url: string | null | undefined) {
		window.history.pushState(state, '', url);
	}

	isFullScreenSupported(): boolean {
		return !this.isLegacy;
	}

	detectFullScreen(): FullScreenMode {
		return FullScreenMode.Undefined;
	}

	async setFullScreen(fullScreen: boolean): Promise<boolean> {
		window.parent.postMessage({ type: 'fullscreen', payload: fullScreen }, '*');
		return true;
	}
}