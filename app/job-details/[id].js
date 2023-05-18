import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
	RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
	Company,
	Job,
	JobFooter,
	JobTabs,
	ScreenHeaderBtn,
	Specifics,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
	const params = useSearchParams();
	console.log(params);
	const router = useRouter();
	const [refreshing, setRefreshing] = useState(false);
	const { data, isLoading, error, refetch } = useFetch(params.id, {});
	const onRefresh = () => {};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.left}
							dimension="60%"
							handlePress={() => router.back()}
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
					),
					headerTitle: "",
				}}
			/>
			<>
				<ScrollView
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				>
					{isLoading ? (
						<ActivityIndicator size="large" color={COLORS.primary} />
					) : error ? (
						<Text>Something went wrong</Text>
					) : data === undefined ? (
						<Text>No data</Text>
					) : (
						<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
							<Company
								companyLogo={randomImage}
								jobTitle={data.title}
								companyName={data.company}
								location={data.location}
							/>
							<JobTabs />
						</View>
					)}
				</ScrollView>
			</>
		</SafeAreaView>
	);
};

export default JobDetails;
