import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// 1. Definição do Tema com Tipagem
interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    text: string;
    white: string;
    black: string;
    error: string;
    success: string;
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };
  fontSize: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };
  borderRadius: {
    small: number;
    medium: number;
    large: number;
  };
  fonts: {
    regular: string;
    bold: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#0D47AB',
    primaryDark: '#083B94',
    secondary: '#4CAF50',
    background: '#F5F5F5',
    text: '#333333',
    white: '#FFFFFF',
    black: '#000000',
    error: '#D32F2F',
    success: '#388E3C',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  fontSize: {
    small: RFValue(14),
    medium: RFValue(16),
    large: RFValue(20),
    xlarge: RFValue(26),
  },
  borderRadius: {
    small: 4,
    medium: 12,
    large: 24,
  },
  fonts: {
    regular: 'System',
    bold: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'sans-serif-condensed',
  },
};

// 2. Criação dos Estilos Globais com StyleSheet.create()
const baseStyles = {
  // Containers
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  // Textos
  title: {
    fontSize: theme.fontSize.xlarge,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.medium,
  },
  text: {
    fontSize: theme.fontSize.medium,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  // Botões
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.medium,
    fontFamily: theme.fonts.bold,
  },
  // Inputs
  input: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.small,
    padding: theme.spacing.medium,
    fontSize: theme.fontSize.medium,
    color: theme.colors.text,
  },
  // Card
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.medium,
    marginVertical: theme.spacing.small,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
} as const;

export const globalStyles = StyleSheet.create({
  ...baseStyles,
  // MedicamentoCard
  medicamentoCardContainer: {
    ...baseStyles.card,
    backgroundColor: theme.colors.primary,
    marginTop: theme.spacing.large,
    marginHorizontal: theme.spacing.large,
  },
  medicamentoCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.small,
  },
  medicamentoCardTitle: {
    ...baseStyles.title,
    color: theme.colors.white,
    marginBottom: theme.spacing.medium,
  },
  medicamentoCardInfoView: {
    paddingBottom: 6,
    marginBottom: theme.spacing.medium,
    backgroundColor: theme.colors.primaryDark,
    borderRadius: theme.borderRadius.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  medicamentoCardInfoText: {
    ...baseStyles.text,
    marginLeft: theme.spacing.small,
    color: theme.colors.white,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
    padding: 5,
  },
  // MedicamentoCardTodos
  medicamentoCardTodosContainer: {
    ...baseStyles.card,
    backgroundColor: theme.colors.primary,
    marginTop: theme.spacing.large,
    marginHorizontal: theme.spacing.large,
  },
  medicamentoCardTodosHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.medium,
  },
  medicamentoCardTodosTitle: {
    ...baseStyles.title,
    fontSize: theme.fontSize.large,
    color: theme.colors.white,
  },
  medicamentoCardTodosBadge: {
    ...baseStyles.text,
    fontSize: theme.fontSize.small,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  medicamentoCardTodosInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing.medium,
  },
  medicamentoCardTodosInfoText: {
    ...baseStyles.text,
    marginLeft: theme.spacing.small,
    fontSize: theme.fontSize.small,
    color: theme.colors.white,
  },
  medicamentoCardTodosButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.medium,
  },
  medicamentoCardTodosButtonPrimary: {
    ...baseStyles.button,
    backgroundColor: "#3284f1",
    flex: 1,
    marginRight: theme.spacing.small,
  },
  medicamentoCardTodosButtonSecondary: {
    ...baseStyles.button,
    backgroundColor: "#3284f1",
    flex: 1,
    marginLeft: theme.spacing.small,
  },
  // Index/Tela Inicial
  scrollBackground: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titulo: {
    ...baseStyles.title,
    color: theme.colors.primary,
    fontSize: theme.fontSize.xlarge,
    marginBottom: theme.spacing.small,
  },
  subTitulo: {
    ...baseStyles.text,
    color: theme.colors.text,
    fontSize: theme.fontSize.medium,
    marginBottom: theme.spacing.large,
  },
  buttonLogin: {
    ...baseStyles.button,
    width: '80%',
    marginBottom: theme.spacing.medium,
  },
  textButton: {
    ...baseStyles.buttonText,
  },
  // Cadastro Screen
  cadastroBackground: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  cadastroTitulo: {
    ...baseStyles.title,
    color: theme.colors.primary,
    fontSize: theme.fontSize.xlarge,
    marginBottom: theme.spacing.large,
  },
  cadastroLabel: {
    ...baseStyles.text,
    color: theme.colors.primary,
    fontSize: theme.fontSize.medium,
    marginBottom: theme.spacing.small,
  },
  cadastroInputCaixa: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.small,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginBottom: theme.spacing.medium,
    paddingHorizontal: theme.spacing.small,
  },
  cadastroInput: {
    ...baseStyles.input,
    flex: 1,
    borderWidth: 0,
  },
  cadastroIcon: {
    marginRight: theme.spacing.small,
  },
  cadastroButtonAceitar: {
    ...baseStyles.text,
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    marginBottom: theme.spacing.medium,
  },
  cadastroButtonCadastrar: {
    ...baseStyles.button,
    width: '100%',
    marginBottom: theme.spacing.medium,
  },
  cadastroVoltaLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.medium,
  },
  cadastroTextVoltaLogin: {
    ...baseStyles.text,
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    marginLeft: theme.spacing.small,
  },
  // AgendarExames Screen
  agendarExamesBackground: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  agendarExamesBodyView: {
    padding: theme.spacing.medium,
  },
  agendarExamesFormLabel: {
    ...baseStyles.text,
    color: theme.colors.primary,
    fontSize: theme.fontSize.medium,
    marginBottom: theme.spacing.small,
  },
  agendarExamesFormInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.small,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginBottom: theme.spacing.medium,
    paddingHorizontal: theme.spacing.small,
  },
  agendarExamesFormIcon: {
    fontSize: 24,
    color: theme.colors.primary,
    marginRight: theme.spacing.small,
  },
  agendarExamesFormPicker: {
    flex: 1,
    color: theme.colors.primary,
  },
  agendarExamesSetDate: {
    flex: 1,
    borderWidth: 0,
    color: theme.colors.primary,
    backgroundColor: 'transparent',
  },
  agendarExamesSetTime: {
    flex: 1,
    borderWidth: 0,
    color: theme.colors.primary,
    backgroundColor: 'transparent',
  },
  agendarExamesScheduleButton: {
    ...baseStyles.button,
    width: '100%',
    marginTop: theme.spacing.medium,
  },
  agendarExamesScheduleButtonText: {
    ...baseStyles.buttonText,
  },
});
