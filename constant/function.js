import React from 'react'
import { View, Text } from 'react-native'

function priceInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

export default priceInt;
