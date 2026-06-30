import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Heart, Plus } from "lucide-react-native";
import { styles } from "./Styles";

export default function FeedHeader() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.iconsContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
                    <Plus size={24} color="#000000" />
                </TouchableOpacity>
            </View>

            <Text style={styles.logoText}>Instagram</Text>

            <View style={styles.iconsContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
                    <Heart size={24} color="#000000" />
                </TouchableOpacity>
            </View>
        </View>
    );
}