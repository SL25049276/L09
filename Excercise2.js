import React from "react";
import { View, Text, TouchableOpacity, SectionList, ScrollView, StyleSheet, Alert } from "react-native";

const datasource = [
    {
        data: [
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title: "Vowels"
    },
    {
        data: [
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'},
        ],
        title: "Consonants"
    }
];

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        margin: 10,
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
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    vowelHeader: {
        backgroundColor: 'lightblue',
    },
    consonantHeader: {
        backgroundColor: 'lightgreen',
    },
});

const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => Alert.alert(item.key + " is selected")}
        >
            <Text style ={styles.textStyle}>{item.key}.{index+1}.{section.title}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>LO9 Exercise 2</Text>

                <SectionList
                    sections={datasource}
                    renderItem={renderItem}
                    renderSectionHeader={({section:{title}}) => (
                        <Text style={[
                            styles.headerText,
                            title === 'Vowels' ? styles.vowelHeader : styles.consonantHeader
                        ]}>
                            {title}
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    );
};

export default App;

