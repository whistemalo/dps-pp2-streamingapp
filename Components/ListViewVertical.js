import { View, Text,Image,TouchableOpacity } from 'react-native'


const ListViewVertical = ({data}) => {
  return (
    <View className="mx-5 gap-y-3">
        {data?.map((item)=>
          <TouchableOpacity className="w-full bg-slate-300 h-60  rounded-lg " key={item.id}>
          <View className="flex-row p-3 flex justify-between items-center w-full py-4">
            <Image  className="w-[140px] h-52 mb-2"  source={{
              uri: item?.i.imageUrl}}/>
            <View className="flex w-32">
                <Text className="text-black font-semibold text-start">{item.l}</Text>
                <Text className="text-black">{item?.ss} Temporadas</Text>
                <Text className="text-black">{item?.yr}</Text>
                <Text className="text-black">{item?.s}</Text>
            </View>
          </View>
        </TouchableOpacity>
        )}
    </View>
  )
}

export default ListViewVertical