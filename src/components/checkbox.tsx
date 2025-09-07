import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const alternarMarcacao = () => {
    setChecked(!checked);  
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
      <TouchableOpacity onPress={alternarMarcacao}>
        <View>
          {checked && (
            <View
              style={{ 
                width: 18,
                height: 18,
                backgroundColor: 'white',
              }}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={{ marginLeft: 10 }}>
        {checked ? 'Caixa marcada' : 'Caixa não marcada'}
      </Text>
    </View>
  );
};

export default Checkbox;
