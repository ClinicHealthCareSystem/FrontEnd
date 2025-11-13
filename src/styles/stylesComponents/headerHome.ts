import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../globalStyles"; // Importando o tema

export default StyleSheet.create({
  headerView: {
    backgroundColor: theme.colors.primary,
    paddingBottom: theme.spacing.large,
    borderBottomLeftRadius: theme.borderRadius.large,
    borderBottomRightRadius: theme.borderRadius.large,
    paddingHorizontal: theme.spacing.medium,
    elevation: 6,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing.large,
    position: "relative",
  },
  headerBackButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: RFValue(28),
    fontWeight: "bold",
    color: theme.colors.white,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  headerRight: {
    display: "flex",
    width: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  search_bar: {
    backgroundColor: theme.colors.white,
    height: 40,
    borderRadius: theme.borderRadius.medium,
    paddingLeft: theme.spacing.large,
    fontSize: theme.fontSize.medium,
    color: "#797979ff", // Manter cor específica por enquanto
    outlineWidth: 0,
  },
  headerInfo: {
    alignItems: "center",
    marginTop: theme.spacing.medium,
  },
  headerInfoText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.medium,
  },
});
