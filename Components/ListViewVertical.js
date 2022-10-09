import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'


const ListViewVertical = ({data,setReference}) => {
  
 console.log(data)

  const renderItem = ({ item }) => (
    <TouchableOpacity className="w-full h-56 bg-white rounded-lg "
    onPress={()=> setReference(item.rel)}>
      <View className="flex-row flex justify-between items-center w-full py-4">
        <Image  className="w-[140px] h-52 mb-2"  source={{
          uri: item.i.imageUrl}}/>
        <View className="flex w-32">
            <Text className="text-black font-semibold text-start">{item.l}</Text>
            <Text className="text-black">{item.ss} Temporadas</Text>
            <Text className="text-black">{item.yr}</Text>
            <Text className="text-black">{item.s}</Text>

        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="mt-2 mr-3 ml-3 px-7">
       
        <FlatList
          ItemSeparatorComponent={() => (
            <View className="w-2" />
          )}
          horizontal={false}
          data={data.d}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />

    </View>
  )
}

export default ListViewVertical