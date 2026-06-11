import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 240,
        backgroundColor: '#0f172a',
        padding: 24,
    },
    logo: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 40,
    },
    menu: {
        gap: 20,
    },
    active : {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        cursor : "pointer"
    },
    item : {
        color: '#94a3b8',
        fontSize: 16,
        cursor: "pointer",
    }
})