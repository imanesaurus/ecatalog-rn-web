import React from 'react'
import { View, Text } from 'react-native'

export function priceInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

export default priceInt;

export const cartTotal = (total) => {
    var angka = total.toString().split("").reverse().join("");
    var tiga = angka.match(/\d{1,3}/g);
    var join = tiga.join(".").split("").reverse().join("");
    return join;
  };
