import { View, Text } from "react-native"

export const TitleText = ({text}) => {
    return (
        <View>
            <Text className="text-darktext font-heading font-Quicksandmedium">{text}</Text>
        </View>
    )
}

export const SubTitleText = ({text}) => {
    return (
        <View>
            <Text className="text-darktext font-subheading font-Quicksandmedium">{text}</Text>
        </View>
    )
}

export const DescriptiveText = ({text}) => {
    return (
        <View>
            <Text className="text-descriptiveText text-center font-description font-Quicksandmedium">{text}</Text>
        </View>
    )
}

export const ErrorText = ({text}) => {
    return (
        <View>
            <Text className="text-red-500 font-description font-Quicksandmedium">{text}</Text>
        </View>
    )
}
