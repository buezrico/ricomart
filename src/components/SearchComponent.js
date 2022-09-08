import React, {useEffect, useState, useRef} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-ico';
import {colors, parameters} from '../global/styles';
import {categories, stores} from '../global/data';
import * as Animatable from 'react-native-animatable';
import filter from 'lodash/filter';

export default function SearchComponent({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([...stores]);

  const Products = props => {
    return props.products.map((product, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSearchText(product.name);
            Keyboard.dismiss;
            navigation.navigate('SearchResultScreen', {
              product: product.name,
            });
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              paddingHorizontal: 5,
            }}>
            <Icon
              name="search"
              group="essential"
              color={colors.black}
              height={18}
              width={18}
            />
            <Text
              style={{
                fontSize: 17,
                color: colors.grey3,
                marginLeft: 15,
              }}>
              {product.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  const inputRef = useRef(0);

  const dataLength = data.map(store => {
    return store.products.map(product => {
      return product.name;
    }).length;
  });
  useEffect(() => {
    inputRef.current.focus();
  }, [searchText]);

  const contains = ({name}, query) => {
    if (name.includes(query)) {
      return true;
    }

    return false;
  };

  const handleSearch = text => {
    const dataS = stores.map(store => {
      return {
        ...store,
        products: store.products.filter(userSearch => {
          return contains(userSearch, text);
        }),
      };
    });

    setData([...dataS]);
    setSearchText(text);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingVertical: 10,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
          }}>
          <Icon
            name="left-arrow-key-1"
            group="material-design"
            color={colors.black}
          />
        </TouchableOpacity>
        <Pressable
          style={{
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.headerText,
              borderRadius: 10,
              paddingHorizontal: 5,
              borderColor: colors.black,
              borderWidth: 0.5,
              ...parameters.shadow,
            }}>
            <TextInput
              autoFocus={true}
              ref={inputRef}
              value={searchText}
              onChangeText={handleSearch}
              style={{
                color: colors.grey2,
                fontSize: 15,
                fontWeight: 'bold',
                paddingVertical: 7,
                flex: 1,
              }}
              placeholder="Search for vendors and products"
              placeholderTextColor={colors.grey3}
            />

            {searchText === '' ? null : (
              <Animatable.View
                animation={searchText === '' ? '' : 'fadeInLeft'}
                duration={2000}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    inputRef.current.clear();
                    inputRef.current.focus();
                  }}
                  style={{
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 40,
                    width: 40,
                  }}>
                  <Icon
                    name="cancel-button"
                    group="material-design"
                    color={colors.grey2}
                  />
                </TouchableOpacity>
              </Animatable.View>
            )}
          </View>
        </Pressable>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
          }}>
          <Icon name="microphone" group="essential" color={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={{padding: 10}}>
        {dataLength.reduce((a, b) => a + b, 0) > 0 ? null : (
          <View
            style={{
              marginBottom: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{color: colors.grey3, fontSize: 18, marginRight: 10}}>
              No result found..
            </Text>
          </View>
        )}

        <FlatList
          data={data}
          renderItem={({item}) => {
            return <Products {...item} />;
          }}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
}
