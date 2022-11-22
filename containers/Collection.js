import React from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import SearchBox from "../components/SearchBox";
import data from "../assets/collections3.json";
import ArtCollectionList from "../components/ArtCollectionList";


const Collection = () => {          

 const searchCriteria = "Teste"

 

    return (       
        <SafeAreaView>
            <SearchBox />  
            
            {/* <ArtCollectionList collections={data.collections} searchCriteria={searchCriteria} /> */}
        </SafeAreaView>           
        
    );
}

export default Collection;