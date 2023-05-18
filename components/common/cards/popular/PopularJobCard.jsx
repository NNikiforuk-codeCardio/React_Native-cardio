import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { images } from "../../../../constants";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={styles.container(selectedJob, item)}
			onPress={() => handleCardPress(item)}
		>
			<TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
				<Image
					source={{ uri: images.randomImage }}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<Text style={styles.companyName} numberOfLines={1}>
				{item.company}
			</Text>
			<View style={styles.infoContainer}>
				<Text style={styles.jobName(selectedJob, item)}>{item.title}</Text>
				<Text style={styles.location}>{item.location}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PopularJobCard;
