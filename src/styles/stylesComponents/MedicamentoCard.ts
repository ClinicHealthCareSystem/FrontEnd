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
  headerCardMedicamentoTittle:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.small,
  },
  titleRemedio: {
    ...globalStyles.title,
    color: theme.colors.white,
    marginBottom: theme.spacing.medium,
  },
  infoCardView: {
    paddingBottom: 6,
    marginBottom: theme.spacing.medium,
    backgroundColor: theme.colors.primaryDark,
    borderRadius: theme.borderRadius.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCardView: {
    ...globalStyles.text,
    marginLeft: theme.spacing.small,
    color: theme.colors.white,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
    padding: 5,
  },
});
