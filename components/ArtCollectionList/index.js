import React from "react";
import {Text, View} from "react-native";
import ArtCollectionItem from  "../ArtCollectionItem";

const ArtCollectionList = (props) => {
    
    return (
        <View>            
            {props.collections.map((collection, i) => (            
                <ArtCollectionItem collection={collection}/>
            ))}
            
            
        </View>
        
    );
    
}

export default ArtCollectionList;