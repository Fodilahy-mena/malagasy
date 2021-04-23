import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, StyleSheet} from 'react-native';

export default function NextButton({ onPress, children, isDisabled }) {
  return <TouchableHighlight disabled={isDisabled} style={isDisabled ? styles.disabledButton : styles.button} underlayColor="#06D440" onPress={onPress}>
            {children}
        </TouchableHighlight>;
}

NextButton.defaultProps = {
  children: null,
  onPress: () => {},
};

NextButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    button: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        alignSelf: "center",
        backgroundColor: '#06B6D4',
        borderRadius: 30,
        paddingHorizontal: 27,
        paddingVertical: 11,
        tintColor: 'red',
        
    },
    disabledButton: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        color: '#06B6D4',
        alignSelf: "center",
        textAlignVertical: 'center',
        borderWidth: 1,
        borderColor: '#06B6D4',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 27,
        paddingVertical: 11,
        
    }

})