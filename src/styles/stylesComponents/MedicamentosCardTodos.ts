import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme, globalStyles } from "../globalStyles"; // Importando o tema e os estilos globais

export default StyleSheet.create({
  CardContainer: {
    ...globalStyles.card,
    backgroundColor: theme.colors.primary,
    marginTop: theme.spacing.large,
    marginHorizontal: theme.spacing.large,
  },
  headerCard: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.medium,
  },
  titleRemedio: {
    ...globalStyles.title,
    fontSize: theme.fontSize.large,
    color: theme.colors.white,
  },
  textBadge: {
    ...globalStyles.text,
    fontSize: theme.fontSize.small,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.medium,
  },
  textInfo: {
    ...globalStyles.text,
    marginLeft: theme.spacing.small,
    fontSize: theme.fontSize.small,
    color: theme.colors.white,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.medium,
  },
  buttonPrimary: {
    ...globalStyles.button,
    backgroundColor: "#3284f1", // Cor específica, manter por enquanto
    flex: 1,
    marginRight: theme.spacing.small,
  },
  buttonSecondary: {
    ...globalStyles.button,
    backgroundColor: "#3284f1", // Cor específica, manter por enquanto
    flex: 1,
    marginLeft: theme.spacing.small,
  },
  buttonText: {
    ...globalStyles.buttonText,
  },
});
