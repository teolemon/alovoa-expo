import React from "react";
import { View, Image, Dimensions, TouchableOpacity, StyleProp, TextStyle, useWindowDimensions } from "react-native";
import { useTheme, Text } from "react-native-paper";
import { CardItemT } from "../types";
import * as Global from "../Global";
import styles, {
  WIDESCREEN_HORIZONTAL_MAX
} from "../assets/styles";

const CardItem = ({
  user
}: CardItemT) => {

  const { colors } = useTheme();
  const { height, width } = useWindowDimensions();

  // Custom styling
  const cardPadding = 30;

  const imageStyle = [
    {
      borderRadius: 8,
      width: width / 2 - cardPadding,
      height: width / 2 - cardPadding,
      maxWidth: WIDESCREEN_HORIZONTAL_MAX / 2 - cardPadding,
      maxHeight: WIDESCREEN_HORIZONTAL_MAX / 2 - cardPadding,
    },
  ];

  const nameStyle: StyleProp<TextStyle> = [
    {
      paddingTop: 10,
      paddingBottom: 5,
      fontSize: 15,
      textAlign: 'center',
      textAlignVertical: 'center'
    },
  ];

  return (
    <View style={[styles.containerCardItem, { backgroundColor: colors.background, paddingBottom: 4 }]}>
      {/* IMAGE */}
      <TouchableOpacity onPress={() => Global.nagivateProfile(user)}>
        <Image source={{ uri: user.profilePicture ? user.profilePicture : undefined }} style={imageStyle} />
      </TouchableOpacity>

      {/* NAME */}
      <View>
        <View style={{ flexDirection: 'row' }}><Text style={nameStyle}>{user.firstName + ", " + user.age}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
