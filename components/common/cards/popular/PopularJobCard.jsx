import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={styles.container(selectedJob, item)}
			onPress={() => handleCardPress(item)}
		>
			<TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
				<Image
					source={{
						uri: checkImageURL(item.employer_logo)
							? item.employer_logo
							: "https://pixabay.com/get/g048ebb2cfe184b5608ad45811bfe3185eb25f99a0a9bcc7938a398d471662b3c5c6e5de5968fdbf5e54e1abda227fa245df75bfb698355e84797099335624787_1920.jpg",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<Text style={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>
			<View style={styles.infoContainer}>
				<Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
				<Text style={styles.location}>{item.job_country}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PopularJobCard;
