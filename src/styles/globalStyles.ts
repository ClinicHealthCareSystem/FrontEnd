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
export const globalStyles = StyleSheet.create({
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
});
