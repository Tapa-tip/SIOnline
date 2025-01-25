import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import State from '../../../state/State';
import roomActionCreators from '../../../state/room/roomActionCreators';
import localization from '../../../model/resources/localization';
import FlyoutButton, { FlyoutVerticalOrientation, FlyoutTheme, FlyoutHorizontalOrientation } from '../../common/FlyoutButton/FlyoutButton';
import Role from '../../../model/Role';
import ChatMessage from '../../../model/ChatMessage';
import { isHost } from '../../../utils/StateHelpers';
import isWellFormedUri from '../../../utils/isWellFormedUri';
import { useAppDispatch } from '../../../state/hooks';
import { AppDispatch } from '../../../state/store';
import { selectPlayers } from '../../../state/room2Slice';
import { showProfile, showSettings } from '../../../state/uiSlice';

import './SideControlPanel.css';
import nextImg from '../../../../assets/images/next.png';
import pauseImg from '../../../../assets/images/pause.png';
import exitImg from '../../../../assets/images/exit.png';

interface SideControlPanelProps {
	isConnected: boolean;
	role: Role;
	isChatVisible: boolean;
	isChatActive: boolean;
	isHost: boolean;
	hasGameStarted: boolean;
	isPaused: boolean;
	lastReplic: ChatMessage | null;
	areStakesVisible: boolean;
	areSumsEditable: boolean;
	roundsNames: string[] | null;
	voiceChatUri: string | null;

	onChatVisibilityChanged: (isOpen: boolean) => void;
	onShowPersons: () => void;
	onShowTables: () => void;
	onShowBanned: () => void;
	onShowGameInfo: () => void;
	onPause: () => void;
	onGiveTurn: () => void;
	onExit: (appDispatch: AppDispatch) => void;
	onEditSums: (enable: boolean) => void;
	onMoveNext: () => void;
	showGameManageDialog: () => void;
	onStart: () => void;
	onPass: () => void;
}

const mapStateToProps = (state: State) => ({
	isConnected: state.common.isSIHostConnected,
	role: state.room.role,
	isChatVisible: state.room.chat.isVisible,
	isChatActive: state.room.chat.isActive,
	isHost: isHost(state),
	hasGameStarted: state.room.stage.isGameStarted,
	isPaused: state.room.stage.isGamePaused,
	lastReplic: state.room.lastReplic,
	areStakesVisible: state.room.stakes.areVisible,
	areSumsEditable: state.room.areSumsEditable,
	roundsNames: state.room.roundsNames,
	voiceChatUri: state.room.metadata.voiceChatUri,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	onChatVisibilityChanged: (isOpen: boolean) => {
		dispatch(roomActionCreators.runChatVisibilityChanged(isOpen));
	},
	onShowPersons: () => {
		dispatch(roomActionCreators.runShowPersons());
	},
	onShowTables: () => {
		dispatch(roomActionCreators.runShowTables());
	},
	onShowBanned: () => {
		dispatch(roomActionCreators.runShowBanned());
	},
	onShowGameInfo: () => {
		dispatch(roomActionCreators.runShowGameInfo());
	},
	onPause: () => {
		dispatch(roomActionCreators.pause() as unknown as Action);
	},
	onGiveTurn: () => {
		dispatch(roomActionCreators.giveTurn() as unknown as Action);
	},
	onExit: (appDispatch: AppDispatch) => {
		dispatch(roomActionCreators.exitGame(appDispatch) as unknown as Action);
	},
	onEditSums: (enable: boolean) => {
		dispatch(roomActionCreators.areSumsEditableChanged(enable) as unknown as Action);
	},
	onMoveNext: () => {
		dispatch(roomActionCreators.moveNext() as unknown as Action);
	},
	showGameManageDialog: () => {
		dispatch(roomActionCreators.runShowManageGame());
	},
	onStart: () => {
		dispatch(roomActionCreators.startGame() as unknown as Action);
	},
	onPass: () => {
		dispatch(roomActionCreators.onPass() as unknown as Action);
	},
});

