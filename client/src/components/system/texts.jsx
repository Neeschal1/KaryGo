import { View, Text } from "react-native"

export const TitleText = ({text}) => {

}

export const SubTitleText = ({text}) => {
    return (
        <View>
            <Text className="text-darktext font-description font-Quicksandmedium">{text}</Text>
        </View>
    )
}

export const DescriptiveText = ({text}) => {
    return (
        <View>
            <Text className="text-descriptiveText font-description font-Quicksandmedium">{text}</Text>
        </View>
    )
}

