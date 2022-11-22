import React from "react";
import {Text, View} from "react-native";
import {ArtCollectionItem} from  "../ArtCollectionItem";

const ArtCollectionList = (props) => {
    
    return (
        <View>
            <Text>Searching for {props.searchCriteria}</Text>            
            {props.collections.map((item, i) => (            
                <ArtCollectionItem collections={collection}/>
            ))}
            
            
        </View>
        
    );
    
}

export default ArtCollectionList;