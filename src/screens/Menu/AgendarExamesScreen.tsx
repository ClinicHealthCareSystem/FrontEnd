import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Concluido } from "../../components/concluido";
import { useScheduling } from "../../hooks/useScheduling";
import TabsNavegation from "../../components/tabsNavegation";
import HeaderHome from "../../components/headerHome";
import styles from "../../styles/MenuStyles/exames";

export default function Exames() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const router = useRouter();
  const { handleScheduling } = useScheduling();
  const [modalVisible, setModalVisible] = useState(false);
  const [aceitarTermos, setAceitarTermos] = useState(false);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);
  const toggleTimePicker = () => setShowTimePicker(!showTimePicker);

  const handleWebDateChange = (event: any) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
    setValue("data", formatDate(selectedDate));
  };
  const handleWebTimeChange = (event: any) => {
    const [hours, minutes] = event.target.value.split(":");
    const selectedTime = new Date();
    selectedTime.setHours(parseInt(hours), parseInt(minutes));
    setTime(selectedTime);
    setValue("hora", formatTime(selectedTime));
  };
  const onDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      setValue("data", formatDate(selectedDate));
    }
    if (Platform.OS === "android") toggleDatePicker();
  };
  const onTimeChange = (event: any, selectedTime?: Date) => {
    if (selectedTime) {
      setTime(selectedTime);
      setValue("hora", formatTime(selectedTime));
    }
    if (Platform.OS === "android") toggleTimePicker();
  };
  const formatDate = (d: Date) => d.toLocaleDateString("pt-BR");
  const formatTime = (t: Date) =>
    t.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const handleExameScheduling = (data: any) => {
    router.push("/confirmacaoExame");
  };
  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Saúde Mania"
          mostrarBusca={false}
          mostrarVoltar={true}
          subTitulo="Agende seu exame com a melhor do Brasil"
        />
        <ScrollView>
          <View style={styles.bodyView}>
            <Text style={styles.formLabel}>Exame:</Text>
            <View style={styles.formInput}>
              <Ionicons name="flask-outline" style={styles.formIcon} />
              <Controller
                control={control}
                name="exame"
                rules={{ required: "Selecione um exame" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <View style={{ flex: 1 }}>
                    <Picker
                      selectedValue={value}
                      onValueChange={onChange}
                      style={styles.formPicker}
                    >
                      <Picker.Item label="Selecione seu exame" value={null} />
                      <Picker.Item label="Exame de Sangue" value="sangue" />
                      <Picker.Item label="Raio-X" value="raiox" />
                      <Picker.Item
                        label="Exame de Prostata"
                        value="examedeprostata"
                      />
                    </Picker>
                    {error && (
                      <Text style={{ color: "red" }}>{error.message}</Text>
                    )}
                  </View>
                )}
              />
            </View>

            <Text style={styles.formLabel}>Unidade:</Text>
            <View style={styles.formInput}>
              <Ionicons name="business" style={styles.formIcon} />
              <Controller
                control={control}
                name="unidade"
                rules={{ required: "Selecione sua unidade de preferencia" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <View style={{ flex: 1 }}>
                    <Picker
                      selectedValue={value}
                      onValueChange={onChange}
                      style={styles.formPicker}
                    >
                      <Picker.Item
                        label="Selecione uma unidade para seu exame"
                        value={null}
                      />
                      <Picker.Item label="Meireles" />
                      <Picker.Item label="Aldeota" />
                      <Picker.Item label="Mucuripe" />
                      <Picker.Item label="Praia de Iracema" />
                      <Picker.Item label="Messejana" />
                    </Picker>
                    {error && (
                      <Text style={{ color: "red" }}>{error.message}</Text>
                    )}
                  </View>
                )}
              />
            </View>

            <Text style={styles.formLabel}>Convênio:</Text>
            <View style={styles.formInput}>
              <Ionicons name="medkit" style={styles.formIcon} />
              <Controller
                control={control}
                name="convenio"
                rules={{ required: "Selecione um convênio" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <View style={{ flex: 1 }}>
                    <Picker
                      selectedValue={value}
                      onValueChange={onChange}
                      style={styles.formPicker}
                    >
                      <Picker.Item label="Selecione um convênio" value={null} />
                      <Picker.Item label="Amil" value="Amil" />
                      <Picker.Item label="SulAmérica" value="SulAmérica" />
                      <Picker.Item label="Unimed" value="Unimed" />
                      <Picker.Item label="Hapvida" value="Hapvida" />
                      <Picker.Item
                        label="Bradesco Saúde"
                        value="Bradesco Saúde"
                      />
                    </Picker>
                    {error && (
                      <Text style={{ color: "red" }}>{error.message}</Text>
                    )}
                  </View>
                )}
              />
            </View>
            <Text style={styles.formLabel}>Data:</Text>
            <View style={styles.formInput}>
              <Ionicons name="calendar-number" style={styles.formIcon} />
              <Controller
                control={control}
                name="data"
                rules={{ required: "Selecione uma data" }}
                render={({ fieldState: { error } }) => (
                  <View style={{ flex: 1 }}>
                    {Platform.OS == "web" ? (
                      <input
                        type="date"
                        value={date.toISOString().split("T")[0]}
                        onChange={handleWebDateChange}
                        style={styles.setDate}
                      />
                    ) : (
                      <>
                        <TouchableOpacity onPress={toggleDatePicker}>
                          <Text>{formatDate(date)}</Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                          <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                          />
                        )}
                      </>
                    )}
                    {error && (
                      <Text style={{ color: "red" }}>{error.message}</Text>
                    )}
                  </View>
                )}
              />
            </View>

            <Text style={styles.formLabel}>Horário:</Text>
            <View style={styles.formInput}>
              <Ionicons name="time" style={styles.formIcon} />
              <Controller
                control={control}
                name="hora"
                rules={{ required: "Selecione uma hora" }}
                render={({ fieldState: { error } }) => (
                  <View style={{ flex: 1 }}>
                    {Platform.OS === "web" ? (
                      <input
                        type="time"
                        value={time.toTimeString().slice(0, 5)}
                        onChange={handleWebTimeChange}
                        style={styles.setTime}
                      />
                    ) : (
                      <>
                        <TouchableOpacity onPress={toggleTimePicker}>
                          <Text>{formatTime(time)}</Text>
                        </TouchableOpacity>
                        {showTimePicker && (
                          <DateTimePicker
                            value={time}
                            mode="time"
                            display="default"
                            onChange={onTimeChange}
                          />
                        )}
                      </>
                    )}
                    {error && (
                      <Text style={{ color: "red", marginTop: 4 }}>
                        {error.message}
                      </Text>
                    )}
                  </View>
                )}
              />
            </View>

            <TouchableOpacity
              style={styles.scheduleButton}
              onPress={handleSubmit(() => setModalVisible(true))}
            >
              <Text style={styles.scheduleButtonText}>Próximo</Text>
            </TouchableOpacity>
            <Modal
              visible={modalVisible}
              animationType="fade"
              transparent={true}
            >
              <Concluido
                mensagem="Exame agendado com sucesso!"
                onAccept={handleSubmit((data) => {
                  handleScheduling(data);
                  setAceitarTermos(true);
                  setModalVisible(false);
                })}
              />
            </Modal>
          </View>
        </ScrollView>
        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
}
