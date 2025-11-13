import { StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from '../globalStyles';

export default StyleSheet.create({
    bellContainer:{
        position: 'relative',
    },
    iconContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -8,
        backgroundColor: theme.colors.error,
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
    },
    badgeText: {
        color: theme.colors.white,
        fontSize: RFValue(12),
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    sideBar:{
        position: 'absolute',
        right: 30,
        top: RFValue(60),
        width: RFValue(300),
        height: RFValue(300),
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderRadius: theme.borderRadius.medium,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: theme.spacing.small,
    },
    noteTitle: {
        fontSize: theme.fontSize.large,
        marginBottom: theme.spacing.small,
        textAlign: 'center',
        color: theme.colors.black,
    },
    noteContent:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: theme.borderRadius.small,
        padding: theme.spacing.small,
        width: RFValue(280),
        marginBottom: theme.spacing.small,
        overflow: 'hidden',
    },
    noteRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: RFValue(10),
    },
    noteTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    NoteText: {
        fontSize: RFValue(15),
        color: theme.colors.black,
    },
    NoteDateTime: {
        fontSize: RFValue(12),
        color: '#888',
        marginTop: RFValue(2),
    },
})