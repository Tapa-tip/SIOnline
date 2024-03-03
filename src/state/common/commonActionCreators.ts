import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import DataContext from '../../model/DataContext';
import State from '../State';
import * as CommonActions from './CommonActions';
import GameSound from '../../model/enums/GameSound';
import { gameSoundPlayer } from '../../utils/GameSoundPlayer';

const isConnectedChanged: ActionCreator<CommonActions.IsConnectedChangedAction> = (isConnected: boolean, reason: string) => ({
	type: CommonActions.CommonActionTypes.IsConnectedChanged,
	isConnected,
	reason,
});

const computerAccountsChanged: ActionCreator<CommonActions.ComputerAccountsChangedAction> = (computerAccounts: string[]) => ({
	type: CommonActions.CommonActionTypes.ComputerAccountsChanged,
	computerAccounts
});

const onConnectionClosed: ActionCreator<ThunkAction<void, State, DataContext, Action>> =
	(message: string) => async (dispatch: Dispatch<any>) => {
		dispatch(isConnectedChanged(false));

		alert(message);
		window.location.reload();
	};

const serverInfoChanged: ActionCreator<CommonActions.ServerInfoChangedAction> = (
	serverName: string,
	serverLicense: string,
	maxPackageSizeMb: number) => ({
	type: CommonActions.CommonActionTypes.ServerInfoChanged,
	serverName,
	serverLicense,
	maxPackageSizeMb,
});

const commonErrorChanged: ActionCreator<CommonActions.CommonErrorChangedAction> = (error: string) => ({
	type: CommonActions.CommonActionTypes.CommonErrorChanged, error
});

const avatarLoadStart: ActionCreator<CommonActions.AvatarLoadStartAction> = () => ({
	type: CommonActions.CommonActionTypes.AvatarLoadStart
});

const avatarLoadEnd: ActionCreator<CommonActions.AvatarLoadEndAction> = () => ({
	type: CommonActions.CommonActionTypes.AvatarLoadEnd
});

const avatarLoadError: ActionCreator<CommonActions.AvatarLoadErrorAction> = (error: string | null) => ({
	type: CommonActions.CommonActionTypes.AvatarLoadError,
	error
});

const playAudio: ActionCreator<CommonActions.AudioChangedAction> = (audio: GameSound, loop: boolean) => ({
	type: CommonActions.CommonActionTypes.AudioChanged,
	audio: gameSoundPlayer.getSound(audio) ?? null,
	loop,
});

const stopAudio: ActionCreator<CommonActions.AudioChangedAction> = () => ({
	type: CommonActions.CommonActionTypes.AudioChanged,
	audio: null,
	loop: false,
});

const commonActionCreators = {
	isConnectedChanged,
	computerAccountsChanged,
	onConnectionClosed,
	serverInfoChanged,
	commonErrorChanged,
	avatarLoadStart,
	avatarLoadEnd,
	avatarLoadError,
	playAudio,
	stopAudio,
};

export default commonActionCreators;