export function SideControlPanel(props: SideControlPanelProps): JSX.Element {
	const chatButtonStyle: React.CSSProperties = props.isChatActive ? {
		backgroundColor: 'lightyellow'
	} : {};

	const gameMenuHostStyle: React.CSSProperties = {
		flex: '1 0 0'
	};

	const pauseTitle = props.isPaused ? localization.resume : localization.pause;
	const canPause = props.isHost || props.role === Role.Showman;

	const enabledClass = props.isConnected ? '' : 'disabled';
	const enabledManagementClass = props.isConnected && props.roundsNames && props.roundsNames.length >= 2 ? '' : 'disabled';

	const canStart = !props.hasGameStarted && props.isHost;

	const { voiceChatUri } = props;
	const appDispatch = useAppDispatch();

	const onGiveTurn = () =>{
		props.onGiveTurn();
		appDispatch(selectPlayers([]));
	};

	return (
		<div className="game__utilsArea">
			<div className="gameMessageHost">
				<div className='sidecontrol_buttons'>
					<div className="gameMenuHost" style={gameMenuHostStyle}>
						<FlyoutButton
							className="gameMenuButton imageButton"
							title={localization.menu}
							flyout={(
								<ul className="gameMenu">
									{props.role === Role.Showman
										? (
											<>
												<li
													className={`${enabledClass} ${props.areSumsEditable ? 'active' : ''}`}
													onClick={() => props.onEditSums(!props.areSumsEditable)}
												>
													{localization.changeSums}
												</li>
												<li
													className={enabledManagementClass}
													title={localization.gameManageHint}
													onClick={() => props.showGameManageDialog()}>
													{localization.game}
												</li>
											</>
										) : null}

									<li onClick={() => props.onShowPersons()}>{localization.members}</li>

									{props.isHost
										? <li onClick={() => props.onShowTables()}>{localization.tables}</li>
										: null}

									<li onClick={() => props.onShowBanned()}>{localization.bannedList}</li>
									<li onClick={() => props.onShowGameInfo()}>{localization.gameInfo}</li>

									{props.role === Role.Showman ? (
										<li className={enabledClass} onClick={onGiveTurn}>{localization.giveTurn}</li>
										) : null}

									{voiceChatUri && isWellFormedUri(voiceChatUri) ? (
										<li title={voiceChatUri} onClick={() => window.open(voiceChatUri, '_blank')}>{localization.voiceChat}</li>
									) : null}

									<li onClick={() => appDispatch(showSettings(true))}>{localization.settings}</li>
									<li onClick={() => appDispatch(showProfile(true))}>{localization.profile}</li>
								</ul>
							)}
							theme={FlyoutTheme.Dark}
							alignWidth
							verticalOrientation={FlyoutVerticalOrientation.Top}
						>
							<span>…</span>
						</FlyoutButton>
					</div>

					<button
						type="button"
						className={`standard imageButton showChat ${props.isChatVisible ? 'active' : ''}`}
						onClick={() => props.onChatVisibilityChanged(!props.isChatVisible)}
						style={chatButtonStyle}
						title={localization.showChat}
					>
						<span>💬</span>
					</button>

					{canPause ? (
						<button
							type="button"
							className={`pauseButton standard imageButton ${props.isPaused ? 'active' : ''}`}
							title={pauseTitle}
							disabled={!props.isConnected || !props.hasGameStarted}
							onClick={() => props.onPause()}
						>
							<img alt='pause' src={pauseImg} />
						</button>
					) : null}

					{props.isHost ? (
						<button
							type="button"
							className={`nextButton standard imageButton ${canStart ? 'startButton' : ''}`}
							title={canStart ? localization.startGameHint : localization.next}
							onClick={canStart ? props.onStart : props.onMoveNext}>
							{canStart ? <span role="img" aria-label="arrow right">▶</span> : <img src={nextImg} />}
						</button>
					) : null}

					<FlyoutButton
						className="exit standard imageButton"
						title={localization.exit}
						flyout={(
							<div id="exitMenu" className="exitMenu">
								<div id="exitMenuPopup" className="gameMenuPopup">
									<p>{localization.exitConfirmation}</p>
									<ul>
										<li
											className={enabledClass}
											onClick={() => props.onExit(appDispatch)}>
											{localization.exitFromGame}
										</li>
									</ul>
								</div>
							</div>
						)}
						theme={FlyoutTheme.Dark}
						alignWidth
						verticalOrientation={FlyoutVerticalOrientation.Top}
						horizontalOrientation={FlyoutHorizontalOrientation.Left}
					>
						<img alt='exit' src={exitImg} />
					</FlyoutButton>
				</div>
			</div>

			{props.lastReplic && props.lastReplic.text.length > 0 ? (
				<div id="lastReplic">
					<span>
						{props.lastReplic.sender ? (
							<span>
								<b>{props.lastReplic.sender}</b>
								<span>: </span>
							</span>
						) : null}
						{props.lastReplic.text}
					</span>
				</div>
			) : null}
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideControlPanel);
