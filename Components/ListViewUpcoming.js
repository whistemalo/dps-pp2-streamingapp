import { useCallback, useState } from 'react';
import { View, Text,FlatList,Image,TouchableOpacity, Button } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";


const ListViewUpcoming = ({data}) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity className=" w-full h-[360] bg-slate-300 rounded-lg ">
      <View className="mt-3 flex w-full  px-3">
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={item.video}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
      </View>
       <View className="pl-3 flex gap-y-1.5 ">
        <Text className="font-semibold text-lg " >{item.name}</Text>
        <Text className="">Release Date: {item.release_date}</Text>
        <Text className="italic">Sinopsis: {item.sinopsis}</Text>
        <Text className="">Director: {item.Director}</Text>
        
       </View>
 
        {/* <Image  className="w-full h-52 mb-2"  source={{
          uri: item.video}}/> */}
    </TouchableOpacity>
  );

  return (
    <View className="mt-2 mr-3 ml-3 ">
       
        <FlatList
          ItemSeparatorComponent={() => (
            <View className="h-4" />
          )}
         
          data={data.movies}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />

    </View>
  )
}

export default ListViewUpcoming