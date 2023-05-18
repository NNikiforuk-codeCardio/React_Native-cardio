import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoBox}>
				<Image source={companyLogo} style={styles.logoImage} />
			</View>
			<View style={styles.jobTitleBox}>
				<Text style={styles.jobTitle}>{jobTitle}</Text>
			</View>
		</View>
	);
};

export default Company;
