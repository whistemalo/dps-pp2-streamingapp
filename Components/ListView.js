import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'
import Images from '../assets/Images';

const ListView = ({data,setReference,type}) => {
  
 console.log(data)

  const renderItem = ({ item }) => (
    <TouchableOpacity className="border items-center justify-center w-[100px] h-24 bg-slate-800 rounded-lg"
    onPress={()=> setReference(item.rel)}>
      <Text className="text-white">{item.englishName}</Text>
      <Image className="mt-2 w-10 h-10"
        source={Images[item.img]}
      />
    </TouchableOpacity>
  );


  return (
    <View className="mt-10 mr-3 ml-3 ">
       
        <FlatList
          ItemSeparatorComponent={() => (
            <View className="w-2" />
          )}
          className=""
          horizontal={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />

    </View>
  )
}

export default ListView