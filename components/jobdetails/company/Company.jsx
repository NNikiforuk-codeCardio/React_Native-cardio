import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoBox}>
				<Image
					source={{
						uri: checkImageURL(companyLogo)
							? companyLogo
							: "https://pixabay.com/get/g048ebb2cfe184b5608ad45811bfe3185eb25f99a0a9bcc7938a398d471662b3c5c6e5de5968fdbf5e54e1abda227fa245df75bfb698355e84797099335624787_1920.jpg",
					}}
					style={styles.logoImage}
				/>
			</View>
			<View style={styles.jobTitleBox}>
				<Text style={styles.jobTitle}>{jobTitle}</Text>
			</View>
		</View>
	);
};

export default Company;
