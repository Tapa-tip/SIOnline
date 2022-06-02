import Sex from '../../model/enums/Sex';
import TimeSettings from '../../client/contracts/TimeSettings';

export const enum SettingsActionTypes {
	SoundVolumeChanged = 'SOUND_VOLUME_CHANGED',
	ShowPersonsAtBottomOnWideScreenChanged = 'SHOW_PERSONS_AT_BOTTOM_ON_WIDE_SCREEN',
	SexChanged = 'SEX_CHANGED',
	OralChanged = 'ORAL_CHANGED',
	FalseStartsChanged = 'FALSE_STARTS_CHANGED',
	HintShowmanChanged = 'HINT_SHOWMAN_CHANGED',
	PartialTextChanged = 'PARTIAL_TEXT_CHANGED',
	ReadingSpeedChanged = 'READING_SPEED_CHANGED',
	ManagedChanged = 'MANAGED_CHANGED',
	IgnoreWrongChanged = 'IGNORE_WRONG_CHANGED',
	TimeSettingChanged = 'TIME_SETTING_CHANGED',
	ResetSettings = 'RESET_SETTINGS',
	LanguageChanged = 'LANGUAGE_CHANGED',
}

export type SoundVolumeChangeAction = { type: SettingsActionTypes.SoundVolumeChanged; volume: number };
export type ShowPersonsAtBottomOnWideScreenChangedAction = {
	type: SettingsActionTypes.ShowPersonsAtBottomOnWideScreenChanged;
	showPersonsAtBottomOnWideScreen: boolean;
};
export type SexChangedAction = { type: SettingsActionTypes.SexChanged; newSex: Sex };
export type FalseStartsChangedAction = { type: SettingsActionTypes.FalseStartsChanged; falseStarts: boolean };
export type OralChangedAction = { type: SettingsActionTypes.OralChanged; oral: boolean };
export type HintShowmanChangedAction = { type: SettingsActionTypes.HintShowmanChanged; hintShowman: boolean };
export type PartialTextChangedAction = { type: SettingsActionTypes.PartialTextChanged; partialText: boolean };
export type ReadingSpeedChangedAction = { type: SettingsActionTypes.ReadingSpeedChanged; readingSpeed: number };
export type ManagedChangedAction = { type: SettingsActionTypes.ManagedChanged; managed: boolean };
export type IgnoreWrongChangedAction = { type: SettingsActionTypes.IgnoreWrongChanged; ignoreWrong: boolean };
export type TimeSettingChangedAction = {
	type: SettingsActionTypes.TimeSettingChanged;
	name: keyof TimeSettings;
	value: number;
};
export type ResetSettingsAction = { type: SettingsActionTypes.ResetSettings };
export type LanguageChangedAction = { type: SettingsActionTypes.LanguageChanged, language: string | null };

export type KnownSettingsAction =
	| SoundVolumeChangeAction
	| ShowPersonsAtBottomOnWideScreenChangedAction
	| SexChangedAction
	| OralChangedAction
	| FalseStartsChangedAction
	| PartialTextChangedAction
	| ReadingSpeedChangedAction
	| HintShowmanChangedAction
	| ManagedChangedAction
	| IgnoreWrongChangedAction
	| TimeSettingChangedAction
	| ResetSettingsAction
	| LanguageChangedAction;
