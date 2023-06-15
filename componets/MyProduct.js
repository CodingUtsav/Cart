import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/action';

const products = [
  {
    id: 0,
    name: 'Oppo',
    color: 'white',
    price: 30000,
    qty: 0,
  },
  {id: 1, name: 'samsung', color: 'white', price: 16999, qty: 0},
  {id: 2, name: 'Apple', color: 'white', price: 12500, qty: 0},
];

const handleAddtoCart = item => {
  useDispatch(addToCart(item));
};

const MyProduct = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ccc',
          }}>
          <Text style={{fontSize: 16}}>Redux Toolkit Demo</Text>
        </View>
        <FlatList
          data={products}
          renderItem={({item, index}) => {
            return (
              <>
                <View
                  style={{
                    width: '94%',
                    alignSelf: 'center',
                    height: 120,
                    backgroundColor: '#fff',
                    marginTop: 10,
                    borderRadius: 10,
                    elevation: 4,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View>
                    <Text style={{fontSize: 20, fontWeight: 500}}>
                      {item.name}
                    </Text>
                    <Text>{item.color}</Text>
                    <Text style={{color: 'green'}}>${item.price}</Text>
                  </View>
                  {/* <Image source={{uri: ''}} /> */}
                  <TouchableOpacity
                    onPress={() => handleAddtoCart(item)}
                    style={{
                      backgroundColor: 'purple',
                      height: '25%',
                      marginTop: 10,
                    }}>
                    <Text style={{color: '#fff', padding: 5}}>Add to Cart</Text>
                  </TouchableOpacity>

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'purple',
                        height: '25%',
                        marginTop: 10,
                      }}>
                      <Text style={{color: '#fff', padding: 5}}>+</Text>
                    </TouchableOpacity>
                  )}

                  {item.qty == 0 ? null : (
                    <Text style={{marginTop: 10, fontSize: 16}}> 0 </Text>
                  )}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'purple',
                        height: '25%',
                        marginTop: 10,
                      }}>
                      <Text style={{color: '#fff', padding: 5}}> -</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default MyProduct;
