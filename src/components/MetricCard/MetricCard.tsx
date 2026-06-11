import {Text, View} from "react-native";
import { styles } from "./MetricCard.styles";

type MetricCardProps = {
    title : string,
    value : string,
    change : string,
    color : string
}

export default function MetricCard(props : MetricCardProps){
    return <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.value}>{props.value}</Text>
        <Text style={[
          styles.change,
          { color: props.color },
        ]}>{props.change}</Text>
    </View>
}