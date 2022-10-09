import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'


const ListView = ({data,setReference}) => {
  
 console.log(data)

  const renderItem = ({ item }) => (
    <TouchableOpacity className="border items-center justify-center w-[100px] h-32 bg-slate-800 rounded-lg "
    onPress={()=> setReference(item.rel)}>
      <View className="relative flex w-[100px] items-center py-4">
        <Image  className="w-full h-16 mb-2"  source={{
          uri: item.i.imageUrl}}/>
        <Text className="text-white  text-center mx-2">{item.l}</Text>
      </View>
    </TouchableOpacity>
  );


  return (
    <View className="mt-2 mr-3 ml-3 ">
       
        <FlatList
          ItemSeparatorComponent={() => (
            <View className="w-2" />
          )}
          horizontal={true}
          data={data.d}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />

    </View>
  )
}

export default ListView