import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={handleNavigate}>
			<TouchableOpacity style={styles.logoContainer}>
				<Image
					source={{
						uri: "https://pixabay.com/get/g048ebb2cfe184b5608ad45811bfe3185eb25f99a0a9bcc7938a398d471662b3c5c6e5de5968fdbf5e54e1abda227fa245df75bfb698355e84797099335624787_1920.jpg",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<View style={styles.textContainer}>
				<Text style={styles.jobName}>{job.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default NearbyJobCard;
