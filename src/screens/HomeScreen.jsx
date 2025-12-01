import { View } from 'react-native';
import GenrePicker from '../components/GenrePicker'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}> 
      <GenrePicker/>
    </View>
  );
}