import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  CardContainer: {
    backgroundColor: "#3284f1",
    borderRadius: 12,
    width: "80%",
    margin: "auto",
    top: 15,
    padding: 5,
  },

  DateHour: {
    fontSize: RFValue(15),
    color: "white",
    left: 15,
  },

  Profissional: {
    fontSize: RFValue(15),
    color: "#add8e6",
    left: 15,
  },

  ProfissionalName: {
    fontSize: RFValue(15),
    color: "white",
    left: 15,
  },

  Paciente: {
    fontSize: RFValue(15),
    color: "#add8e6",
    left: 15,
  },

  PacienteName: {
    fontSize: RFValue(15),
    color: "white",
    left: 15,
  },

  EditarAgendamentos: {
    borderRadius: 12,
    backgroundColor: "#add8e6",
    color: "#3284f1",
    alignSelf: "center",
    padding: 5,
    width: "70%",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: RFValue(15),
  },

  Cancelar: {
    borderRadius: 12,
    fontWeight: "bold",
    color: "#add8e6",
    alignSelf: "center",
    padding: 5,
    width: "70%",
    textAlign: "center",
    fontSize: RFValue(15),
  },
});
