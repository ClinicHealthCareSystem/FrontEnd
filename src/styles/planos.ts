import { StyleSheet } from 'react-native';

const PRIMARY = '#1565C0'; // azul principal
const PRIMARY_DARK = '#0D47A1';
const SURFACE = '#FFFFFF';
const BACKGROUND = '#F2F7FF';
const PRESSED_BG = '#E8F1FF'; // fundo azulado ao passar o dedo
const TEXT_PRIMARY = '#0B2540';
const TEXT_SECONDARY = '#577D9A';
const MUTED = '#9BB0CC';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  plansContainer: {
    padding: 16,
    paddingBottom: 120, // espaço para Tabs e botão voltar
  },
  planCard: {
    backgroundColor: SURFACE,
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    shadowColor: PRIMARY_DARK,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  planCardPressed: {
    backgroundColor: PRESSED_BG,
  },
  selectedPlanCard: {
    borderColor: PRIMARY,
    borderWidth: 2,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: TEXT_PRIMARY,
  },
  planPrice: {
    fontSize: 16,
    color: PRIMARY,
    marginBottom: 10,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    marginBottom: 6,
    marginLeft: 4,
  },
  selectButton: {
    backgroundColor: PRIMARY,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  selectButtonText: {
    color: SURFACE,
    fontWeight: '700',
  },

  /* Botão voltar no canto inferior esquerdo */
  backButton: {
    position: 'absolute',
    bottom: 74, // acima das tabs (ajuste se necessário)
    left: 16,
    backgroundColor: PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    elevation: 4,
  },
  backButtonText: {
    color: SURFACE,
    fontWeight: '700',
  },
});

export default styles;