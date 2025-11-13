import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme, globalStyles } from "../globalStyles"; // Importando o tema e os estilos globais

export default StyleSheet.create({
  CardContainer: {
    ...globalStyles.card,
    backgroundColor: theme.colors.primary,
    marginBottom: theme.spacing.large,
    marginHorizontal: theme.spacing.large,
  },
  DateHour: {
    ...globalStyles.text,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: theme.spacing.medium,
    color: theme.colors.white,
  },
  infoCardView: {
    borderBottomWidth: 1,
    borderBottomColor: "#dfdbdbff", // Manter cor específica por enquanto
    paddingBottom: theme.spacing.small,
    marginBottom: theme.spacing.medium,
  },
  labelCardView: {
    ...globalStyles.text,
    fontSize: theme.fontSize.small,
    color: theme.colors.white,
    fontWeight: "400",
    marginBottom: 5,
  },
  textCardView: {
    ...globalStyles.text,
    color: theme.colors.white,
    fontWeight: "bold",
    marginTop: 5,
  },
  caixaButtonOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.medium,
  },
  buttonCardEdit: {
    ...globalStyles.button,
    flex: 1,
    marginRight: theme.spacing.small,
    backgroundColor: "#3284f1", // Manter cor específica por enquanto
  },
  buttonCardCancel: {
    ...globalStyles.button,
    flex: 1,
    marginLeft: theme.spacing.small,
  },
  buttonTextCardView: {
    ...globalStyles.buttonText,
    fontSize: RFValue(18),
  },
});
