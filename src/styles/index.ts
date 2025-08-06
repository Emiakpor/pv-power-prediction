import { colors, fontSize } from '@/constants/tokens'
import { StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		fontSize: fontSize.base,
		color: colors.text,
	},
})

export const utilsStyles = StyleSheet.create({
	centeredRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	slider: {
		height: 7,
		borderRadius: 16,
	},
	itemSeparator: {
		borderColor: colors.textMuted,
		borderWidth: StyleSheet.hairlineWidth,
		opacity: 0.3,
	},
	emptyContentText: {
		...defaultStyles.text,
		color: colors.textMuted,
		textAlign: 'center',
		marginTop: 20,
	},
	emptyContentImage: {
		width: 200,
		height: 200,
		alignSelf: 'center',
		marginTop: 40,
		opacity: 0.3,
	},
	content: {
		flex: 1,
		backgroundColor: colors.background,
		padding: 16,
		marginTop: 70,
		marginBottom: 0
	  },
	  header: {
		fontSize: 40,
		fontWeight: '700',
	  },
	  pillButton: {
		padding: 10,
		height: 60,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  textLink: {
		color: colors.primary,
		fontSize: 18,
		fontWeight: '500',
	  },
	  picker: {
		backgroundColor: colors.lightGray,
		borderRadius: 10,
		marginBottom: 2,
		fontSize: 20,
		padding:2
	  },
	  textInput: {
		backgroundColor: colors.lightGray,
		// borderWidth: 1,
		borderRadius: 10,
		marginBottom: 2,
		fontSize: 20,
		padding:10
	  },
	  descriptionText: {
		fontSize: 18,
		marginTop: 20,
		color: colors.gray,
	  },
	  buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '500',
	  },
	  pillButtonSmall: {
		paddingHorizontal: 20,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  buttonTextSmall: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	  },
	  sectionHeader: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 20,
		marginBottom: 10,
	  },
	  block: {
		marginHorizontal: 20,
		padding: 14,
		backgroundColor: '#fff',
		borderRadius: 16,
		gap: 20,
	  },
	  button: {
		backgroundColor: colors.ashadeOfBlue,
	  },
	  marginTop20: {
		marginTop: 20
	  }
})