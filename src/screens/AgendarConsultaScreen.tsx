import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useScheduling } from "../hooks/useScheduling";
import TabsNavegation from "../components/tabsNavegation";
import HeaderHome from "../components/headerHome";

import styles from "../stylesComponents/headerHome";

const AgendarConsultaRoutePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  const router = useRouter();
  const { handleScheduling } = useScheduling();

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

  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Saúde Mania"
          mostrarBusca={false}
          subTitulo="Faça seu agendamento"
        />
        <ScrollView>
          <View style={styles.bodyView}>
            <Text style={styles.formLabel}>Serviço:</Text>
            <View style={styles.formInput}>
              <Ionicons name="clipboard-outline" style={styles.formIcon} />
              <Controller
                control={control}
                name="servico"
                rules={{ required: "Selecione um serviço" }}
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
                      <Picker.Item label="Selecione um serviço" value={null} />
                      <Picker.Item label="Serviço 1" value="Serviço 1" />
                      <Picker.Item label="Serviço 2" value="Serviço 2" />
                      <Picker.Item label="Serviço 3" value="Serviço 3" />
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
                rules={{ required: "Selecione uma unidade" }}
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
                      <Picker.Item label="Selecione uma unidade" value={null} />
                      <Picker.Item label="Polo 1" value="Polo 1" />
                      <Picker.Item label="Polo 2" value="Polo 2" />
                      <Picker.Item label="Polo 3" value="Polo 3" />
                    </Picker>
                    {error && (
                      <Text style={{ color: "red" }}>{error.message}</Text>
                    )}
                  </View>
                )}
              />
            </View>
            <Text style={styles.formLabel}>Tipo de Atendimento:</Text>
            <View style={styles.formInput}>
              <Ionicons name="people" style={styles.formIcon} />
              <Controller
                control={control}
                name="tipoAtendimento"
                rules={{ required: "Selecione um tipo de atendimento" }}
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
                      <Picker.Item label="Selecione um tipo" value={null} />
                      <Picker.Item label="Presencial" value="Presencial" />
                      <Picker.Item label="Remoto" value="Remoto" />
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
                render={({ field: { value }, fieldState: { error } }) => (
                  <View style={{ flex: 1 }}>
                    {Platform.OS === "web" ? (
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
            <Text style={styles.formLabel}>Hora:</Text>
            <View style={styles.formInput}>
              <Ionicons name="time" style={styles.formIcon} />
              <Controller
                control={control}
                name="hora"
                rules={{ required: "Selecione uma hora" }}
                render={({ field: { value }, fieldState: { error } }) => (
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
              onPress={handleSubmit((data) => handleScheduling(data))}
            >
              <Text style={styles.scheduleButtonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
};

export default AgendarConsultaRoutePage;
