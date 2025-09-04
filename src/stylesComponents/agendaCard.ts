import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  CardContainer: {
    flex: 1,
    backgroundColor: "#0D47AB",
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
  },

  DateHour: {
    fontSize: RFValue(15),
    color: "white",
    left: 15,
    fontWeight: "bold",
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

  TipoConsulta: {
    fontSize: RFValue(15),
    color: "#add8e6",
    left: 15,
  },

  Tipo: {
    fontSize: RFValue(15),
    color: "white",
    left: 15,
  },

  LocalConsulta: {
    fontSize: RFValue(15),
    color: "#add8e6",
    left: 15,
  },

  Local: {
    fontSize: RFValue(15),
    color: "white",
    left: 15,
    marginBottom: 10,
  },

  caixaButtonOption: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonEdit: {
    borderRadius: 8,
    height: 50,
    width: 100,
    justifyContent: "center",
  },

  EditarAgendamentos: {
    borderRadius: 12,
    backgroundColor: "#3284f1",
    color: "white",
    alignSelf: "center",
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: RFValue(15),
  },

  buttonCancel: {
    borderRadius: 8,
    height: 50,
    width: 100,
    justifyContent: "center",
  },

  Cancelar: {
    borderRadius: 12,
    backgroundColor: "#3284f1",
    color: "white",
    alignSelf: "center",
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: RFValue(15),
  },
});
