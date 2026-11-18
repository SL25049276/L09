import React from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet } from "react-native";

const datasource = [
    {key: 'A'},
    {key: 'B'},
    {key: 'C'},
    {key: 'D'},
    {key: 'E'},
    {key: 'F'},
    {key: 'G'},
    {key: 'H'},
    {key: 'I'},
    {key: 'J'},
    {key: 'K'},
    {key: 'L'},
    {key: 'M'},
    {key: 'N'},
    {key: 'O'},
    {key: 'P'},
    {key: 'Q'},
    {key: 'R'},
    {key: 'S'},
    {key: 'T'},
    {key: 'U'},
    {key: 'V'},
    {key: 'W'},
    {key: 'X'},
    {key: 'Y'},
    {key: 'Z'},
];

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
});

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>LO9 Exercise 1</Text>
                <FlatList data={datasource} renderItem={renderItem} />
            </View>
        </ScrollView>
    );
};

export default App;
