import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import State from '../../state/State';
import settingsActionCreators from '../../state/settings/settingsActionCreators';
import localization from '../../model/resources/localization';

import './MuteButton.css';

interface MuteButtonProps {
	isSoundEnabled: boolean;
	onMute: (isSoundEnabled: boolean) => void;
}

const mapStateToProps = (state: State) => ({
	isSoundEnabled: state.settings.isSoundEnabled
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	onMute: (isSoundEnabled: boolean) => {
		dispatch(settingsActionCreators.isSoundEnabledChanged(isSoundEnabled));
	}
});

export function MuteButton(props: MuteButtonProps): JSX.Element {
	return (
		<button
			type="button"
			onClick={() => props.onMute(!props.isSoundEnabled)}
			className="muteButton"
			title={props.isSoundEnabled ? localization.disableSound : localization.enableSound}
		>
			{props.isSoundEnabled ? '🔈' : '🔇'}
		</button>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(MuteButton);
