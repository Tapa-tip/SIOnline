﻿import LocalizedStrings from 'localized-strings';

// First language is used as the default when browser language is different from provided languages

const localization = new LocalizedStrings({
	en: {
		about: [
			'SIGame is an intellectual quiz in which everyone can test their knowledge and reaction speed and fight against opponents.',
			`Game rules are very simple: all questions in the game are divided into themes,
			 and each question in the theme has its own price.
			 Each player has a personal score, which at the beginning of the game is 0.
			 A question is presented, after which a frame appears on the screen indicating that you can press the button and answer.
			 If the player knows the answer, he/she can press the red button. The player who presses the button earlier than others
			 (and will not have a false start), gives an answer. If the answer is correct, the question price is added to the player's score;
			 otherwise - the price is substracted from the score. 
			 In the latter case, other players can try their luck and press the button to answer.`,
			`There are also special questions in the game. 
			In the "Stake Question" the participants bid for a question, and the player with the highest bet answers. 
			In this case, the "All-in" bet (the bet which is equal to the whole player score) can only be outbid by another "All-in".`,
			`"Secret Question" must be given to another player. 
			The player who received it must (if it is included in the question) choose the price of the question and answer it. 
			The theme of the question may differ from the main theme in which the question was opened.`,
			`"Question for yourself without risk" is answered by the player who opened it. 
			In case of a correct answer to the question, he receives doubled question price. 
			In case of an incorrect answer to the question, the player loses nothing.`,
			`The game can also have a final round in which each of the players makes a bet. 
			A question is asked, time is given for thinking, and each of the players submits their answer to the host. 
			After that, the correct answer is announced, and each of the players receives or loses money according to their bet.`,
			'The game winner is the player with the highest score after the last question.',
			'The game button can also be activated using the Ctrl key or the right mouse button.'
		],
		aboutAuthor: 'Author',
		aboutSupport: 'Technical support',
		aboutTitle: 'About',
		acceptLicense: 'Accept license',
		addTable: 'Add table',
		all: 'All',
		allIn: 'ALL IN!',
		allowEveryoneToPlayHiddenStakes: 'Every player playes',
		allowEveryoneToPlayHiddenStakesHint: 'even having 0 or negative score',
		answer: 'Answer',
		answerChecking: 'Answer check',
		anyonePlay: 'Play with random opponents',
		apellateAnswer: 'Apellate answer',
		apellation: 'Apellation',
		apiCallsQuotaExceeded: 'Requests quota exceeded. Please try again later',
		appName: 'SIGame',
		appUser: 'SIGame',
		ascending: 'ascending',
		attachContentToTable: 'Add theme comments and right answers to game table',
		audio: 'Audio',
		audioLoadError: 'Audio loading error',
		authorInfo: 'Vladimir Khil',
		autoSearch: 'Fast room',
		autoSearchHint: 'Find a room with an open slot or create a new one',
		avatar: 'Avatar',
		avatarIsTooBig: 'Avatar exceeds maximum size!',
		avatarLoadError: 'Avatar upload error',
		backgroundColor: 'Background color',
		badPackage: 'Bad question package!',
		ban: 'Ban',
		bannedList: 'Banned list',
		bindNextButton: 'Activate \'Next\' button by Right keyboard button',
		bot: 'Bot',
		buttonPressMode: 'Button press mode',
		buttonPressModeFirstWins: 'Who pressed first',
		buttonPressModeFirstWinsClient: 'Who pressed first (according to client)',
		buttonPressModeRandomWithinInterval: 'Random from early pressers',
		by: 'by',
		byGame: 'by game',
		cancelAnswer: 'Cancel player answering',
		cannotConnectToServer: 'Cannot connect to server',
		changeSums: 'Change sums',
		changeToBot: 'Change to bot',
		changeToHuman: 'Change to human',
		chat: 'Chat',
		chooserMark: 'Question chooser mark',
		close: 'Close',
		comment: 'Comment',
		common: 'Common',
		complain: 'Complain',
		complainHint: 'The question contains spelling or factual error',
		composer: 'Composer',
		computer: 'Bot',
		computerAccountsMissing: 'Computer accounts not loaded. Try to reload the game',
		computerPlayers: 'Bots',
		connectionClosed: 'Server connection lost!',
		connectionReconnecting: 'Connection lost, trying to reconnect…',
		connectionReconnected: 'Connection restored!',
		contactUri: 'Authors contact',
		content: 'Content',
		cookiesConfirm: 'Accept cookies',
		cookiesWarning: 'This application uses cookies. If you stay on this page, you ageee with that',
		copyrightIssue: 'Copyright issue',
		copyText: 'Copy text to clipboard',
		corruptedPackage: 'Question package is corrupted!',
		created: 'Created',
		createOwnPackage: 'Create your own package',
		defaultShowman: 'Leonardo da Vinci',
		deleteAvatar: 'Delete avatar',
		deleteTable: 'Delete table',
		descending: 'descending',
		disableSound: 'Disable sound',
		displayAnswerOptionsLabels: 'Display answer options labels',
		displayAnswerOptionsOneByOne: 'Display answer options one by one',
		displaySources: 'Display questions sources',
		donate: 'Donate',
		donateComment: `Donations are optional and are used exclusively to cover hosting and domain expenses.
The project is non-commercial and exists for educational purposes.
All game functionality is available for free—donations do not affect gameplay or grant access to additional features. Thank you for your support!`,
		downloadCount: 'Download count',
		drop: 'Drop',
		duplicateUserName: 'A user with this name is already logged on the server!',
		duration: 'Duration',
		editTable: 'Edit game table',
		enableSound: 'Enable sound',
		enter: 'Sign in',
		enterPin: 'Enter PIN code to join the game',
		errorBadPackage: 'Bad question package!',
		errorDuplicateGameName: 'A game with the provided name already exists!',
		errorHappened: 'Error happened!',
		errorInternalServerError: 'Cannot create the game because of the server error!',
		errorObsoleteVersion: 'Your game version is outdated. Update the game',
		errorPackageNotFound: 'Cannot create the game because the question package was not found!',
		errorServerNotReady: 'Server is not ready to start a game',
		errorServerUnderMaintainance: `Server is under maintenance! Please reconnect after a while.
		We apologize for any inconvenience.`,
		errorTolerant: 'right to make a mistake',
		errorTooManyGames: 'The maximum number of running games on the server has been exceeded! Please, try again later.',
		errorUnknownError: 'Unable to create the game for unknown reason!',
		exit: 'Exit',
		exitConfirmation: 'Really exit?',
		exitError: 'Cannot exit game!',
		exitFromGame: 'Leave game',
		failedToCompleteNegotiationWithTheServer: 'Failed to complete negotiation with the server',
		failedToFetch: 'Cannot send request to server',
		falseStarts: 'False starts',
		falseStartsHint: 'you can not press the button before the end of the question reading',
		female: 'woman',
		file: 'File with questions',
		fileNonReadable: 'Cannot open file. Maybe it has been changed. Pleae select it again',
		filter: 'Filter',
		final: 'Final',
		floatingControls: 'Auto-hide game controls',
		forbiddenNickname: 'This nickname is forbidden on the server!',
		freeTable: 'Free table',
		friendsPlay: 'Play with friends',
		fullScreen: 'Full screen mode',
		game: 'Game',
		gameAuthor: 'Game author',
		gameButton: 'Game button',
		gameButtonKey: 'Game button key',
		gameClosed: 'Game closed by server due to inactivity',
		gameCount: 'Game count',
		gameDuration: 'Game duration',
		gameFinished: 'Game finished',
		gameInfo: 'Game info',
		gameJoin: 'Join game',
		gameManageHint: 'Manage game state',
		gameName: 'Name',
		gameNameMustBeSpecified: 'Game name required',
		gameNotFound: 'Game not found',
		gameLoading: 'Game loading…',
		gameOf: 'Game by',
		games: 'Games',
		gameStarted: 'Game started',
		gamesStatistics: 'Games for the last 24 hours',
		gamesTitle: 'Find a room in the list or create a new one',
		gameThemes: 'Game themes',
		gameType: 'Game type',
		gameTypeClassicHint: 'Table: questions are selected by players',
		gameTypeFinalHint: 'Theme list: final',
		gameTypeSimpleHint: 'Table: questions are played sequentially',
		getPin: 'PIN-code',
		giveTurn: 'Change active player',
		giveTurnHint: 'Select new active player',
		greeting: 'Welcome to SIGame!',
		hideAnswers: 'Hide answers',
		hideChat: 'Hide chat',
		hintShowman: 'Provide right answers to the showman in advance',
		host: 'Host',
		hostNameChanged: 'Game host has been changed by {0} to {1}',
		hour: 'hour',
		hours2: 'hours',
		hours5: 'hours',
		html: 'HTML',
		human: 'Human',
		humanPlayers: 'Humans',
		iAmRightFemale: 'I am right!',
		iAmRightMale: 'I am right!',
		iDisagree: 'I disagree!',
		iDisagreeHint: 'Disagree with someone else answer',
		images: 'Images',
		inputAnswer: 'Enter answer',
		inviteLink: 'Invite link',
		inviteLinkCopied: 'Invite link copied to clipboard!',
		ignoreWrong: 'Subtract points for a wrong answer',
		isRightValidateIt: 'is correct. Decide: should the answer be accepted?',
		joinAsPlayer: 'Player',
		joinAsPlayerHint: 'Join as player',
		joinAsShowman: 'Showman',
		joinAsShowmanHint: 'Join as showman',
		joinAsViewer: 'Viewer',
		joinAsViewerHint: 'Join as viewer',
		joinByPin: 'Join by PIN-code',
		joinError: 'Cannot join game',
		joinLobby: 'Online game',
		joinMode: 'Join mode',
		joinModeAnyRole: 'Any role',
		joinModeForbidden: 'Forbidden',
		joinModeViewer: 'Only as viewer',
		keyRight: 'Right arrow',
		keys: 'Keys',
		keySpace: 'Space',
		kick: 'Kick',
		language: 'Language',
		languageDefault: '(default)',
		languageEn: 'English',
		languageRu: 'Русский',
		latestGames: 'Latest games',
		lawIssue: 'Legal issue',
		library: 'Library',
		librarySearchAll: '(all)',
		librarySearchLessOrEqual: 'less than or equal to',
		librarySearchMoreOrEqual: 'greater than or equal to',
		librarySearchNotSet: '(not set)',
		librarySelect: 'Select',
		libraryTitle: 'Questions library',
		license: 'License',
		licenseInfo: 'License: any use of the game is allowed with the condition of attribution.',
		loading: 'Loading…',
		logo: 'Logo',
		mainMenuSound: 'Main menu sound',
		makeAnswer: 'Answer',
		male: 'man',
		managed: 'Managed game',
		managedHint: 'The game continues only by pressing the "Next" button',
		mediaLoadedMark: 'Media loaded',
		members: 'Members',
		menu: 'Menu',
		message: 'Message',
		methodNotAllowed: 'Wrong operation method',
		minute: 'minute',
		minutes2: 'minutes',
		minutes5: 'minutes',
		myRole: 'My role',
		name: 'Name',
		new: 'New',
		newGame: 'New game',
		news: 'News',
		next: 'Next (→)',
		no: 'No',
		nofalsestart: 'without false starts',
		nominal: 'Nominal',
		notReadyFemale: 'Cancel readiness',
		notReadyMale: 'Cancel readiness',
		notSet: 'Not set',
		noWarranty: `The game is distributed free of charge.
		The author does not guarantee the correct operation of the game in arbitrary conditions
		and is not responsible for any consequences from the game usage.`,
		ofGames: 'games count',
		oral: 'oral',
		oralGame: 'Oral game',
		oralGameHint: 'If the showman is a human. Good setting for live streaming. Players make a choice and give answers by voice',
		oralPlayersActions: 'Allow players to make actions in oral game',
		orByFilling: 'or by filling',
		other: 'Other',
		packageIsTooBig: 'Package exceeds maximum size!',
		package: 'Package',
		packages: 'Packages',
		packageAuthor: 'Author',
		packageAuthors: 'Authors',
		packageDifficulty: 'Difficulty',
		packageFileWarning: `By uploading a package to the server, you take responsibility for the content of the package.
The package will be automatically deleted from the server after the game ends`,
		packagePublishedDate: 'Publish date',
		packagePublisher: 'Publisher',
		packageRestriction: 'Restriction',
		packageSubject: 'Topic',
		page: 'Page',
		partialImages: 'Partial question images',
		partialImagesHint: 'When playing without false starts, question images are displayed in portions',
		partialImageTime: 'Partial image display',
		partialText: 'Partial question text',
		partialTextHint: 'When playing without false starts, question text is displayed in portions',
		pass: 'Pass',
		password: 'Password',
		passwordRequired: 'Password is required to enter',
		pause: 'Pause',
		pickAnEmoji: 'Pick an emoji',
		pin: 'PIN-code',
		pinCopied: 'PIN-code copied',
		playAllQuestionsInFinalRound: 'Play all questions',
		player: 'Player',
		players: 'Players',
		playersAnswer: 'Player answer',
		playWithBots: 'Play with bots',
		playWithFriends: 'Play with friends',
		preloadRoundContent: 'Preload media content for all persons at the beginning of the round',
		profile: 'Profile',
		question: 'Question',
		questionComplain: 'Complain about question',
		questionCount: 'Question count',
		questionPackage: 'Question package',
		questionReadingSpeed: 'Question reading speed',
		questionTypeForAll: 'FOR ALL',
		questionTypeForAllHint: 'Question is played by all players',
		questionTypeNoRisk: 'FOR YOURSELF WITHOUT RISK',
		questionTypeNoRiskHint: `Question is played by player who opened it, for the doubled price.
		If answer is wrong, the player does not lose money`,
		questionTypeSecret: 'WITH SECRET',
		questionTypeSecretHint: 'Question is given to player and they should answer it',
		questionTypeStake: 'WITH STAKE',
		questionTypeStakeAll: 'FOR ALL WITH STAKE',
		questionTypeStakeHint: 'Question is played by player who made the highest stake. All-in can be overcome by another all-in',
		questionTypeStakeAllHint: 'Everyone makes a stake and plays',
		randomThemes: 'Random themes',
		rateGame: 'Rate game',
		reactions: 'Reactions',
		readyFemale: 'I am ready',
		readyMale: 'I am ready',
		reloadPage: 'Reload page',
		replaceWith: 'Replace with',
		resetToDefaults: 'Reset to defaults',
		resetToDefaultsHint: 'Resets all settings to their initial values',
		restrictionIssue: 'Restriction issue (age, etc.)',
		results: 'Results',
		resume: 'Resume',
		reviews: 'Reviews',
		rightAnswer: 'Right answer',
		rightAnswers: 'Right answers',
		role: 'Role',
		room: 'Room',
		round: 'Round',
		roundsAndThemes: 'Round and themes',
		roundThemes: 'Round themes',
		roundTail: ' round',
		rules: 'Rules',
		rulesClassic: 'Classical',
		rulesRemoveThemes: 'Players remove themes one by one. Question in the last theme is played',
		rulesSequential: 'Questions are played sequentially',
		searchGames: 'Rooms search',
		searchHint: 'Start search to see rooms list',
		sec: 's',
		second: 'second',
		seconds2: 'seconds',
		seconds5: 'seconds',
		select: 'Select…',
		selectAnswerer: 'Select a player to give the question to',
		selectAvatar: 'Select avatar',
		selectFirstPlayer: 'Select a person to start round',
		selectStaker: 'Select a person to make a stake',
		selectThemeDeleter: 'Select a person to delete a theme',
		send: 'Send',
		sendingPackage: 'Sending package to server…',
		server: 'Server',
		serverLicense: 'Server license',
		settings: 'Settings',
		set: 'Set',
		setHost: 'Set as host',
		sex: 'Sex',
		showAnswers: 'Show answers',
		showChat: 'Show chat',
		showman: 'Showman',
		showVideoAvatars: 'Show video avatars',
		singlePlay: 'Single game',
		size: 'Size',
		sort: 'Sort',
		sound: 'Sound',
		soundApp: 'Application sound',
		sourcesInfo: 'Game source code page.',
		soundVolume: 'Sound volume',
		sport: 'Simple',
		sportPlural: 'Simple',
		started: 'Started',
		startGame: 'Create',
		startGameHint: 'Start game without waiting for persons readiness',
		status: 'Status',
		supportInfo: 'Support page.',
		symbolsPerSecond: 'symbols per second',
		syntaxError: 'Syntax error',
		table: 'Table',
		tableHint: 'To answer the question, press the button after the frame lights up on the screen',
		tableLogoAuthor: 'by Vladimir Khil',
		tables: 'Tables',
		text: 'Text',
		textColor: 'Text color',
		theGameWillStartIn: 'The game will start after',
		thePlayerThinksThatHisHerAnswer: 'The player thinks the answer is correct',
		theme: 'Theme',
		time: 'Time',
		timeForBlockingButton: 'Button cooldown (when false starts are enabled)',
		timeForChoosingFinalTheme: 'Choosing theme in Final round',
		timeForChoosingQuestion: 'Choosing question',
		timeForFinalThinking: 'Thinking in Question for All',
		timeForGivingACat: 'Giving Secret Question',
		timeForMakingStake: 'Making stake',
		timeForMediaDelay: 'Pause before asking for answer when playing media',
		timeForPrintingAnswer: 'Entering answer after pressing a button',
		timeForRightAnswer: 'Displaying right answer',
		timeForShowmanDecisions: 'Showman decisions and answer validation',
		timeForThinkingOnQuestion: 'Thinking on question',
		timeForThinkingOnSpecial: 'Thinking on a special question',
		timeOfRound: 'Round',
		tooManyGamesByIp: 'Too many games on a single client IP!',
		tooManyRequests: 'Too many requests. Please try again later',
		topPackages: 'Top packages for 24 hours',
		total: 'Total:',
		trends: 'Trends',
		tv: 'Classic',
		tvPlural: 'Classic',
		unban: 'Remove ban',
		unknownError: 'Unknown error',
		unsupportedBrowser: 'Your browser is not supprted. Please, update or replace it',
		unsupportedMediaType: 'Unsupported media type',
		uploadingImageError: 'Avatar sending error',
		uploadingPackageError: 'Package sending error',
		useApellations: 'Answer apellations',
		useApellationsHint: 'Buttons "I am right" and "I disagree"',
		usedComponents: 'Game components and licenses:',
		userPackages: '',
		users: 'Players',
		userUnbanned: 'User {0} was unbanned',
		validateAnswer: 'Is player ',
		validateAnswerEnd: ' answer correct?',
		video: 'Video',
		videoAvatar: 'Video avatar',
		viewer: 'Viewer',
		viewers: 'Viewers',
		voiceChat: 'Voice chat',
		webCameraUrl: 'Web camera url',
		welcomeTitle: 'Select an action',
		withButton: 'With button',
		withStakeForAll: 'For all with stake',
		withoutPassword: 'Without password',
		wrongAnswer: 'Wrong answer',
		wrongAnswers: 'Wrong answers',
		wrongGameSettings: 'Wrong game settings!',
		yes: 'Yes',
		youAreKicked: 'You have been kicked from the game!',
		yourName: 'Your name'
	},
	ru: {
		about: [
			'SIGame — интеллектуальная викторина, в которой каждый может проверить свои знания и скорость реакции и сразиться с оппонентами.',
			`Правила игры очень просты: все вопросы в игре поделены по темам, и у каждого вопроса в теме есть своя стоимость.
	У каждого игрока имеется персональный счёт, который в начале игры равен 0.
	Звучит вопрос, после которого на экране появляется рамка, показывающая, что можно отвечать.
	Если игрок знает ответ, он может нажать на красную кнопку. Тот из игроков, кто нажмёт на кнопку ранее
	(и не допустит фальстарта), и даёт ответ. В случае верного ответа стоимость вопроса прибавляется к счёту игрока;
	в случае неверного — снимается со счёта. В последнем случае другие игроки снова могут попытать счастья и нажать на кнопку для ответа.`,
			`Также в игре могут встретиться специальные вопросы. В "Вопросе со ставкой" участники торгуются за вопрос, и отвечает на него тот игрок,
	кто поставит наибольшую сумму. При этом "Ва-банк" (т.е. ставка всей суммы на кон) может быть перебит только другим "Ва-банком".`,
			`"Вопрос с секретом" открывший его участник должен передать другому участнику. Получивший его игрок должен (если это заложено в вопросе)
	выбрать стоимость вопроса и ответить на него. Тема вопроса может отличаться от основной темы, в которой находился вопрос.`,
			`На "Вопрос для себя без риска" отвечает открывший его игрок.
	В случае правильного ответа на вопрос он получает удвоенную стоимость вопроса.
	В случае неверного ответа на вопрос игрок ничего не теряет.`,
			`В игре также может быть финальный раунд, в котором каждый из игроков делает ставку. Звучит вопрос, даётся время на размышление,
	и каждый из игроков письменно сдаёт свой ответ. После этого оглашается правильный ответ, и каждый из игроков получает или теряет деньги.`,
			'Победителем игры становится игрок, набравший после последнего вопроса наибольшую сумму.',
			'Игровую кнопку можно также активировать при помощи клавиши Ctrl или правой кнопки мыши.'
		],
		aboutAuthor: 'Автор',
		aboutSupport: 'Техническая поддержка',
		aboutTitle: 'Об игре',
		acceptLicense: 'Принять лицензию',
		addTable: 'Добавить стол',
		all: 'Все',
		allIn: 'ВА-БАНК!',
		allowEveryoneToPlayHiddenStakes: 'Играют все игроки',
		allowEveryoneToPlayHiddenStakesHint: 'даже с 0 или отрицательным счётом',
		answer: 'Ответ',
		answerChecking: 'Проверка ответа',
		anyonePlay: 'Игра со случайными соперниками',
		apellateAnswer: 'Апеллировать свой ответ',
		apellation: 'Апелляция',
		apiCallsQuotaExceeded: 'Превышен лимит запросов. Попробуйте позже',
		appName: 'SIGame',
		appUser: 'SIGame',
		ascending: 'по возрастанию',
		attachContentToTable: 'Добавлять комментарии темы и правильный ответ на табло',
		audio: 'Аудио',
		audioLoadError: 'Ошибка загрузки аудио',
		authorInfo: 'Владимир Хиль',
		autoSearch: 'Быстрая игра',
		autoSearchHint: 'Найти комнату со свободным слотом или создать новую',
		avatar: 'Аватар',
		avatarIsTooBig: 'Аватар превышает максимальный размер!',
		avatarLoadError: 'Ошибка отправки аватара',
		backgroundColor: 'Цвет фона',
		badPackage: 'Плохой пакет вопросов!',
		ban: 'Забанить',
		bannedList: 'Список забаненных',
		bindNextButton: 'Активировать кнопку \'Далее\' по стрелке вправо',
		bot: 'Бот',
		buttonPressMode: 'Режим нажатия кнопки',
		buttonPressModeFirstWins: 'Кто первым нажал',
		buttonPressModeFirstWinsClient: 'Кто первым нажал (по версии клиента)',
		buttonPressModeRandomWithinInterval: 'Рандом из ранних нажавших',
		by: 'от',
		byGame: 'игрой',
		cancelAnswer: 'Отменить ответ игрока',
		cannotConnectToServer: 'Не удалось подключиться к серверу',
		changeSums: 'Изменить суммы',
		changeToBot: 'Заменить на бота',
		changeToHuman: 'Заменить на человека',
		chat: 'Чат',
		chooserMark: 'Метка выбирающего вопрос',
		close: 'Закрыть',
		comment: 'Комментарий',
		common: 'Общее',
		complain: 'Пожаловаться',
		complainHint: 'В вопросе содержится орфографическая или фактическая ошибка',
		composer: 'Композитор',
		computer: 'Бот',
		computerAccountsMissing: 'Не загружены компьютерные аккаунты. Попробуйте перезагрузить игру',
		computerPlayers: 'Боты',
		connectionClosed: 'Соединение с сервером разорвано!',
		connectionReconnecting: 'Соединение потеряно, пытаемся переподключиться…',
		connectionReconnected: 'Соединение восстановлено!',
		contactUri: 'Контакты авторов',
		content: 'Контент',
		cookiesConfirm: 'Принять',
		cookiesWarning: 'Это приложение использует куки-файлы. Оставаясь на странице, вы соглашаетесь с этим',
		copyrightIssue: 'Нарушение авторских прав',
		copyText: 'Скопировать текст в буфер обмена',
		corruptedPackage: 'Пакет вопросов повреждён!',
		created: 'Создана',
		createOwnPackage: 'Создать свой пакет',
		defaultShowman: 'Леонардо да Винчи',
		deleteAvatar: 'Удалить аватар',
		deleteTable: 'Удалить стол',
		descending: 'по убыванию',
		disableSound: 'Отключить звук',
		displayAnswerOptionsLabels: 'Показывать буквы вариантов ответа',
		displayAnswerOptionsOneByOne: 'Показывать варианты ответа по очереди',
		displaySources: 'Показывать источники вопросов',
		donate: 'Донат',
		donateComment: `Донаты не обязательны и тратятся только на оплату хостинга и домена.
	 Проект некоммерческий и существует в образовательных целях.
	 Вся функциональность игры доступна бесплатно - донаты не влияют на игровой процесс
	 и не используются для доступа к дополнительным функциям игры. Спасибо за поддержку!`,
		downloadCount: 'Число скачиваний',
		drop: 'Сбросить',
		duplicateUserName: 'Пользователь с таким именем уже вошёл на сервер!',
		duration: 'Продолжительность',
		editTable: 'Редактировать табло',
		enableSound: 'Включить звук',
		enter: 'Вход',
		enterPin: 'Введите ПИН-код для входа в игру',
		errorBadPackage: 'Плохой пакет вопросов!',
		errorDuplicateGameName: 'Игра с таким именем уже существует!',
		errorHappened: 'Произошла ошибка!',
		errorInternalServerError: 'Не удалось создать игру на сервере из-за ошибки на сервере!',
		errorObsoleteVersion: 'Ваша версия игры устарела. Обновите игру',
		errorPackageNotFound: 'Не удалось создать игру на сервере, так как не был обнаружен игровой пакет!',
		errorServerNotReady: 'Сервер не готов начать игру',
		errorServerUnderMaintainance: `Производится обслуживание сервера! Пожалуйста, подключитесь через некоторое время.
	Приносим извинения за доставленные неудобства.`,
		errorTolerant: 'право на ошибку',
		errorTooManyGames: 'Превышено максимальное количество запущенных игр на сервере! Пожалуйста, подождите.',
		errorUnknownError: 'Не удалось создать игру по неизвестной причине!',
		exit: 'Выход',
		exitConfirmation: 'Действительно выйти?',
		exitError: 'Не удалось выйти из игры!',
		exitFromGame: 'Выйти из игры',
		failedToCompleteNegotiationWithTheServer: 'Не удалось завершить переговоры с сервером',
		failedToFetch: 'Не удалось отправить запрос на сервер',
		falseStarts: 'Фальстарты',
		falseStartsHint: 'нельзя нажимать на кнопку до окончания чтения вопроса',
		female: 'женщина',
		file: 'Файл с вопросами',
		filter: 'Фильтр',
		fileNonReadable: 'Невозможно открыть файл. Возможно, он был изменён. Пожалуйста, выберите его ещё раз',
		final: 'Финал',
		floatingControls: 'Автоматическое скрытие элементов управления',
		forbiddenNickname: 'На сервере запрещено использование такого ника!',
		freeTable: 'Освободить стол',
		friendsPlay: 'Играть с друзьями',
		fullScreen: 'Полноэкранный режим',
		game: 'Игра',
		gameAuthor: 'Автор программы',
		gameButton: 'Игровая кнопка',
		gameButtonKey: 'Клавиша игровой кнопки',
		gameClosed: 'Игра завершена сервером по причине неактивности',
		gameCount: 'Всего игр',
		gameDuration: 'Общая продолжительность',
		gameFinished: 'Игра окончена',
		gameInfo: 'Информация об игре',
		gameJoin: 'Вход в игру',
		gameManageHint: 'Управление состоянием игры',
		gameName: 'Название',
		gameNameMustBeSpecified: 'Необходимо задать название игры',
		gameNotFound: 'Игра не найдена',
		gameLoading: 'Идёт загрузка игры…',
		gameOf: 'Игра от',
		games: 'Игры',
		gameStarted: 'Игра началась',
		gamesStatistics: 'Игры за 24 часа',
		gamesTitle: 'Найдите комнату в списке или создайте новую',
		gameThemes: 'Темы игры',
		gameType: 'Тип игры',
		gameTypeClassicHint: 'Таблица: вопросы выбираются игроками',
		gameTypeFinalHint: 'Список тем: финал',
		gameTypeSimpleHint: 'Таблица: вопросы играются по очереди',
		getPin: 'ПИН-код',
		giveTurn: 'Передать ход игроку',
		giveTurnHint: 'Выберите, кому передать ход',
		greeting: 'Добро пожаловать в SIGame!',
		hideAnswers: 'Скрыть ответы',
		hideChat: 'Скрыть чат',
		hintShowman: 'Сообщать ведущему правильные ответы заранее',
		host: 'Хост',
		hostNameChanged: 'Хост игры был изменён {0} на {1}',
		hour: 'час',
		hours2: 'часа',
		hours5: 'часов',
		html: 'HTML',
		human: 'Человек',
		humanPlayers: 'Люди',
		iAmRightFemale: 'Я права!',
		iAmRightMale: 'Я прав!',
		iDisagree: 'Я против!',
		iDisagreeHint: 'Оспорить чужой ответ',
		ignoreWrong: 'Снимать очки за неверный ответ',
		images: 'Изображения',
		inputAnswer: 'Напишите ответ',
		inviteLink: 'Ссылка для входа',
		inviteLinkCopied: 'Ссылка скопирована',
		isRightValidateIt: 'верен. Примите решение: засчитать ли ответ?',
		joinAsPlayer: 'Игрок',
		joinAsPlayerHint: 'Войти игроком',
		joinAsShowman: 'Ведущий',
		joinAsShowmanHint: 'Войти ведущим',
		joinAsViewer: 'Зритель',
		joinAsViewerHint: 'Войти зрителем',
		joinByPin: 'Вход по ПИН-коду',
		joinError: 'Не удалось подключиться к игре',
		joinLobby: 'Игра онлайн',
		joinMode: 'Режим входа',
		joinModeAnyRole: 'С любой ролью',
		joinModeForbidden: 'Вход запрещён',
		joinModeViewer: 'Только зрителем',
		keyRight: 'Стрелка вправо',
		keys: 'Клавиши',
		keySpace: 'Пробел',
		kick: 'Выгнать',
		language: 'Язык',
		languageDefault: '(по умолчанию)',
		languageEn: 'English',
		languageRu: 'Русский',
		latestGames: 'Последние игры',
		lawIssue: 'Нарушение закона',
		library: 'Библиотека',
		librarySearchAll: '(все)',
		librarySearchLessOrEqual: 'меньше или равна',
		librarySearchMoreOrEqual: 'больше или равна',
		librarySearchNotSet: '(не задано)',
		librarySelect: 'Выбрать',
		libraryTitle: 'Библиотека вопросов',
		license: 'Лицензия',
		licenseInfo: 'Лицензия: допускается любое использование игры с условием указания авторства.',
		loading: 'Загрузка…',
		logo: 'Логотип',
		mainMenuSound: 'Мелодия главного меню',
		makeAnswer: 'Ответить',
		male: 'мужчина',
		managed: 'Управляемая игра',
		managedHint: 'Игра продолжается только по нажатию кнопки "Дальше"',
		mediaLoadedMark: 'Мультимедиа загружено',
		members: 'Участники',
		menu: 'Меню',
		message: 'Сообщение',
		methodNotAllowed: 'Неправильный способ операции',
		minute: 'минута',
		minutes2: 'минуты',
		minutes5: 'минут',
		myRole: 'Моя роль',
		name: 'Имя',
		new: 'Новые',
		newGame: 'Новая игра',
		news: 'Новости',
		next: 'Дальше (→)',
		no: 'Нет',
		nofalsestart: 'без фальстартов',
		nominal: 'Номинал',
		notReadyFemale: 'Отменить готовность',
		notReadyMale: 'Отменить готовность',
		notSet: 'Не задана',
		noWarranty: `Игра распространяется бесплатно. Автор не гарантирует корректность работы игры в произвольных условиях
	и не несёт ответственности за любые последствия от использования игры.`,
		ofGames: 'игр',
		oral: 'устная',
		oralGame: 'Устная игра',
		oralGameHint: 'Если ведущий – человек. Хорошо подходит для стримов. Игроки делают выбор и дают ответ голосом',
		oralPlayersActions: 'Разрешать игрокам делать выбор в устной игре',
		orByFilling: 'или по заполнению',
		package: 'Пакет',
		other: 'Другое',
		packageIsTooBig: 'Пакет превышает максимальный размер!',
		packages: 'Пакеты',
		packageAuthor: 'Автор',
		packageAuthors: 'Авторы',
		packageDifficulty: 'Сложность',
		packageFileWarning: `Загружая пакет на сервер, вы берёте на себя ответственность за содержимое пакета.
Пакет будет автоматически удалён с сервера после окончания игры`,
		packagePublishedDate: 'Дата публикации',
		packagePublisher: 'Издатель',
		packageRestriction: 'Ограничение',
		packageSubject: 'Тематика',
		page: 'Страница',
		partialImages: 'Частичный вывод изображений',
		partialImagesHint: 'При игре без фальстартов изображения выводятся порционно',
		partialImageTime: 'Вывод частичных изображений',
		partialText: 'Частичный вывод текста',
		partialTextHint: 'При игре без фальстартов текст выводится порционно',
		pass: 'Пас',
		password: 'Пароль',
		passwordRequired: 'Требуется пароль для входа',
		pause: 'Пауза',
		pickAnEmoji: 'Выбрать эмодзи',
		pin: 'ПИН-код',
		pinCopied: 'ПИН-код скопирован',
		playAllQuestionsInFinalRound: 'Играть все вопросы',
		player: 'Игрок',
		players: 'Игроки',
		playersAnswer: 'Ответ игрока',
		playWithBots: 'Играть с ботами',
		playWithFriends: 'Играть с друзьями',
		preloadRoundContent: 'Предзагружать медиаконтент всем участникам в начале раунда',
		profile: 'Профиль',
		question: 'Вопрос',
		questionComplain: 'Жалоба на вопрос',
		questionCount: 'Число вопросов',
		questionPackage: 'Пакет вопросов',
		questionReadingSpeed: 'Скорость чтения вопроса',
		questionTypeForAll: 'ДЛЯ ВСЕХ',
		questionTypeForAllHint: 'Вопрос играется всеми игроками',
		questionTypeNoRisk: 'ДЛЯ СЕБЯ БЕЗ РИСКА',
		questionTypeNoRiskHint: 'Вопрос играет открывший его игрок за двойную стоимость. В случае неправильного ответа очки не снимаются',
		questionTypeSecret: 'С СЕКРЕТОМ',
		questionTypeSecretHint: 'Вопрос отдаётся игроку, и тот обязан отвечать',
		questionTypeStake: 'СО СТАВКОЙ',
		questionTypeStakeAll: 'ДЛЯ ВСЕХ СО СТАВКОЙ',
		questionTypeStakeHint: 'На вопрос отвечает игрок, сделавший наибольшую ставку. Ва-банк можно перебить только ва-банком',
		questionTypeStakeAllHint: 'Каждый делает ставку и играет на неё',
		randomThemes: 'Случайный набор тем',
		rateGame: 'Оценить игру',
		reactions: 'Реакции',
		readyFemale: 'Я готова',
		readyMale: 'Я готов',
		reloadPage: 'Обновить страницу',
		replaceWith: 'Заменить на',
		resetToDefaults: 'По умолчанию',
		resetToDefaultsHint: 'Сбрасывает все настройки в их исходное состояние',
		restrictionIssue: 'Нарушение ограничения (по возрасту, региону и т.п.)',
		results: 'Результаты',
		resume: 'Продолжить',
		reviews: 'Отзывы',
		rightAnswer: 'Правильный ответ',
		rightAnswers: 'Правильные ответы',
		role: 'Роль',
		room: 'Комната',
		round: 'Раунд',
		roundsAndThemes: 'Раунды и темы',
		roundThemes: 'Темы раунда',
		roundTail: '-й раунд',
		rules: 'Правила',
		rulesClassic: 'Классический',
		rulesRemoveThemes: 'Игроки по очереди убирают темы. Играется вопрос из оставшейся темы',
		rulesSequential: 'Вопросы играются по очереди',
		searchGames: 'Поиск комнат',
		searchHint: 'Начните поиск, чтобы увидеть список комнат',
		sec: 'с',
		second: 'секунда',
		seconds2: 'секунды',
		seconds5: 'секунд',
		select: 'Выбрать…',
		selectAnswerer: 'Выберите игрока, которому вы отдаёте вопрос',
		selectAvatar: 'Выбрать аватар',
		selectFirstPlayer: 'Выберите начинающего раунд',
		selectStaker: 'Выберите ставящего',
		selectThemeDeleter: 'Выберите убирающего тему',
		send: 'Отправить',
		sendingPackage: 'Отправка пакета на сервер…',
		server: 'Сервер',
		serverLicense: 'Лицензия сервера',
		settings: 'Настройки',
		set: 'Задать',
		setHost: 'Сделать хостом',
		sex: 'Пол',
		showAnswers: 'Показать ответы',
		showChat: 'Показать чат',
		showman: 'Ведущий',
		showVideoAvatars: 'Показывать видео аватары',
		singlePlay: 'Одиночная игра',
		size: 'Размер',
		sort: 'Сортировка',
		sound: 'Звук',
		soundApp: 'Звук приложения',
		soundVolume: 'Громкость звука',
		sourcesInfo: 'Страница исходного кода игры.',
		sport: 'Упрощённая',
		sportPlural: 'Упрощённые',
		started: 'Начата',
		startGame: 'Создать',
		startGameHint: 'Начать игру, не дожидаясь готовности участников',
		status: 'Статус',
		supportInfo: 'Страница технической поддержки.',
		symbolsPerSecond: 'символов в секунду',
		syntaxError: 'Синтаксическая ошибка',
		table: 'Табло',
		tableHint: 'Для ответа на вопрос нажимайте на кнопку после загорания рамки на экране',
		tableLogoAuthor: 'Автор игры - Владимир Хиль',
		tables: 'Столы',
		text: 'Текст',
		textColor: 'Цвет текста',
		theGameWillStartIn: 'Игра начнётся через',
		thePlayerThinksThatHisHerAnswer: 'Игрок считает, что его ответ',
		theme: 'Тема',
		time: 'Время',
		timeForBlockingButton: 'Блокировка кнопки при фальстарте',
		timeForChoosingFinalTheme: 'Выбор темы в финальном раунде',
		timeForChoosingQuestion: 'Выбор вопроса',
		timeForFinalThinking: 'Размышление в вопросе для всех',
		timeForGivingACat: 'Размышление на отдачу "Вопроса с секретом"',
		timeForMakingStake: 'Размышление над ставкой',
		timeForMediaDelay: 'Пауза для медиаконтента',
		timeForPrintingAnswer: 'Ввод ответа после нажатия кнопки',
		timeForRightAnswer: 'Вывод правильного ответа',
		timeForShowmanDecisions: 'Принятие решений и ответа ведущим',
		timeForThinkingOnQuestion: 'Размышление над вопросом',
		timeForThinkingOnSpecial: 'Размышление над спецвопросом',
		timeOfRound: 'Раунд',
		tooManyGamesByIp: 'Слишком много игр на одном адресе!',
		tooManyRequests: 'Слишком много запросов. Пожалуйста, обратитесь позже',
		topPackages: 'Лучшие пакеты за 24 часа',
		total: 'Всего:',
		trends: 'Тренды',
		tv: 'Классическая',
		tvPlural: 'Классические',
		unban: 'Снять бан',
		unknownError: 'Неизвестная ошибка',
		unsupportedBrowser: 'Ваш браузер не поддерживается. Пожалуйста, обновите или замените его',
		unsupportedMediaType: 'Неподдерживаемый тип медиа',
		uploadingImageError: 'Ошибка отправки аватара',
		uploadingPackageError: 'Ошибка отправки пакета',
		useApellations: 'Апелляции ответов',
		useApellationsHint: 'Кнопки "Я прав" и "Я против"',
		usedComponents: 'Используемые в игре компоненты и их лицензии:',
		userPackages: 'Пользовательские пакеты',
		users: 'Игроки',
		userUnbanned: 'Пользователь {0} был разбанен',
		validateAnswer: 'Верен ли ответ игрока ',
		validateAnswerEnd: '?',
		video: 'Видео',
		videoAvatar: 'Видео аватар',
		viewer: 'Зритель',
		viewers: 'Зрители',
		voiceChat: 'Голосовой чат',
		webCameraUrl: 'Адрес веб-камеры',
		welcomeTitle: 'Выберите действие',
		withButton: 'С кнопкой',
		withStakeForAll: 'Для всех со ставкой',
		withoutPassword: 'Без пароля',
		wrongAnswer: 'Неправильный ответ',
		wrongAnswers: 'Неправильные ответы',
		wrongGameSettings: 'Неверные настройки игры!',
		yes: 'Да',
		youAreKicked: 'Вас выгнали из игры!',
		yourName: 'Ваше имя',
	}
});

export default localization;
