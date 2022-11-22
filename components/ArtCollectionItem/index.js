import React from "react";
import {View, Text, Image} from "react-native"

const ArtCollectionItem = (props) => {
    
        return(
            <View>
                <Text>Collection Name: {props.collection.name}</Text>
            </View>
        );
    
}

export default ArtCollectionItem;