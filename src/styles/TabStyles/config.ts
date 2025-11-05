import { StyleSheet } from "react-native";
export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    padding: 20,
  },
  caixa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 15,
  },
  caixa2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   paddingVertical: 15,
  },
  texto: {
    fontSize: 16,
  },
  textoSair: {
    fontSize: 16,
    color: "red"
  },
});
