import {StyleSheet} from 'react-native'

const Style = StyleSheet.create({

    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        borderColor: 'black',
        borderWidth: 2,
        width: 300,
        padding: 10,
        marginBottom: 25,

    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },

    button: {
        width: '40%',
    },
})

export default Style